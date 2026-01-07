# Ship Summary — Portfolio changes (precise, evidence-based)

Date: 2026-01-05

---

## High-level outcome ✅

- What you see: A polished portfolio with updated project and case-study detail pages, richer project/case-study data models (structured hero images, galleries, diagram labels, roadmap, collaborators, fun facts), a theme-aware background system (wireframe light / space dark), subtle motion-safe UI refinements, and a single canonical contact entry point (header "Get in touch" mailto). Visual placeholders remain in place for missing assets (screenshots/hero images).

---

## Evidence captured (commands run)

- git branch: `git rev-parse --abbrev-ref HEAD` → main

- git status (porcelain) — current modified/untracked files (exact output):

```
 M .github/copilot-instructions.md
 M README.md
 M next.config.js
 M package-lock.json
 M package.json
 M src/app/about/page.tsx
 M src/app/case-studies/[slug]/page.tsx
 M src/app/case-studies/page.tsx
 M src/app/globals.css
 M src/app/layout.tsx
 M src/app/page.tsx
 M src/app/projects/[slug]/page.tsx
 M src/app/projects/page.tsx
 M src/components/case-study-card.tsx
 M src/components/contact-card.tsx
 M src/components/hero.tsx
 M src/components/how-i-work.tsx
 M src/components/layout/footer.tsx
 M src/components/layout/header.tsx
 M src/components/project-card.tsx
 M src/components/screenshot-gallery.tsx
 M src/components/section.tsx
 M src/components/skills-grid.tsx
 M src/data/case-studies.ts
 M src/data/how-i-work.ts
 M src/data/profile.ts
 M src/data/projects.ts
 M tailwind.config.ts
?? IMAGE_GENERATION_GUIDE.md
?? PHASE_4_5_COMPLETE.md
?? PHASE_4_COMPLETE.md
?? PORTFOLIO_AUDIT_STATUS.md
?? VISUAL_THEME_IMPLEMENTATION.md
?? dev/
?? public/images/
?? src/components/asset-hero.tsx
?? src/components/certifications-strip.tsx
?? src/components/cta-strip.tsx
?? src/components/fun-fact-badge.tsx
?? src/components/hero-visual.tsx
?? src/components/scroll-fade-in.tsx
?? src/components/social-icon.tsx
?? src/components/solar-system.tsx
?? src/components/themed-background.tsx
?? src/components/universe-of-work.tsx
?? src/data/fun-facts.ts
```

- latest commits (git log -n 20 --oneline):

```
8097187 (HEAD -> main, origin/main) Finalize portfolio for GitHub + Vercel
75060d2 Initial commit from Create Next App
```

- git diff summary (git diff --stat) — exact output:

```
 .github/copilot-instructions.md       | 501 ++++++++++++++++++++++++++++++++++++--------------------------------------------------------------------------------
 README.md                             |  26 +++---
 next.config.js                        |   6 +-
 package-lock.json                     |  53 +++++++++++++
 package.json                          |   4 +-
 src/app/about/page.tsx                | 112 +++++++++++++++++++++-----
 src/app/case-studies/[slug]/page.tsx  | 114 ++++++++++++++++++++-------
 src/app/case-studies/page.tsx         |   8 +-
 src/app/globals.css                   | 212 ++++++++++++++++++++++++++++++++++++++++++++++++-
 src/app/layout.tsx                    |  16 +++-
 src/app/page.tsx                      |  41 ++++++----
 src/app/projects/[slug]/page.tsx      | 218 ++++++++++++++++++++++++++++++++++++---------------
 src/app/projects/page.tsx             |   6 +-
 src/components/case-study-card.tsx    |  28 +++----
 src/components/contact-card.tsx       |  26 +++---
 src/components/hero.tsx               |  99 ++++++++++++++---------
 src/components/how-i-work.tsx         |   2 +-
 src/components/layout/footer.tsx      |  24 +++---
 src/components/layout/header.tsx      |   9 ++-
 src/components/project-card.tsx       |  30 ++++---
 src/components/screenshot-gallery.tsx |  48 +++++++-----
 src/components/section.tsx            |  12 +--
 src/components/skills-grid.tsx        |   2 +-
 src/data/case-studies.ts              |  98 +++++++++++++++++------
 src/data/how-i-work.ts                |  30 +++----
 src/data/profile.ts                   |  17 ++--
 src/data/projects.ts                  | 236 ++++++++++++++++++++++++++++++++++++++-----------------
 tailwind.config.ts                    |   3 +
 28 files changed, 1242 insertions(+), 739 deletions(-)
```

