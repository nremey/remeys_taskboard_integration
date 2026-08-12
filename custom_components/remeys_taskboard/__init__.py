"""Remey's Taskboard Home Assistant integration."""

from __future__ import annotations

import asyncio
import calendar
from datetime import date, datetime, timedelta
import json
from pathlib import Path
import re
from typing import Any

from aiohttp import web
import voluptuous as vol

from homeassistant.components.frontend import add_extra_js_url
from homeassistant.components.http import HomeAssistantView, StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.storage import Store

from .const import (
    DOMAIN,
    FRONTEND_DIR,
    FRONTEND_URL,
    FRONTEND_VERSION,
    TASKS_UPDATED_EVENT,
)

_RUNTIME_KEY = f"{DOMAIN}_loaded"
_STORAGE_KEY = f"{DOMAIN}.tasks"
_STORAGE_VERSION = 1
_TASK_SERVICES = ("add_task", "edit_task", "delete_task", "mark_done")
_TASK_ASSIGNMENT = re.compile(
    r"window\.(?:PP_TASKS_DATA|TABLE_DATA)\s*=\s*([\s\S]*?)\s*;?\s*$"
)


def _install_frontend(source: Path, destination: Path) -> None:
    """Install the dashboard card shipped by the integration."""
    destination.mkdir(parents=True, exist_ok=True)
    (destination / "remeys-taskboard-card.js").write_bytes(
        (source / "remeys-taskboard-card.js").read_bytes()
    )


def _parse_tasks(source: str) -> list[dict[str, Any]]:
    """Parse a legacy JavaScript-wrapped JSON task list."""
    match = _TASK_ASSIGNMENT.search(source)
    if match is None:
        raise ValueError("Task list format is invalid")
    rows = json.loads(match.group(1).rstrip().removesuffix(";"))
    if not isinstance(rows, list):
        raise ValueError("Task list must contain an array")
    return [row for row in rows if isinstance(row, dict)]


def _read_tasks(path: Path) -> list[dict[str, Any]]:
    """Read a legacy JavaScript-wrapped JSON task list."""
    return _parse_tasks(path.read_text(encoding="utf-8"))


def _task_id(row: dict[str, Any]) -> str:
    return str(row.get("uid") or row.get("__uid") or row.get("_uuid") or "").strip()


def _add_months(value: date, months: int) -> date:
    target_month = value.month - 1 + months
    year = value.year + target_month // 12
    month = target_month % 12 + 1
    return date(year, month, min(value.day, calendar.monthrange(year, month)[1]))


def _next_due(today: date, amount: Any, unit: Any) -> date:
    count = max(0, int(float(amount or 0)))
    normalized = str(unit or "d").lower()
    if normalized in {"m", "month", "months"}:
        return _add_months(today, count)
    return today + timedelta(days=count * 7 if normalized in {"w", "week", "weeks"} else count)


def _shift_to_allowed(value: date, month_mask: Any, week_mask: Any) -> date:
    """Move a due date to the next month/weekday allowed by the task."""
    months = int(month_mask) if isinstance(month_mask, (int, float)) else 4095
    weekdays = int(week_mask) if isinstance(week_mask, (int, float)) else 127
    months = months & 4095 or 4095
    weekdays = weekdays & 127 or 127
    candidate = value
    for _ in range(400):
        if months & (1 << (candidate.month - 1)) and weekdays & (1 << candidate.weekday()):
            return candidate
        candidate += timedelta(days=1)
    return candidate


def _apply_task_operation(rows: list[dict[str, Any]], operation: str, payload: dict[str, Any]) -> dict[str, Any]:
    """Apply one task mutation to the native integration task list."""
    if operation == "add_task":
        task = payload.get("task")
        if not isinstance(task, dict) or not str(task.get("Task") or "").strip():
            raise ValueError("add_task requires a task name")
        if not _task_id(task):
            task["uid"] = f"card-{int(datetime.now().timestamp() * 1000):x}"
        rows.append(task)
        return {"task": task}

    target = str(
        payload.get("target_id") or payload.get("uid") or payload.get("task_uid") or ""
    ).strip()
    index = next((idx for idx, row in enumerate(rows) if _task_id(row) == target), -1)
    if index < 0:
        raise ValueError(f"Task not found: {target}")
    task = rows[index]

    if operation == "mark_done":
        today = date.today()
        today_iso = today.isoformat()
        done_by = str(payload.get("done_by") or payload.get("assignee") or "Dashboard").strip()
        history = [str(item) for item in task.get("__history", []) if item]
        previous = str(task.get("Last done [Date]") or "").strip()
        task["__history"] = list(dict.fromkeys([*history, *([previous] if previous else []), today_iso]))
        done_history = [
            item for item in task.get("__history_doneby", [])
            if isinstance(item, dict) and item.get("date") != today_iso
        ]
        done_history.append({"date": today_iso, "user": done_by})
        task["__history_doneby"] = done_history
        task["Last done [Date]"] = today_iso
        task["Last done [By]"] = done_by
        calculated = _shift_to_allowed(
            _next_due(today, task.get("Rhythmen"), task.get("RhythmUnit")),
            task.get("MonthMask"),
            task.get("WeekMask"),
        )
        try:
            manual_due = date.fromisoformat(str(task.get("New Due date [date]") or ""))
        except ValueError:
            manual_due = None
        due = manual_due if manual_due and manual_due >= today and manual_due > calculated else calculated
        task["New Due date [date]"] = due.isoformat()
        task["Due in [days]"] = (due - today).days
    elif operation == "edit_task":
        replacement = payload.get("task")
        patch = payload.get("patch")
        if isinstance(replacement, dict):
            task = replacement
            rows[index] = task
        elif isinstance(patch, dict):
            task.update(patch)
        else:
            raise ValueError("edit_task requires task or patch")
    elif operation == "delete_task":
        task = rows.pop(index)
    else:
        raise ValueError(f"Unsupported task operation: {operation}")

    return {"task": task}


