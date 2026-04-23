# Sleeping Gods – Campaign Tracker

## Project Overview
A single-file PWA (Progressive Web App) that serves as a campaign tracker for the board game **Sleeping Gods** (and its expansions *Tides of Ruin* and *Dungeons*).

The entire app lives in **`index.html`** – all HTML, CSS, and JavaScript is inline in one file. There are no build tools, no frameworks, no npm. Just vanilla HTML/CSS/JS.

## Tech Stack
- **Vanilla HTML5 / CSS3 / JavaScript** – no frameworks, no bundler
- **Single-file architecture** – everything in `index.html`
- **PWA** – has a `manifest.json` for installability
- **localStorage** – used for persisting campaign state
- **Fonts** – Google Fonts: `Cinzel` (headers) and `Crimson Text` (body)

## Design System
The app uses a parchment/nautical theme with CSS custom properties:

```css
--ink: #1a1208
--parchment: #f4ecda
--parchment-dark: #e6d8b8
--gold: #b8860b
--gold-light: #d4a820
--rust: #7a2e10
--teal: #1a5555
--teal-light: #256868
--green: #2a7a2a
--border: #c4a96a
--nav-h: 52px
```

Fonts: `Cinzel` for all headings/labels, `Crimson Text` for body/inputs.

## App Structure

### Navigation Tabs
- **Map** – interactive map with clickable location pins
- **Quests** – quest tracking (active, completed, discarded, optional rules)
- **Adventure** – adventure card tracking
- **Journey Log** – ship status, crew HP/fatigue, XP, events, damage
- **Optional Rules** – (hidden by default, shown when rules are active)
- **Achievements** – achievement tracking with endings and unlocked cards
- **⚙ Settings** – export/import/clear campaign data

### Key UI Components
- `#panel-home` – home/start screen with leaderboard and campaign selection
- `#panel-map` – zoomable map with `.loc-pin` markers (regular and dungeon variants)
- `#loc-popup` – bottom sheet popup for location notes and keywords
- `#dungeon-viewer` – fullscreen dungeon image viewer
- `.quest-layout` – three-column quest board
- `#panel-log` – journey log with ship rooms, crew grid, XP tracker
- `#panel-achievements` – achievement sheet
- `.overlay` / `.dialog` – modal dialogs

### Special Map Pins
- `.loc-pin` – standard location pin (blue tones)
- `.loc-pin.dungeon` – dungeon location (purple, with ☠ icon)
- `.loc-pin.highlighted` – animated green glow for quest matches
- `.loc-pin.has-data` – filled dot when location has notes/keywords

## Game Context

### About Sleeping Gods
- Cooperative campaign game for 1–4 players
- Players captain the steamship **Manticore**, led by **Captain Sofi**
- Set on a mysterious sea with unknown islands, gods, monsters
- Goal: collect totems to wake the sleeping gods and find a way home
- Heavy narrative, storybook-driven, non-linear exploration

### Expansions tracked
- **Tides of Ruin** – additional map content
- **Dungeons** – dungeon crawl expansion with separate dungeon maps

### Game Mechanics tracked
- Ship room damage (6 rooms, multiple damage boxes each)
- Crew members with HP and Fatigue stats
- XP (spent/unspent tracking)
- Quest keywords (for matching quests to locations)
- Adventure cards with totems
- Events (numbered boxes)
- Campaign difficulty (Normal / Brutal)
- Score calculation on campaign finish

## Music
The app plays ambient/instrumental background music. 25 tracks total, generated via Suno (2 variants per prompt):

**Intro song (1)**
- Wake the Sleeping Gods *(epic power pop ballad, orchestral rock, 80s arena rock, full vocals)*

**Exploration tracks (12, 2 variants each)** – calm, atmospheric, nautical/orchestral
1. The Wandering Sea
2. Islands at the Edge of the World
3. Manticore at Rest
4. Uncharted Waters
5. Sofi's Map
6. The Shore Beyond the Storm

**Dungeon tracks (12, 2 variants each)** – dark, epic, named after each dungeon
7. Crypt of Thorns – dark organic, twisted strings, gothic undertone
8. Blood Ruin – aggressive brass, war drums, ancient violence
9. Caldera Fortress – volcanic, massive brass, tympani pulses
10. Fishbone Vault – eerie marine, underwater, claustrophobic
11. Coral Temple – ethereal, beautiful-but-unsettling, drowned civilization
12. Desert Grotto – arid, sparse, ancient cavern atmosphere

Style: toned-down version of the intro song's cinematic orchestral rock – no vocals, loop-friendly, ~4 min each.

### Intro Song
- Title: *Wake the Sleeping Gods*
- Style: epic power pop ballad, orchestral rock, 80s arena rock, cinematic strings, choir on chorus, male lead vocal

## File Structure
```
/
├── index.html        ← entire app (HTML + CSS + JS inline)
├── manifest.json     ← PWA manifest
└── music/            ← (presumed) ambient track folder
```

## Important Conventions
- **Do not split the file** – keep everything in `index.html` unless explicitly asked to refactor
- **CSS variables first** – always use the design system variables, never hardcode colors
- **Font discipline** – `Cinzel` for UI chrome, `Crimson Text` for content
- **No external JS dependencies** – keep it vanilla
- **localStorage keys** – check existing keys before adding new ones to avoid conflicts
- **Mobile-first** – the app is primarily used on phones/tablets during play; test responsive behavior

## Common Tasks

### Adding a new panel/tab
1. Add a `<button class="nav-tab">` in `#nav`
2. Add a `<div id="panel-X" class="panel">` in the body
3. Hook into the `showPanel()` function

### Adding a new dialog/modal
Use the existing `.overlay` + `.dialog` pattern. Toggle `.open` class to show/hide.

### Modifying crew members
Crew data is in the Journey Log panel. Each member has HP and Fatigue tracked with +/- buttons.

### Score calculation
Triggered by "Finish Campaign" button → `openFinishCampaign()`. Score is based on totems, achievements, difficulty modifier, etc.