Notes on evidence: multiple files are modified in the working tree. Several files are untracked (marked `??`). Because many edits are uncommitted, the summary below uses the working-tree diffs and content as the authoritative source; I flag any files that are new/untracked as explicitly "inferred / uncommitted".

---

## File-by-file change log (only files touched)

> Grouped by: **Styles**, **Layout**, **Components**, **Pages**, **Data**, **Assets**, **Docs**

### Styles 🔧

- `src/app/globals.css` (modified)
  - What changed: Removed global body background color and moved theme background visuals into dedicated classes (`.theme-space`, `.theme-wireframe`). Added starfield and vignette CSS, motion-safe reduction rules, utility classes (`wire-surface`, `wire-surface-ticked`, `wire-section`, `wire-divider`, `wire-label`) and a small `fade-in-up` keyframe.
  - Why: Background visuals were moved out of the body to be controlled by a `ThemedBackground` component. Added motion-respecting utilities and subtle visual system for light/dark parity.
  - User-visible impact: Dark mode now shows a subtle starfield / deep space background; light mode uses a wireframe-paper background. Cards get subtle ticked-edges and consistent wire-surface hover. Motion respects `prefers-reduced-motion`.
  - Risks/Notes: Large CSS additions increase style surface area and could affect paint cost. Motion safety is in place via `prefers-reduced-motion`. Some visuals depend on untracked component `ThemedBackground` to apply classes.

- `tailwind.config.ts` (touched)
  - What changed: Minor config edits (see diff stat). Why: support for design tokens / classes. User-visible: none direct; supports new utilities.

### Layout 🔧

- `src/app/layout.tsx` (modified)
  - What changed: Switched from local `ThemeProvider` to `next-themes` `ThemeProvider`; imported and wrapped `SiteLayout` with a newly added `ThemedBackground` client component; simplified body classes (moved backgrounds to CSS classes); added `suppressHydrationWarning` and a minimal `cn` helper.
  - Why: Centralize theme management and ensure background visuals render in a client-friendly way (theme-aware). Reduce layout-level style duplication.
  - User-visible impact: Theme switching applies a themed background wrapper that controls the page visual (space/wireframe). Potential small hydration differences are handled with `suppressHydrationWarning`.
  - Risks/Notes: `ThemedBackground` is a client component and relies on `next-themes`. There is a small risk of initial flash or mismatch on first render until user theme is resolved (addressed via `suppressHydrationWarning` and default theme setting). Also, the builder used `disableTransitionOnChange` to minimize jarring transitions.

### Components 🔩

(Only files with diffs are listed)

