# Changelog

## 4.53.0

- Reworked list-view task cards into a responsive three-row layout: the task
  name and progress bar use the full content width beside the icon, while task
  metadata and the right-aligned due/actions block share only the middle row.
- Added per-card color pickers for overdue, due-soon and not-due states, with
  red, orange and green retained as defaults.
- Custom status colors now apply consistently to due labels, task accents,
  progress rings and bars, and overdue-column indicators.
- Added editor translations for the new status-color controls in every
  supported language.

## 4.52.0

- The task editor prevents overlapping Due and Done rules in the EntityConnector.
- Missing entities and invalid states are detected separately and displayed
  directly on the task.
- Text states now normalize `on`/`true` and `off`/`false`, matching the previous
  HTML version.

## 4.51.0

- The week/day view now has buttons for navigating to the previous and next
  periods and returning to the current period.
- Current-week mode navigates one week at a time; next-X-days mode shifts by the
  configured number of days.
- Calendar events are reloaded for the visible period when navigating.

## 4.50.0

- The create-task button now uses `mdi:checkbox-marked-circle-plus-outline`,
  making it easier to distinguish from the plus button used to edit Home
  Assistant dashboards.
- Added screenshot placeholders and instructions for adding README screenshots
  later.

## 4.49.0

- When returning to a dashboard, the reconnected card automatically reloads its
  tasks.
- If the Home Assistant API object is not fully available until later, the card
  starts loading automatically instead of displaying a persistent API error.

## 4.48.0

- The dashboard card is registered at a stable resource URL without a version
  parameter.
- The integration path is served without cache headers, so the manual resource
  does not need to be updated after future HACS updates.

## 4.47.0

- An empty task list is no longer displayed indefinitely as an active loading
  operation in the card editor.
- The editor now distinguishes between loading, successfully loaded empty data,
  and API errors. New tasks can still be created using the plus button.

## 4.46.0

- The blocking live preview in the dashboard card picker has been disabled.
- The card and visual editor now start task API requests only after Home
  Assistant has provided them with the `hass` object.

## 4.45.0

- The integration now serves the dashboard card from its own static path and
  automatically registers it as a frontend module.
- After installation and restart, Remey's Taskboard appears in the card picker
  without requiring a Lovelace resource to be created manually.

## 4.44.0

- Task deletion can be disabled per card in the visual card editor. Completing,
  moving, and editing tasks remain available.
- When the option is disabled, the delete button is not rendered and the card
  logic also rejects direct deletion attempts.

## 4.43.0

- Removed the Taskboard webhook. Dashboard cards now read and modify tasks
  exclusively through the authenticated integration API.
- Added native Home Assistant actions for adding, editing, deleting, and
  completing tasks.
- Added German, English, French, Spanish, Dutch, and Japanese translations for
  the names, descriptions, and fields of these actions.

## 4.42.0

- The card editor provides theme-compatible fonts and five global font weights,
  ranging from light to bold, for all views and dialogs.
- Added a GitHub-ready README, release notes, repository logo, issue and pull
  request templates, and an automated validation action.

## 4.41.0

- A shared font-size scale from 70% to 180% scales the text in all card views
  without changing the configured card size.

## 4.40.0

- Tasks in list view always have a consistently sized icon area. When no icon is
  set or an image source cannot be loaded, it remains as an empty placeholder.

## 4.39.0

- List view can group tasks by area first and displays a subheading for each
  area; the selected due-date or history sorting is preserved within each group.

## 4.38.0

- Loading and saving tasks now also works in dashboard contexts where
  `hass.callApi` is unavailable at startup.
- The local integration webhook now supports `list_tasks` as a fallback and also
  reads exclusively from the native Home Assistant store.
- Removed the misleading startup error "Home Assistant API is unavailable."

## 4.37.0

- The background of the entire card can be made transparent in the card editor.
  This option applies to the list, week, month, and Family Calendar views.

## 4.36.0

- The progress ring in list view is also displayed for tasks without a selected
  icon; its center intentionally remains empty in this case.

## 4.35.0

