# Implementation Plan

[Overview]
Refactor proto7ype from an event venue / nightlife website into a game studio website for Proto7ype — a studio specializing in arcade, rhythm, and immersive open-source games.

The current site (Next.js 16, React 19, Tailwind 4) is built around a nightlife venue identity: event ticketing via Tito, poker tournament nights, and an XR penthouse afterparty concept. The refactor pivots the site to showcase Proto7ype as an open-source game studio. The existing dark/neon visual design system (Audiowide font, glitch effects, pink/orange gradients, CRT grid background) is preserved — it already fits an arcade aesthetic perfectly. The core structural changes are:

1. **Homepage** — Rebrand copy and CTAs from nightlife venue to game studio with open-source community angle
2. **Games page** — Replace poker tournament content with an iframe embedding the proto7ype-arcade index.html (added as a git submodule)
3. **Request an Arcade page** — Replace the tickets page with a Formspree-powered application form for visitors who want their own arcade
4. **Learn page** — Rename `/vibe-xr-101` to `/learn`
5. **Navigation & layout** — Update header nav, metadata, footer to reflect game studio identity
6. **Cleanup** — Remove Tito widget, event config, and nightlife-specific components

The proto7ype-arcade repo (`https://github.com/Frontier-Makerspace/proto7ype-arcade.git`) is a collection of 12 browser-based HTML/JS arcade games with gamepad support, CRT-styled game selection UI, and an optional Stripe credit system. It will be added as a git submodule and its static files served from `public/arcade/`.

[Types]
No new TypeScript types or interfaces are needed for this refactor.

The existing `EventMeta` type in `config/events.ts` will be removed entirely. No replacement type is needed since the site is no longer event-driven.

If desired, a lightweight `StudioConfig` type could be added but is not strictly necessary for this refactor — all studio info can live directly in components.

[Files]
File modifications span new page creation, existing page rewrites, component updates, config changes, and deletions.

### New Files
- **`app/request-arcade/page.tsx`** — New "Request an Arcade" page with Formspree form. Replaces `/tickets`. Contains a hero section, form fields (Name, Email, Organization/Venue, Location/City, Message/Use Case, "How did you hear about us?"), and styled with existing dark neon aesthetic.
- **`app/learn/page.tsx`** — Moved from `app/vibe-xr-101/page.tsx`. Same content, new route. Updated metadata and internal references.
- **`proto7ype-arcade/`** — Git submodule pointing to `https://github.com/Frontier-Makerspace/proto7ype-arcade.git` at the repo root.

### Modified Files
- **`app/page.tsx`** — Complete copy rewrite. Replace nightlife venue messaging with game studio identity. Update CTAs to link to `/games`, `/request-arcade`, `/learn`. Remove "secret location" / "21+" / "no photos" messaging.
- **`app/games/page.tsx`** — Gut poker tournament content. Replace with a full-viewport iframe pointing to `/arcade/index.html`. Minimal page chrome — just the site header and a clean embed.
- **`app/layout.tsx`** — Update `<Metadata>` (title, description, keywords, OpenGraph). Update footer copy: remove "location revealed after ticket purchase", add GitHub link to proto7ype-arcade repo, add open-source messaging. Remove Tito CSS `<link>` from `<head>`.
- **`components/HeaderNav.tsx`** — Update `NAV_ITEMS` array: `Home`, `Games`, `Learn`, `Request an Arcade` (CTA). Change CTA label from "Tickets" to "Request an Arcade". Update href from `/tickets` to `/request-arcade`.
- **`components/HeroSection.tsx`** — Rewrite all copy. Change tagline from "SAN FRANCISCO'S EXCLUSIVE XR PENTHOUSE" to game studio messaging. Replace music genre pills (TRAP, INDUSTRIAL, EDM, GOTH, TECHNO) with game genre pills (ARCADE, RHYTHM, HORROR, RACING, CO-OP, etc.). Update CTAs from "AFTERS SHOWS" / "GAMES NIGHT" to "PLAY GAMES" / "REQUEST AN ARCADE". Remove "secret location" / vibe statement nightlife copy. Add open-source community messaging.
- **`components/VideoSection.tsx`** — Rewrite the 3 feature cards from venue experiences (XR Visual Worlds, Afters Shows, Games Night) to game categories. Update section header from "UNDERGROUND EXPERIENCES" to something game-studio-focused. Update CTA section. Keep the video element if the promo video is still relevant, or replace with a placeholder.
- **`next.config.ts`** — No changes needed if we copy arcade files to `public/arcade/`. If we want to avoid manual copying, we could add a custom webpack config or use a build script, but simplest approach is a copy/symlink.
- **`app/globals.css`** — No structural changes. The existing design system works perfectly for an arcade aesthetic.

