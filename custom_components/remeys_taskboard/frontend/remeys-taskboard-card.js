const TASKS_API = "remeys_taskboard/tasks";
const TASKS_UPDATED_EVENT = "remeys_taskboard_tasks_updated";
const ICONIFY_URL = "https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js";
const LOCALES = { de: "de-DE", en: "en-GB", fr: "fr-FR", es: "es-ES", nl: "nl-NL", ja: "ja-JP" };
const TEXT = {
  de: { tasks:"Aufgaben", loading:"Aufgaben werden geladen …", noTasks:"Keine passenden Aufgaben", overdue:"Überfällig", overdueSince:(n)=>`Überfällig seit ${n} ${n === 1 ? "Tag" : "Tagen"}`, none:"Keine", add:"Neue Aufgabe", edit:"Aufgabe bearbeiten", deleteTask:"Aufgabe löschen", confirmDelete:(name)=>`„${name}“ wirklich dauerhaft löschen?`, close:"Schließen", complete:"Als erledigt markieren", moveComplete:"Verschieben oder als erledigt markieren", confirm:(name)=>`„${name}“ als erledigt markieren?`, noDate:"ohne Termin", overdueDays:(n)=>`seit ${n} Tagen fällig`, yesterday:"seit gestern fällig", today:"heute", tomorrow:"morgen", inDays:(n)=>`in ${n} Tagen`, history:"Erledigt-Historie", noHistory:"Noch keine Abschlüsse gespeichert.", task:"Aufgabe", knownTasks:"Vorhandene Aufgaben", area:"Raum / Area", assignee:"Verantwortlich", rooms:"Räume", assignees:"Verantwortliche", icon:"Icon", last:"Letztes Mal", due:"Nächste Fälligkeit", dueTime:"Fällig um", duration:"Dauer in Minuten", repeat:"Wiederholen alle", unit:"Einheit", days:"Tage", weeks:"Wochen", months:"Monate", allowedDays:"Erlaubte Wochentage", allowedMonths:"Erlaubte Monate", toggleHint:"Anklicken zum Verwenden/Ignorieren", monthHint:"Abgewählte Monate werden ignoriert", notes:"Notizen", cancel:"Abbrechen", save:"Aufgabe speichern", saveChanges:"Änderungen speichern" },
  en: { tasks:"Tasks", loading:"Loading tasks …", noTasks:"No matching tasks", overdue:"Overdue", overdueSince:(n)=>`Overdue by ${n} ${n === 1 ? "day" : "days"}`, none:"None", add:"New task", edit:"Edit task", deleteTask:"Delete task", confirmDelete:(name)=>`Permanently delete “${name}”?`, close:"Close", complete:"Mark complete", moveComplete:"Move or mark complete", confirm:(name)=>`Mark “${name}” complete?`, noDate:"no due date", overdueDays:(n)=>`${n} days overdue`, yesterday:"due yesterday", today:"today", tomorrow:"tomorrow", inDays:(n)=>`in ${n} days`, history:"Completion history", noHistory:"No completions recorded yet.", task:"Task", knownTasks:"Existing tasks", area:"Room / area", assignee:"Assignee", rooms:"Rooms", assignees:"Assignees", icon:"Icon", last:"Last completed", due:"Next due date", dueTime:"Due time", duration:"Duration in minutes", repeat:"Repeat every", unit:"Unit", days:"Days", weeks:"Weeks", months:"Months", allowedDays:"Allowed weekdays", allowedMonths:"Allowed months", toggleHint:"Click to use/ignore", monthHint:"Deselected months are ignored", notes:"Notes", cancel:"Cancel", save:"Save task", saveChanges:"Save changes" },
  fr: { tasks:"Tâches", loading:"Chargement des tâches…", noTasks:"Aucune tâche correspondante", overdue:"En retard", overdueSince:(n)=>`En retard de ${n} jour${n > 1 ? "s" : ""}`, none:"Aucune", add:"Nouvelle tâche", edit:"Modifier la tâche", deleteTask:"Supprimer la tâche", confirmDelete:(name)=>`Supprimer définitivement « ${name} » ?`, close:"Fermer", complete:"Marquer comme terminée", moveComplete:"Déplacer ou marquer comme terminée", confirm:(name)=>`Marquer « ${name} » comme terminée ?`, noDate:"sans échéance", overdueDays:(n)=>`en retard de ${n} jour${n > 1 ? "s" : ""}`, yesterday:"échue hier", today:"aujourd’hui", tomorrow:"demain", inDays:(n)=>`dans ${n} jour${n > 1 ? "s" : ""}`, history:"Historique des réalisations", noHistory:"Aucune réalisation enregistrée.", task:"Tâche", knownTasks:"Tâches existantes", area:"Pièce / zone", assignee:"Responsable", rooms:"Pièces", assignees:"Responsables", icon:"Icône", last:"Dernière réalisation", due:"Prochaine échéance", dueTime:"Heure d’échéance", duration:"Durée en minutes", repeat:"Répéter tous les", unit:"Unité", days:"Jours", weeks:"Semaines", months:"Mois", allowedDays:"Jours de la semaine autorisés", allowedMonths:"Mois autorisés", toggleHint:"Cliquer pour utiliser/ignorer", monthHint:"Les mois désélectionnés sont ignorés", notes:"Notes", cancel:"Annuler", save:"Enregistrer la tâche", saveChanges:"Enregistrer les modifications" },
  es: { tasks:"Tareas", loading:"Cargando tareas…", noTasks:"No hay tareas coincidentes", overdue:"Atrasadas", overdueSince:(n)=>`${n} día${n === 1 ? "" : "s"} de retraso`, none:"Ninguna", add:"Nueva tarea", edit:"Editar tarea", deleteTask:"Eliminar tarea", confirmDelete:(name)=>`¿Eliminar «${name}» permanentemente?`, close:"Cerrar", complete:"Marcar como completada", moveComplete:"Mover o marcar como completada", confirm:(name)=>`¿Marcar «${name}» como completada?`, noDate:"sin fecha límite", overdueDays:(n)=>`${n} día${n === 1 ? "" : "s"} de retraso`, yesterday:"venció ayer", today:"hoy", tomorrow:"mañana", inDays:(n)=>`en ${n} día${n === 1 ? "" : "s"}`, history:"Historial de finalización", noHistory:"Aún no hay finalizaciones guardadas.", task:"Tarea", knownTasks:"Tareas existentes", area:"Habitación / área", assignee:"Responsable", rooms:"Habitaciones", assignees:"Responsables", icon:"Icono", last:"Última finalización", due:"Próxima fecha límite", dueTime:"Hora límite", duration:"Duración en minutos", repeat:"Repetir cada", unit:"Unidad", days:"Días", weeks:"Semanas", months:"Meses", allowedDays:"Días de la semana permitidos", allowedMonths:"Meses permitidos", toggleHint:"Haz clic para usar/ignorar", monthHint:"Los meses no seleccionados se ignoran", notes:"Notas", cancel:"Cancelar", save:"Guardar tarea", saveChanges:"Guardar cambios" },
  nl: { tasks:"Taken", loading:"Taken worden geladen…", noTasks:"Geen passende taken", overdue:"Te laat", overdueSince:(n)=>`${n} dag${n === 1 ? "" : "en"} te laat`, none:"Geen", add:"Nieuwe taak", edit:"Taak bewerken", deleteTask:"Taak verwijderen", confirmDelete:(name)=>`‘${name}’ definitief verwijderen?`, close:"Sluiten", complete:"Als voltooid markeren", moveComplete:"Verplaatsen of als voltooid markeren", confirm:(name)=>`‘${name}’ als voltooid markeren?`, noDate:"geen vervaldatum", overdueDays:(n)=>`${n} dag${n === 1 ? "" : "en"} te laat`, yesterday:"gisteren vervallen", today:"vandaag", tomorrow:"morgen", inDays:(n)=>`over ${n} dag${n === 1 ? "" : "en"}`, history:"Voltooiingsgeschiedenis", noHistory:"Nog geen voltooiingen opgeslagen.", task:"Taak", knownTasks:"Bestaande taken", area:"Kamer / zone", assignee:"Verantwoordelijke", rooms:"Kamers", assignees:"Verantwoordelijken", icon:"Pictogram", last:"Laatst voltooid", due:"Volgende vervaldatum", dueTime:"Vervaltijd", duration:"Duur in minuten", repeat:"Herhalen elke", unit:"Eenheid", days:"Dagen", weeks:"Weken", months:"Maanden", allowedDays:"Toegestane weekdagen", allowedMonths:"Toegestane maanden", toggleHint:"Klik om te gebruiken/negeren", monthHint:"Niet-geselecteerde maanden worden genegeerd", notes:"Notities", cancel:"Annuleren", save:"Taak opslaan", saveChanges:"Wijzigingen opslaan" },
  ja: { tasks:"タスク", loading:"タスクを読み込んでいます…", noTasks:"該当するタスクはありません", overdue:"期限切れ", overdueSince:(n)=>`${n}日超過`, none:"なし", add:"新しいタスク", edit:"タスクを編集", deleteTask:"タスクを削除", confirmDelete:(name)=>`「${name}」を完全に削除しますか？`, close:"閉じる", complete:"完了にする", moveComplete:"移動または完了にする", confirm:(name)=>`「${name}」を完了にしますか？`, noDate:"期限なし", overdueDays:(n)=>`${n}日超過`, yesterday:"昨日が期限", today:"今日", tomorrow:"明日", inDays:(n)=>`${n}日後`, history:"完了履歴", noHistory:"完了記録はまだありません。", task:"タスク", knownTasks:"既存のタスク", area:"部屋 / エリア", assignee:"担当者", rooms:"部屋", assignees:"担当者", icon:"アイコン", last:"前回の完了", due:"次の期限", dueTime:"期限時刻", duration:"所要時間（分）", repeat:"繰り返し間隔", unit:"単位", days:"日", weeks:"週", months:"か月", allowedDays:"対象の曜日", allowedMonths:"対象の月", toggleHint:"クリックして使用/除外", monthHint:"選択されていない月は除外されます", notes:"メモ", cancel:"キャンセル", save:"タスクを保存", saveChanges:"変更を保存" },
};

function safeAccent(value) {
  const color = String(value || "").trim();
  return /^#[0-9a-f]{3,8}$/i.test(color) ? color : "var(--primary-color)";
}

function safeEventColor(value) {
  const color = String(value || "").trim();
  return /^#[0-9a-f]{6}$/i.test(color) ? color : "var(--rtb-accent)";
}

