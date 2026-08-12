# Release notes

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
