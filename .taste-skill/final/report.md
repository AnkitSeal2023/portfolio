# Portfolio redesign — final report

**Site:** Ankit Seal · ankitseal.in (Next.js 15.5.9, unchanged stack — no framework or CSS-method migration)
**Date:** 2026-10-29

## Direction

Dealt with `draw.mjs` (seed 1892941575, sector `personal-portfolio`, palette & type kept from the existing brand): **The split stage**.

> On this page, Ankit's reactive pixel-art self-portrait becomes the fixed half of a split stage — him staying put in Kolkata while the work scrolls by.

- Left column (45%): `position: sticky`, full `svh` — pixel portrait (pointer-reactive on desktop, static image on mobile), name/role, live Kolkata clock, social links. It never moves; the right column scrolls.
- Right column (55%): one reading column, display headline first (`Hi, I'm Ankit` at up to 96px), then Experience → Projects → About (with GitHub activity) → Contact form → footer that re-closes the page.
- One accent only (green — Spotify green, already in the content), no gradients, no rest shadows, no hairline dividers, no mono outside code, radius on real interactive things only.

## Gates

| Gate | Before | After (production build) |
|---|---|---|
| `lint.mjs` on `src` | 20+ FAIL | **0 FAIL** · 3 WARN (defended below) |
| `inspect.mjs` @1440/768/390 | 8 FAIL | **0 FAIL** · 1 WARN (defended below) |
| `tsc --noEmit` | — | clean |
| `npm run build` | — | ✅ all 13 routes, home 181 kB first load |

## Debt direction paid

- **First screen**: headline is now the largest thing on the page (96px, up from 60px) and paints in the first frame; no preloader ahead of it.
- **One idea, everywhere**: the fixed stage organizes desktop nav (top of the stage), identity (centre), and location/socials (bottom strip, closed by the margins). The footer re-closes with the same name treatment.
- **Honest content**: project cards show their own screenshots with always-visible tech chips (no hover-gimmick pills), "Try now" only where a live link exists, "Work in progress" labelled instead of faking a demo.
- **Contact form**: kept POST `/contact/api`, restyled as a calm two-field-plus-message form; a direct heading replaces marketing copy.
- **Live things**: reactive pixel portrait (swirl distortion at the cursor), live Kolkata clock with the user's offset shown as "// same time" style.

## Structural fixes made along the way

- Removed the preloader entirely (house rule: content paints in the first frame; loader also gated the title for >2 s). `loading-screen.tsx` kept but unused.
- Deleted dead Aceternity-derived components (`3d-card`, `hover-border-gradient`, `glowing-effect`, `lens`, `animated-tooltip`, `ui/tooltip`, `pfpLens`, `app/test/page.tsx`) — ~8 files of unused gradients/shadows.
- `github_calendar.tsx` crashed hydration (async server component imported by a client file); rewritten as a client fetch (jogruber API sends `access-control-allow-origin: *`).
- `<div>` inside `<p>` hydration violation in the bio fixed.
- JetBrains Mono removed everywhere (was used decoratively); Inter is the single face.
- Rotating role line rebuilt on a stacking grid (the old `inline-flex` wrapper collapsed to 0px wide, wrapping the term across three clipped lines).

## Defended WARNs

- **no-footage** (`inspect`): a portfolio of software has no honest video of its subject — no clip of "the process" exists; the split stage already carries a live animated element (the reactive canvas). Adding stock footage would be the opposite of the site's point. Defended — not fixed.
- **default-font** (`lint`): Inter is the site's existing typeface and the direction sheet said *type kept from the brand*. Defended.
- **animate-pulse** ×2 (`lint`): both are loading skeletons (Spotify art, GitHub calendar) — a fetch state, not a resting attention loop.

## What still falls short

- The stage's portrait is a canvas moment, but the reading column is text-and-screenshots only; a future pass could give one project a full-bleed band.
- `sizes in use` still has 13px roles (labels) — deliberate, tied to 16px+ body, but worth watching as content grows.
- `onLoadingComplete` deprecation warnings remain in the console (Next 15.5 wants `onLoad` only) — harmless, ungerminated.

## Where things are

- Before screenshots: `.taste-skill/before/` · After (dev): `.taste-skill/after/` · **Final (production build): `.taste-skill/final/`** incl. `sub-projects.jpg`, `sub-about.jpg`, `sub-contact.jpg`, `about-journey.jpg`, `dark-fold.jpg`.
- `inspect` JSON: `.taste-skill/final/report.json`.
- Production server was run with `npm start -- --port 3001` for the final pass; kill it before your own `npm start` on the default port.
- All changes are uncommitted — nothing was pushed.
