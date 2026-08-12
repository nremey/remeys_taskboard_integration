DO NOT USE THIS VERSION YET!  - its bug hunting season

<p align="center">
  <img src="assets/remeys-taskboard-logo.svg" width="180" height="180" alt="Remey's Taskboard logo">
</p>

# Remey's Taskboard – Home Assistant Integration

![Version](https://img.shields.io/badge/version-4.52.0-3d68d8)
![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2025.7%2B-41bdf5)
![HACS](https://img.shields.io/badge/HACS-Custom-57c7b6)
![License](https://img.shields.io/badge/license-MIT-green)

Remey's Taskboard is packaged as a Home Assistant custom integration. It is
installed from the Integrations UI and used as a native dashboard card.

**Current release:** `4.52.0` · [Release notes](RELEASE_NOTES.md) ·
[Complete changelog](CHANGELOG.md)

## Installation

### HACS custom repository

1. In HACS, open **Custom repositories** from the menu.
2. Add `https://github.com/nremey/remeys_taskboard_integration` as category
   **Integration**.
3. Within the HACS Enviroment search woe Remeys taskboard.
4. Install **Remey's Taskboard** and restart Home Assistant.
4. Open **Settings → Devices & services → Add integration**.
5. Search for **Remey's Taskboard** and confirm setup.
6. Open **Settings → Dashboards → Resources** from the three-dot menu.
7. Add `/local/community/remeys_taskboard/remeys-taskboard-card.js` as a **JavaScript module**.
8. Restart HomeAssistant, Perform a full browser refresh,
9. edit a dashboard and select   **Remey's Taskboard** from **Add card**.
10. Create a view and start with new tasks.


The card-URL remains unchanged for future HACS updates. Restart Home Assistant after integration updates and
perform a full browser refresh before reopening the dashboard card picker.

## What the integration does

- installs and updates the bundled dashboard card automatically;
- uses the active Home Assistant session for entity and calendar access;
- stores tasks in Home Assistant's native integration store;
- offers task creation, editing, completion, deletion and calendar views;
- provides authenticated integration APIs and native Home Assistant actions.

## Screenshots

> [!NOTE]
> Screenshot placeholders are listed below. Replace each placeholder with the
> matching image in `assets/screenshots/` when screenshots are available. See
> [the screenshot guide](assets/screenshots/README.md) for filenames and capture
> recommendations.

| View | What the screenshot should demonstrate | Planned file |
| --- | --- | --- |
| Task list | Due dates, areas, assignees, icons and progress display | `task-list.png` |
| Week view | Tasks arranged by weekday and drag-and-drop rescheduling | `week-view.png` |
| Month view | Navigable month grid with tasks and calendar events | `month-view.png` |
| Family Calendar | Daily timeline grouped by assignee | `family-calendar.png` |
| Task editor | Task details, recurrence, masks and EntityConnector | `task-editor.png` |
| Card editor | Filters, layouts, appearance and admin-mode options | `card-editor.png` |

<!--
When the screenshots exist, replace the table above or add this gallery:

<p align="center">
  <img src="https://github.com/user-attachments/assets/55620ea6-0cca-462c-9b35-ee7778dcfd33" width="48%" alt="Task list view">
  
  <img src="assets/screenshots/week-view.png" width="48%" alt="Weekly task view">
</p>
<p align="center">
  <img src="assets/screenshots/month-view.png" width="48%" alt="Monthly calendar view">
  <img src="https://github.com/user-attachments/assets/fd211d5e-6e99-49fa-afef-3326b6709bb1" width="48%" alt="Family Calendar view">
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/ae7bfb83-d874-457f-a00d-2a2e9faaaf8a" width="48%" alt="Task editor dialog">
  <img src="assets/screenshots/card-editor.png" width="48%" alt="Visual card editor">
</p>
-->




## Native Home Assistant actions

Automations and scripts can manage tasks The integration
registers `remeys_taskboard.add_task`, `remeys_taskboard.edit_task`,
`remeys_taskboard.delete_task` and `remeys_taskboard.mark_done`. Their names,
descriptions and fields are translated in every language supported by the
integration. The Translation was done by AI so could be inaccurate described.

Mark a task complete using its UUID:

```yaml
action:
  - action: remeys_taskboard.mark_done
    data:
      task_uid: "YOUR-TASK-UUID"
      done_by: "Automation"
```

Add a task using the same field names shown by the task editor:

```yaml
action:
  - action: remeys_taskboard.add_task
    data:
      task:
        Task: "Water the plants"
        Area: "Living room"
        Assignee: "Alex"
        Icon: "mdi:watering-can"
        Rhythmen: 7
        RhythmUnit: "d"
```

Edit selected task fields or delete the task:

```yaml
action:
  - action: remeys_taskboard.edit_task
    data:
      task_uid: "YOUR-TASK-UUID"
      patch:
        Notes: "Updated by an automation"
        New Due date [date]: "2026-08-20"
  - action: remeys_taskboard.delete_task
    data:
      task_uid: "ANOTHER-TASK-UUID"
```

`mark_done` records the completion date and `done_by`, updates the completion
history and calculates the next due date using the task's recurrence and
weekday/month masks. Every operation is broadcast to all open taskboard cards.

## Dashboard cards

The integration serves `remeys-taskboard-card.js` from the stable resource URL
configured during installation. After restarting Home Assistant and performing
a full browser refresh, **Remey's Taskboard** appears in the dashboard card
picker. Its visual editor provides these settings independently for every card:

The visual editor groups its controls by purpose. View-specific controls are
only shown for the selected list, week/day, multi-week, month or Family Calendar
view; dependent controls appear only when their parent option is enabled.

- one or more rooms/areas (no selection means all rooms);
- one or more assignees, including unassigned tasks (no selection means all);
- optional Area groups with intermediate headings in list view;
- tasks due within the next X days;
- include or hide overdue tasks;
- title, icon and whether each task shows its room;
- optional confirmation before a task is marked complete;
- optional admin mode that controls whether tasks can be deleted from a card;
- list view or a day-column view;
- current week (Monday through Sunday) or the next 1–7 days;
- navigation to the previous/next week or day range, with a shortcut back to
  the current period;
- multi-week calendar with 2–6 weeks;
- navigable month-sheet calendar;
- drag and drop between calendar days to reschedule tasks;
- create a task from a calendar cell using right-click, double-click or a
  double-tap; the selected day is prefilled as its next due date;
- dedicated overdue-task column on the left or right;
- preferred card width and height for Home Assistant Sections dashboards;
- compact or comfortable spacing, five color styles and an optional accent;
- transparent card background for every view;
- font scaling from 70–180%, selectable font families and font weights;
- automatic Home Assistant light/dark theme colors and weekend tinting;
- configurable Monday or Sunday week start;
- automatic language or explicit German, English, French, Spanish, Dutch and
  Japanese localization.

You can therefore add several cards, for example one for the kitchen, one for
the bathroom and one containing every task due within the next three days.

All tasks matching the selected time period, areas and assignees are shown.

Equivalent YAML configuration:

```yaml
type: custom:remeys-taskboard-card
title: kitchen – this week
icon: mdi:silverware-fork-knife
view_mode: columns
week_layout: horizontal
list_sort: next_due
group_by_area: true
last_done_days: 30
period_mode: week
areas:
  - Kkitchen
assignees:
  - Remey
days: 7
include_overdue: true
overdue_position: left
show_area: false
show_area_month: true
progress_style: bar
show_calendar_events: true
calendar_sources:
  - entity_id: calendar.family
    name: family
    icon: mdi:account-group
    color: "#5b8def"
confirm_done: true
allow_delete: false
card_width: 12
card_height: 5
density: compact
theme_style: taskboard
accent_color: "#5b8def"
transparent_background: false
font_scale: 115
font_family: ha
font_weight: 400
tint_weekends: true
week_start: monday
language: auto
```

German, English, French, Spanish, Dutch and Japanese include translated
task-card and task-editor controls.
With `language: auto`, the card follows the active Home Assistant user language
when it is supported and falls back to English otherwise.

> [!WARNING]
> The translations were generated automatically with AI. German was reviewed
> by a native speaker and English by an advanced speaker; the other languages
> have not been reviewed by a native speaker or language learner. Some wording
> may therefore sound unusual or unintentionally funny or are false in context.

> As a native Northern German who understands a fair amount of spoken Low German (Plattdeutsch),
> Dutch seems reasonably good to me—although perhaps a little like a tipsy mix
> of German and English. Please do not take offense, my dear Dutch friends—you
> have a beautiful country, and I thoroughly enjoyed my vacation there!



Available color styles are `taskboard orginal`, `Home Assistant`, `clean`,
`contrast` and `warm`.

Task changes are broadcast through Home Assistant. Every open taskboard card on
every connected browser or device reloads immediately after a task is added,
edited, completed, moved or deleted.

Tasks may contain multiple assignees. They are stored in the `Assignee` field as
comma-separated names, for example `Alex, Sam`.
Home Assistant `person.*` entities supplement these suggestions and provide
`entity_picture` avatars. Family Calendar only shows assignee columns that are
actually referenced by at least one task.

The task editor shows each task UID and supports the `EntityConnector`
structure. A Home Assistant entity can derive Due or Done status through numeric
or text comparison rules without changing the task UID. The editor rejects Due
and Done rules whose ranges overlap. Tasks clearly indicate a missing entity or
an unusable state such as `unknown`, `unavailable` or a non-numeric value for a
numeric connector.

Temporal views can display events from one or more Home Assistant `calendar.*`
entities. Configure every source independently in the visual editor with its
entity ID, display name, icon and color. Clicking an event opens a detail
dialog containing its start, end, source calendar, location and description.
All-day and multi-day events are distributed across their applicable calendar
cells.

The card header, tasks and calendar sources support these icon formats:

- Home Assistant icons such as `mdi:broom` and `hass:calendar`;
- Iconify IDs in `namespace:name` form, such as `ri:calendar-line`;
- images served from an `https://`, `http://` or `/local/` URL;
- short text or emoji symbols of up to 12 characters.

Task and calendar-source editors include Home Assistant's searchable icon
selector for `mdi:` and `hass:` icons. Type part of an icon name to search the
catalog. Iconify IDs, image URLs and text or emoji symbols can be entered
manually in the corresponding icon field. Invalid values are not rendered, and
an image icon is hidden if it cannot be loaded.

The task edit dialog displays a current-year completion heatmap matching the
main Taskboard style. Columns represent weeks and rows follow the configured
Monday/Sunday week start. Hover a completed cell to see its date, completion
count and responsible user; the chronological history remains below it. 
With Mouseover the date can be shown of an cell.


Each card also has a **+** button for creating a task without leaving the
dashboard. 
Clicking a task marks it as complete, records the active Home Assistant user, 
and calculates its next due date from the configured rhythm.
The confirmation prompt can be disabled per card in the visual editor.

Task deletion can also be enabled or disabled independently for every card in
the visual editor. With `allow_delete: false`, the delete button is omitted from
the task editor, while completing, moving and editing tasks remains available.
This is a card-level UI restriction intended for ordinary shared dashboards; it
is not an authorization boundary for users who can call Home Assistant APIs or
the integration's native actions directly.

The task dialog includes task name, room/area, assignee, icon picker, last-completed
date, next due date/time, duration, recurrence, notes, weekday mask and month
mask. Existing task names, rooms and assignees are shown as selectable
suggestions. Selected weekday/month pills are active; deselected pills are
ignored when the next completion date is calculated.

Use the pencil button on any task to open the same fields in edit mode. The
editor retains the task identity and completion data and shows its recorded
completion history, including the responsible user where available.

`card_width` uses the 12-column Home Assistant Sections grid. `card_height`
uses grid rows of approximately 56 pixels. Home Assistant's own drag-resize
controls remain available in dashboard edit mode. Those aren't always working, or ignored/overruled by the website panel settings.


The `calendar_weeks` and `calendar_month` modes use a week grid. Choose how the week is to be displayed (weekstart monday or sunday)
Use the arrow buttons to navigate through week blocks or months. Drag a task
onto another date to change its due date. A normal click still marks the task
complete. Drag and drop is intentionally limited to task rescheduling; it does
not alter its room, assignee or recurrence.
It overrides the blocked weekdays or blocked month of the task editor. 

Use `view_mode: family_calendar` for a daily family timeline grouped by assignee,
with a shared column for unassigned tasks and calendar events.
Zoom the timeline with Ctrl/Cmd plus the mouse wheel or a two-finger pinch.

When overdue tasks are enabled, temporal views show them in a dedicated list
instead of mixing them into today's cell. Choose `left` or `right` in the
visual editor. Overdue items remain draggable, so they can be dropped directly
onto a new date. 

The ordinary list view keeps its chronological list behavior. sorting by "next due" or "done last" first.


## External resources

The dashboard card can load the following resource from outside Home Assistant:

- `https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js` is loaded
  when an Iconify icon outside the Home Assistant/MDI namespaces is used, for
  example `ri:calendar-line`. The Iconify component may subsequently request
  the selected icon data from the Iconify API.
This is due to the large pool of Icons fitting the diversity of house-maintenance tasks, which may be missing in the native icon collection.


External network requests can also result from user configuration:

- card, task or calendar icons configured with an `http://` or `https://` image
  URL;
- a Home Assistant `person.*` entity whose `entity_picture` points to an
  external URL.

The authenticated task API, native actions, Home Assistant entities and
calendars, `mdi:` and `hass:` icons, and `/local/` image paths remain inside Home Assistant. 

The XML namespace in the bundled logo SVG is not a network request. The `shields.io`
badges at the top of this README are loaded only when the README is displayed;
they are not requested by the integration at runtime.

## Repository structure

```text
.
├── custom_components/
│   └── remeys_taskboard/
│       ├── __init__.py          # setup, card deployment, task API and storage
│       ├── config_flow.py       # setup through the Home Assistant UI
│       ├── const.py
│       ├── manifest.json
│       ├── services.yaml       # native automation actions and field selectors
│       ├── strings.json        # default action and setup text
│       ├── brand/
│       │   ├── icon.png
│       │   └── icon@2x.png
│       ├── translations/
│       │   ├── de.json
│       │   ├── en.json
│       │   ├── es.json
│       │   ├── fr.json
│       │   ├── ja.json
│       │   └── nl.json
│       └── frontend/
│           └── remeys-taskboard-card.js
├── tests/
├── assets/
│   ├── remeys-taskboard-logo.svg
│   └── screenshots/
│       └── README.md            # filenames and capture guidance
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/validate.yml
│   └── PULL_REQUEST_TEMPLATE.md
├── hacs.json
├── RELEASE_NOTES.md
├── CHANGELOG.md
├── HACS_PUBLISHING.md
├── LICENSE
└── README.md
```

## Data and updates

Tasks are stored natively by Home Assistant in
`/config/.storage/remeys_taskboard.tasks`. Dashboard cards access them through
the authenticated integration API using the active Home Assistant session.
Automations and scripts use the integration's native actions. No taskboard
webhook is registered. On the first start after upgrading, an existing
`/config/www/community/remeys_taskboard/userdata/tasklist.js` is imported; if it
does not exist, an empty task store is created. The legacy file is not modified
and is no longer required after migration.

At setup, only `remeys-taskboard-card.js` is deployed to
`/config/www/community/remeys_taskboard`. Old files already present in that
runtime directory are not deleted automatically, so user data from earlier
versions remains recoverable.

Use a complete Home Assistant backup before uninstalling the integration or
removing its configuration volume. Do not edit `.storage` files manually.

## Updating

1. Update the complete integration directory through HACS or copy the complete
   `custom_components/remeys_taskboard` directory manually.
2. Restart Home Assistant whenever Python/backend files changed.
3. Keep the stable dashboard resource URL unchanged and perform a full browser
   reload.

If you manually registered `/local/community/remeys_taskboard/remeys-taskboard-card.js`
for an older release, you may remove that entry from **Settings → Dashboards →
Resources** after installing 4.51.0. Keep only
`/remeys_taskboard/remeys-taskboard-card.js` to avoid duplicate loading.

Updating only `remeys-taskboard-card.js` is not sufficient for releases that
also contain storage, API or migration changes. Read [RELEASE_NOTES.md](RELEASE_NOTES.md)
before upgrading from a version older than `4.35.0`.

## Feature roadmap (concept notes)

Already represented by the current Taskboard are room-based tasks, calendar
views and task notes. The following ideas need dedicated feature work:

- family countdown tiles and waste collection calendar;
- derive a task from a calendar event;
- shopping synchronization (check/buy related cleaning supplys few days ahead of tasks), 
- weather-related tasks



Repository publication and submission to the searchable default HACS catalog
are covered by [HACS_PUBLISHING.md](HACS_PUBLISHING.md).