function safeIcon(value) {
  const icon = String(value || "").trim();
  if (/^[a-z0-9_-]+:[a-z0-9_-]+$/i.test(icon)) return icon;
  if (/^(https?:\/\/|\/local\/)[^\s"'<>]+$/i.test(icon)) return icon;
  return icon && icon.length <= 12 && !/[<>]/.test(icon) ? icon : "";
}

function ensureIconify() {
  if (globalThis.customElements?.get("iconify-icon") || document.querySelector?.('script[data-remeys-iconify]')) return;
  const script = document.createElement("script");
  script.src = ICONIFY_URL; script.async = true; script.dataset.remeysIconify = "";
  document.head?.appendChild(script);
}

function iconMarkup(value) {
  const icon = safeIcon(value);
  if (!icon) return "";
  if (/^(https?:\/\/|\/local\/)/i.test(icon)) return `<img class="external-icon" src="${escapeHtml(icon)}" alt="">`;
  if (/^(mdi|hass):/i.test(icon)) return `<ha-icon icon="${escapeHtml(icon)}"></ha-icon>`;
  if (/^[a-z0-9_-]+:[a-z0-9_-]+$/i.test(icon)) { ensureIconify(); return `<iconify-icon icon="${escapeHtml(icon)}"></iconify-icon>`; }
  return `<span class="text-icon">${escapeHtml(icon)}</span>`;
}

function selectedIcon(event) {
  const value = String(event?.detail?.value ?? "").trim();
  if (!value) return "";
  return /^[a-z0-9_-]+:[a-z0-9_-]+$/i.test(value) ? value : null;
}

const escapeHtml = (value) => String(value ?? "")
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function taskAssignees(task) {
  return [...new Set(String(task?.Assignee || "").split(/[,;]/).map((value) => value.trim()).filter(Boolean))];
}

function personDirectory(hass) {
  const people = Object.entries(hass?.states || {}).filter(([entityId]) => entityId.startsWith("person.")).map(([entityId, state]) => ({
    entityId,
    name: String(state?.attributes?.friendly_name || entityId.slice(7).replaceAll("_", " ")).trim(),
    picture: String(state?.attributes?.entity_picture || "").trim(),
    userId: String(state?.attributes?.user_id || "").trim(),
  })).filter((person) => person.name);
  const currentName = String(hass?.user?.name || "").trim();
  if (currentName && !people.some((person) => person.name.toLocaleLowerCase() === currentName.toLocaleLowerCase())) people.push({ entityId: "", name: currentName, picture: "", userId: String(hass?.user?.id || "") });
  return people;
}

function personForAssignee(hass, name) {
  const key = String(name || "").trim().toLocaleLowerCase();
  return personDirectory(hass).find((person) => [person.name, person.entityId, person.userId].some((value) => String(value || "").toLocaleLowerCase() === key)) || null;
}

function personAvatarMarkup(hass, name) {
  const person = personForAssignee(hass, name);
  const label = String(person?.name || name || "?").trim();
  const picture = String(person?.picture || "").trim();
  if (picture && /^(https?:\/\/|\/)[^"'<>]+$/i.test(picture)) return `<img class="person-avatar" src="${escapeHtml(picture)}" alt="${escapeHtml(label)}">`;
  const initials = label.split(/\s+/).slice(0, 2).map((part) => part[0] || "").join("").toLocaleUpperCase() || "?";
  return `<span class="person-avatar initials" title="${escapeHtml(label)}">${escapeHtml(initials)}</span>`;
}

async function loadTasks(hass) {
  if (!hass?.callApi) throw new Error("Home Assistant API ist nicht verfügbar");
  const tasks = await hass.callApi("GET", TASKS_API);
  if (!Array.isArray(tasks)) throw new Error("Aufgabenliste ist ungültig");
  return tasks;
}

async function taskOperation(hass, operation, payload) {
  if (!hass?.callApi) throw new Error("Home Assistant API ist nicht verfügbar");
  const result = await hass.callApi("POST", TASKS_API, { operation, payload });
  if (result?.ok === false) throw new Error(result.error || "Speichern fehlgeschlagen");
  return result;
}

function localDate(value) {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const result = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return Number.isNaN(result.getTime()) ? null : result;
}

function startOfToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function isoDate(value) {
  return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, "0")}-${String(value.getDate()).padStart(2, "0")}`;
}

function daysFromToday(value) {
  const due = localDate(value);
  return due ? Math.round((due.getTime() - startOfToday().getTime()) / 86400000) : null;
}

class RemeysTaskboardCard extends HTMLElement {
  static getConfigElement() {
    return document.createElement("remeys-taskboard-card-editor");
  }

  static getStubConfig() {
    return { title: "", areas: [], assignees: [], view_mode: "list", list_sort: "next_due", group_by_area: false, last_done_days: 30, period_mode: "next_days", week_layout: "horizontal", days: 7, weeks_count: 3, week_start: "monday", language: "auto", include_overdue: true, overdue_position: "left", show_area: true, show_area_month: false, progress_style: "none", show_calendar_events: false, calendar_sources: [], confirm_done: true, allow_delete: true, card_width: 12, card_height: 7, density: "compact", theme_style: "taskboard", accent_color: "", font_scale: 100, font_family: "ha", font_weight: 400, transparent_background: false, tint_weekends: true };
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._tasks = [];
    this._loading = true;
    this._error = "";
    this._busyTask = "";
    this._calendarOffset = 0;
    this._dragging = false;
    this._eventsByDate = new Map();
    this._eventIndex = new Map();
    this._eventLoadSequence = 0;
    this._connected = false;
    this._taskUpdateUnsubscribe = null;
    this._taskUpdateSubscriptionPending = false;
    this._externalReloadTimer = null;
    this._renderPending = false;
    this._familyHourHeight = 48;
  }

  connectedCallback() {
    this._connected = true;
    this._subscribeTaskUpdates();
  }

  disconnectedCallback() {
    this._connected = false;
    if (this._externalReloadTimer) clearTimeout(this._externalReloadTimer);
    this._externalReloadTimer = null;
    this._taskUpdateUnsubscribe?.();
    this._taskUpdateUnsubscribe = null;
  }

  setConfig(config) {
    if (!config) throw new Error("Konfiguration fehlt");
    const { max_tasks: _removedMaxTasks, ...supportedConfig } = config;
    if (!("progress_style" in supportedConfig)) supportedConfig.progress_style = supportedConfig.show_progress_ring === true ? "ring" : "none";
    delete supportedConfig.show_progress_ring;
    this._config = { ...RemeysTaskboardCard.getStubConfig(), ...supportedConfig };
    this._render();
    this._reload();
  }

  set hass(value) {
    const firstConnection = !this._hass && value;
    const previous = this._hass;
    const entityChanged = !firstConnection && this._tasks.some((task) => {
      const id = task?.EntityConnector?.enabled ? task.EntityConnector.entity_id : "";
      return id && previous?.states?.[id]?.state !== value?.states?.[id]?.state;
    });
    this._hass = value;
    if (firstConnection && this._config) this._reload();
    if (entityChanged && this._config) this._render();
    if (value) this._subscribeTaskUpdates();
  }

  async _subscribeTaskUpdates() {
    if (!this._connected || !this._hass?.connection || this._taskUpdateUnsubscribe || this._taskUpdateSubscriptionPending) return;
    this._taskUpdateSubscriptionPending = true;
    try {
      const unsubscribe = await this._hass.connection.subscribeEvents(
        () => this._scheduleExternalReload(),
        TASKS_UPDATED_EVENT,
      );
      if (this._connected) this._taskUpdateUnsubscribe = unsubscribe;
      else unsubscribe();
    } catch (error) {
      console.warn("Remey's Taskboard: Live-Aktualisierung konnte nicht abonniert werden", error);
    } finally {
      this._taskUpdateSubscriptionPending = false;
    }
  }

  _scheduleExternalReload() {
    if (!this._connected || !this._config) return;
    if (this._externalReloadTimer) clearTimeout(this._externalReloadTimer);
    this._externalReloadTimer = setTimeout(() => {
      this._externalReloadTimer = null;
      this._reload();
    }, 120);
  }

  _language() {
    const configured = String(this._config?.language || "auto").toLowerCase();
    if (configured !== "auto") return configured;
    return String(this._hass?.language || this._hass?.locale?.language || globalThis.navigator?.language || "en").slice(0, 2).toLowerCase();
  }

  _locale() { return LOCALES[this._language()] || this._hass?.locale?.language || globalThis.navigator?.language || "en-GB"; }
  _text(key, ...args) {
    const table = TEXT[this._language()] || TEXT.en;
    const value = table[key] ?? TEXT.en[key] ?? key;
    return typeof value === "function" ? value(...args) : value;
  }

  _weekBits() { return this._config?.week_start === "sunday" ? [6, 0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 4, 5, 6]; }
  _weekdayLabel(bit, width = "short") {
    const monday = new Date(2026, 0, 5);
    const value = new Date(monday); value.setDate(monday.getDate() + bit);
    return value.toLocaleDateString(this._locale(), { weekday: width });
  }

  getCardSize() { return Math.max(2, Math.min(8, (this._filteredTasks().length || 1) + 1)); }

  getGridOptions() {
    return {
      columns: Math.max(3, Math.min(12, Number(this._config?.card_width) || 12)),
      rows: Math.max(2, Math.min(12, Number(this._config?.card_height) || 5)),
      min_columns: 3,
      max_columns: 12,
      min_rows: 2,
      max_rows: 12,
    };
  }

  async _reload() {
    if (this._externalReloadTimer) clearTimeout(this._externalReloadTimer);
    this._externalReloadTimer = null;
    this._loading = true;
    this._error = "";
    this._render();
    try { this._tasks = await loadTasks(this._hass); }
    catch (error) { this._error = error?.message || String(error); }
    finally { this._loading = false; this._busyTask = ""; this._render(); this._loadCalendarEvents(); }
  }

  async _markDone(task) {
    const id = String(task.uid || task.__uid || task._uuid || "").trim();
    if (!id || this._busyTask) return;
    if (this._config.confirm_done !== false && !window.confirm(this._text("confirm", task.Task || this._text("task")))) return;
    this._busyTask = id;
    this._error = "";
    this._render();
    try {
      await taskOperation(this._hass, "mark_done", { target_id: id, done_by: this._hass?.user?.name || "Dashboard" });
      await this._reload();
    } catch (error) {
      this._error = error?.message || String(error);
      this._busyTask = "";
      this._render();
    }
  }

  _openAddDialog(dueDate = "") {
    const dialog = this.shadowRoot?.querySelector(".add-dialog");
    if (!dialog || dialog.open) return;
    const dueInput = dialog.querySelector('input[name="due"]');
    if (dueInput) dueInput.value = dueDate || isoDate(startOfToday());
    dialog.showModal();
  }

  _formValues(form) {
    const data = new FormData(form);
    const due = String(data.get("due") || "");
    const durationRaw = String(data.get("duration") || "").trim();
    const entityEnabled = data.get("entity_enabled") !== null;
    const entityType = String(data.get("entity_type") || "number");
    return {
      Area: String(data.get("area") || "").trim(),
      Task: String(data.get("task") || "").trim(),
      Assignee: [...new Set(String(data.get("assignee") || "").split(/[,;]/).map((value) => value.trim()).filter(Boolean))].join(", "),
      Notes: String(data.get("notes") || "").trim(),
      Icon: String(data.get("icon") || "").trim(),
      Rhythmen: Math.max(0, Number(data.get("rhythm")) || 0),
      RhythmUnit: String(data.get("unit") || "d"),
      MonthMask: Number(form.dataset.monthMask) || 4095,
      WeekMask: Number(form.dataset.weekMask) || 127,
      "Last done [Date]": String(data.get("last") || ""),
      "New Due date [date]": due,
      "Due in [days]": daysFromToday(due),
      "Due time [time]": String(data.get("due_time") || ""),
      "Duration [min]": durationRaw === "" ? null : Math.max(0, Number(durationRaw) || 0),
      EntityConnector: entityEnabled ? {
        enabled: true,
        entity_id: String(data.get("entity_id") || "").trim(),
        type: entityType,
        due_rule: { op: String(data.get("entity_due_op") || "<="), value: String(data.get("entity_due_value") || "").trim() },
        done_rule: { op: String(data.get("entity_done_op") || ">"), value: String(data.get("entity_done_value") || "").trim() },
      } : { enabled: false },
    };
  }

  _bindTaskForm(form) {
    if (!form) return;
    form.querySelector(".cancel")?.addEventListener("click", () => form.closest("dialog")?.close());
    form.querySelectorAll("[data-fill]").forEach((button) => button.addEventListener("click", () => {
      const input = form.elements[button.dataset.fill];
      if (input) input.value = button.dataset.value || "";
    }));
    form.querySelectorAll("[data-assignee-option]").forEach((button) => button.addEventListener("click", () => {
      const input = form.elements.assignee;
      if (!input) return;
      const selected = new Map(String(input.value || "").split(/[,;]/).map((value) => value.trim()).filter(Boolean).map((value) => [value.toLocaleLowerCase(), value]));
      const value = String(button.dataset.assigneeOption || "").trim();
      const key = value.toLocaleLowerCase();
      if (selected.has(key)) selected.delete(key); else selected.set(key, value);
      input.value = [...selected.values()].join(", ");
      button.classList.toggle("selected", selected.has(key));
    }));
    form.querySelectorAll("ha-selector[data-icon-input]").forEach((picker) => {
      const input = form.elements[picker.dataset.iconInput];
      picker.hass = this._hass;
      picker.selector = { icon: {} };
      picker.value = input?.value || "";
      picker.label = this._text("icon");
      picker.addEventListener("value-changed", (event) => {
        const icon = selectedIcon(event);
        if (input && icon !== null) input.value = icon;
      });
    });
    form.querySelectorAll("[data-mask]").forEach((button) => button.addEventListener("click", () => {
      button.classList.toggle("selected");
      const type = button.dataset.mask;
      let mask = 0;
      form.querySelectorAll(`[data-mask="${type}"].selected`).forEach((item) => { mask |= 1 << Number(item.dataset.bit); });
      if (!mask) {
        form.querySelectorAll(`[data-mask="${type}"]`).forEach((item) => item.classList.add("selected"));
        mask = type === "week" ? 127 : 4095;
      }
      form.dataset[type === "week" ? "weekMask" : "monthMask"] = String(mask);
    }));
  }

  _historyMarkup(task) {
    const doneBy = new Map((Array.isArray(task.__history_doneby) ? task.__history_doneby : []).map((item) => [String(item?.date || ""), String(item?.user || "")]));
    const dates = [...new Set([...(Array.isArray(task.__history) ? task.__history : []), task["Last done [Date]"]].filter(Boolean))].sort().reverse();
    return `<section class="history"><strong>${escapeHtml(this._text("history"))}</strong>${dates.length ? `${this._historyHeatmapMarkup(task, doneBy)}<ol>${dates.map((date) => `<li><span>${escapeHtml(new Date(`${date}T00:00:00`).toLocaleDateString(this._locale()))}</span><small>${escapeHtml(doneBy.get(String(date)) || (date === task["Last done [Date]"] ? task["Last done [By]"] || "" : ""))}</small></li>`).join("")}</ol>` : `<div class="history-empty">${escapeHtml(this._text("noHistory"))}</div>`}</section>`;
  }

  _historyHeatmapMarkup(task, doneBy) {
    const year = startOfToday().getFullYear();
    const yearStart = new Date(year, 0, 1), yearEnd = new Date(year, 11, 31);
    const start = new Date(yearStart);
    const startDistance = this._config?.week_start === "sunday" ? start.getDay() : (start.getDay() + 6) % 7;
    start.setDate(start.getDate() - startDistance);
    const end = new Date(yearEnd);
    const endWeekday = this._config?.week_start === "sunday" ? 6 : 0;
    end.setDate(end.getDate() + ((endWeekday - end.getDay() + 7) % 7));
    const weekCount = Math.round((end - start) / 86400000 / 7) + 1;
    const counts = new Map();
    for (const date of [...(Array.isArray(task.__history) ? task.__history : []), task["Last done [Date]"]].filter(Boolean)) counts.set(String(date), (counts.get(String(date)) || 0) + 1);
    const monthGroups = [];
    for (let week = 0; week < weekCount; week++) {
      const probe = new Date(start); probe.setDate(start.getDate() + week * 7 + 3);
      const key = `${probe.getFullYear()}-${probe.getMonth()}`;
      const previous = monthGroups.at(-1);
      if (previous?.key === key) previous.span++;
      else monthGroups.push({ key, span: 1, date: probe });
    }
    const header = monthGroups.map((group) => `<th colspan="${group.span}">${escapeHtml(group.date.toLocaleDateString(this._locale(), { month: "short" }).replace(".", ""))}</th>`).join("");
    const rows = this._weekBits().map((bit, rowIndex) => {
      const cells = Array.from({ length: weekCount }, (_, week) => {
        const date = new Date(start); date.setDate(start.getDate() + week * 7 + rowIndex);
        const key = isoDate(date), count = counts.get(key) || 0, user = doneBy.get(key) || "";
        const title = `${date.toLocaleDateString(this._locale())}${count ? ` · ${count}×${user ? ` · ${user}` : ""}` : ""}`;
        const monthClass = date.getMonth() % 2 === 0 ? "month-even" : "month-odd";
        return `<td><span class="heat-cell ${monthClass} ${count ? "done" : ""} ${date.getFullYear() !== year ? "outside" : ""}" title="${escapeHtml(title)}"></span></td>`;
      }).join("");
      return `<tr><th>${escapeHtml(this._weekdayLabel(bit))}</th>${cells}</tr>`;
    }).join("");
    return `<div class="heatmap"><table><thead><tr><th></th>${header}</tr></thead><tbody>${rows}</tbody></table></div><div class="heat-legend"><span></span>${this._language() === "de" ? "Nicht erledigt" : "Not completed"}<span class="done"></span>${this._language() === "de" ? "Erledigt" : "Completed"}</div>`;
  }

  _openEditDialog(task) {
    const dialog = this.shadowRoot?.querySelector(".edit-dialog");
    if (!dialog) return;
    dialog.innerHTML = `<div class="dialog-head">${escapeHtml(this._text("edit"))}<button class="dialog-close" title="${escapeHtml(this._text("close"))}"><ha-icon icon="mdi:close"></ha-icon></button></div>${this._taskFormMarkup(task, true)}${this._historyMarkup(task)}`;
    const form = dialog.querySelector("form");
    this._bindTaskForm(form);
    dialog.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
    form?.querySelector(".delete-task")?.addEventListener("click", () => this._deleteTask(task, dialog));
    form?.addEventListener("submit", (event) => { event.preventDefault(); this._saveEditedTask(event.currentTarget); });
    dialog.showModal();
  }

  async _deleteTask(task, dialog) {
    if (this._config.allow_delete === false) return;
    const targetId = String(task.uid || task.__uid || task._uuid || "").trim();
    if (!targetId || !window.confirm(this._text("confirmDelete", task.Task || this._text("task")))) return;
    const button = dialog?.querySelector(".delete-task");
    if (button) button.disabled = true;
    try {
      await taskOperation(this._hass, "delete_task", { target_id: targetId });
      dialog?.close();
      await this._reload();
    } catch (error) {
      this._error = error?.message || String(error);
      if (button) button.disabled = false;
      this._render();
    }
  }

  async _saveEditedTask(form) {
    const targetId = form.dataset.taskId || "";
    const patch = this._formValues(form);
    if (!targetId || !patch.Area || !patch.Task) return;
    const submit = form.querySelector('[type="submit"]');
    if (submit) submit.disabled = true;
    try {
      await taskOperation(this._hass, "edit_task", { target_id: targetId, patch });
      form.closest("dialog")?.close();
      await this._reload();
    } catch (error) {
      this._error = error?.message || String(error);
      if (submit) submit.disabled = false;
    }
  }

  async _saveNewTask(form) {
    const values = this._formValues(form);
    const last = values["Last done [Date]"];
    const task = {
      uid: `card-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      ...values,
      "Last done [By]": last ? this._hass?.user?.name || "Dashboard" : "",
      __history: last ? [last] : [],
      __history_doneby: last ? [{ date: last, user: this._hass?.user?.name || "Dashboard" }] : [],
    };
    if (!task.Area || !task.Task) return;
    const submit = form.querySelector('[type="submit"]');
    if (submit) submit.disabled = true;
    try {
      await taskOperation(this._hass, "add_task", { task });
      form.closest("dialog")?.close();
      await this._reload();
    } catch (error) {
      this._error = error?.message || String(error);
      if (submit) submit.disabled = false;
      this._render();
    }
  }

  _filteredTasks() {
    const selectedAreas = new Set((Array.isArray(this._config?.areas) ? this._config.areas : [])
      .map((area) => String(area).trim().toLocaleLowerCase()).filter(Boolean));
    const selectedAssignees = new Set((Array.isArray(this._config?.assignees) ? this._config.assignees : [])
      .map((assignee) => String(assignee).trim().toLocaleLowerCase()));
    const horizon = Number(this._config?.days);
    const useHorizon = Number.isFinite(horizon) && horizon >= 0;
    const includeOverdue = this._config?.include_overdue !== false;

    if (this._config?.view_mode === "list" && this._config?.list_sort === "last_done") {
      const historyDays = Math.max(0, Number(this._config?.last_done_days) || 0);
      return this._tasks.filter((task) => {
        const area = String(task.Area || "").trim().toLocaleLowerCase();
        const assignees = taskAssignees(task).map((value) => value.toLocaleLowerCase());
        if (selectedAreas.size && !selectedAreas.has(area)) return false;
        if (selectedAssignees.size && ![...selectedAssignees].some((value) => value === "" ? assignees.length === 0 : assignees.includes(value))) return false;
        const last = localDate(task["Last done [Date]"]);
        if (!last) return false;
        const age = Math.round((startOfToday().getTime() - last.getTime()) / 86400000);
        return age >= 0 && age <= historyDays;
      }).sort((a, b) => (localDate(b["Last done [Date]"])?.getTime() || 0) - (localDate(a["Last done [Date]"])?.getTime() || 0)
        || String(a.Task || "").localeCompare(String(b.Task || "")));
    }

    return this._tasks.filter((task) => {
      const area = String(task.Area || "").trim().toLocaleLowerCase();
      const assignees = taskAssignees(task).map((value) => value.toLocaleLowerCase());
      if (selectedAreas.size && !selectedAreas.has(area)) return false;
      if (selectedAssignees.size && ![...selectedAssignees].some((value) => value === "" ? assignees.length === 0 : assignees.includes(value))) return false;
      const days = daysFromToday(task["New Due date [date]"]);
      if (days === null) return !useHorizon;
      if (days < 0) return includeOverdue;
      return !useHorizon || days <= horizon;
    }).sort((a, b) => {
      const left = daysFromToday(a["New Due date [date]"]);
      const right = daysFromToday(b["New Due date [date]"]);
      return (left ?? Number.MAX_SAFE_INTEGER) - (right ?? Number.MAX_SAFE_INTEGER)
        || String(a.Task || "").localeCompare(String(b.Task || ""));
    });
  }

  _matchesCardSelectors(task) {
    const areas = new Set((Array.isArray(this._config?.areas) ? this._config.areas : [])
      .map((value) => String(value).trim().toLocaleLowerCase()).filter(Boolean));
    const assignees = new Set((Array.isArray(this._config?.assignees) ? this._config.assignees : [])
      .map((value) => String(value).trim().toLocaleLowerCase()));
    const area = String(task.Area || "").trim().toLocaleLowerCase();
    const taskPeople = taskAssignees(task).map((value) => value.toLocaleLowerCase());
    const assigneeMatch = !assignees.size || [...assignees].some((value) => value === "" ? taskPeople.length === 0 : taskPeople.includes(value));
    return (!areas.size || areas.has(area)) && assigneeMatch;
  }

  _columnDates() {
    const today = startOfToday();
    if (this._config?.period_mode === "week") {
      const monday = new Date(today);
      const distance = this._config?.week_start === "sunday" ? today.getDay() : (today.getDay() + 6) % 7;
      monday.setDate(today.getDate() - distance);
      return Array.from({ length: 7 }, (_, index) => {
        const value = new Date(monday); value.setDate(monday.getDate() + index); return value;
      });
    }
    const count = Math.max(1, Math.min(7, Number(this._config?.days) || 7));
    return Array.from({ length: count }, (_, index) => {
      const value = new Date(today); value.setDate(today.getDate() + index); return value;
    });
  }

  _columnData() {
    const dates = this._columnDates();
    const first = dates[0];
    const last = dates[dates.length - 1];
    const tasks = this._tasks.filter((task) => {
      if (!this._matchesCardSelectors(task)) return false;
      const due = localDate(task["New Due date [date]"]);
      if (!due) return false;
      if (due < first) return false;
      return due <= last;
    }).sort((a, b) => (localDate(a["New Due date [date]"])?.getTime() || 0) - (localDate(b["New Due date [date]"])?.getTime() || 0));
    return dates.map((date) => ({
      date,
      tasks: tasks.filter((task) => {
        const due = localDate(task["New Due date [date]"]);
        if (!due) return false;
        return due.getTime() === date.getTime();
      }),
    }));
  }

  _calendarDates() {
    const today = startOfToday();
    if (this._config?.view_mode === "calendar_month") {
      const month = new Date(today.getFullYear(), today.getMonth() + this._calendarOffset, 1);
      const first = new Date(month);
      const firstDistance = this._config?.week_start === "sunday" ? first.getDay() : (first.getDay() + 6) % 7;
      first.setDate(1 - firstDistance);
      const lastOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0);
      const last = new Date(lastOfMonth);
      const endWeekday = this._config?.week_start === "sunday" ? 6 : 0;
      last.setDate(lastOfMonth.getDate() + ((endWeekday - lastOfMonth.getDay() + 7) % 7));
      const count = Math.round((last - first) / 86400000) + 1;
      return Array.from({ length: count }, (_, index) => {
        const value = new Date(first); value.setDate(first.getDate() + index); return value;
      });
    }
    const weeks = Math.max(2, Math.min(6, Number(this._config?.weeks_count) || 3));
    const first = new Date(today);
    const distance = this._config?.week_start === "sunday" ? today.getDay() : (today.getDay() + 6) % 7;
    first.setDate(today.getDate() - distance + this._calendarOffset * 7);
    return Array.from({ length: weeks * 7 }, (_, index) => {
      const value = new Date(first); value.setDate(first.getDate() + index); return value;
    });
  }

  _calendarData() {
    const dates = this._calendarDates();
    const first = dates[0];
    const last = dates[dates.length - 1];
    const tasks = this._tasks.filter((task) => {
      if (!this._matchesCardSelectors(task)) return false;
      const due = localDate(task["New Due date [date]"]);
      if (!due) return false;
      if (due < first) return false;
      return due <= last;
    }).sort((a, b) => (localDate(a["New Due date [date]"])?.getTime() || 0) - (localDate(b["New Due date [date]"])?.getTime() || 0));
    return dates.map((date) => ({
      date,
      tasks: tasks.filter((task) => {
        const due = localDate(task["New Due date [date]"]);
        return due && due.getTime() === date.getTime();
      }),
    }));
  }

  _overdueTasks() {
    const today = startOfToday();
    return this._tasks.filter((task) => {
      const due = localDate(task["New Due date [date]"]);
      return this._matchesCardSelectors(task) && due && due < today;
    }).sort((a, b) => (localDate(a["New Due date [date]"])?.getTime() || 0) - (localDate(b["New Due date [date]"])?.getTime() || 0));
  }

  _calendarTitle() {
    const dates = this._calendarDates();
    if (this._config?.view_mode === "calendar_month") {
      const middle = dates[Math.floor(dates.length / 2)];
      return middle.toLocaleDateString(this._locale(), { month: "long", year: "numeric" });
    }
    const first = dates[0], last = dates[dates.length - 1];
    return `${first.toLocaleDateString(this._locale(), { day: "2-digit", month: "2-digit" })} – ${last.toLocaleDateString(this._locale(), { day: "2-digit", month: "2-digit", year: "numeric" })}`;
  }

  _visibleDates() {
    if (this._config?.view_mode === "family_calendar") return [this._familyDate()];
    if (["calendar_weeks", "calendar_month"].includes(this._config?.view_mode)) return this._calendarDates();
    if (this._config?.view_mode === "columns") return this._columnDates();
    return [];
  }

  async _loadCalendarEvents() {
    const sequence = ++this._eventLoadSequence;
    const sources = Array.isArray(this._config?.calendar_sources) ? this._config.calendar_sources.filter((source) => source?.entity_id) : [];
    const dates = this._visibleDates();
    if (!this._config?.show_calendar_events || !sources.length || !dates.length || !this._hass?.callApi) {
      this._eventsByDate = new Map(); this._eventIndex = new Map(); this._render(); return;
    }
    const first = dates[0], last = dates[dates.length - 1];
    const start = `${isoDate(first)}T00:00:00`;
    const endDate = new Date(last); endDate.setDate(last.getDate() + 1);
    const end = `${isoDate(endDate)}T00:00:00`;
    const byDate = new Map(), eventIndex = new Map();
    await Promise.all(sources.map(async (source, sourceIndex) => {
      try {
        const path = `calendars/${encodeURIComponent(source.entity_id)}?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`;
        const rows = await this._hass.callApi("GET", path);
        for (const [eventIndexInSource, raw] of (Array.isArray(rows) ? rows : []).entries()) {
          const startRaw = String(raw?.start?.dateTime || raw?.start?.date || "");
          const endRaw = String(raw?.end?.dateTime || raw?.end?.date || startRaw);
          if (!startRaw) continue;
          const allDay = !!raw?.start?.date && !raw?.start?.dateTime;
          const startDay = localDate(startRaw.slice(0, 10));
          let endDay = localDate(endRaw.slice(0, 10)) || startDay;
          if (!startDay) continue;
          if (!allDay && raw?.end?.dateTime) {
            const endInstant = new Date(raw.end.dateTime);
            if (!Number.isNaN(endInstant.getTime()) && (endInstant.getHours() || endInstant.getMinutes() || endInstant.getSeconds())) endDay.setDate(endDay.getDate() + 1);
          }
          if (endDay <= startDay) { endDay = new Date(startDay); endDay.setDate(startDay.getDate() + 1); }
          const event = {
            id: `${sourceIndex}-${eventIndexInSource}-${startRaw}`,
            title: String(raw?.summary || raw?.message || source.name || source.entity_id),
            startRaw, endRaw, allDay,
            description: String(raw?.description || raw?.message || ""),
            location: String(raw?.location || ""),
            sourceName: String(source.name || source.entity_id),
            entityId: String(source.entity_id),
            icon: safeIcon(source.icon), color: safeEventColor(source.color),
          };
          eventIndex.set(event.id, event);
          const cursor = new Date(startDay);
          for (let guard = 0; cursor < endDay && guard < 400; guard++, cursor.setDate(cursor.getDate() + 1)) {
            const key = isoDate(cursor);
            if (cursor < first || cursor > last) continue;
            if (!byDate.has(key)) byDate.set(key, []);
            byDate.get(key).push(event);
          }
        }
      } catch (error) { console.warn(`Taskboard calendar ${source.entity_id}:`, error); }
    }));
    if (sequence !== this._eventLoadSequence) return;
    for (const events of byDate.values()) events.sort((a, b) => a.startRaw.localeCompare(b.startRaw));
    this._eventsByDate = byDate; this._eventIndex = eventIndex; this._render();
  }

  _eventMarkup(date) {
    const events = this._eventsByDate.get(isoDate(date)) || [];
    return events.map((event) => {
      let time = "";
      if (!event.allDay) {
        const parsed = new Date(event.startRaw);
        if (!Number.isNaN(parsed.getTime())) time = parsed.toLocaleTimeString(this._locale(), { hour: "2-digit", minute: "2-digit" });
      }
      const icon = safeIcon(event.icon);
      return `<button class="calendar-event" data-event-id="${escapeHtml(event.id)}" style="--event-color:${safeEventColor(event.color)}" title="${escapeHtml(event.title)}">${iconMarkup(icon)}<span>${time ? `<small>${escapeHtml(time)}</small>` : ""}${escapeHtml(event.title)}</span></button>`;
    }).join("");
  }

  _openEventDialog(event) {
    const dialog = this.shadowRoot?.querySelector(".event-dialog");
    if (!dialog || !event) return;
    const format = (raw) => {
      if (!raw) return "—";
      if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return localDate(raw)?.toLocaleDateString(this._locale()) || raw;
      const value = new Date(raw);
      return Number.isNaN(value.getTime()) ? raw : value.toLocaleString(this._locale(), { dateStyle: "medium", timeStyle: "short" });
    };
    const labels = this._language() === "de"
      ? { start:"Beginn", end:"Ende", calendar:"Kalender", location:"Ort", description:"Beschreibung" }
      : { start:"Start", end:"End", calendar:"Calendar", location:"Location", description:"Description" };
    const line = (label, value) => value ? `<div class="event-detail-line"><strong>${escapeHtml(label)}</strong><span>${escapeHtml(value)}</span></div>` : "";
    const icon = safeIcon(event.icon);
    dialog.innerHTML = `<div class="dialog-head"><span style="color:${safeEventColor(event.color)}">${iconMarkup(icon)}</span>${escapeHtml(event.title)}<button class="dialog-close" title="${escapeHtml(this._text("close"))}"><ha-icon icon="mdi:close"></ha-icon></button></div><div class="event-details">${line(labels.start, format(event.startRaw))}${line(labels.end, format(event.endRaw))}${line(labels.calendar, event.sourceName)}${line(labels.location, event.location)}${line(labels.description, event.description)}</div>`;
    dialog.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
    dialog.showModal();
  }

  _openNotesDialog(task) {
    const notes = String(task?.Notes || "").trim();
    const dialog = this.shadowRoot?.querySelector(".notes-dialog");
    if (!dialog || !notes) return;
    dialog.innerHTML = `<div class="dialog-head"><ha-icon icon="mdi:paperclip"></ha-icon><span>${escapeHtml(task.Task || this._text("notes"))}</span><button class="dialog-close" title="${escapeHtml(this._text("close"))}"><ha-icon icon="mdi:close"></ha-icon></button></div><div class="note-content">${escapeHtml(notes)}</div>`;
    dialog.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
    dialog.showModal();
  }

  async _moveTask(taskId, dateValue) {
    if (!taskId || !dateValue || this._busyTask) return;
    this._busyTask = taskId;
    this._render();
    try {
      await taskOperation(this._hass, "edit_task", { target_id: taskId, patch: { "New Due date [date]": dateValue, "Due in [days]": daysFromToday(dateValue) } });
      await this._reload();
    } catch (error) {
      this._error = error?.message || String(error);
      this._busyTask = "";
      this._render();
    }
  }

  _entityFunctionStatus(task) {
    const connector = task?.EntityConnector;
    if (!connector?.enabled || !connector.entity_id) return "off";
    const state = this._hass?.states?.[connector.entity_id]?.state;
    if (state === undefined || ["unknown", "unavailable", "none", "null", ""].includes(String(state).trim().toLowerCase())) return "bad";
    const numeric = (connector.type || "number") === "number";
    const left = numeric ? Number(state) : String(state).trim().toLowerCase();
    if (numeric && !Number.isFinite(left)) return "bad";
    const matches = (rule) => {
      if (!rule) return false;
      const right = numeric ? Number(rule.value) : String(rule.value ?? "").trim().toLowerCase();
      if (numeric && !Number.isFinite(right)) return false;
      switch (rule.op) {
        case "<": return left < right;
        case "<=": return left <= right;
        case ">": return left > right;
        case ">=": return left >= right;
        case "==": return left === right;
        case "!=": return left !== right;
        default: return false;
      }
    };
    if (matches(connector.done_rule)) return "done";
    if (matches(connector.due_rule)) return "due";
    return "pending";
  }

  _taskMarkup(task, column = false, areaOverride = null, showOverdueAge = false) {
    const dueDays = daysFromToday(task["New Due date [date]"]);
    const overdue = (dueDays ?? 0) < 0;
    const status = overdue ? "status-overdue" : dueDays !== null && dueDays <= 7 ? "status-soon" : "status-ok";
    const taskId = String(task.uid || task.__uid || task._uuid || "");
    const showArea = areaOverride === null ? this._config.show_area !== false : areaOverride;
    const area = String(task.Area || (this._language() === "de" ? "Ohne Raum" : "No room"));
    const assignees = taskAssignees(task);
    const hasNotes = Boolean(String(task.Notes || "").trim());
    const entityStatus = this._entityFunctionStatus(task);
    const icon = safeIcon(task.Icon);
    const progressStyle = ["ring", "bar"].includes(this._config.progress_style) ? this._config.progress_style : "none";
    const progress = !column && progressStyle !== "none" ? this._progressMetrics(task) : null;
    const progressBar = progress && progressStyle === "bar"
      ? `<div class="progress-bar" style="--progress-width:${progress.scale.toFixed(2)}%;--progress-color:${progress.color}" title="${escapeHtml(progress.title)}"><div class="progress-track"><span class="progress-marker m75"></span><span class="progress-marker m100"></span><span class="progress-marker m150"></span><span class="progress-fill"></span></div><span class="progress-value">${progress.total}%${progress.extra ? ` <b>+${progress.extra}</b>` : ""}</span></div>`
      : "";
    const unit = String(task.RhythmUnit || "d");
    const rhythmUnit = unit === "m" ? this._text("months") : unit === "w" ? this._text("weeks") : this._text("days");
    const details = column
      ? `<div class="details"><div class="name">${escapeHtml(task.Task || "Unbenannte Aufgabe")}</div>${showArea ? `<div class="area">${escapeHtml(area)}</div>` : ""}${showOverdueAge && dueDays !== null && dueDays < 0 ? `<div class="overdue-age">${escapeHtml(this._text("overdueSince", Math.abs(dueDays)))}</div>` : ""}</div>`
      : `<div class="details"><div class="name">${escapeHtml(task.Task || "Unbenannte Aufgabe")}</div><div class="task-meta">${showArea ? `<span><ha-icon icon="mdi:map-marker-outline"></ha-icon>${escapeHtml(area)}</span>` : ""}${assignees.map((assignee) => `<span><ha-icon icon="mdi:account-outline"></ha-icon>${escapeHtml(assignee)}</span>`).join("")}<span><ha-icon icon="mdi:repeat"></ha-icon>${escapeHtml(String(task.Rhythmen ?? 0))} ${escapeHtml(rhythmUnit)}</span>${entityStatus === "done" ? `<span class="entity-function done"><ha-icon icon="mdi:function-variant"></ha-icon>${this._language() === "de" ? "Erledigt (Funktion)" : "Done (function)"}</span>` : entityStatus === "due" ? `<span class="entity-function due-function"><ha-icon icon="mdi:function-variant"></ha-icon>${this._language() === "de" ? "Fällig (Funktion)" : "Due (function)"}</span>` : ""}</div>${progressBar}</div>`;
    return `<div class="task ${column ? "column-task" : ""} ${overdue ? "overdue" : ""} entity-${entityStatus} ${this._busyTask ? "disabled" : ""}" data-task-id="${escapeHtml(taskId)}" draggable="${column ? "true" : "false"}" role="button" tabindex="0" title="${escapeHtml(this._text(column ? "moveComplete" : "complete"))}">
      ${column ? "" : `<span class="status-accent ${status}"></span>`}${!column || icon ? `<span class="task-icon ${progress && progressStyle === "ring" ? "progress-ring" : ""}" ${progress && progressStyle === "ring" ? `style="--progress-pct:${progress.cycle.toFixed(2)}%;--progress-color:${progress.color}" title="${escapeHtml(progress.title)}"` : ""}><span class="task-icon-inner">${icon ? iconMarkup(icon) : ""}</span></span>` : ""}${details}
      ${column ? "" : this._config.list_sort === "last_done" ? `<div class="due last-done">${escapeHtml(this._lastDoneLabel(task))}</div>` : `<div class="due ${status}">${escapeHtml(this._dueLabel(task))}</div>`}<span class="task-buttons">${hasNotes ? `<button class="notes-task task-action" draggable="false" title="${escapeHtml(this._text("notes"))}"><ha-icon icon="mdi:paperclip"></ha-icon></button>` : ""}<button class="edit-task task-action" draggable="false" title="${escapeHtml(this._text("edit"))}"><ha-icon icon="mdi:pencil-outline"></ha-icon></button></span></div>`;
  }

  _taskFormMarkup(task = null, editing = false) {
    const row = task || {};
    const weekMask = Number.isFinite(Number(row.WeekMask)) ? Number(row.WeekMask) : 127;
    const monthMask = Number.isFinite(Number(row.MonthMask)) ? Number(row.MonthMask) : 4095;
    const taskNames = [...new Set(this._tasks.map((item) => String(item.Task || "").trim()).filter(Boolean))].sort();
    const areas = [...new Set(this._tasks.map((item) => String(item.Area || "").trim()).filter(Boolean))].sort();
    const assignees = [...new Set([...this._tasks.flatMap((item) => taskAssignees(item)), ...personDirectory(this._hass).map((person) => person.name)])].sort();
    const selectedAssignees = new Set(taskAssignees(row).map((name) => name.toLocaleLowerCase()));
    const connector = row.EntityConnector || {};
    const entityIds = Object.keys(this._hass?.states || {}).sort();
    const operationOptions = (selected, fallback) => ["<=", "<", ">=", ">", "==", "!="].map((op) => `<option value="${op}" ${(selected || fallback) === op ? "selected" : ""}>${escapeHtml(op)}</option>`).join("");
    const value = (key, fallback = "") => escapeHtml(row[key] ?? fallback);
    const t = (key) => escapeHtml(this._text(key));
    const selectedUnit = String(row.RhythmUnit || "d");
    return `<form class="task-editor-form" data-task-id="${escapeHtml(String(row.uid || row.__uid || row._uuid || ""))}" data-week-mask="${weekMask}" data-month-mask="${monthMask}">
      ${editing ? `<div class="task-uid" title="${escapeHtml(String(row.uid || row.__uid || row._uuid || ""))}">uid: ${escapeHtml(String(row.uid || row.__uid || row._uuid || "—"))}</div>` : ""}
      <label class="field">${t("task")}<input name="task" list="known-task-names" value="${value("Task")}" required></label>
      <datalist id="known-task-names">${taskNames.map((name) => `<option value="${escapeHtml(name)}"></option>`).join("")}</datalist>
      <div class="known"><span>${t("knownTasks")}:</span>${taskNames.slice(0, 12).map((name) => `<button type="button" data-fill="task" data-value="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join("")}</div>
      <div class="form-row"><label class="field">${t("area")}<input name="area" list="known-areas" value="${value("Area", (this._config.areas || []).length === 1 ? this._config.areas[0] : "")}" required></label>
      <label class="field">${t("assignee")}<input name="assignee" list="known-assignees" value="${value("Assignee", (this._config.assignees || []).length === 1 ? this._config.assignees[0] : "")}"></label></div>
      <datalist id="known-areas">${areas.map((name) => `<option value="${escapeHtml(name)}"></option>`).join("")}</datalist><datalist id="known-assignees">${assignees.map((name) => `<option value="${escapeHtml(name)}"></option>`).join("")}</datalist>
      <div class="known"><span>${t("rooms")}:</span>${areas.map((name) => `<button type="button" data-fill="area" data-value="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join("")}</div>
      <div class="known assignee-options"><span>${t("assignees")}:</span>${assignees.map((name) => `<button type="button" data-assignee-option="${escapeHtml(name)}" class="${selectedAssignees.has(name.toLocaleLowerCase()) ? "selected" : ""}">${personAvatarMarkup(this._hass, name)}<span>${escapeHtml(name)}</span></button>`).join("")}</div>
      <label class="field">${t("icon")} (optional)<input name="icon" value="${value("Icon")}" placeholder="mdi:broom, ri:home-line, 🚲 oder /local/icon.png"><ha-selector class="icon-picker" data-icon-input="icon"></ha-selector></label>
      <div class="form-row"><label class="field">${t("last")}<input name="last" type="date" value="${value("Last done [Date]")}"></label><label class="field">${t("due")}<input name="due" type="date" value="${value("New Due date [date]", isoDate(startOfToday()))}" required></label></div>
      <div class="form-row"><label class="field">${t("dueTime")}<input name="due_time" type="time" value="${value("Due time [time]")}"></label><label class="field">${t("duration")}<input name="duration" type="number" min="0" value="${value("Duration [min]")}"></label></div>
      <div class="form-row"><label class="field">${t("repeat")}<input name="rhythm" type="number" min="0" value="${value("Rhythmen", 7)}"></label><label class="field">${t("unit")}<select name="unit"><option value="d" ${selectedUnit === "d" ? "selected" : ""}>${t("days")}</option><option value="w" ${selectedUnit === "w" ? "selected" : ""}>${t("weeks")}</option><option value="m" ${selectedUnit === "m" ? "selected" : ""}>${t("months")}</option></select></label></div>
      <div class="mask-group"><div><strong>${t("allowedDays")}</strong><small>${t("toggleHint")}</small></div><div class="mask-pills">${this._weekBits().map((bit) => `<button type="button" data-mask="week" data-bit="${bit}" class="${weekMask & (1 << bit) ? "selected" : ""}">${escapeHtml(this._weekdayLabel(bit))}</button>`).join("")}</div></div>
      <div class="mask-group"><div><strong>${t("allowedMonths")}</strong><small>${t("monthHint")}</small></div><div class="mask-pills months">${Array.from({length:12},(_,index) => `<button type="button" data-mask="month" data-bit="${index}" class="${monthMask & (1 << index) ? "selected" : ""}">${escapeHtml(new Date(2026,index,1).toLocaleDateString(this._locale(),{month:"short"}).replace(".",""))}</button>`).join("")}</div></div>
      <label class="field">${t("notes")}<textarea name="notes" rows="3">${escapeHtml(row.Notes || "")}</textarea></label>
      <details class="entity-connector" ${connector.enabled ? "open" : ""}><summary><span>Funktion / EntityConnector</span><label><input type="checkbox" name="entity_enabled" ${connector.enabled ? "checked" : ""}> aktiv</label></summary><div class="entity-fields">
        <label class="field">Entity ID<input name="entity_id" list="task-entity-ids" value="${escapeHtml(connector.entity_id || "")}" placeholder="sensor.plant_moisture"></label><datalist id="task-entity-ids">${entityIds.map((id) => `<option value="${escapeHtml(id)}"></option>`).join("")}</datalist>
        <label class="field">Datentyp<select name="entity_type"><option value="number" ${(connector.type || "number") === "number" ? "selected" : ""}>Zahl</option><option value="text" ${connector.type === "text" ? "selected" : ""}>Text</option></select></label>
        <div class="entity-rule"><strong>Fällig, wenn</strong><select name="entity_due_op">${operationOptions(connector.due_rule?.op, "<=")}</select><input name="entity_due_value" value="${escapeHtml(connector.due_rule?.value ?? "")}" placeholder="25 oder dry"></div>
        <div class="entity-rule"><strong>Erledigt, wenn</strong><select name="entity_done_op">${operationOptions(connector.done_rule?.op, ">")}</select><input name="entity_done_value" value="${escapeHtml(connector.done_rule?.value ?? "")}" placeholder="35 oder wet"></div>
      </div></details>
      <div class="actions">${editing && this._config.allow_delete !== false ? `<button type="button" class="delete-task">${t("deleteTask")}</button>` : ""}<button type="button" class="cancel">${t("cancel")}</button><button type="submit" class="primary">${editing ? t("saveChanges") : t("save")}</button></div></form>`;
  }

  _dueLabel(task) {
    const days = daysFromToday(task["New Due date [date]"]);
    if (days === null) return this._text("noDate");
    if (days < -1) return this._text("overdueDays", Math.abs(days));
    if (days === -1) return this._text("yesterday");
    if (days === 0) return this._text("today");
    if (days === 1) return this._text("tomorrow");
    return this._text("inDays", days);
  }

  _lastDoneLabel(task) {
    const last = localDate(task["Last done [Date]"]);
    if (!last) return this._text("noDate");
    const age = Math.round((startOfToday().getTime() - last.getTime()) / 86400000);
    if (this._language() === "de") return age === 0 ? "Zuletzt: heute" : age === 1 ? "Zuletzt: gestern" : `Zuletzt: vor ${age} Tagen`;
    return age === 0 ? "Last: today" : age === 1 ? "Last: yesterday" : `Last: ${age} days ago`;
  }

  _progressMetrics(task) {
    const last = localDate(task["Last done [Date]"]);
    if (!last) return null;
    const due = localDate(task["New Due date [date]"]);
    const manualSpan = due ? Math.round((due.getTime() - last.getTime()) / 86400000) : 0;
    const amount = Number(task.Rhythmen);
    const unit = String(task.RhythmUnit || "d").toLowerCase();
    const rhythmDays = Number.isFinite(amount) && amount > 0
      ? amount * (unit === "w" ? 7 : unit === "m" ? 30.4375 : 1)
      : 0;
    const basisDays = manualSpan > 0 ? manualSpan : rhythmDays;
    if (!(basisDays > 0)) return null;
    const ageDays = Math.max(0, Math.round((startOfToday().getTime() - last.getTime()) / 86400000));
    const turns = ageDays / basisDays;
    const total = Math.max(0, Math.round(turns * 100));
    const cycle = turns > 2 ? 100 : turns > 1 ? (turns - Math.floor(turns)) * 100 : Math.min(100, turns * 100);
    const color = turns > 1 ? "var(--error-color)" : turns >= .75 ? "var(--warning-color,#f0a12b)" : "var(--success-color,var(--rtb-accent))";
    const unitLabel = this._language() === "de" ? "Tage" : "days";
    return { cycle: Math.max(0, cycle), scale: Math.min(100, turns * 50), total, extra: Math.max(0, Math.floor(turns) - 1), color, title: `${ageDays} / ${Math.round(basisDays)} ${unitLabel} (${total}%)` };
  }

  _familyDate() {
    const date = startOfToday();
    date.setDate(date.getDate() + this._calendarOffset);
    return date;
  }

  _familyAssignees() {
    const configured = (Array.isArray(this._config.assignees) ? this._config.assignees : []).map(String).map((value) => value.trim()).filter(Boolean);
    const discovered = this._tasks.flatMap((task) => taskAssignees(task));
    const used = [...new Set(discovered)];
    return (configured.length ? used.filter((name) => configured.some((selected) => selected.toLocaleLowerCase() === name.toLocaleLowerCase())) : used).sort((a, b) => a.localeCompare(b, this._locale()));
  }

  _familyViewMarkup() {
    const date = this._familyDate(), dateKey = isoDate(date), today = startOfToday();
    const assignees = this._familyAssignees();
    const columns = [{ key: "", label: this._language() === "de" ? "Allgemein" : "Shared", avatar: `<span class="person-avatar initials"><ha-icon icon="mdi:account-group-outline"></ha-icon></span>` }, ...assignees.map((name) => ({ key: name.toLocaleLowerCase(), label: name, avatar: personAvatarMarkup(this._hass, name) }))];
    const buckets = new Map(columns.map((column) => [column.key, { allDay: [], timed: [] }]));
    const selectedAreas = new Set((Array.isArray(this._config.areas) ? this._config.areas : []).map((value) => String(value).trim().toLocaleLowerCase()).filter(Boolean));
    for (const task of this._tasks) {
      if (selectedAreas.size && !selectedAreas.has(String(task.Area || "").trim().toLocaleLowerCase())) continue;
      const due = localDate(task["New Due date [date]"]);
      if (!due || (due.getTime() !== date.getTime() && !(due < today && date.getTime() === today.getTime()))) continue;
      const selectors = taskAssignees(task).map((value) => value.toLocaleLowerCase());
      const matches = columns.slice(1).filter((column) => selectors.includes(column.key));
      const bucket = buckets.get(matches.length === 1 ? matches[0].key : "");
      const timeMatch = due < today ? null : String(task["Due time [time]"] || "").match(/^(\d{1,2}):(\d{2})/);
      const start = timeMatch ? Math.min(1439, Number(timeMatch[1]) * 60 + Number(timeMatch[2])) : null;
      const duration = Math.max(15, Number(task["Duration [min]"]) || 60);
      const entry = { kind: "task", task, start, end: start === null ? null : Math.min(1440, start + duration) };
      (start === null ? bucket.allDay : bucket.timed).push(entry);
    }
    for (const event of this._eventsByDate.get(dateKey) || []) {
      let start = null, end = null;
      if (!event.allDay) {
        const startDate = new Date(event.startRaw), endDate = new Date(event.endRaw);
        if (!Number.isNaN(startDate.getTime())) start = Math.max(0, startDate.getHours() * 60 + startDate.getMinutes());
        if (start !== null) end = !Number.isNaN(endDate.getTime()) ? Math.max(start + 15, Math.min(1440, endDate.getHours() * 60 + endDate.getMinutes())) : Math.min(1440, start + 60);
      }
      const entry = { kind: "event", event, start, end };
      (start === null ? buckets.get("").allDay : buckets.get("").timed).push(entry);
    }
    const entryMarkup = (entry, timed = false) => {
      if (entry.kind === "event") {
        const icon = safeIcon(entry.event.icon);
        return `<div class="family-entry event" data-event-id="${escapeHtml(entry.event.id)}" style="--entry-color:${safeEventColor(entry.event.color)}">${timed ? `<small>${this._familyTime(entry.start)}–${this._familyTime(entry.end)}</small>` : ""}${iconMarkup(icon)}<span>${escapeHtml(entry.event.title)}</span></div>`;
      }
      const task = entry.task, id = String(task.uid || task.__uid || task._uuid || ""), icon = safeIcon(task.Icon), notes = String(task.Notes || "").trim();
      return `<div class="family-entry task" data-family-task-id="${escapeHtml(id)}">${timed ? `<small>${this._familyTime(entry.start)}–${this._familyTime(entry.end)}</small>` : ""}<button class="family-done task-action" title="${escapeHtml(this._text("complete"))}">${iconMarkup(icon || "mdi:check-circle-outline")}</button><span>${escapeHtml(task.Task || "")}</span>${task.Area ? `<em>${escapeHtml(task.Area)}</em>` : ""}${notes ? `<button class="family-notes task-action" title="${escapeHtml(this._text("notes"))}"><ha-icon icon="mdi:paperclip"></ha-icon></button>` : ""}<button class="family-edit task-action" title="${escapeHtml(this._text("edit"))}"><ha-icon icon="mdi:pencil-outline"></ha-icon></button></div>`;
    };
    const allDay = columns.map((column) => `<section data-create-date="${dateKey}"><strong>${escapeHtml(column.label)}</strong>${buckets.get(column.key).allDay.map((entry) => entryMarkup(entry)).join("") || `<span class="family-empty">${escapeHtml(this._text("none"))}</span>`}</section>`).join("");
    const timedColumns = columns.map((column) => `<section class="family-time-column" data-create-date="${dateKey}">${buckets.get(column.key).timed.map((entry) => `<div class="family-timed" style="top:${(entry.start / 1440 * 100).toFixed(3)}%;height:${Math.max(1.25, (entry.end - entry.start) / 1440 * 100).toFixed(3)}%">${entryMarkup(entry, true)}</div>`).join("")}</section>`).join("");
    const hours = Array.from({ length: 25 }, (_, hour) => `<span style="top:${(hour / 24 * 100).toFixed(3)}%">${String(hour).padStart(2, "0")}:00</span>`).join("");
    return `<div class="family-heading"><button class="period-prev"><ha-icon icon="mdi:chevron-left"></ha-icon></button><button class="period-today"><ha-icon icon="mdi:calendar-today"></ha-icon></button><strong>${escapeHtml(date.toLocaleDateString(this._locale(), { weekday: "long", day: "2-digit", month: "long", year: "numeric" }))}</strong><button class="period-next"><ha-icon icon="mdi:chevron-right"></ha-icon></button></div><div class="family-scroll" title="Strg/Cmd + Mausrad oder Zwei-Finger-Geste zum Zoomen"><div class="family-calendar" style="--family-columns:${columns.length};--family-hour-height:${this._familyHourHeight}px"><div class="family-head"><span></span>${columns.map((column) => `<strong>${column.avatar}<span>${escapeHtml(column.label)}</span></strong>`).join("")}</div><div class="family-all-day"><span>${this._language() === "de" ? "Ganztägig" : "All day"}</span><div>${allDay}</div></div><div class="family-timeline"><aside>${hours}</aside><div class="family-time-columns">${timedColumns}</div></div></div></div>`;
  }

  _familyTime(minutes) {
    const value = Math.max(0, Math.min(1440, Number(minutes) || 0));
    return `${String(Math.floor(value / 60)).padStart(2, "0")}:${String(value % 60).padStart(2, "0")}`;
  }

  _applyFamilyZoom(value) {
    this._familyHourHeight = Math.max(28, Math.min(180, Math.round(Number(value) || 48)));
    const calendar = this.shadowRoot?.querySelector(".family-calendar");
    if (calendar) calendar.style.setProperty("--family-hour-height", `${this._familyHourHeight}px`);
  }

  _listMarkup(tasks) {
    if (this._config.group_by_area !== true) return `<div class="tasks">${tasks.map((task) => this._taskMarkup(task)).join("")}</div>`;
    const fallback = this._language() === "de" ? "Ohne Area" : "No area";
    const groups = new Map();
    for (const task of tasks) {
      const area = String(task.Area || "").trim() || fallback;
      if (!groups.has(area)) groups.set(area, []);
      groups.get(area).push(task);
    }
    const sorted = [...groups.entries()].sort(([left], [right]) => {
      if (left === fallback) return 1;
      if (right === fallback) return -1;
      return left.localeCompare(right, this._locale(), { sensitivity: "base" });
    });
    return `<div class="task-groups">${sorted.map(([area, areaTasks]) => `<section class="task-group"><h3>${escapeHtml(area)}</h3><div class="tasks">${areaTasks.map((task) => this._taskMarkup(task, false, false)).join("")}</div></section>`).join("")}</div>`;
  }

  _render() {
    if (!this.shadowRoot || !this._config) return;
    if (this.shadowRoot.querySelector("dialog[open]")) {
      this._renderPending = true;
      return;
    }
    this._renderPending = false;
    const tasks = this._filteredTasks();
    const columnMode = this._config.view_mode === "columns";
    const calendarMode = ["calendar_weeks", "calendar_month"].includes(this._config.view_mode);
    const familyMode = this._config.view_mode === "family_calendar";
    const calendarHeading = calendarMode && !this._loading && !this._error
      ? `<div class="calendar-period"><button class="period-prev" title="Zurück"><ha-icon icon="mdi:chevron-left"></ha-icon></button><span>${escapeHtml(this._calendarTitle())}</span><button class="period-next" title="Weiter"><ha-icon icon="mdi:chevron-right"></ha-icon></button></div>`
      : "";
    let body = this._loading
      ? `<div class="state">${escapeHtml(this._text("loading"))}</div>`
      : this._error
        ? `<div class="state error">${escapeHtml(this._error)}</div>`
        : familyMode
          ? this._familyViewMarkup()
        : calendarMode
          ? `<div class="calendar-scroll"><div class="weekday-heads">${this._weekBits().map((bit) => `<div>${escapeHtml(this._weekdayLabel(bit, "long"))}</div>`).join("")}</div>
            <div class="calendar-grid">${this._calendarData().map(({ date, tasks: dayTasks }) => {
              const monthDate = this._config.view_mode === "calendar_month" ? this._calendarDates()[Math.floor(this._calendarDates().length / 2)] : null;
              const outside = monthDate && date.getMonth() !== monthDate.getMonth();
              return `<section class="calendar-day ${date.getTime() === startOfToday().getTime() ? "today" : ""} ${outside ? "outside" : ""} ${date.getDay() === 0 || date.getDay() === 6 ? "weekend" : ""}" data-drop-date="${isoDate(date)}">
                <div class="calendar-day-number">${date.getDate()}</div><div class="calendar-events">${this._eventMarkup(date)}</div><div class="calendar-tasks">${dayTasks.map((task) => this._taskMarkup(task, true, this._config.view_mode === "calendar_month" ? this._config.show_area_month === true : this._config.show_area !== false)).join("")}</div></section>`;
            }).join("")}</div></div>`
        : columnMode
          ? `<div class="columns ${this._config.week_layout === "vertical" ? "vertical" : "horizontal"}" style="--day-columns:${this._columnDates().length}">${this._columnData().map(({ date, tasks: dayTasks }) => `<section class="day ${date.getTime() === startOfToday().getTime() ? "today" : ""}" data-drop-date="${isoDate(date)}">
              <div class="day-head"><span>${escapeHtml(date.toLocaleDateString(this._locale(), { weekday: this._config.period_mode === "week" ? "long" : "short" }))}</span><small>${escapeHtml(date.toLocaleDateString(this._locale(), { day: "2-digit", month: "2-digit" }))}</small></div>
              <div class="calendar-events">${this._eventMarkup(date)}</div><div class="day-tasks">${dayTasks.length ? dayTasks.map((task) => this._taskMarkup(task, true)).join("") : (!this._eventMarkup(date) ? '<div class="day-empty">–</div>' : "")}</div></section>`).join("")}</div>`
          : tasks.length
          ? this._listMarkup(tasks)
          : `<div class="state">${escapeHtml(this._text("noTasks"))}</div>`;

    if (!this._loading && !this._error && (columnMode || calendarMode) && this._config.include_overdue !== false) {
      const overdue = this._overdueTasks();
      const overdueColumn = `<aside class="overdue-column"><div class="overdue-head"><ha-icon icon="mdi:alert-circle-outline"></ha-icon><span>${escapeHtml(this._text("overdue"))}</span><strong>${overdue.length}</strong></div><div class="overdue-list">${overdue.length ? overdue.map((task) => this._taskMarkup(task, true, null, true)).join("") : `<div class="day-empty">${escapeHtml(this._text("none"))}</div>`}</div></aside>`;
      const main = `<div class="temporal-main">${body}</div>`;
      body = `${calendarHeading}<div class="temporal-layout ${this._config.overdue_position === "right" ? "overdue-right" : "overdue-left"}">${this._config.overdue_position === "right" ? main + overdueColumn : overdueColumn + main}</div>`;
    } else if (calendarHeading) {
      body = calendarHeading + body;
    }

    const compact = this._config.density !== "comfortable";
    const fontScale = Math.max(70, Math.min(180, Number(this._config.font_scale) || 100)) / 100;
    const fontWeight = Math.max(300, Math.min(700, Number(this._config.font_weight) || 400));
    const strongFontWeight = Math.min(800, fontWeight + 200);
    const fontFamily = {
      ha: "var(--paper-font-body1_-_font-family, var(--ha-font-family-body, sans-serif))",
      system: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      rounded: "ui-rounded, 'Arial Rounded MT Bold', system-ui, sans-serif",
      serif: "Georgia, 'Times New Roman', serif",
      monospace: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
    }[this._config.font_family] || "var(--paper-font-body1_-_font-family, var(--ha-font-family-body, sans-serif))";
    const themeStyle = ["taskboard", "native", "clean", "contrast", "warm"].includes(this._config.theme_style) ? this._config.theme_style : "taskboard";
    const theme = {
      taskboard: { header: "10%", task: "linear-gradient(180deg,var(--ha-card-background,var(--card-background-color)),color-mix(in srgb,var(--secondary-background-color) 72%,var(--ha-card-background,var(--card-background-color))))", border: "color-mix(in srgb,var(--divider-color) 82%,transparent)", shadow: "0 2px 8px #00000018", icon: "color-mix(in srgb,var(--rtb-accent) 12%,var(--secondary-background-color))", event: "12%" },
      native: { header: "6%", task: "var(--ha-card-background,var(--card-background-color))", border: "var(--divider-color)", shadow: "none", icon: "var(--secondary-background-color)", event: "10%" },
      clean: { header: "0%", task: "transparent", border: "color-mix(in srgb,var(--divider-color) 55%,transparent)", shadow: "none", icon: "transparent", event: "8%" },
      contrast: { header: "20%", task: "var(--ha-card-background,var(--card-background-color))", border: "color-mix(in srgb,var(--primary-text-color) 32%,var(--divider-color))", shadow: "0 3px 10px #00000030", icon: "color-mix(in srgb,var(--rtb-accent) 22%,var(--secondary-background-color))", event: "22%" },
      warm: { header: "12%", task: "linear-gradient(145deg,color-mix(in srgb,#ffb65c 9%,var(--ha-card-background,var(--card-background-color))),color-mix(in srgb,#e88d67 7%,var(--secondary-background-color)))", border: "color-mix(in srgb,#d8915f 30%,var(--divider-color))", shadow: "0 2px 8px #6d35151f", icon: "color-mix(in srgb,#ffad5c 18%,var(--secondary-background-color))", event: "14%" },
    }[themeStyle];
    this.shadowRoot.innerHTML = `<style>
      :host{display:block;height:100%;--rtb-accent:${safeAccent(this._config.accent_color)};--rtb-font-scale:${fontScale};--rtb-font-family:${fontFamily};--rtb-font-weight:${fontWeight};--rtb-font-weight-strong:${strongFontWeight};--rtb-space:${compact ? "6px" : "10px"};--rtb-cell-height:${compact ? "82px" : "112px"};--rtb-task-bg:${theme.task};--rtb-task-border:${theme.border};--rtb-task-shadow:${theme.shadow};--rtb-icon-bg:${theme.icon}}ha-card{overflow:hidden;min-height:${Math.max(2, Math.min(12, Number(this._config.card_height) || 5)) * 56 + 8}px;height:100%;display:flex;flex-direction:column;background:var(--ha-card-background,var(--card-background-color));border-radius:var(--ha-card-border-radius,12px);color:var(--primary-text-color);font-family:var(--rtb-font-family);font-size:calc(1rem * var(--rtb-font-scale));font-weight:var(--rtb-font-weight)}.header{display:flex;align-items:center;padding:${compact ? "10px 10px 8px 12px" : "15px 13px 11px 16px"};font-size:calc(${compact ? "1.02rem" : "1.16rem"} * var(--rtb-font-scale));font-weight:var(--rtb-font-weight-strong);flex:none;background:linear-gradient(105deg,color-mix(in srgb,var(--rtb-accent) ${theme.header},transparent),transparent 58%)}
      .header>ha-icon,.header>iconify-icon,.header>.external-icon,.header>.text-icon{margin-right:8px;color:var(--rtb-accent);flex:none}.header>.external-icon{width:24px;height:24px}.header button{border:0;border-radius:50%;background:none;color:var(--rtb-accent);cursor:pointer;padding:6px;line-height:0}.header button:hover{background:color-mix(in srgb,var(--rtb-accent) 12%,transparent)}.add{margin-left:auto}
      .tasks{display:grid;gap:${compact ? "5px" : "8px"};padding:0 var(--rtb-space) var(--rtb-space)}.task-groups{display:grid;gap:${compact ? "8px" : "12px"};padding-bottom:var(--rtb-space)}.task-group h3{position:sticky;top:0;z-index:2;margin:0 0 ${compact ? "4px" : "6px"};padding:${compact ? "5px 12px" : "7px 16px"};border-block:1px solid color-mix(in srgb,var(--divider-color) 72%,transparent);background:color-mix(in srgb,var(--secondary-background-color) 88%,transparent);color:var(--secondary-text-color);font-size:${compact ? ".75rem" : ".82rem"};font-weight:700;text-transform:none}.task{font:inherit;color:inherit;background:var(--rtb-task-bg);border:1px solid var(--rtb-task-border);box-shadow:var(--rtb-task-shadow);width:100%;display:flex;gap:${compact ? "7px" : "10px"};align-items:center;padding:${compact ? "7px 7px 7px 10px" : "10px 9px 10px 13px"};text-align:left;cursor:pointer;border-radius:${themeStyle === "clean" ? "4px" : "10px"};position:relative;overflow:hidden;box-sizing:border-box}
      .task:hover{border-color:color-mix(in srgb,var(--rtb-accent) 45%,var(--rtb-task-border));background-color:color-mix(in srgb,var(--rtb-accent) 7%,transparent)}.task.disabled{opacity:.55;cursor:wait;pointer-events:none}.status-accent{position:absolute;inset:0 auto 0 0;width:4px}.status-accent.status-overdue{background:var(--error-color)}.status-accent.status-soon{background:var(--warning-color,#f0a12b)}.status-accent.status-ok{background:var(--success-color,#43a047)}.task-icon{display:grid;place-items:center;width:${compact ? "34px" : "42px"};height:${compact ? "34px" : "42px"};border:1px solid color-mix(in srgb,var(--rtb-task-border) 75%,transparent);border-radius:50%;background:var(--rtb-icon-bg);color:var(--state-icon-color);flex:none;box-sizing:border-box}.task-icon-inner{display:grid;place-items:center;width:100%;height:100%;border-radius:50%}.task-icon.progress-ring{padding:3px;border:0;background:conic-gradient(var(--progress-color) var(--progress-pct),color-mix(in srgb,var(--divider-color) 55%,transparent) 0)}.progress-ring .task-icon-inner{background:var(--ha-card-background,var(--card-background-color));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--divider-color) 65%,transparent)}.task-icon ha-icon{--mdc-icon-size:${compact ? "19px" : "23px"}}iconify-icon{font-size:${compact ? "19px" : "23px"}}.external-icon{display:block;width:1.35em;height:1.35em;object-fit:contain}.external-icon.load-error{visibility:hidden}.text-icon{font-size:1.15rem;line-height:1}.task-buttons{display:flex;align-items:center;flex:none}.task-action{border:0;background:none;color:var(--secondary-text-color);cursor:pointer;padding:3px;border-radius:50%;line-height:0}.task-action:hover{color:var(--rtb-accent);background:color-mix(in srgb,var(--rtb-accent) 10%,transparent)}.task-action ha-icon{--mdc-icon-size:17px}.notes-task{color:var(--rtb-accent)}.column-task .task-buttons{float:right;margin-top:-18px}
      .details{min-width:0;flex:1}.name{font-weight:650;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.task-meta{display:flex;gap:4px;flex-wrap:wrap;padding-top:4px}.task-meta span{display:inline-flex;align-items:center;gap:2px;padding:2px 5px;border-radius:999px;background:var(--secondary-background-color);color:var(--secondary-text-color);font-size:.67rem;line-height:1.2}.task-meta ha-icon{--mdc-icon-size:11px}.progress-bar{display:grid;grid-template-columns:minmax(70px,1fr) auto;align-items:center;gap:7px;margin-top:6px;max-width:310px}.progress-track{position:relative;height:7px;border-radius:999px;background:color-mix(in srgb,var(--divider-color) 55%,transparent);overflow:hidden}.progress-fill{position:absolute;inset:0 auto 0 0;width:var(--progress-width);border-radius:inherit;background:var(--progress-color)}.progress-marker{position:absolute;z-index:1;top:0;bottom:0;width:1px;background:color-mix(in srgb,var(--primary-text-color) 50%,transparent)}.progress-marker.m75{left:37.5%}.progress-marker.m100{left:50%}.progress-marker.m150{left:75%}.progress-value{font-size:.67rem;font-weight:700;color:var(--secondary-text-color);white-space:nowrap}.progress-value b{color:var(--error-color)}.area,.due{font-size:.78rem;color:var(--secondary-text-color)}.due{text-align:right;white-space:nowrap;padding:3px 6px;border-radius:999px;background:var(--secondary-background-color)}.due.status-overdue{color:var(--error-color);font-weight:700}.due.status-soon{color:var(--warning-color,#d98200);font-weight:600}.due.status-ok{color:var(--success-color,#388e3c)}.due.last-done{color:var(--rtb-accent);font-weight:600}
      .state{padding:18px 16px;color:var(--secondary-text-color)}.error{color:var(--error-color)}
      .columns{display:grid;grid-template-columns:repeat(var(--day-columns),minmax(118px,1fr));gap:1px;background:var(--divider-color);overflow:auto;flex:1;border-top:1px solid var(--divider-color)}
      .day{background:var(--ha-card-background,var(--card-background-color));min-width:0}.day.today{box-shadow:inset 0 3px var(--rtb-accent)}.day-head{position:sticky;top:0;z-index:1;background:var(--secondary-background-color);padding:${compact ? "6px 5px" : "9px 7px"};text-align:center;display:grid;gap:1px;font-size:.78rem;font-weight:600}.day-head small{color:var(--secondary-text-color);font-weight:400}
      .day-tasks{padding:${compact ? "3px" : "5px"}}.column-task{display:block;padding:${compact ? "5px" : "8px 6px"};border:1px solid var(--rtb-task-border);border-radius:8px;margin-bottom:${compact ? "3px" : "5px"};background:${themeStyle === "clean" ? "transparent" : "var(--rtb-task-bg)"};box-shadow:${themeStyle === "contrast" ? "0 2px 6px #0002" : "none"}}.column-task.overdue{border-left:3px solid var(--error-color)}.column-task .task-icon{display:inline-flex;float:left;width:auto;height:auto;border:0;border-radius:0;background:none;margin:1px 4px 0 0}.column-task .task-icon-inner{display:inline-flex}.column-task .task-icon ha-icon{--mdc-icon-size:16px}.column-task .name{font-size:.76rem;white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.column-task .area{padding-top:2px}.day-empty{text-align:center;padding:15px 4px;color:var(--secondary-text-color)}
      .columns.vertical{display:grid;grid-template-columns:minmax(0,1fr);gap:1px;overflow:auto}.columns.vertical .day{display:grid;grid-template-columns:minmax(105px,145px) minmax(0,1fr);grid-template-rows:auto 1fr;min-height:${compact ? "58px" : "78px"}}.columns.vertical .day-head{position:static;grid-column:1;grid-row:1/span 2;place-content:center;border-right:1px solid var(--divider-color)}.columns.vertical .calendar-events{grid-column:2;grid-row:1;padding:4px 5px 0}.columns.vertical .day-tasks{grid-column:2;grid-row:2;display:grid;grid-template-columns:repeat(auto-fill,minmax(165px,1fr));align-content:start;gap:${compact ? "3px" : "5px"};padding:${compact ? "4px" : "6px"}}.columns.vertical .column-task{margin:0}.columns.vertical .day-empty{grid-column:1/-1;padding:8px}.columns.vertical .day.today{box-shadow:inset 3px 0 var(--rtb-accent)}
      .calendar-period{display:flex;justify-content:center;align-items:center;gap:12px;padding:2px 12px 10px;font-weight:600;flex:none}.calendar-period button{border:0;background:none;color:var(--primary-color);cursor:pointer}.calendar-scroll{overflow:auto;flex:1}.weekday-heads,.calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(105px,1fr));min-width:735px}.weekday-heads{position:sticky;top:0;z-index:2;height:36px;background:var(--secondary-background-color);border-block:1px solid var(--divider-color);font-size:.78rem;font-weight:600;text-align:center;box-sizing:border-box}.weekday-heads div{display:grid;place-items:center;padding:0 3px;border-left:1px solid var(--divider-color)}
      .calendar-grid{align-content:start}.calendar-day{min-height:var(--rtb-cell-height);padding:${compact ? "2px" : "4px"};border-left:1px solid color-mix(in srgb,var(--divider-color) 75%,transparent);border-bottom:1px solid color-mix(in srgb,var(--divider-color) 75%,transparent);background:var(--ha-card-background,var(--card-background-color));transition:background .15s}.calendar-day.weekend{background:${this._config.tint_weekends === false ? "var(--ha-card-background,var(--card-background-color))" : "color-mix(in srgb,var(--secondary-background-color) 62%,var(--ha-card-background,var(--card-background-color)))"}}.calendar-day.today{box-shadow:inset 0 0 0 2px var(--rtb-accent)}.calendar-day.today .calendar-day-number{display:inline-grid;float:right;place-items:center;min-width:20px;height:20px;padding:0;border-radius:50%;background:var(--rtb-accent);color:var(--text-primary-color)}.calendar-day.outside{background:var(--secondary-background-color);opacity:.52}.calendar-day.drag-over{background:color-mix(in srgb,var(--rtb-accent) 20%,var(--card-background-color))}.calendar-day-number{text-align:right;padding:1px 3px 3px;font-size:.75rem;color:var(--secondary-text-color)}.calendar-tasks{min-height:${compact ? "52px" : "65px"};clear:both}.calendar-grid .column-task{padding:${compact ? "4px" : "5px"};margin-bottom:2px}.calendar-grid .column-task .name{font-size:.71rem;-webkit-line-clamp:1}.calendar-grid .column-task .area{font-size:.65rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .calendar-events{display:grid;gap:2px;clear:both;padding:${compact ? "1px 2px 2px" : "2px 4px 4px"}}.calendar-event{display:flex;align-items:center;gap:3px;width:100%;min-width:0;padding:${compact ? "3px 4px" : "5px"};border:0;border-left:3px solid var(--event-color);border-radius:5px;background:color-mix(in srgb,var(--event-color) ${theme.event},var(--ha-card-background,var(--card-background-color)));color:var(--primary-text-color);font:inherit;text-align:left;cursor:pointer}.calendar-event:hover{background:color-mix(in srgb,var(--event-color) 25%,var(--ha-card-background,var(--card-background-color)))}.calendar-event ha-icon{--mdc-icon-size:14px;color:var(--event-color);flex:none}.calendar-event span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.68rem}.calendar-event small{font-size:.63rem;font-weight:600;margin-right:3px}.event-details{display:grid;gap:0;padding:0 16px 18px}.event-detail-line{display:grid;grid-template-columns:minmax(90px,28%) 1fr;gap:10px;padding:9px 2px;border-top:1px solid var(--divider-color);font-size:.86rem}.event-detail-line span{white-space:pre-wrap;overflow-wrap:anywhere}.event-detail-line strong{color:var(--secondary-text-color)}
      .family-heading{display:flex;align-items:center;justify-content:center;gap:8px;padding:2px 10px 9px}.family-heading button{border:0;background:none;color:var(--primary-color);cursor:pointer;padding:5px}.family-heading strong{text-transform:capitalize}.person-avatar{display:grid;place-items:center;width:27px;height:27px;min-width:27px;border-radius:50%;object-fit:cover;background:color-mix(in srgb,var(--rtb-accent) 18%,var(--secondary-background-color));color:var(--primary-text-color);font-size:.65rem;font-weight:700;overflow:hidden}.person-avatar ha-icon{--mdc-icon-size:16px}.family-scroll{overflow:auto;flex:1;border-top:1px solid var(--divider-color);touch-action:pan-x pan-y}.family-calendar{--family-axis:52px;--family-hour-height:48px;min-width:calc(var(--family-axis) + var(--family-columns) * 180px)}.family-head{position:sticky;top:0;z-index:5;display:grid;grid-template-columns:var(--family-axis) repeat(var(--family-columns),minmax(180px,1fr));height:42px;background:var(--secondary-background-color);border-bottom:1px solid var(--divider-color)}.family-head strong{display:flex;align-items:center;justify-content:center;gap:7px;border-left:1px solid var(--divider-color);font-size:.78rem;min-width:0}.family-head strong>span:last-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.family-all-day{display:grid;grid-template-columns:var(--family-axis) 1fr;border-bottom:1px solid var(--divider-color)}.family-all-day>span{padding:8px 4px;color:var(--secondary-text-color);font-size:.67rem}.family-all-day>div{display:grid;grid-template-columns:repeat(var(--family-columns),minmax(180px,1fr))}.family-all-day section{display:grid;align-content:start;gap:3px;min-height:48px;padding:4px;border-left:1px solid var(--divider-color)}.family-all-day section>strong{display:none}.family-empty{padding:5px;color:var(--secondary-text-color);font-size:.68rem}.family-timeline{display:grid;grid-template-columns:var(--family-axis) 1fr;height:calc(24 * var(--family-hour-height))}.family-timeline>aside{position:relative;border-right:1px solid var(--divider-color);background:var(--ha-card-background,var(--card-background-color))}.family-timeline>aside span{position:absolute;right:5px;transform:translateY(-50%);font-size:.63rem;color:var(--secondary-text-color)}.family-time-columns{display:grid;grid-template-columns:repeat(var(--family-columns),minmax(180px,1fr));height:100%}.family-time-column{position:relative;border-right:1px solid var(--divider-color);background:repeating-linear-gradient(to bottom,transparent 0,transparent calc(var(--family-hour-height) - 1px),color-mix(in srgb,var(--divider-color) 72%,transparent) calc(var(--family-hour-height) - 1px),color-mix(in srgb,var(--divider-color) 72%,transparent) var(--family-hour-height))}.family-timed{position:absolute;left:2px;right:2px;min-height:18px}.family-entry{box-sizing:border-box;display:flex;align-items:center;gap:4px;min-width:0;padding:4px 5px;border:1px solid var(--rtb-task-border);border-left:4px solid var(--entry-color,var(--rtb-accent));border-radius:7px;background:var(--rtb-task-bg);font-size:.69rem;overflow:hidden}.family-entry>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.family-entry>small{flex:none;color:var(--secondary-text-color);font-size:.62rem}.family-entry>em{max-width:35%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:1px 4px;border-radius:999px;background:var(--secondary-background-color);color:var(--secondary-text-color);font-size:.6rem;font-style:normal}.family-entry.event{cursor:pointer}.family-entry.event ha-icon{--mdc-icon-size:14px;color:var(--entry-color)}.family-entry.task{border-left-color:var(--rtb-accent)}.family-entry .task-action{flex:none}.family-timed .family-entry{height:100%;align-items:flex-start;flex-wrap:wrap}.family-timed .family-entry>span{flex:1 1 60%}
      .temporal-layout{display:flex;min-height:0;flex:1}.temporal-main{display:flex;flex-direction:column;min-width:0;flex:1}.overdue-column{width:170px;min-width:145px;max-width:24%;overflow:auto;background:color-mix(in srgb,var(--error-color) 6%,var(--card-background-color));flex:none}.overdue-left{border-top:1px solid var(--divider-color)}.overdue-left .overdue-column{border-right:1px solid var(--divider-color)}.overdue-right .overdue-column{border-left:1px solid var(--divider-color)}.overdue-head{position:sticky;top:0;z-index:3;display:flex;align-items:center;gap:5px;height:36px;padding:0 7px;box-sizing:border-box;background:var(--secondary-background-color);color:var(--error-color);font-size:.78rem;font-weight:600}.overdue-head ha-icon{--mdc-icon-size:17px}.overdue-head strong{margin-left:auto}.overdue-list{padding:5px}.overdue-list .column-task{padding:7px 5px;border:0;border-radius:7px;margin-bottom:5px;background:var(--card-background-color)}.overdue-list .column-task .name{font-size:.76rem;white-space:normal}.overdue-list .column-task .area{padding-top:2px}.overdue-age{padding-top:3px;color:var(--error-color);font-size:.68rem;font-weight:650;line-height:1.2}@media(max-width:600px){.overdue-column{width:135px;min-width:120px;max-width:38%}.overdue-head span{display:none}}
      dialog{border:0;border-radius:12px;background:var(--card-background-color);color:var(--primary-text-color);box-shadow:var(--ha-card-box-shadow);width:min(720px,calc(100vw - 32px));max-height:calc(100vh - 40px);padding:0;overflow:auto}
      dialog::backdrop{background:#0008}.dialog-head{display:flex;align-items:center;gap:8px;padding:16px;font-size:1.15rem;font-weight:600}.dialog-head button{margin-left:auto;border:0;background:none;color:inherit;cursor:pointer}.dialog-head>ha-icon{color:var(--rtb-accent)}.note-content{margin:0 16px 18px;padding:14px;border:1px solid var(--divider-color);border-radius:10px;background:var(--secondary-background-color);white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.5}
      form{display:grid;gap:12px;padding:0 16px 16px}.field{display:grid;gap:4px;font-size:.85rem}.field input,.field select,.field textarea{box-sizing:border-box;width:100%;padding:9px;border:1px solid var(--divider-color);border-radius:6px;background:var(--card-background-color);color:var(--primary-text-color)}
      .form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}.actions{display:flex;justify-content:flex-end;gap:8px}.actions button{padding:8px 14px;border-radius:6px;border:0;cursor:pointer}.actions button:disabled{opacity:.55;cursor:wait}.delete-task{margin-right:auto;background:color-mix(in srgb,var(--error-color) 14%,transparent);color:var(--error-color);border:1px solid color-mix(in srgb,var(--error-color) 35%,transparent)!important}.delete-task:hover{background:color-mix(in srgb,var(--error-color) 22%,transparent)}.primary{background:var(--primary-color);color:var(--text-primary-color)}
      .known{display:flex;align-items:center;gap:5px;overflow:auto;font-size:.73rem;color:var(--secondary-text-color);padding-bottom:2px}.known span{white-space:nowrap}.known button,.mask-pills button{border:1px solid var(--divider-color);border-radius:999px;background:var(--secondary-background-color);color:var(--primary-text-color);padding:4px 8px;white-space:nowrap;cursor:pointer}.assignee-options button{display:inline-flex;align-items:center;gap:6px}.assignee-options .person-avatar{width:22px;height:22px;min-width:22px;font-size:.56rem}.icon-picker{width:100%}.known button.selected,.mask-pills button.selected{background:var(--primary-color);color:var(--text-primary-color);border-color:var(--primary-color)}.mask-group{display:grid;gap:7px}.mask-group>div:first-child{display:flex;justify-content:space-between;gap:8px}.mask-group small{color:var(--secondary-text-color)}.mask-pills{display:flex;flex-wrap:wrap;gap:6px}.mask-pills.months button{min-width:43px}.task-uid{padding:2px 1px;color:var(--secondary-text-color);font:500 .7rem ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.entity-connector{border:1px solid var(--divider-color);border-radius:10px;padding:9px}.entity-connector summary{display:flex;align-items:center;justify-content:space-between;cursor:pointer;font-weight:600}.entity-connector summary label{display:flex;align-items:center;gap:5px}.entity-fields{display:grid;grid-template-columns:1fr 1fr;gap:9px;padding-top:10px}.entity-rule{grid-column:1/-1;display:grid;grid-template-columns:minmax(95px,1fr) 85px 1fr;gap:7px;align-items:center}.entity-rule select,.entity-rule input{box-sizing:border-box;width:100%;padding:8px;border:1px solid var(--divider-color);border-radius:6px;background:var(--card-background-color);color:var(--primary-text-color)}.entity-function.done{color:var(--success-color,#43a047);font-weight:700}.entity-function.due-function{color:var(--warning-color,#d98200);font-weight:700}.task.entity-done{border-color:color-mix(in srgb,var(--success-color,#43a047) 45%,var(--rtb-task-border))}.task.entity-due{border-color:color-mix(in srgb,var(--warning-color,#d98200) 45%,var(--rtb-task-border))}.history{padding:0 16px 18px}.history ol{margin:8px 0 0;padding:0;list-style:none;border-top:1px solid var(--divider-color)}.history li{display:flex;justify-content:space-between;padding:7px 3px;border-bottom:1px solid var(--divider-color)}.history li small,.history-empty{color:var(--secondary-text-color)}.history-empty{padding-top:8px}.heatmap{max-width:100%;overflow:auto;margin-top:10px;padding:8px;border:1px solid var(--divider-color);border-radius:9px;background:var(--secondary-background-color)}.heatmap table{border-collapse:separate;border-spacing:1px;min-width:max-content}.heatmap th,.heatmap td{padding:0}.heatmap thead th{font-size:.62rem;font-weight:500;text-align:center;color:var(--secondary-text-color);padding-bottom:3px}.heatmap tbody th{font-size:.61rem;font-weight:500;text-align:right;color:var(--secondary-text-color);padding-right:5px}.heat-cell{display:block;width:9px;height:9px;border-radius:2px;border:1px solid color-mix(in srgb,var(--divider-color) 80%,transparent)}.heat-cell.month-even{background:color-mix(in srgb,var(--ha-card-background,var(--card-background-color)) 94%,var(--secondary-background-color))}.heat-cell.month-odd{background:color-mix(in srgb,var(--ha-card-background,var(--card-background-color)) 91%,var(--rtb-accent))}.heat-cell.done{background:var(--rtb-accent);border-color:var(--rtb-accent)}.heat-cell.outside{opacity:.24}.heat-legend{display:flex;align-items:center;justify-content:flex-end;gap:5px;margin-top:5px;font-size:.65rem;color:var(--secondary-text-color)}.heat-legend span{width:9px;height:9px;border-radius:2px;border:1px solid var(--divider-color);background:var(--ha-card-background,var(--card-background-color))}.heat-legend span.done{background:var(--rtb-accent);border-color:var(--rtb-accent)}@media(max-width:600px){.form-row,.entity-fields{grid-template-columns:1fr}.entity-rule{grid-template-columns:1fr}.mask-group>div:first-child{display:grid}}
      .task-meta span,.progress-value{font-size:calc(.67rem * var(--rtb-font-scale))}.area,.due{font-size:calc(.78rem * var(--rtb-font-scale))}.column-task .name{font-size:calc(.76rem * var(--rtb-font-scale))}.calendar-grid .column-task .name{font-size:calc(.71rem * var(--rtb-font-scale))}.calendar-grid .column-task .area{font-size:calc(.65rem * var(--rtb-font-scale))}.day-head,.weekday-heads,.overdue-head{font-size:calc(.78rem * var(--rtb-font-scale))}.calendar-day-number{font-size:calc(.75rem * var(--rtb-font-scale))}.calendar-event span{font-size:calc(.68rem * var(--rtb-font-scale))}.calendar-event small{font-size:calc(.63rem * var(--rtb-font-scale))}.family-head strong{font-size:calc(.78rem * var(--rtb-font-scale))}.family-all-day>span,.family-empty{font-size:calc(.67rem * var(--rtb-font-scale))}.family-timeline>aside span{font-size:calc(.63rem * var(--rtb-font-scale))}.family-entry{font-size:calc(.69rem * var(--rtb-font-scale))}.family-entry>small{font-size:calc(.62rem * var(--rtb-font-scale))}.family-entry>em{font-size:calc(.6rem * var(--rtb-font-scale))}.task-group h3{font-size:calc(${compact ? ".75rem" : ".82rem"} * var(--rtb-font-scale))}.overdue-age{font-size:calc(.68rem * var(--rtb-font-scale))}.dialog-head{font-size:calc(1.15rem * var(--rtb-font-scale))}.field{font-size:calc(.85rem * var(--rtb-font-scale))}.known{font-size:calc(.73rem * var(--rtb-font-scale))}.task-uid{font-size:calc(.7rem * var(--rtb-font-scale))}.history li,.note-content,.event-details{font-size:calc(1rem * var(--rtb-font-scale))}.name,.task-group h3,.day-head,.weekday-heads,.overdue-head,.family-head strong,.dialog-head{font-weight:var(--rtb-font-weight-strong)}button,input,select,textarea{font-family:inherit;font-weight:inherit}
      ha-card.transparent-background{background:transparent;box-shadow:none}.transparent-background .header{background:transparent}.transparent-background .task,.transparent-background .column-task,.transparent-background .day,.transparent-background .day-head,.transparent-background .weekday-heads,.transparent-background .calendar-day,.transparent-background .family-head,.transparent-background .family-timeline>aside,.transparent-background .family-time-column,.transparent-background .overdue-column,.transparent-background .overdue-head{background-color:transparent;background-image:none}.transparent-background .calendar-day.weekend{background:color-mix(in srgb,var(--secondary-background-color) 20%,transparent)}
    </style><ha-card class="${this._config.transparent_background === true ? "transparent-background" : ""}"><div class="header">${iconMarkup(this._config.icon || "mdi:clipboard-check-outline")}
      ${escapeHtml(this._config.title || this._text("tasks"))}<button class="add" title="${escapeHtml(this._text("add"))}"><ha-icon icon="mdi:plus"></ha-icon></button></div>${body}</ha-card>
      <dialog class="add-dialog"><div class="dialog-head">${escapeHtml(this._text("add"))}<button class="dialog-close" title="${escapeHtml(this._text("close"))}"><ha-icon icon="mdi:close"></ha-icon></button></div>${this._taskFormMarkup()}</dialog><dialog class="edit-dialog"></dialog><dialog class="event-dialog"></dialog><dialog class="notes-dialog"></dialog>`;
    this.shadowRoot.querySelector(".add")?.addEventListener("click", () => this._openAddDialog());
    this.shadowRoot.querySelectorAll("img.external-icon").forEach((image) => {
      const hideBrokenImage = () => image.classList.add("load-error");
      image.addEventListener("error", hideBrokenImage, { once: true });
      if (image.complete && image.naturalWidth === 0) hideBrokenImage();
    });
    this.shadowRoot.querySelectorAll(".task[data-task-id]").forEach((element) => {
      element.addEventListener("click", (event) => {
        if (event.target.closest(".task-action")) return;
        if (this._dragging) return;
        const task = this._tasks.find((item) => String(item.uid || item.__uid || item._uuid || "") === element.dataset.taskId);
        if (task) this._markDone(task);
      });
      element.addEventListener("dragstart", (event) => {
        this._dragging = true;
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", element.dataset.taskId || "");
      });
      element.addEventListener("dragend", () => setTimeout(() => { this._dragging = false; }, 300));
      element.addEventListener("keydown", (event) => { if ((event.key === "Enter" || event.key === " ") && !event.target.closest(".task-action")) { event.preventDefault(); element.click(); } });
      element.querySelector(".notes-task")?.addEventListener("click", (event) => {
        event.stopPropagation();
        const task = this._tasks.find((item) => String(item.uid || item.__uid || item._uuid || "") === element.dataset.taskId);
        if (task) this._openNotesDialog(task);
      });
      element.querySelector(".edit-task")?.addEventListener("click", (event) => {
        event.stopPropagation();
        const task = this._tasks.find((item) => String(item.uid || item.__uid || item._uuid || "") === element.dataset.taskId);
        if (task) this._openEditDialog(task);
      });
    });
    this.shadowRoot.querySelectorAll("[data-drop-date]").forEach((cell) => {
      cell.addEventListener("dragover", (event) => { event.preventDefault(); event.dataTransfer.dropEffect = "move"; cell.classList.add("drag-over"); });
      cell.addEventListener("dragleave", () => cell.classList.remove("drag-over"));
      cell.addEventListener("drop", (event) => {
        event.preventDefault(); cell.classList.remove("drag-over");
        this._moveTask(event.dataTransfer.getData("text/plain"), cell.dataset.dropDate);
      });
    });
    this.shadowRoot.querySelectorAll("[data-drop-date], [data-create-date]").forEach((cell) => {
      const date = cell.dataset.createDate || cell.dataset.dropDate;
      const isEntry = (target) => target instanceof Element && Boolean(target.closest(".task, .calendar-event, .family-entry, button, input, select, textarea, a"));
      cell.addEventListener("contextmenu", (event) => {
        if (isEntry(event.target)) return;
        event.preventDefault();
        this._openAddDialog(date);
      });
      cell.addEventListener("dblclick", (event) => {
        if (isEntry(event.target)) return;
        event.preventDefault();
        this._openAddDialog(date);
      });
      let lastTouch = 0;
      cell.addEventListener("pointerup", (event) => {
        if (event.pointerType !== "touch" || isEntry(event.target)) return;
        const now = Date.now();
        if (now - lastTouch <= 450) {
          event.preventDefault();
          lastTouch = 0;
          this._openAddDialog(date);
        } else lastTouch = now;
      });
    });
    this.shadowRoot.querySelectorAll("[data-event-id]").forEach((element) => element.addEventListener("click", (event) => { event.stopPropagation(); this._openEventDialog(this._eventIndex.get(element.dataset.eventId)); }));
    this.shadowRoot.querySelectorAll("[data-family-task-id]").forEach((element) => {
      const task = () => this._tasks.find((item) => String(item.uid || item.__uid || item._uuid || "") === element.dataset.familyTaskId);
      element.querySelector(".family-done")?.addEventListener("click", (event) => { event.stopPropagation(); const item = task(); if (item) this._markDone(item); });
      element.querySelector(".family-edit")?.addEventListener("click", (event) => { event.stopPropagation(); const item = task(); if (item) this._openEditDialog(item); });
      element.querySelector(".family-notes")?.addEventListener("click", (event) => { event.stopPropagation(); const item = task(); if (item) this._openNotesDialog(item); });
    });
    this.shadowRoot.querySelectorAll("dialog").forEach((dialog) => dialog.addEventListener("close", () => {
      if (this._renderPending) setTimeout(() => this._render(), 0);
    }));
    this.shadowRoot.querySelector(".period-prev")?.addEventListener("click", () => { this._calendarOffset -= familyMode || this._config.view_mode === "calendar_month" ? 1 : Math.max(2, Number(this._config.weeks_count) || 3); this._render(); this._loadCalendarEvents(); });
    this.shadowRoot.querySelector(".period-next")?.addEventListener("click", () => { this._calendarOffset += familyMode || this._config.view_mode === "calendar_month" ? 1 : Math.max(2, Number(this._config.weeks_count) || 3); this._render(); this._loadCalendarEvents(); });
    this.shadowRoot.querySelector(".period-today")?.addEventListener("click", () => { this._calendarOffset = 0; this._render(); this._loadCalendarEvents(); });
    const familyScroll = this.shadowRoot.querySelector(".family-scroll");
    familyScroll?.addEventListener("wheel", (event) => {
      if (!(event.ctrlKey || event.metaKey)) return;
      event.preventDefault();
      this._applyFamilyZoom(this._familyHourHeight + (event.deltaY < 0 ? 6 : -6));
    }, { passive: false });
    if (familyScroll) {
      let pinchDistance = 0, pinchHeight = this._familyHourHeight;
      const distance = (touches) => touches?.length >= 2 ? Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY) : 0;
      familyScroll.addEventListener("touchstart", (event) => {
        if (event.touches.length !== 2) return;
        pinchDistance = distance(event.touches); pinchHeight = this._familyHourHeight;
      }, { passive: true });
      familyScroll.addEventListener("touchmove", (event) => {
        if (event.touches.length !== 2 || !pinchDistance) return;
        event.preventDefault();
        this._applyFamilyZoom(pinchHeight * distance(event.touches) / pinchDistance);
      }, { passive: false });
      familyScroll.addEventListener("touchend", () => { pinchDistance = 0; pinchHeight = this._familyHourHeight; }, { passive: true });
    }
    const addForm = this.shadowRoot.querySelector(".add-dialog form");
    this._bindTaskForm(addForm);
    this.shadowRoot.querySelector(".add-dialog .dialog-close")?.addEventListener("click", () => this.shadowRoot.querySelector(".add-dialog")?.close());
    addForm?.addEventListener("submit", (event) => { event.preventDefault(); this._saveNewTask(event.currentTarget); });
  }
}

class RemeysTaskboardCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._areas = [];
    this._assignees = [];
  }

  set hass(value) {
    const firstConnection = !this._hass && value;
    this._hass = value;
    if (firstConnection && this._config) {
      this._render();
      this._loadAreas();
    }
  }
  setConfig(config) {
    const { max_tasks: _removedMaxTasks, ...supportedConfig } = config;
    if (!("progress_style" in supportedConfig)) supportedConfig.progress_style = supportedConfig.show_progress_ring === true ? "ring" : "none";
    delete supportedConfig.show_progress_ring;
    this._config = { ...RemeysTaskboardCard.getStubConfig(), ...supportedConfig };
    this._render();
    this._loadAreas();
  }

  async _loadAreas() {
    try {
      const tasks = await loadTasks(this._hass);
      this._areas = [...new Set(tasks.map((task) => String(task.Area || "").trim()).filter(Boolean))]
        .sort((a, b) => a.localeCompare(b));
      this._assignees = [...new Set(tasks.flatMap((task) => taskAssignees(task)))]
        .sort((a, b) => a.localeCompare(b));
      this._renderWhenIconPickerIdle();
    } catch (_) { /* Card shows the actionable loading error. */ }
  }

  _renderWhenIconPickerIdle() {
    const activePicker = [...(this.shadowRoot?.querySelectorAll("ha-selector") || [])]
      .find((picker) => picker.matches?.(":focus-within") || this.shadowRoot.activeElement === picker);
    if (!activePicker) {
      this._render();
      return;
    }
    this._deferredPickerRender = true;
    const resume = () => setTimeout(() => {
      if (!this._deferredPickerRender) return;
      const stillActive = activePicker.matches?.(":focus-within") || this.shadowRoot.activeElement === activePicker;
      if (stillActive) return;
      this._deferredPickerRender = false;
      this._render();
    }, 250);
    activePicker.addEventListener("focusout", resume, { once: true });
  }

  _update(patch) {
    this._config = { ...this._config, ...patch };
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config }, bubbles: true, composed: true }));
    this._render();
  }

  _render() {
    if (!this.shadowRoot || !this._config) return;
    const selectedAreas = new Set(Array.isArray(this._config.areas) ? this._config.areas : []);
    const selectedAssignees = new Set(Array.isArray(this._config.assignees) ? this._config.assignees : []);
    const availableAssignees = [...new Set([...this._assignees, ...personDirectory(this._hass).map((person) => person.name)])].sort();
    const calendarSources = Array.isArray(this._config.calendar_sources) ? this._config.calendar_sources : [];
    const calendarEntities = Object.keys(this._hass?.states || {}).filter((entityId) => entityId.startsWith("calendar.")).sort();
    const view = this._config.view_mode;
    const isList = view === "list";
    const isColumns = view === "columns";
    const isWeeks = view === "calendar_weeks";
    const isMonth = view === "calendar_month";
    const isFamily = view === "family_calendar";
    const isCalendar = isColumns || isWeeks || isMonth || isFamily;
    const usesWeekStart = (isColumns && this._config.period_mode === "week") || isWeeks || isMonth;
    this.shadowRoot.innerHTML = `<style>
      .form{display:grid;gap:14px;padding:8px 0}.config-section{display:grid;gap:12px;padding:13px;border:1px solid var(--divider-color);border-radius:12px;background:color-mix(in srgb,var(--secondary-background-color) 42%,transparent)}.section-title{font-size:.92rem;font-weight:650}.row{display:grid;grid-template-columns:1fr 1fr;gap:12px}.label{font-weight:500;margin-bottom:4px}
      .hint{font-size:.8rem;color:var(--secondary-text-color)}.areas{display:flex;flex-wrap:wrap;gap:8px 14px;padding-top:4px}.person-filter{display:flex;align-items:center;gap:4px}.person-filter .person-avatar{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;object-fit:cover;background:var(--secondary-background-color);font-size:.6rem;font-weight:700}
      ha-input{width:100%}.select{display:grid;gap:5px;font-size:.85rem}.select select{width:100%;padding:10px;border:1px solid var(--divider-color);border-radius:6px;background:var(--card-background-color);color:var(--primary-text-color)}.calendar-config{display:grid;gap:10px;padding:10px;border:1px solid var(--divider-color);border-radius:10px}.calendar-source{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr 70px auto;gap:7px;align-items:end}.calendar-source label{display:grid;gap:3px;font-size:.72rem}.calendar-source input{box-sizing:border-box;width:100%;min-width:0;padding:8px;border:1px solid var(--divider-color);border-radius:6px;background:var(--card-background-color);color:var(--primary-text-color)}.calendar-source input[type="color"]{height:36px;padding:3px}.calendar-icon-picker{width:100%}.small-btn{border:1px solid var(--divider-color);border-radius:7px;background:var(--secondary-background-color);color:var(--primary-text-color);padding:8px;cursor:pointer}@media(max-width:900px){.calendar-source{grid-template-columns:1fr 1fr}.calendar-source .entity{grid-column:1/-1}}@media(max-width:500px){.row{grid-template-columns:1fr}}
    </style><div class="form">
      <section class="config-section"><div class="section-title">Grundansicht</div>
      <div class="row"><ha-input data-field="title" label="Titel" value="${escapeHtml(this._config.title || "")}"></ha-input><ha-input data-field="icon" label="Icon" value="${escapeHtml(this._config.icon || "mdi:clipboard-check-outline")}"></ha-input></div>
      <label class="select">Ansicht<select data-select="view_mode"><option value="list" ${isList ? "selected" : ""}>Liste</option><optgroup label="Woche"><option value="columns" ${isColumns ? "selected" : ""}>Woche / Tage</option><option value="calendar_weeks" ${isWeeks ? "selected" : ""}>Mehrere Wochen</option></optgroup><option value="calendar_month" ${isMonth ? "selected" : ""}>Monat</option><option value="family_calendar" ${isFamily ? "selected" : ""}>Family Calendar</option></select></label></section>
      ${isList ? `<section class="config-section"><div class="section-title">Liste</div><label class="select">Sortierung<select data-select="list_sort"><option value="next_due" ${this._config.list_sort !== "last_done" ? "selected" : ""}>Nächste Fälligkeit zuerst</option><option value="last_done" ${this._config.list_sort === "last_done" ? "selected" : ""}>Zuletzt erledigt zuerst</option></select></label><ha-formfield label="Zuerst nach Area gruppieren"><ha-checkbox data-field="group_by_area" ${this._config.group_by_area === true ? "checked" : ""}></ha-checkbox></ha-formfield>${this._config.list_sort === "last_done" ? `<ha-input data-field="last_done_days" type="number" min="0" label="Erledigt in den letzten X Tagen" value="${escapeHtml(this._config.last_done_days)}"></ha-input>` : `<ha-input data-field="days" type="number" min="0" label="Nächste X Tage (0 = nur heute)" value="${escapeHtml(this._config.days)}"></ha-input><ha-formfield label="Überfällige Aufgaben einbeziehen"><ha-checkbox data-field="include_overdue" ${this._config.include_overdue !== false ? "checked" : ""}></ha-checkbox></ha-formfield>`}<label class="select">Fortschrittsanzeige<select data-select="progress_style"><option value="none" ${!["ring", "bar"].includes(this._config.progress_style) ? "selected" : ""}>Nichts</option><option value="ring" ${this._config.progress_style === "ring" ? "selected" : ""}>Ring um das Icon</option><option value="bar" ${this._config.progress_style === "bar" ? "selected" : ""}>Fortschrittsbalken</option></select></label>${this._config.group_by_area !== true ? `<ha-formfield label="Raum bei jeder Aufgabe anzeigen"><ha-checkbox data-field="show_area" ${this._config.show_area !== false ? "checked" : ""}></ha-checkbox></ha-formfield>` : ""}</section>` : ""}
      ${isColumns ? `<section class="config-section"><div class="section-title">Woche / Tage</div><div class="row"><label class="select">Zeitraum<select data-select="period_mode"><option value="next_days" ${this._config.period_mode === "next_days" ? "selected" : ""}>Nächste X Tage</option><option value="week" ${this._config.period_mode === "week" ? "selected" : ""}>Laufende Woche</option></select></label><label class="select">Ausrichtung<select data-select="week_layout"><option value="horizontal" ${this._config.week_layout !== "vertical" ? "selected" : ""}>Horizontal</option><option value="vertical" ${this._config.week_layout === "vertical" ? "selected" : ""}>Vertikal</option></select></label></div>${this._config.period_mode !== "week" ? `<ha-input data-field="days" type="number" min="1" max="7" label="Anzahl Tage (1–7)" value="${escapeHtml(this._config.days)}"></ha-input>` : ""}<ha-formfield label="Raum bei jeder Aufgabe anzeigen"><ha-checkbox data-field="show_area" ${this._config.show_area !== false ? "checked" : ""}></ha-checkbox></ha-formfield></section>` : ""}
      ${isWeeks ? `<section class="config-section"><div class="section-title">Mehrere Wochen</div><ha-input data-field="weeks_count" type="number" min="2" max="6" label="Anzahl Wochen (2–6)" value="${escapeHtml(this._config.weeks_count)}"></ha-input><ha-formfield label="Raum bei jeder Aufgabe anzeigen"><ha-checkbox data-field="show_area" ${this._config.show_area !== false ? "checked" : ""}></ha-checkbox></ha-formfield></section>` : ""}
      ${isMonth ? `<section class="config-section"><div class="section-title">Monat</div><ha-formfield label="Raum bei Aufgaben anzeigen"><ha-checkbox data-field="show_area_month" ${this._config.show_area_month === true ? "checked" : ""}></ha-checkbox></ha-formfield></section>` : ""}
      ${(isColumns || isWeeks || isMonth) ? `<section class="config-section"><div class="section-title">Kalender-Aufgaben</div>${usesWeekStart ? `<label class="select">Wochenstart<select data-select="week_start"><option value="monday" ${this._config.week_start !== "sunday" ? "selected" : ""}>Montag</option><option value="sunday" ${this._config.week_start === "sunday" ? "selected" : ""}>Sonntag</option></select></label>` : ""}<ha-formfield label="Überfällige Aufgaben als eigene Spalte"><ha-checkbox data-field="include_overdue" ${this._config.include_overdue !== false ? "checked" : ""}></ha-checkbox></ha-formfield>${this._config.include_overdue !== false ? `<label class="select">Position der Überfällig-Spalte<select data-select="overdue_position"><option value="left" ${this._config.overdue_position !== "right" ? "selected" : ""}>Links</option><option value="right" ${this._config.overdue_position === "right" ? "selected" : ""}>Rechts</option></select></label>` : ""}${isWeeks || isMonth ? `<ha-formfield label="Wochenenden dezent hervorheben"><ha-checkbox data-field="tint_weekends" ${this._config.tint_weekends !== false ? "checked" : ""}></ha-checkbox></ha-formfield>` : ""}</section>` : ""}
      <section class="config-section"><div class="section-title">Darstellung</div><div class="row"><label class="select">Sprache<select data-select="language"><option value="auto" ${this._config.language === "auto" ? "selected" : ""}>Automatisch (Home Assistant)</option><option value="de" ${this._config.language === "de" ? "selected" : ""}>Deutsch</option><option value="en" ${this._config.language === "en" ? "selected" : ""}>English</option><option value="fr" ${this._config.language === "fr" ? "selected" : ""}>Français</option><option value="es" ${this._config.language === "es" ? "selected" : ""}>Español</option><option value="nl" ${this._config.language === "nl" ? "selected" : ""}>Nederlands</option><option value="ja" ${this._config.language === "ja" ? "selected" : ""}>日本語</option></select></label><label class="select">Abstände<select data-select="density"><option value="compact" ${this._config.density !== "comfortable" ? "selected" : ""}>Kompakt</option><option value="comfortable" ${this._config.density === "comfortable" ? "selected" : ""}>Komfortabel</option></select></label></div>
      <label class="select">Farbstil<select data-select="theme_style"><option value="taskboard" ${this._config.theme_style === "taskboard" ? "selected" : ""}>Taskboard Original</option><option value="native" ${this._config.theme_style === "native" ? "selected" : ""}>Home Assistant</option><option value="clean" ${this._config.theme_style === "clean" ? "selected" : ""}>Clean</option><option value="contrast" ${this._config.theme_style === "contrast" ? "selected" : ""}>Kontrast</option><option value="warm" ${this._config.theme_style === "warm" ? "selected" : ""}>Warm</option></select></label>
      <ha-input data-field="accent_color" label="Akzentfarbe (optional, z. B. #5b8def)" value="${escapeHtml(this._config.accent_color || "")}"></ha-input>
      <ha-input data-field="font_scale" type="number" min="70" max="180" step="5" suffix="%" label="Schriftgrößenfaktor (70–180 %)" value="${escapeHtml(this._config.font_scale)}"></ha-input>
      <div class="row"><label class="select">Schriftart<select data-select="font_family"><option value="ha" ${this._config.font_family === "ha" ? "selected" : ""}>Home Assistant / Theme</option><option value="system" ${this._config.font_family === "system" ? "selected" : ""}>Systemschrift</option><option value="rounded" ${this._config.font_family === "rounded" ? "selected" : ""}>Abgerundet</option><option value="serif" ${this._config.font_family === "serif" ? "selected" : ""}>Serifenschrift</option><option value="monospace" ${this._config.font_family === "monospace" ? "selected" : ""}>Monospace</option></select></label><label class="select">Schriftstärke<select data-select="font_weight"><option value="300" ${Number(this._config.font_weight) === 300 ? "selected" : ""}>Leicht</option><option value="400" ${Number(this._config.font_weight || 400) === 400 ? "selected" : ""}>Normal</option><option value="500" ${Number(this._config.font_weight) === 500 ? "selected" : ""}>Mittel</option><option value="600" ${Number(this._config.font_weight) === 600 ? "selected" : ""}>Halbfett</option><option value="700" ${Number(this._config.font_weight) === 700 ? "selected" : ""}>Fett</option></select></label></div>
      <ha-formfield label="Hintergrund der gesamten Kachel transparent"><ha-checkbox data-field="transparent_background" ${this._config.transparent_background === true ? "checked" : ""}></ha-checkbox></ha-formfield>
      <div class="row"><ha-input data-field="card_width" type="number" min="3" max="12" label="Kachelbreite (3–12 Spalten)" value="${escapeHtml(this._config.card_width)}"></ha-input>
      <ha-input data-field="card_height" type="number" min="2" max="12" label="Kachelhöhe (2–12 Zeilen)" value="${escapeHtml(this._config.card_height)}"></ha-input></div></section>
      <section class="config-section"><div class="section-title">Aufgabenfilter</div><div><div class="label">Räume / Areas</div><div class="hint">Keine Auswahl zeigt Aufgaben aus allen Räumen.</div><div class="areas">
        ${this._areas.length ? this._areas.map((area) => `<ha-formfield label="${escapeHtml(area)}"><ha-checkbox data-area="${escapeHtml(area)}" ${selectedAreas.has(area) ? "checked" : ""}></ha-checkbox></ha-formfield>`).join("") : "Aufgaben werden geladen …"}
      </div></div>
      <div><div class="label">Zuständige / Assignees</div><div class="hint">Keine Auswahl zeigt Aufgaben aller Personen.</div><div class="areas">
        ${availableAssignees.map((assignee) => `<div class="person-filter">${personAvatarMarkup(this._hass, assignee)}<ha-formfield label="${escapeHtml(assignee)}"><ha-checkbox data-assignee="${escapeHtml(assignee)}" ${selectedAssignees.has(assignee) ? "checked" : ""}></ha-checkbox></ha-formfield></div>`).join("")}
        <ha-formfield label="Nicht zugewiesen"><ha-checkbox data-assignee="" ${selectedAssignees.has("") ? "checked" : ""}></ha-checkbox></ha-formfield>
      </div></div></section>
      ${isCalendar ? `<section class="config-section"><div class="section-title">Kalendertermine</div><div class="calendar-config"><ha-formfield label="Termine aus Home-Assistant-Kalendern anzeigen"><ha-checkbox data-field="show_calendar_events" ${this._config.show_calendar_events === true ? "checked" : ""}></ha-checkbox></ha-formfield>
        <datalist id="calendar-entities">${calendarEntities.map((entityId) => `<option value="${escapeHtml(entityId)}"></option>`).join("")}</datalist>
        ${this._config.show_calendar_events === true ? calendarSources.map((source, index) => `<div class="calendar-source"><label class="entity">Kalender-Entity<input list="calendar-entities" data-calendar-field="entity_id" data-calendar-index="${index}" value="${escapeHtml(source.entity_id || "")}" placeholder="calendar.familie"></label><label>Anzeigename<input data-calendar-field="name" data-calendar-index="${index}" value="${escapeHtml(source.name || "")}" placeholder="Familie"></label><label>HA-Symbol<ha-selector class="calendar-icon-picker" data-calendar-icon-index="${index}"></ha-selector></label><label>Externe Icon-ID / URL<input data-calendar-field="icon" data-calendar-index="${index}" value="${escapeHtml(source.icon || "")}" placeholder="ri:calendar-line oder /local/icon.png"></label><label>Farbe<input type="color" data-calendar-field="color" data-calendar-index="${index}" value="${/^#[0-9a-f]{6}$/i.test(source.color || "") ? source.color : "#5b8def"}"></label><button type="button" class="small-btn" data-calendar-delete="${index}" title="Kalender entfernen">✕</button></div>`).join("") : ""}
        ${this._config.show_calendar_events === true ? `<button type="button" class="small-btn" id="calendar-source-add">+ Kalender hinzufügen</button>` : ""}
      </div></section>` : ""}
      <section class="config-section"><div class="section-title">Bedienung</div><ha-formfield label="Erledigen vor dem Speichern bestätigen"><ha-checkbox data-field="confirm_done" ${this._config.confirm_done !== false ? "checked" : ""}></ha-checkbox></ha-formfield><ha-formfield label="Aufgaben löschen erlauben (Admin-Modus)"><ha-checkbox data-field="allow_delete" ${this._config.allow_delete !== false ? "checked" : ""}></ha-checkbox></ha-formfield><div class="hint">Wenn deaktiviert, können Aufgaben weiterhin erledigt, verschoben und bearbeitet werden. Nur die Löschfunktion wird in dieser Karte ausgeblendet.</div></section>
    </div>`;

    this.shadowRoot.querySelectorAll("ha-input[data-field]").forEach((input) => {
      input.addEventListener("change", () => {
        const field = input.dataset.field;
        let value = ["days", "last_done_days", "weeks_count", "card_width", "card_height", "font_scale"].includes(field) ? Number(input.value) : input.value;
        if (field === "days" && this._config.view_mode === "columns") value = Math.max(1, Math.min(7, value || 1));
        if (field === "card_width") value = Math.max(3, Math.min(12, value || 12));
        if (field === "card_height") value = Math.max(2, Math.min(12, value || 5));
        if (field === "weeks_count") value = Math.max(2, Math.min(6, value || 3));
        if (field === "last_done_days") value = Math.max(0, value || 0);
        if (field === "font_scale") value = Math.max(70, Math.min(180, value || 100));
        this._update({ [field]: value });
      });
    });
    this.shadowRoot.querySelectorAll("select[data-select]").forEach((input) => {
      input.addEventListener("change", () => {
        const patch = { [input.dataset.select]: input.dataset.select === "font_weight" ? Number(input.value) : input.value };
        if (input.dataset.select === "view_mode" && input.value === "columns") patch.days = Math.max(1, Math.min(7, Number(this._config.days) || 7));
        this._update(patch);
      });
    });
    this.shadowRoot.querySelectorAll("ha-checkbox[data-field]").forEach((input) => {
      input.addEventListener("change", () => this._update({ [input.dataset.field]: input.checked }));
    });
    this.shadowRoot.querySelectorAll("[data-calendar-field]").forEach((input) => input.addEventListener("change", () => {
      const sources = (Array.isArray(this._config.calendar_sources) ? this._config.calendar_sources : []).map((source) => ({ ...source }));
      const index = Number(input.dataset.calendarIndex);
      if (!sources[index]) return;
      sources[index][input.dataset.calendarField] = input.value;
      this._update({ calendar_sources: sources });
    }));
    this.shadowRoot.querySelectorAll("ha-selector[data-calendar-icon-index]").forEach((picker) => {
      const index = Number(picker.dataset.calendarIconIndex);
      picker.hass = this._hass;
      picker.selector = { icon: {} };
      picker.value = calendarSources[index]?.icon || "";
      picker.label = "Symbol";
      picker.addEventListener("value-changed", (event) => {
        const icon = selectedIcon(event);
        if (icon === null) return;
        this._deferredPickerRender = false;
        const sources = (Array.isArray(this._config.calendar_sources) ? this._config.calendar_sources : []).map((source) => ({ ...source }));
        if (!sources[index]) return;
        if (sources[index].icon === icon) return;
        sources[index].icon = icon;
        this._update({ calendar_sources: sources });
      });
    });
    this.shadowRoot.querySelectorAll("[data-calendar-delete]").forEach((button) => button.addEventListener("click", () => {
      const index = Number(button.dataset.calendarDelete);
      const sources = (Array.isArray(this._config.calendar_sources) ? this._config.calendar_sources : []).filter((_, itemIndex) => itemIndex !== index);
      this._update({ calendar_sources: sources });
    }));
    this.shadowRoot.querySelector("#calendar-source-add")?.addEventListener("click", () => {
      const sources = (Array.isArray(this._config.calendar_sources) ? this._config.calendar_sources : []).map((source) => ({ ...source }));
      const used = new Set(sources.map((source) => source.entity_id));
      const entityId = calendarEntities.find((entity) => !used.has(entity)) || "";
      sources.push({ entity_id: entityId, name: entityId ? (this._hass?.states?.[entityId]?.attributes?.friendly_name || entityId) : "", icon: "", color: "#5b8def" });
      this._update({ calendar_sources: sources });
    });
    this.shadowRoot.querySelectorAll("ha-checkbox[data-area]").forEach((input) => {
      input.addEventListener("change", () => {
        const areas = new Set(Array.isArray(this._config.areas) ? this._config.areas : []);
        input.checked ? areas.add(input.dataset.area) : areas.delete(input.dataset.area);
        this._update({ areas: [...areas] });
      });
    });
    this.shadowRoot.querySelectorAll("ha-checkbox[data-assignee]").forEach((input) => {
      input.addEventListener("change", () => {
        const assignees = new Set(Array.isArray(this._config.assignees) ? this._config.assignees : []);
        input.checked ? assignees.add(input.dataset.assignee) : assignees.delete(input.dataset.assignee);
        this._update({ assignees: [...assignees] });
      });
    });
  }
}

customElements.define("remeys-taskboard-card", RemeysTaskboardCard);
customElements.define("remeys-taskboard-card-editor", RemeysTaskboardCardEditor);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "remeys-taskboard-card",
  name: "Remey's Taskboard",
  description: "Aufgaben nach Räumen, Zuständigen und den nächsten X Tagen filtern",
  preview: true,
});
