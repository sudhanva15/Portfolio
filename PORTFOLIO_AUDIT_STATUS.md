# Portfolio Audit Status — Sudhanva Kashyap

Last updated: {{DATE}}

## Overview
This audit summarizes the current implementation status against the portfolio spec (Next.js App Router + TypeScript + Tailwind, dark-mode via class, `next/image` placeholders, data-driven content, NDA-safe case studies). It captures what matches the spec, minor polish opportunities, and suggested future phases.

## What Matches The Spec
- App Router + TypeScript + Tailwind are consistently used; dark-mode is `class` via `next-themes`.
- Navigation: Header includes Projects, Case Studies, About, “Let’s talk” button, and Theme toggle on all pages.
- Pages present: `/`, `/projects`, `/projects/[slug]`, `/case-studies`, `/case-studies/[slug]`, `/about`.
- Placeholders: `<PlaceholderFrame />` or visual placeholders used; hero and gallery sections prepared to receive real `.webp` assets without code changes.
- CTA strip + Certifications strip are present on Home and retained per spec.
- Project detail pages follow required order: title/role/timeframe → tags → impact metrics → fun fact (optional) → hero placeholder → Problem/Solution → Impact → Gallery → Metrics → Architecture → External links → Back link.
- Case studies are NDA-safe with generic descriptors and decision-centric impact structure.
- Motion: Subtle, motion-safe animations implemented via reusable `ScrollFadeIn`; respects `prefers-reduced-motion` in `globals.css`.
- Identity: FunFactBadge integrated across pages; SolarSystem component adds mission-control motif within motion-safe limits.
- Data architecture: Static TS modules in `src/data/*`; projects include `collaborators` and `roadmap`; case studies structured and consistent.
- Lint/build: `npm run lint` and `npm run build` pass; SSG routes prerender successfully.

## Minor Nits & Polish Opportunities
- Typography rhythm: Review `text-base` vs `text-sm` in About paragraphs for readability on large screens. File: `src/app/about/page.tsx` (multiple `<p>` within first content block).
- Heading scale consistency: Ensure `text-4xl` in About hero aligns with Home hero scale. Files: `src/components/hero.tsx`, `src/app/about/page.tsx`.
- Card hover: Consider slightly lowering hover elevation (`shadow-md` → `shadow`) for ultra-calm tone. Files: common card containers across `about/page.tsx`, `project-card.tsx`, `contact-card.tsx`.
- Grid spacing: Stagger `ScrollFadeIn` consistently (0.08–0.1) across Home sections. File: `src/app/page.tsx` (projects/case-studies grids), confirm in others.
- Fun facts density: About page grid may show many badges; consider capping to 4 for balance. File: `src/app/about/page.tsx` (`aboutFacts` filter).
- SolarSystem contrast: Verify light/dark parity on mid-gray backgrounds. File: `src/components/solar-system.tsx` (orbit border colors).
- Aria labels: Confirm `aria-label` presence on all external icon links, especially in footer. Files: `src/components/layout/footer.tsx`, `src/components/social-icon.tsx`.
- Link affordances: Mail/LinkedIn icons rely on icon-only affordance; optionally add `sr-only` text for screen-readers. File: `src/components/social-icon.tsx`.

## Bigger Future Phases (Optional)
- Projects Gallery: Swap placeholders with real `.webp` assets under `/public/images/projects/<slug>/`; verify `next/image` layouts.
- Architecture Diagrams: Add simple wireframe diagrams (SVG) to architecture sections; keep motion-free.
- Skills & Tools: Add a structured data module and a compact visual component for tools proficiency; maintain calm tone.
- Contact Page: Consider a dedicated `/contact` section component on Home with inline email copy button; no backend.
- Metrics Visualization: Small inline charts (SVG) for impact metrics chips to add analytical flavor.
- Theme Polish: Slightly adjust dark-mode neutrals for higher contrast without harshness (e.g., `gray-950` backgrounds vs `gray-900`).

## Verification
- Lint: Clean.
- Build: Clean; SSG routes generated for all project and case study slugs.
- Accessibility: Motion preferences respected; focus-visible rings present on interactive icons.

---

## Quick Wins Checklist
- Typography scale audit across hero/section titles.
- Hover elevation calm-down on cards.
- Confirm `aria-label`/`sr-only` text on all social icons.
- Ensure consistent stagger values for `ScrollFadeIn` wrappers.
- Cap fun facts shown on About to 4 for balance.