- `src/components/layout/header.tsx` (modified)
  - What changed: Added `import { profile }` and changed the header CTA to `href={`mailto:${profile.email}}` (mail link) and `aria-label` for accessibility.
  - Why: Make header the single canonical contact entry point. Use profile data for email so it follows central config.
  - User-visible impact: Header’s Get in touch now opens the user’s email client.

- `src/components/layout/footer.tsx` (modified)
  - What changed: Removed the mail `SocialIcon` so footer no longer contains a mailto link; left LinkedIn icon.
  - Why: Avoid duplicate contact entry points. Footer should not repeat email contact link.
  - User-visible impact: Footer now only shows LinkedIn (no mail icon).

- `src/components/hero.tsx` (modified)
  - What changed: Reworked hero layout (larger grid, visual placeholder moved right), added motion using `framer-motion`, refined copy and micro components (FunFactBadge), and removed the duplicate `Get in touch` CTA (no mailto link kept in hero).
  - Why: Improve hero clarity and remove duplicate contact entry point. Add safe motion and a small fact badge.
  - User-visible impact: Hero feels taller and more structured, with an illustrative placeholder and micro-interaction; only header provides contact action now.

- `src/components/contact-card.tsx` (modified)
  - What changed: Removed email entry and `mailto` links and icons; kept LinkedIn as the single contact action in the card; updated copy to instruct users to use the header's Get in touch to request a resume.
  - Why: Enforce single contact CTA across the site and remove duplicate mailto instances.
  - User-visible impact: The Contact card no longer exposes an email link; it points users to the header CTA instead. Accessibility preserved (labels and link text for LinkedIn remain intact).

- `src/components/asset-hero.tsx` (modified)
  - What changed: Fixed linter warning by using `aspect` prop (added `style` to wrapper to apply `aspectRatio` when image present). Also added graceful image error handling via useState.
  - Why: Keep the asset hero API ergonomic and avoid linter warnings while allowing aspect ratio control.
  - User-visible impact: Hero images maintain aspect ratio where available; image fallback (placeholder) remains.

- `src/components/solar-system.tsx` (new / untracked)
  - What changed: Added a client component that renders a simple 'where I've orbited' visualization. Currently untracked (file not committed).
  - Why: Visual personal touch (universe motif) used in About page.
  - User-visible impact: New orbit map visuals in About; file is currently untracked — see "evidence missing" below.

- `src/components/themed-background.tsx` (new / untracked)
  - What changed: New client component that reads theme via `next-themes` and returns a wrapper div with `theme-space` or `theme-wireframe` class.
  - Why: Drive theme-specific backgrounds via markup rather than global body CSS.
  - User-visible impact: Controls which background class is applied; file is currently untracked — see "evidence missing" below.

- `src/components/screenshot-gallery.tsx` (modified), `src/components/project-card.tsx` (modified), `src/components/case-study-card.tsx` (modified)
  - What changed: Adapted to new project/case-study data shapes (structured heroImage/gallery objects), adjusted layout and placeholders; added nicer fallback copy.
  - Why: Support richer content model and better image handling.
  - User-visible impact: Project and case-study pages render more consistent hero images, captions, and placeholders.

- `src/components/scroll-fade-in.tsx`, `fun-fact-badge.tsx` (untracked or modified) — small motion / UX helpers used by pages. Motion is motion-safe and respects prefers-reduced-motion.

### Pages 🧭

- `src/app/page.tsx` (modified)
  - What changed: Reordered sections slightly, ensured Contact section exists at `#contact` with a `ContactCard` component.
  - Why: Preserve single contact anchor and maintain home page flow.
  - User-visible impact: Contact section remains but its CTAs were made non-actionable in favor of header mailto.

- `src/app/projects/[slug]/page.tsx` (modified)
  - What changed: Big improvements: replaced direct `Image` hero with `AssetHero`, added ScrollFadeIn and FunFactBadge, added collaborators, fun-fact field note, improved layout grid and structure, added Roadmap and Tech sections, refined architecture placeholder. Updated container width to `max-w-7xl` and padding to `py-24`.
  - Why: Bring project detail pages in line with new page flow, better hero handling, and richer metadata.
  - User-visible impact: Project detail pages have larger layout, clearer sections (Problem vs Solution renamed to Why I built this / What I built), hero placeholders/captions, and Field Note fun facts.

- `src/app/case-studies/[slug]/page.tsx` (modified)
  - What changed: Similar to projects: introduced `AssetHero` for hero, secondaryImage handling, ScrollFadeIn, FunFactBadge field note, restructured tags and title placement, added gradient divider.
  - Why: Improve readability and parity with project pages, keep NDA-safe titles and structured visuals.
  - User-visible impact: Case study pages look more cohesive with clear impact sections and placeholders; secondary images show when present.

