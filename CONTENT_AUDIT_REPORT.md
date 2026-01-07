# Content Audit Report — 2026-01-06

Summary
- Purpose: Surface duplication, AI giveaways, and recruiter-unfriendly phrasing; perform a minimal, high-impact content pass to centralize UI copy and make project/case narratives distinct.

Top 10 duplication or risk items (file : brief hint)
1. `src/content/siteCopy.ts` & `src/data/profile.ts`: headline variation — uses "signals" vs "data" (standardize to one phrase).
2. `src/app/about/page.tsx` and `src/content/siteCopy.ts`: repeated geography phrasing (East Africa / India / USA) appears across About and Solar System.
3. `src/components/hero-visual.tsx` & `src/content/siteCopy.ts`: hero alt text duplicated in component and copy store.
4. `src/data/projects.ts` many entries: repeated "system" and "signal" language across projects (templated phrasing).
5. `src/data/case-studies.ts`: repetitive method → decision → impact phrasing sometimes verbose or templated.
6. `src/components/contact-card.tsx` & header: contact copy duplicated; header should be single mailto source.
7. `src/content/siteCopy.ts` and various components: em dashes appear in visible text (replace with commas/semicolons).
8. `src/data/projects.ts` collaborator external LinkedIn link (removed to avoid external duplication).
9. `src/data/profile.ts` education formatting was present but inconsistent; needed canonical MS + B.Des lines.
10. `src/app/projects/page.tsx` and homepage paragraph repeated "calm" and similar emotive words (removed/softened).

What I changed and why (brief)
- Centralized global UI copy into `src/content/siteCopy.ts` (hero subhead, CTAs, footer labels, placeholders, solar system copy, hero alt).
- Rewrote project `problem/solution/impact` fields to start with audience/outcome and emphasize decision and stakeholder relevance; removed templated "system/signal" phrasing. Kept numeric facts as-is but avoided inventing any new metrics.
- Rewrote case study summaries and impact bullets to be more decision-focused and concise (problem → approach → deliverable → decision → why it mattered).
- Canonicalized education in `src/data/profile.ts` to exact recruiter-friendly phrasing: "MS in Business Analytics (STEM), Simon Business School, University of Rochester; B.Des in Communication Design, PES University".
- Removed duplicated external LinkedIn collaborator link from a project entry to keep `profile.linkedin` canonical.
- Replaced visible em dashes with commas/semicolons in user-facing copy.
- Centralized Solar System strings into `siteCopy.solarSystem` and hero alt into `siteCopy.placeholders.heroVisualAlt` to avoid scattered copy edits.

What I did NOT change and why (brief)
- No visual or functional changes to components beyond reading strings from `siteCopy` where necessary; the layout and behavior remain unchanged.
- Did not alter or invent any numeric metrics that weren't already present; preserved author-provided figures only.
- Avoided broader tone rewrites beyond targeted reductions in repetition and removal of AI-like phrasing.

Remaining optional improvements (max 5)
1. Prepare 1–2 alternate hero headlines targeted to BA vs. Pricing/Strategy roles for quick A/B testing.
2. Add explicit `type` definitions to `siteCopy` to make content structure easier to validate with TypeScript.
3. Run a short UX smoke test and capture screenshots of hero/about/projects pages to validate copy density and spacing.
4. Consider a small style guide file (COPY_GUIDELINES.md) listing banned phrases and tone rules to keep future edits consistent.
5. Convert `CONTENT_INVENTORY.md` into a CSV for programmatic audits or linter checks.

Audit run commands (for reproducibility)
```sh
# phrase audit
grep -RInE "Most |People do not|credibility comes|calm|legible|receipts-first|built like a product|signal|system" src || true

# country mentions
grep -RInE "Kenya|India|US" src || true

# mailto check
grep -RIn "mailto:" src || true

# linkedin check
grep -RIn "linkedin" src || true

# education tokens
grep -RInE "PES|Communication Design|MS|MSBA|University of Rochester|Simon" src || true
```