### Deleted Files
- **`app/tickets/page.tsx`** — Replaced by `app/request-arcade/page.tsx`
- **`app/vibe-xr-101/page.tsx`** (entire directory `app/vibe-xr-101/`) — Moved to `app/learn/page.tsx`
- **`components/TitoWidget.tsx`** — No longer needed (Tito ticketing removed)
- **`config/events.ts`** — No longer needed (no events). HeroSection and VideoSection will have their data inline instead of importing from this config.
- **`public/tito.css`** — No longer needed

### Files to Copy/Symlink
- The proto7ype-arcade submodule's game files (HTML, JS, assets) need to be accessible at `/arcade/*` in the browser. The simplest approach: create a build/postinstall script that copies (or symlinks) the submodule contents into `public/arcade/`. Alternatively, manually symlink `public/arcade` → `proto7ype-arcade/`.

[Functions]
No new standalone functions are created. Changes are at the component/page level.

### Modified Functions/Components

- **`HomePage()` in `app/page.tsx`** — Rewrite JSX. Remove imports of `HeroSection` and `VideoSection` if they are being significantly rewritten, or keep imports and just modify those components. The CTA section at the bottom needs completely new copy and links.

- **`HeroSection()` in `components/HeroSection.tsx`** — Remove `import { currentEvent } from "../config/events"`. Remove all references to `currentEvent.heroImage`. Hardcode or parameterize new game studio content. Replace genre pills data. Replace CTA links and labels.

- **`VideoSection()` in `components/VideoSection.tsx`** — Remove all event-related imports. Rewrite the 3 feature cards. Update headers and CTA section. The video player logic (useRef, useState for mute) can stay if the promo video is retained.

