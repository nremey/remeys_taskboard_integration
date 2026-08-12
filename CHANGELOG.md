# Changelog

## 4.44.0

- Im visuellen Karteneditor kann das Löschen von Aufgaben pro Karte deaktiviert
  werden. Erledigen, Verschieben und Bearbeiten bleiben dabei verfügbar.
- Der Löschbutton wird bei deaktivierter Option nicht gerendert; die Kartenlogik
  verwirft zusätzlich direkte Löschversuche.

## 4.43.0

- Der Taskboard-Webhook wurde entfernt. Dashboard-Karten lesen und ändern
  Aufgaben jetzt ausschließlich über die authentifizierte Integrations-API.
- Native Home-Assistant-Aktionen für Hinzufügen, Bearbeiten, Löschen und
  Erledigen von Aufgaben ergänzt.
- Namen, Beschreibungen und Felder dieser Aktionen auf Deutsch, Englisch,
  Französisch, Spanisch, Niederländisch und Japanisch ergänzt.

## 4.42.0

- Der Karteneditor bietet theme-kompatible Schriftarten sowie fünf globale
  Schriftstärken von leicht bis fett für alle Ansichten und Dialoge.
- GitHub-fertige README, Release Notes, Repository-Logo, Issue-/PR-Vorlagen und
  eine automatische Validierungs-Action ergänzt.

## 4.41.0

- Ein gemeinsamer Schriftgrößenfaktor von 70 bis 180 Prozent skaliert die Texte
  aller Kartenansichten, ohne die konfigurierte Kachelgröße zu verändern.

## 4.40.0

- Listenaufgaben besitzen immer einen gleich großen Symbolplatz. Ohne Icon oder
  bei einer nicht ladbaren Bildquelle bleibt dieser als leerer Platzhalter stehen.

## 4.39.0

- Die Listenansicht kann Aufgaben zuerst nach Area gruppieren und zeigt für jede
  Area eine Zwischenüberschrift; die gewählte Fälligkeits- oder Verlaufssortierung
  bleibt innerhalb jeder Gruppe erhalten.

## 4.38.0

- Das Laden und Speichern der Aufgaben funktioniert auch in Dashboard-Kontexten,
  in denen `hass.callApi` beim Start nicht verfügbar ist.
- Der lokale Integrations-Webhook unterstützt nun `list_tasks` als Fallback und
  liest dabei ebenfalls ausschließlich aus dem nativen Home-Assistant-Store.
- Der irreführende Startfehler „Home-Assistant-API ist nicht verfügbar“ entfällt.

## 4.37.0

- Im Karteneditor kann der Hintergrund der gesamten Kachel transparent gestellt
  werden. Die Option wirkt in Listen-, Wochen-, Monats- und Family-Calendar-Ansicht.

## 4.36.0

- Der Fortschrittsring der Listenansicht wird auch bei Aufgaben ohne gewähltes
  Icon angezeigt; seine Mitte bleibt in diesem Fall bewusst leer.

## 4.35.0

- Aufgaben werden nativ im Home-Assistant-Integrationsspeicher
  `.storage/remeys_taskboard.tasks` gespeichert.
- Beim ersten Start wird eine vorhandene alte `userdata/tasklist.js` automatisch
  importiert; fehlt sie, wird ein leerer Aufgabenspeicher angelegt.
- Dashboard-Karten lesen und schreiben Aufgaben über eine authentifizierte API
  der Integration statt über den früheren HTML-Dateipfad.
- Die alte Tasklist-Datei diente in dieser Version noch als synchronisierte
  Kompatibilitätskopie für die damalige HTML-Oberfläche.

## 4.34.0

- Die Jahres-Heatmap der Aufgabenhistorie verwendet wie die ursprüngliche
  HTML-Ansicht alternierende Hintergrundfarben für gerade und ungerade Monate.

## 4.33.0

- Der visuelle Dashboard-Karteneditor ist in Grundansicht, ansichtsspezifische
  Optionen, Darstellung, Aufgabenfilter, Kalendertermine und Bedienung gegliedert.
- Optionen werden nur noch angezeigt, wenn sie in der gewählten Ansicht wirken.
- Abhängige Felder, etwa Zeitraum der Verlaufsliste, Überfällig-Position und
  Kalenderquellen, erscheinen erst nach Auswahl der zugehörigen Funktion.

## 4.32.0

- Neue Aufgaben lassen sich direkt aus einer Kalenderzelle per Rechtsklick,
  Doppelklick oder Doppeltippen öffnen; das Zell-Datum wird als nächste
  Fälligkeit in den Aufgaben-Editor übernommen.

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
