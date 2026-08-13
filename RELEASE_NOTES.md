# Release notes

## 4.53.0 – GitHub release

List-view task cards now use a responsive three-row content layout. The task
name and progress bar span the full width beside the icon, while assignee and
recurrence metadata share the middle row with the right-aligned due label and
action buttons. The progress display selection (none, ring or bar) is
unchanged.

The visual card editor also provides per-card colors for overdue, due-soon and
not-due states. Red, orange and green remain the defaults, while custom colors
are applied consistently across task accents, due labels, progress displays and
overdue-column indicators. The new controls are translated into all supported
editor languages.

## 4.52.0 – GitHub release

EntityConnector validation now rejects overlapping Due and Done rules. Missing
entities and invalid states are detected separately and shown on the affected
task. Text comparisons also normalize `on`/`true` and `off`/`false`, matching
the former HTML implementation.

## 4.51.0 – GitHub release

The week/day view now supports previous, current and next period navigation.
Current-week mode moves one week at a time, while next-days mode moves by its
configured number of days. Calendar events reload for every visible period.

## 4.50.0 – GitHub release

The add-task button now uses `mdi:checkbox-marked-circle-plus-outline`, making it
easier to distinguish from Home Assistant's dashboard editing button. The README
also includes prepared screenshot placeholders and capture guidance.

## 4.49.0 – GitHub release

Taskboard cards now reload automatically when they are reconnected after the
user leaves and returns to a dashboard. They also detect when Home Assistant's
API helper becomes available after a delayed frontend resume, preventing a
stale "Home Assistant API is unavailable" message.

## 4.48.0 – GitHub release

The integration now registers its dashboard module using the stable URL
`/remeys_taskboard/remeys-taskboard-card.js`, without a version query. The path
is served without cache headers, so a manually configured resource can remain
unchanged across future HACS updates. Restart Home Assistant after an update.

## 4.47.0 – GitHub release

An empty task store is now treated as a valid loaded state. The visual editor no
longer displays a permanent loading message when no task areas exist, while the
card continues to show its empty state and allows creating the first task.

## 4.46.0 – GitHub release

The dashboard card picker no longer creates a live Taskboard preview, which
could leave the picker showing an indefinite loading spinner. Card and editor
API requests now start only after Home Assistant has supplied their `hass`
context. The added card itself remains fully interactive.

## 4.45.0 – GitHub release

The integration now serves and registers its dashboard card automatically.
After installation and a Home Assistant restart, Remey's Taskboard appears in
the dashboard card picker without manually adding a Lovelace resource. Perform
a full browser refresh after upgrading to replace a previously cached module.

## 4.44.0 – GitHub release

The visual card editor now includes a per-card admin-mode option for task
deletion. Disabling it hides and blocks deletion in that card while completion,
drag-and-drop rescheduling and task editing remain available.

After upgrading, use this dashboard resource URL:

```text
/local/community/remeys_taskboard/remeys-taskboard-card.js?v=4.44.0
```

## 4.43.0 – GitHub release

Task operations no longer use the local compatibility webhook. Dashboard cards
now use the authenticated integration API exclusively. Automations and scripts
can add, edit, delete and complete tasks through native, translated Home
Assistant actions under `remeys_taskboard.*`.

After upgrading, restart Home Assistant and update the dashboard resource URL:

```text
/local/community/remeys_taskboard/remeys-taskboard-card.js?v=4.43.0
```

## 4.42.0 – GitHub release

Remey's Taskboard is now prepared as a standalone Home Assistant custom
integration and HACS custom repository.

### Highlights

- Native Home Assistant task storage in `.storage/remeys_taskboard.tasks`.
- Automatic one-time migration from the legacy `userdata/tasklist.js`.
- Dashboard card with list, week/day, multi-week, month and Family Calendar
  views.
- Live updates across open dashboards, browsers and devices.
- Task creation, editing, deletion, completion history and annual heatmap.
- Drag-and-drop rescheduling and task creation directly from calendar cells.
- Area and multi-assignee filters, Home Assistant persons and avatars.
- Home Assistant calendar events with source-specific icons and colors.
- Configurable themes, transparent background, density, font size, font family
  and font weight.

### Important upgrade note

Install the complete `custom_components/remeys_taskboard` directory and restart
Home Assistant. Updating only the dashboard JavaScript is not sufficient for
the native storage/API changes introduced since 4.35.0.

After upgrading, use this dashboard resource URL to bypass cached older files:

```text
/local/community/remeys_taskboard/remeys-taskboard-card.js?v=4.42.0
```

The first start imports an existing legacy task list only when the native store
does not exist yet. Do not edit files inside `.storage` manually.

For the complete version history, see [CHANGELOG.md](CHANGELOG.md).