- **`PromoGallery()` in `components/PromoGallery.tsx`** — This component is not currently used on any page (it's defined but not imported anywhere in the route files). It can be deleted or kept for future use. Recommend deletion to reduce dead code.

- **`HeaderNav()` in `components/HeaderNav.tsx`** — Modify the `NAV_ITEMS` constant. Change `{ href: "/tickets", label: "Tickets", variant: "cta" }` to `{ href: "/request-arcade", label: "Request an Arcade", variant: "cta" }`. Change `{ href: "/games", label: "Games" }` stays. Add `{ href: "/learn", label: "Learn" }`. Remove the vibe-xr-101 nav item if it existed (it doesn't appear to be in nav currently, but `/learn` should be added).

- **`GamesPage()` in `app/games/page.tsx`** — Complete rewrite. Remove all poker/tournament content, JSON-LD, Tito widget. Replace with iframe embed component.

- **`TicketsPage()` in `app/tickets/page.tsx`** — Deleted entirely. Replaced by `RequestArcadePage()` in new file.

### Removed Functions/Components
- **`TitoWidget()` in `components/TitoWidget.tsx`** — Entire component deleted. Was used on `/tickets`, `/games`, and `/vibe-xr-101` pages. The `/learn` page (formerly vibe-xr-101) will need its Tito references removed.
- **All exports from `config/events.ts`** — `currentEvent`, `gamesNightEvent`, `vibeXR101Event`, and the `EventMeta` type are all removed.

[Classes]
No classes are used in this codebase. All components are functional React components.

No class-level changes are needed.

[Dependencies]
No new npm dependencies are required for this refactor.

- **Formspree** — Used via a standard HTML form with `action="https://formspree.io/f/{form_id}"` and `method="POST"`. No npm package needed. The user will need to create a Formspree account and get a form endpoint ID.
- **Git submodule** — `proto7ype-arcade` added via `git submodule add`. No npm dependency.
- **Removed dependency usage** — The Tito widget script (`https://js.tito.io/v2/...`) was loaded dynamically in `TitoWidget.tsx`. This is removed with the component deletion. No npm packages to remove.

### Potential Addition (Optional)
- If the user wants the arcade submodule files auto-copied to `public/arcade/` on build, a `"postinstall"` or `"prebuild"` script could be added to `package.json`. Example: `"prebuild": "cp -r proto7ype-arcade/ public/arcade/"`. But a symlink is simpler for development.

[Testing]
No formal test suite exists in the proto7ype repo (no test files, no test framework configured).

### Manual Validation Checklist
After implementation, verify:
1. **Homepage** loads with game studio branding, correct CTAs, no nightlife references
2. **`/games`** page loads and the iframe displays the proto7ype-arcade game selection menu. Games are playable via keyboard. Navigation within the arcade works.
3. **`/request-arcade`** page loads with the form. Form submission sends data to Formspree (test with a real submission).
4. **`/learn`** page loads with the Vibe XR 101 content (minus Tito widget). No broken imports or references to deleted files.
5. **Navigation** — All header nav links work. CTA button says "Request an Arcade" and links to `/request-arcade`.
6. **Footer** — Updated copy, GitHub link works.
7. **No dead imports** — Build completes without errors (`npm run build`). No references to deleted files (`TitoWidget`, `config/events`, `tito.css`).
8. **Mobile responsive** — All pages render correctly on mobile viewports.
9. **`/tickets`** and `/vibe-xr-101`** — These routes should 404 (old pages removed).

[Implementation Order]
Implementation should proceed in dependency order to avoid broken imports at each step.

1. **Add proto7ype-arcade as a git submodule** — `git submodule add https://github.com/Frontier-Makerspace/proto7ype-arcade.git proto7ype-arcade`. Then create a symlink or copy the files: `ln -s ../proto7ype-arcade public/arcade` (or `cp -r proto7ype-arcade/ public/arcade/` excluding `.git`).

2. **Delete `config/events.ts` and `components/TitoWidget.tsx` and `public/tito.css`** — These are dependencies that multiple files import. Deleting them first forces us to clean up all consumers in subsequent steps.

3. **Update `app/layout.tsx`** — Remove Tito CSS link from `<head>`. Update metadata (title, description, keywords, OpenGraph). Update footer copy.

4. **Update `components/HeaderNav.tsx`** — Change nav items to: Home, Games, Learn, Request an Arcade (CTA).

5. **Rewrite `components/HeroSection.tsx`** — Remove event config import. Rewrite all copy for game studio identity. Replace genre pills. Update CTAs.

6. **Rewrite `components/VideoSection.tsx`** — Remove event imports. Rewrite feature cards and CTAs for game studio. Keep video player if promo video is still relevant.

7. **Rewrite `app/page.tsx`** (Homepage) — Update the bottom CTA section copy and links. The bulk of the homepage change is in HeroSection and VideoSection components.

8. **Rewrite `app/games/page.tsx`** — Replace poker tournament content with iframe embedding `/arcade/index.html`.

9. **Create `app/request-arcade/page.tsx`** — New Formspree-powered form page. Style with existing design system.

10. **Move `app/vibe-xr-101/page.tsx` → `app/learn/page.tsx`** — Copy content, remove TitoWidget import and usage, update metadata. Delete `app/vibe-xr-101/` directory.

11. **Delete `app/tickets/page.tsx`** — Old tickets page, replaced by request-arcade.

12. **Delete `components/PromoGallery.tsx`** — Unused component, dead code cleanup.

13. **Verify build** — Run `npm run build` to ensure no broken imports or type errors. Fix any issues.
