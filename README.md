# Raah-e-Bahisht — Website

A single-page, cinematic marketing site for the Raah-e-Bahisht app, built
with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (The build needs internet access once, to
fetch the Fraunces and Manrope fonts from Google Fonts via `next/font`.)

```bash
npm run build && npm start   # production build
```

## What changed in this pass

This is an upgrade of the original project, not a rebuild — same Next.js /
TypeScript / Tailwind / Framer Motion stack, same design tokens.

- **Typography** is now the primary visual device: fluid `clamp()` type
  scale (`.text-hero`, `.text-display`, `.text-heading`, `.text-lede` in
  `app/globals.css`) instead of fixed small sizes, used throughout.
- **Real app screenshots** replace every placeholder SVG. All ten screens
  you sent live in `public/screenshots/` (home top/bottom, Quran, Dua,
  Salat, Zyarah, Islamic Books, Nohay, Tasbeeh Counter, Ask Raahib).
- **Hero** has a staggered blur/opacity entrance and a scroll-linked exit —
  the phone drifts, scales and softens as you scroll into the next section
  rather than the section abruptly ending.
- **Explore** (`ExploreSection.tsx`) is now genuine scrollytelling: a
  pinned panel where your six real categories (Quran, Duas & Ziyarat,
  Salaat & Taqibaat, Amaal & Books, Noha & Manqabat, Ask Raahib) crossfade
  with blur/scale as you scroll, with a progress-dot indicator.
- **Experience** is a layered parallax composition using five real
  screenshots at different depths and scroll speeds.
- **PhoneMockup** gained ambient rim lighting, an inner vignette, an
  optional pointer-tilt (desktop), and an optional slow idle float.
- A short branded **loading sequence** (`LoadingScreen.tsx`) plays once on
  first load.
- `lib/motion.ts` holds one shared easing curve and viewport threshold so
  the whole page reads as one choreographed piece.
- **Reduced motion**: `MotionConfig reducedMotion="user"` in `app/layout.tsx`
  turns transform-based entrances into opacity-only crossfades app-wide,
  and every scroll-linked parallax value (Hero, Experience, Spiritual,
  PhoneMockup tilt) explicitly flattens to zero movement when the OS
  setting is on — content is fully preserved either way.

The design system itself is unchanged from the original build — every
token was pulled directly from the app's own `App.js` / `HomeScreen.js` /
`ProfileScreen.js` / `SearchScreen.js`:

- **Colors**: deep navy backgrounds (`#05061A`, `#011C44`, `#04264F`,
  `#0E2F5C`), a soft gold accent (`#E3D7B3`) with a brighter active gold
  (`#FFD54F`), and warm ivory text (`#F5F1E6`). See `tailwind.config.ts`.
- **The dawn/day/dusk/night gradients** used for the live prayer-time card
  became the `bg-grad-night` / `bg-grad-dusk` / `bg-grad-dawn` utilities.
- **The dotted `GeometricPattern` motif** became the `.geo-motif` utility.
- **Real feature set**: the six Explore categories are the actual sections
  found in the app — nothing invented.

## Assets

- `public/logo/mark-white.png` — transparent icon mark (navbar, hero,
  loading screen, footer, download section).
- `public/logo/app-icon.png` — favicon / apple touch icon.
- `public/logo/lockup.jpeg` — full logo lockup (not placed on a page).
- `public/screenshots/*.jpg` — real exports from the app, optimized to
  720px wide (retina-sharp at the ~280–360px display size used here).

## Before launch

- `components/StoreBadges.tsx` has `APP_IS_LIVE`, `APP_STORE_URL` and
  `PLAY_STORE_URL` constants at the top. Flip `APP_IS_LIVE` to `true` and
  fill in the real URLs once the app is published; until then, both badges
  show a "Coming soon" state and scroll to the download section.
- `components/Footer.tsx` has Privacy Policy / Terms / Contact links
  pointing to `#` — wire these up once those pages exist.

## Structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/     Navbar, Hero, Introduction, ExploreSection, ExperienceSection,
                SpiritualSection, DownloadCTA, Footer, PhoneMockup,
                StoreBadges, LoadingScreen
lib/            Shared motion constants (easing, viewport threshold)
public/logo/    Brand assets
public/screenshots/   Real app screenshots
```

Reduced motion (`prefers-reduced-motion`) is respected globally, and the
layout is responsive from a 1440px desktop down to small phones.

## Note on this pass

`npm install` couldn't run in the environment this redesign was built in
(no network access), so the changes were verified with a standalone
TypeScript syntax/type check rather than a full `next build`. Run
`npm install && npm run build` after downloading to catch anything that
check couldn't — it's worth doing before shipping.