- Tasks are stored natively in the Home Assistant integration store at
  `.storage/remeys_taskboard.tasks`.
- On first startup, an existing legacy `userdata/tasklist.js` file is imported
  automatically; if it is missing, an empty task store is created.
- Dashboard cards read and write tasks through an authenticated integration API
  instead of the previous HTML file path.
- In this version, the legacy task-list file was retained as a synchronized
  compatibility copy for the HTML interface available at the time.

## 4.34.0

- Like the original HTML view, the annual task-history heatmap uses alternating
  background colors for even and odd months.

## 4.33.0

- The visual dashboard card editor is organized into general, view-specific,
  appearance, task-filter, calendar-event, and interaction settings.
- Options are now shown only when they apply to the selected view.
- Dependent fields, such as the history-list period, overdue position, and
  calendar sources, appear only after the corresponding feature is enabled.

## 4.32.0

- New tasks can be opened directly from a calendar cell by right-clicking,
  double-clicking, or double-tapping; the cell date is prefilled as the next due
  date in the task editor.

## 4.31.0

- Added Home Assistant `person.*` entities to assignee suggestions and card filters.
- Added person pictures or generated initials to assignee pills and Family Calendar headers.
- Family Calendar now creates person columns only for assignees actually used by tasks.

## 4.30.0

- Added the immutable task UID to the task edit dialog.
- Added the HTML-compatible EntityConnector function editor.
- Added numeric and text rules for function-derived Due and Done task states.
- Added live visual updates when a connected Home Assistant entity changes state.

## 4.29.0

- Added horizontal and vertical layouts to the week/day-columns view.
- Vertical layout renders weekdays as rows with responsive task grids.
- Preserved calendar events, overdue lists and drag-and-drop in both layouts.

## 4.28.0

- Added multiple assignees per task using HTML-compatible comma-separated storage.
- Added toggleable assignee pills to the task editor.
- Updated filters, task metadata, suggestions and Family Calendar assignment handling.

## 4.27.0

- Added a list mode sorted by the most recent completion date in descending order.
- Added a configurable lookback window for completions during the last X days.
- Added relative last-completed labels and excluded tasks without a completion date.

## 4.26.0

- Added Ctrl/Cmd + mouse-wheel and two-finger pinch zoom to Family Calendar.
- Added Iconify namespaces, image URLs, `/local/` images and emoji/text icons.
- Added free-form external icon inputs for tasks and calendar sources.
- Extended external icon rendering to the card header, list and calendar views.

## 4.25.0

- Replaced the progress toggle with a single None, Ring or Bar selector.
- Added a Family Calendar daily view with assignee and shared columns.
- Added all-day and 24-hour timeline sections for tasks and calendar events.
- Added day navigation, task completion/edit/notes controls and clickable event details.

## 4.24.0

- Added the original taskboard-style rhythm progress bar to list view.
- Added a per-card choice between icon ring and progress bar.
- Added 75%, 100% and 150% markers on a scale capped at 200%.

## 4.23.0

- Added an optional rhythm-progress ring around task icons in list view.
- Progress uses the last completion, next due date and recurrence rhythm.
- Added success, warning and overdue ring colors with a detailed tooltip.

## 4.22.0

- Added a paperclip indicator to every task that contains notes.
- Added a dedicated notes popup available from list, week, multi-week and month views.
- Notes-button clicks no longer complete or drag the task.

## 4.21.0

- Audited both task and calendar icon pickers for interrupting rerenders.
- Deferred the background area/assignee refresh while an icon picker is active.
- Calendar search results now stay open long enough to select an icon.

## 4.20.0

- Prevented recurring Home Assistant state updates from rebuilding the visual card editor.
- Icon-picker search fields now retain focus and their open dropdown while typing.

## 4.19.0

- Made task and calendar icons optional.
- Empty icon selections are now stored and rendered without fallback icons.
- New tasks and calendar sources no longer receive an automatic icon.

## 4.18.0