def _stored_rows(data: Any) -> list[dict[str, Any]]:
    """Return validated rows from the Home Assistant Store payload."""
    if not isinstance(data, dict) or not isinstance(data.get("tasks"), list):
        return []
    return [row for row in data["tasks"] if isinstance(row, dict)]


class TaskboardTasksView(HomeAssistantView):
    """Authenticated task API backed by Home Assistant storage."""

    url = "/api/remeys_taskboard/tasks"
    name = "api:remeys_taskboard:tasks"
    requires_auth = True

    def __init__(self, hass: HomeAssistant, store: Store, lock: asyncio.Lock) -> None:
        self._hass = hass
        self._store = store
        self._lock = lock

    async def get(self, request: web.Request) -> web.Response:
        """Return all tasks."""
        return web.json_response(_stored_rows(await self._store.async_load()))

    async def post(self, request: web.Request) -> web.Response:
        """Apply a task operation and persist it."""
        try:
            body = await request.json()
            operation = str(body.get("operation") or "").strip()
            payload = body.get("payload")
            if not operation or not isinstance(payload, dict):
                raise ValueError("Operation and payload are required")
            result = await _async_apply_and_store(
                self._hass, self._store, self._lock, operation, payload
            )
            return web.json_response({"ok": True, **result})
        except (ValueError, TypeError, web.HTTPError) as err:
            return web.json_response({"ok": False, "error": str(err)}, status=400)


async def _async_apply_and_store(
    hass: HomeAssistant,
    store: Store,
    lock: asyncio.Lock,
    operation: str,
    payload: dict[str, Any],
) -> dict[str, Any]:
    """Apply, store and broadcast one task mutation."""
    async with lock:
        rows = _stored_rows(await store.async_load())
        result = _apply_task_operation(rows, operation, payload)
        await store.async_save({"tasks": rows})
    hass.bus.async_fire(
        TASKS_UPDATED_EVENT,
        {"operation": operation, "task_id": _task_id(result.get("task", {}))},
    )
    return result


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Install the dashboard card and register native task storage."""
    if hass.data.get(_RUNTIME_KEY):
        return True

    source = Path(__file__).parent / "frontend"
    frontend_file = source / "remeys-taskboard-card.js"
    destination = Path(hass.config.path("www", FRONTEND_DIR))
    legacy_task_path = destination / "userdata" / "tasklist.js"
    legacy_tasks_existed = legacy_task_path.exists()
    await hass.async_add_executor_job(_install_frontend, source, destination)
    await hass.http.async_register_static_paths(
        [StaticPathConfig(FRONTEND_URL, str(frontend_file), False)]
    )
    add_extra_js_url(hass, f"{FRONTEND_URL}?v={FRONTEND_VERSION}")
    task_lock = asyncio.Lock()
    task_store: Store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    stored = await task_store.async_load()
    if stored is None:
        migrated: list[dict[str, Any]] = []
        if legacy_tasks_existed:
            try:
                migrated = await hass.async_add_executor_job(_read_tasks, legacy_task_path)
            except (OSError, ValueError, json.JSONDecodeError):
                migrated = []
        await task_store.async_save({"tasks": migrated})

    hass.http.register_view(TaskboardTasksView(hass, task_store, task_lock))

    async def handle_task_service(call: ServiceCall) -> None:
        operation = call.service
        task_uid = str(call.data.get("task_uid") or "").strip()
        if operation == "add_task":
            payload = {"task": dict(call.data["task"])}
        elif operation == "edit_task":
            payload = {"target_id": task_uid, "patch": dict(call.data["patch"])}
        elif operation == "mark_done":
            payload = {
                "target_id": task_uid,
                "done_by": str(call.data.get("done_by") or "Automation").strip(),
            }
        else:
            payload = {"target_id": task_uid}
        try:
            await _async_apply_and_store(
                hass, task_store, task_lock, operation, payload
            )
        except (ValueError, TypeError) as err:
            raise HomeAssistantError(str(err)) from err

    service_schemas = {
        "add_task": vol.Schema({vol.Required("task"): dict}),
        "edit_task": vol.Schema(
            {vol.Required("task_uid"): str, vol.Required("patch"): dict}
        ),
        "delete_task": vol.Schema({vol.Required("task_uid"): str}),
        "mark_done": vol.Schema(
            {vol.Required("task_uid"): str, vol.Optional("done_by"): str}
        ),
    }
    for service, schema in service_schemas.items():
        hass.services.async_register(
            DOMAIN, service, handle_task_service, schema=schema
        )

    hass.data[_RUNTIME_KEY] = True
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Remove runtime registrations."""
    for service in _TASK_SERVICES:
        hass.services.async_remove(DOMAIN, service)
    hass.data.pop(_RUNTIME_KEY, None)
    return True
