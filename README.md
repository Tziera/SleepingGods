# Sleeping Gods – Campaign Tracker

A Progressive Web App (PWA) for tracking campaigns in the board game **Sleeping Gods** by Red Raven Games, including the expansions *Tides of Ruin* and *Dungeons*.

**Live app:** [sleepinggods.app](https://sleepinggods.app)

---

## Features

- **Interactive map** – zoomable atlas with clickable location pins, notes, and keyword tagging. Jump-to-location search. Dungeon pins with explored/cleared status.
- **Quest tracking** – active, completed, discarded, and optional rule quests across a three-column board
- **Adventure cards** – track found cards and totems
- **Journey Log** – ship room damage, crew damage/levels, XP, events, session notes, and defeats
- **Achievements** – full achievement sheet with endings and unlocked cards
- **Score calculator** – finish campaign with full score breakdown (cards, quests, crew, gold, artifacts, endings, defeats, difficulty, optional rules)
- **Leaderboard** – local high score table across campaigns
- **Ambient music** – 25 original tracks; exploration and dungeon-specific playlists with auto-shuffle
- **Offline support** – works without internet via service worker cache
- **PWA** – installable on phone/tablet, works fullscreen

---

## Tech Stack

Vanilla HTML5, CSS3, and JavaScript — no frameworks, no build tools, no npm.

| File | Role |
|---|---|
| `index.html` | All markup |
| `style.css` | All styles and design tokens |
| `app.js` | All logic |
| `sw.js` | Service worker (offline cache) |
| `manifest.json` | PWA manifest |
| `music/` | Ambient OGG tracks |

State is persisted to `localStorage`. No server, no accounts.

---

## Running Locally

```bash
node server.js
```

Then open `http://localhost:3000` in your browser.

---

## Music

25 ambient tracks generated via Suno, organized into:

- **Exploration tracks** – calm, nautical/orchestral; shuffle-played in atlas mode
- **Dungeon tracks** – dark and atmospheric, named after each dungeon; played in order when a dungeon is opened, then shuffled among all dungeon tracks

To add more music variants, drop a file into `music/` following the naming convention:

```
exploration-{slug}-{variant}.ogg
dungeon-{slug}-{variant}.ogg
```

Example: `dungeon-crypt-of-thorns-c.ogg` — no code changes needed, picked up automatically.

---

## Expansions Supported

- Sleeping Gods (base game)
- Tides of Ruin
- Dungeons

---

## Credits

- Tracker created by [Tziera](https://github.com/Tziera/SleepingGods)
- Map SVG by [@Fire_Forever](https://boardgamegeek.com/profile/Fire_Forever) on BoardGameGeek
- Soundtrack composed by Tziera — [listen on Suno](https://suno.com/playlist/05769256-e42d-4e76-ac14-cecce8b5c9c5)
- *Sleeping Gods* is designed by Ryan Laukat and published by [Red Raven Games](https://www.redravengames.com/sleeping-gods/)