- Fixed icon-picker searches being interrupted after the first characters.
- Calendar icon searches no longer save partial search text and rebuild the editor.
- Open task dialogs are preserved while background task or calendar updates arrive.

## 4.17.0

- Restored task deletion in the task edit dialog.
- Added a destructive-action confirmation and localized delete labels.
- Task deletions use the existing cross-device live update event.

## 4.16.0

- Added the number of overdue days to every task in the overdue list.
- Added localized singular and plural overdue labels.

## 4.15.0

- Moved the overdue list below the calendar period title.
- Aligned the overdue-list header with the weekday-header row in calendar views.

## 4.14.0

- Added immediate cross-device task synchronization through Home Assistant events.
- All open taskboard cards now reload after adding, editing, completing, moving or deleting a task.
- Added a short reload debounce and automatic WebSocket cleanup when a card is removed.

## 4.13.0

- Removed the per-card maximum-task limit; all matching tasks are now displayed.
- Redesigned list rows to match the original taskboard mini cards more closely.
- Added Taskboard Original, Home Assistant, Clean, Contrast and Warm color styles.

## 4.12.0

- Replaced fixed task-icon suggestions with Home Assistant's searchable icon selector.
- Added the same searchable icon selector to every configured calendar source.
- Added a theme-aware current-year completion heatmap to the task editor.
- Added heatmap tooltips with date, completion count and responsible user.

## 4.11.0

- Added Home Assistant `calendar.*` events to temporal task-card views.
- Added per-card configuration of multiple calendar entities.
- Added independent display name, MDI icon and color for each calendar.
- Added clickable event details with time, calendar, location and description.
- Added all-day and multi-day event distribution across calendar cells.

## 4.10.0

- Added an independent option to show room/area labels on month-calendar tasks.
- Kept room labels compact and truncated safely in narrow calendar cells.

## 4.9.0

- Added per-card Monday/Sunday week-start selection.
- Added automatic Home Assistant language detection.
- Added complete German and English task-card/task-editor text.
- Added localized French, Spanish and Dutch weekday, month and date formatting.

## 4.8.0

- Refined spacing, typography, borders, hover states and calendar cells.
- Added compact and comfortable density settings.
- Added soft, vivid and minimal color styles.
- Added optional per-card accent colors and weekend tinting.
- Improved automatic compatibility with Home Assistant light and dark themes.

## 4.7.0

- Expanded the dashboard new-task dialog to the full Taskboard field set.
- Added clickable weekday and month scheduling masks.
- Added task icon selection and visible suggestions for known tasks, rooms and assignees.
- Added last-completed date, next due date/time and duration fields.
- Added an in-card task editor with completion-history display.

## 4.6.0

- Added a dedicated overdue-task column to temporal card views.
- Added per-card left/right overdue-column placement.
- Overdue tasks can be dragged directly from the list onto a new calendar day.
- Prevented overdue tasks from also appearing in today's calendar cell.

## 4.5.0

- Added configurable 2–6 week calendar cards.
- Added navigable month-sheet calendar cards.
- Added Monday-to-Sunday calendar headings.
- Added drag-and-drop rescheduling between calendar days.
- Preserved click-to-complete without triggering it after a drag operation.

## 4.4.0

- Added list and day-column display modes to task cards.
- Added current-week columns with Monday-to-Sunday headings.
- Added next-X-days columns with a maximum of seven days.
- Added configurable Sections-grid width and height.
- Updated visual editor fields for the current Home Assistant frontend API.

## 4.3.0

- Added a compact new-task dialog to every dashboard card.
- Tasks can be marked complete directly from a card.
- Added optional per-card completion confirmation.
- Added atomic backend operations for add, edit, delete and mark-complete.

## 4.2.0

- Added a per-card assignee multi-select filter to the visual editor.
- Added an explicit filter option for tasks without an assignee.

## 4.1.0

- Added a Lovelace Taskboard card that can be placed multiple times.
- Added a visual card editor with room/area and next-X-days filters.
- Added options for overdue tasks, item limit, title, icon and area display.

## 4.0.0

- Converted the standalone deployment into a Home Assistant custom integration.