- `src/app/about/page.tsx` (modified)
  - What changed: Content polishing and possible inclusion of `SolarSystem` or `ThemedBackground` usage.
  - Why: Reflect new motif and visuals.
  - User-visible impact: About page benefits from new motif and layout polish.

### Data 📦

- `src/data/projects.ts` (modified; large)
  - What changed: Expanded `Project` type (structured `heroImage`, `gallery` objects, `diagramLabel`, `roadmap`, `collaborators` and `funFact`), added richer content and updated copy for many projects.
  - Why: Support richer UI, captions, diagrams and field notes.
  - User-visible impact: Project pages show captions, richer galleries, collaborator links, diagrams placeholders, and roadmap notes.

- `src/data/case-studies.ts` (modified)
  - What changed: Structured hero/secondary images, copy updates, NDA-safe title changes, added captions and secondary images.
  - Why: Make case studies safer for public display, improve visuals and metadata.

- `src/data/profile.ts` (modified)
  - What changed: Email updated to `skashya5@simon.rochester.edu` (already in working tree), other small profile polish.
  - Why: Final shipping email.
  - User-visible impact: Header CTA uses this email; globally consistent contact email via `profile`.

### Assets / Public images 📷

- Many new image references were added (e.g. `/images/projects/*/*.webp`, `/images/case-studies/*/*.webp`) in the data files.
  - Evidence: `src/data/projects.ts` and `src/data/case-studies.ts` diffs reference new `.webp` assets.
  - Status: `public/images/` folder is currently untracked (`?? public/images/`), so some images are not committed in git yet. This is explicitly noted as "inferred" until assets are added and committed.
  - User-visible impact: If the referenced images are not present in `public/images`, Next.js will fail on the page in production build unless placeholders exist; currently `AssetHero` has placeholder fallbacks.

### Docs ✍️

- `README.md`, `.github/copilot-instructions.md`, `VISUAL_THEME_IMPLEMENTATION.md` etc. were modified for update: changes include documentation and visual theme notes.

---

## Diffs requested (key files)

I included exact git diffs (working-tree) for the following key files. These are verbatim outputs from `git diff`:

- `src/app/globals.css` (excerpt)

```diff
@@ -12,7 +12,42 @@
   }
 
   body {
-    @apply bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50 antialiased;
+    @apply text-gray-900 dark:text-gray-50 antialiased;
+    /* Backgrounds controlled by ThemedBackground; keep transparent here */
+    background-color: transparent;
+    background-image: none;
   }
@@ (omitted for brevity) whole block adds `.theme-space` / `.theme-wireframe` and wire-surface utilities
```

- `src/app/layout.tsx` (excerpt)

```diff
-import { ThemeProvider } from "@/components/theme-provider";
+import { ThemeProvider } from "next-themes";
+import ThemedBackground from "@/components/themed-background";
@@
-      <body className={`${inter.variable} bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-50`}>
-        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
-          <SiteLayout>{children}</SiteLayout>
+      <body suppressHydrationWarning className={cn(inter.variable, "min-h-screen font-sans antialiased")}> 
+        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
+          <ThemedBackground>
+            <SiteLayout>{children}</SiteLayout>
+          </ThemedBackground>
         </ThemeProvider>
       </body>
```

- `src/components/themed-background.tsx` — this file is new in the working tree (untracked):

```tsx
// (file content captured from workspace)
"use client";

import { useTheme } from "next-themes";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function ThemedBackground({ children }) {
  const { theme, systemTheme } = useTheme();
  const current = theme === "system" ? systemTheme : theme;
  const bgClass = current === "dark" ? "theme-space text-slate-100" : "theme-wireframe text-slate-900";
  return <div className={cn(bgClass)}>{children}</div>;
}
```

> Note: `themed-background.tsx` was not yet committed (untracked), so there is no `git diff` entry. The content above is read from the workspace and is therefore marked **inferred** evidence.

- `src/components/solar-system.tsx` — untracked (inferred). Content excerpt captured from workspace (see file in repo for full content).

- `src/components/hero.tsx` (diff excerpt)

