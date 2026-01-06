✅ FULL COPILOT PROMPT (FOR CURRENT PORTFOLIO VERSION, NO IMAGES YET)

## Context

You are helping build the personal portfolio website for Sudhanva Kashyap, a designer-turned-analytics strategist with:

- MS Business Analytics (STEM)
- B.Des Communication Design
- Experience spanning product analytics, growth strategy, VR/3D, scraping automation, pricing, and academic research
- Targeting F1 OPT-friendly Product, Analytics, or BI/Data roles in the US

The site must communicate analytical maturity, creative identity, adventurous personality, and strong technical adaptability without feeling like a resume.

## Tech Stack (Strict)

- Next.js App Router (`/src/app`)
- TypeScript
- Tailwind CSS
- Dark mode via `next-themes` (`darkMode: "class"`)
- `next/image` for every image or placeholder
- No backend, API routes, or databases
- Static TypeScript data files in `/src/data`

Prefer built-ins; do not add UI libraries or animation packages unless explicitly requested.

## Design Principles

- Tone: calm · structured · premium · subtle personality
- Generous whitespace, soft shadows, rounded cards, hover `-translate-y-1`/`shadow-md`
- Section spacing defaults to `py-24`
- Width constraint: `max-w-7xl mx-auto px-4 (sm:px-6 lg:px-8)`
- Maintain light/dark parity
- Motion: subtle, motion-safe, short duration (≤120ms), desktop-only when possible
- Avoid gradients, loud animations, glassmorphism, or gimmicks

## Placeholder & File Structure

- Keep `<PlaceholderFrame />` everywhere until real images arrive
- Image folders:
  - `/public/images/projects/<slug>/`
  - `/public/images/case-studies/<slug>/`
- When real `.webp` files drop in, UI should work without code changes

## Required Pages & Routing

- `/` Home
- `/projects` list
- `/projects/[slug]`
- `/case-studies`
- `/case-studies/[slug]`
- `/about`

Header must always show: Projects, Case Studies, About, “Let’s talk” button, and Theme toggle.

## Home Page Flow

1. Hero (two-column, max-w-7xl)
   - Left: headline “I help teams turn messy signals into confident product & strategy decisions.”
   - Right: hero visual placeholder + stat cards
2. CTA strip (Explore Projects, View Case Studies, Learn About Me)
3. Certifications strip
4. Featured Projects
5. Case Studies
6. Skills
7. How I Work
8. Contact

Keep CTA and certification sections in place; never remove them.

## Project Detail Structure

Each `/projects/[slug]` page must include, in order:
1. Title + role + timeframe
2. Inline tags (Product, Analytics, etc.)
3. Key metric chips (`impactMetrics`)
4. Optional fun fact chip for personality
5. Hero image placeholder
6. Two-card Problem / Solution
7. Impact list
8. Gallery of 2–4 placeholders (or “Screenshots coming soon”)
9. Key metrics block
10. Architecture section with placeholder diagram
11. External links (if provided)
12. “← Back to projects” link (already at top)

## Case Study Requirements

- All case studies must be NDA-safe. Replace explicit client names with descriptors like:
  - “Confidential B2B SaaS · HR / Enablement”
  - “Confidential Video SaaS · Retention & Pricing”
  - “Confidential Retail Chain · Pricing & Inventory”
- Structure:
  1. Category tags (Strategy · Analytics, etc.)
  2. Generic client descriptor (title)
  3. Summary paragraph
  4. Decision-centric impact bullets
  5. Hero placeholder
  6. Optional secondary placeholder
  7. External brief link (generic naming)

## About Page Must Include

- Short bio blending design + analytics identity
- “Universe of Work” component (mission-control motif)
- “How I Work” principles
- “Field Notes” row highlighting personal details (e.g., biking, VR rigs, travel, racing sim)

Tone: confident, calm, human (not quirky childlike).

## Theme Direction

- Motif: mission-control / data-scouting (orbits, rings, wireframes)
- Minimal color accents, no heavy 3D unless requested
- Animations: motion-safe, desktop-only, fade/translate ≤120ms

## Explicit Do-Nots

- No Three.js, GSAP, Framer Motion, React Spring unless asked
- No new routes beyond required pages
- No backend/CMS/API calls
- Do not turn copy into bullet-list resume items
- Do not remove certification strip or CTA strip
- Do not change header nav structure

## Default Answers When Unsure

- App Router? yes. TypeScript? yes. `next/image`? yes.
- CSS files instead of Tailwind? no.
- Add libraries or backend? no.
- Scroll animations? subtle only.

## Current Priorities

1. Keep placeholder visuals intact until real assets land
2. Maintain consistent theme + spacing on every page
3. Fully utilize `max-w-7xl` for wide screens
4. Polish typography scale and rhythm
5. Avoid resume tone; keep narrative-ready copy hooks
6. Preserve certifications + CTA strips
7. Keep header nav + Let’s talk button + Theme toggle
8. Optimize for light/dark mode parity

## Conflict Resolution

If encountering merge conflicts or duplicate content:

- Show the diff
- Prefer the version that keeps placeholder scaffolding + new visual architecture
- Apply clean, minimal patches

## Summary

Deliver a calm, premium analytics-focused portfolio with subtle creative identity. Use App Router, Tailwind, next/image, dark-mode class, and static data. Maintain placeholders, CTA + certification strips, and header nav. Avoid new dependencies or resume-like copy. This instruction file is the single source of truth for Copilot in this repo.