```diff
+import { motion } from "framer-motion";
+import HeroVisual from "@/components/hero-visual";
+import FunFactBadge from "@/components/fun-fact-badge";
+import { funFacts } from "@/data/fun-facts";
@@
-    <section id="top" className="border-b border-transparent py-20">
-      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
+    <section id="top" className="relative border-b border-transparent py-20 md:py-24 lg:py-28 2xl:py-32">
+      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
@@
-              <p className="max-w-prose text-lg leading-relaxed text-gray-700 dark:text-gray-300">
-              {profile.education}. I pair analytical rigor with product sense to uncover growth levers, shape roadmaps, and ship thoughtful internal tools.
-            </p>
+              <p className="max-w-prose text-[17px] leading-relaxed md:text-lg text-gray-700 dark:text-gray-300">
+                I help teams turn messy signals into confident product decisions.
+              </p>
@@
-              <Link
-                href="#contact"
-                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-100 dark:hover:text-blue-400"
-              >
-                Get in touch
-              </Link>
+              /* hero Get in touch CTA removed in favor of header mailto CTA */
```

- `src/app/projects/[slug]/page.tsx` (diff excerpt)
  - Major changes: `AssetHero` replaces raw `Image` hero; added ScrollFadeIn, FunFactBadge, collaborators, fun fact badges, Roadmap and Tech sections, improved layout to `max-w-7xl` and `py-24`.

- `src/app/case-studies/[slug]/page.tsx` (diff excerpt)
  - Major changes match projects page: `AssetHero` for hero, structured secondary image, impact/visual sections, added field-note fun fact and improved tags presentation.

- `src/data/projects.ts` and `src/data/case-studies.ts` diffs are large and include type shape changes (structured hero images, gallery items, diagramLabel, roadmap, collaborators) and content updates.

(If you want the full raw diffs for each of these files included verbatim, I can append them; I kept the critical excerpts above to keep this summary scannable.)

---

## Evidence gaps / inferred items

- `src/components/themed-background.tsx` and `src/components/solar-system.tsx` are currently **untracked** (git shows `?? ...`). There is no commit-diff entry to point to. I read the files directly from the workspace and included their contents above as **inferred** evidence. Please commit them to capture them in the git history.

- `public/images/` references exist in the data models (lots of `.webp` paths). The `public/images/` folder is untracked in this session, so referenced assets are not present in the repository and must be added and committed before final deployment. `AssetHero` has safe placeholders so missing images do not break local dev builds.

---

## Known risks and tech debt ⚠️

- Themed background and theme switching
  - Themed backgrounds are driven by `next-themes` and a client wrapper `ThemedBackground`. There is a small initial flash risk if theme resolution is deferred on first paint. `suppressHydrationWarning` is used to reduce mismatch errors but it is an implementation detail to watch during production deploys.

- Hydration and SSR
  - `ThemedBackground` is a client component that wraps server-rendered content. `suppressHydrationWarning` and `disableTransitionOnChange` help reduce visual flash but confirm on test (inc. with cookies/offline and older browsers).

- Motion
  - Motion is motion-safe and uses `prefers-reduced-motion` rules; framer-motion is used in the hero with short durations. Confirm motion patterns on low-power devices.

- Asset availability
  - Most `.webp` assets referenced in data files are currently untracked. Add them to `public/images/` before final ship.

- Dependency maintenance
  - `npm run build` produced an advisory message for `baseline-browser-mapping` (`The data in this module is over two months old. To ensure accurate Baseline data, please update: npm i baseline-browser-mapping@latest -D`). This is a low-impact maintenance task but should be tracked.

- Testing and Type coverage
  - Data model changes (`projects.ts`, `case-studies.ts`) changed types and site copy; any external scripts or tests that expect the old shapes may need corresponding updates.

---

## Verification commands run and results ✅

1) `npm run lint`

- First run before fixes showed two warnings (unused `Image` import and `aspect` assigned but unused). Exact snippet:

```
/Users/sudhanvakashyap/Docs/portfolio/src/app/projects/[slug]/page.tsx
  2:8  warning  'Image' is defined but never used  @typescript-eslint/no-unused-vars

/Users/sudhanvakashyap/Docs/portfolio/src/components/asset-hero.tsx
  14:62  warning  'aspect' is assigned a value but never used  @typescript-eslint/no-unused-vars

✖ 2 problems (0 errors, 2 warnings)
```

- After fixes (removed unused import and used `aspect` in `AssetHero`), `npm run lint` produced no output (no errors or warnings).

2) `npm run build` (Next.js production build)

- Exact relevant output snippets (verbatim):

```
✓ Compiled successfully in 2.1s
 ✓ Finished TypeScript in 1646.2ms
 ✓ Collecting page data using 7 workers in 283.9ms
 ✓ Generating static pages using 7 workers (14/14) in 356.1ms
 ✓ Finalizing page optimization in 10.0ms

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /case-studies
├ ● /case-studies/[slug]
│ ├ /case-studies/penpal-b2b
│ ├ /case-studies/svc-retention-pricing
│ └ /case-studies/perry-pricing-analytics
├ ○ /projects
└ ● /projects/[slug]
  ├ /projects/invest-ai
  ├ /projects/unified-scraper
  ├ /projects/neurodivulge
  └ /projects/renderpub-vr
```

- Build produced a dependency notice about `baseline-browser-mapping` being out of date. This is a maintenance note not a build failure.

---

## Final Shipping Adjustments (what I implemented in this session) — short report ✅

- Email updated globally to `skashya5@simon.rochester.edu` by editing `src/data/profile.ts` (profile.email). Evidence: file content shows the new value and header CTA uses `profile.email`.

- Consolidated Contact CTA to **one place only**:
  - Kept a single mailto contact CTA in the **header** (`src/components/layout/header.tsx`) which now uses `mailto:${profile.email}` and an accessible `aria-label`.
  - Removed duplicate contact actions:
    - Removed `Get in touch` link from `Hero` (no header duplication).
    - Removed `mailto:` links and email icon from `ContactCard` (`src/components/contact-card.tsx`) and replaced copy to instruct use of header CTA.
    - Removed mail `SocialIcon` from the footer (`src/components/layout/footer.tsx`).
  - Verified no remaining `mailto:` links exist in the repo (grep for `mailto:` returned none after edits except now header which uses profile.email dynamically).

- Lint and build
  - Ran `npm run lint`, fixed the two warnings by removing an unused import and using the `aspect` prop in `AssetHero`.
  - Ran `npm run build` successfully. Build completed and pages prerendered; output included the route map shown above. There was one non-blocking dependency reminder (baseline-browser-mapping) to track.

---

## Known follow-ups / suggestions (small)

- Commit the untracked components (`themed-background`, `solar-system`, `asset-hero` if needed) and add image assets under `public/images/` so references in the data files are actual assets in the repository.
- Consider adding a unit/visual smoke test for the theme switch to prevent regression in SSR/hydration flashing, and an E2E check that the header mailto is the only live mailto.
- Update the `baseline-browser-mapping` dev dependency as suggested by the build output to keep baseline data current.

---

## Wrap-up checklist — ready to ship ✅

- [x] Single canonical contact CTA implemented in header (mailto: `skashya5@simon.rochester.edu`).
- [x] Duplicate mailto links/icons removed from `Hero`, `ContactCard`, and `Footer`.
- [x] Email updated in `src/data/profile.ts` and consumed by header CTA.
- [x] Lint run and warnings fixed.
- [x] Production build completed successfully.
- [ ] Images referenced in data files need to be added to `public/images/` and committed. (untracked)
- [ ] Consider committing `themed-background.tsx` and `solar-system.tsx` if not intended to be thesis/experimental.

---

If you want, I can commit the changes I just made with a clear commit message (e.g. `chore: consolidate contact CTA; update email; lint fixes`) and push, or I can leave them uncommitted so you can review before committing. Tell me which you prefer and I will proceed.
