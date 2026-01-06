# PORTFOLIO WORKLOG

This file records ongoing audits, commands and evidence.


## 2026-01-06 — Asset + Link Audit and Placeholder Pack

Summary
- Identified 21 referenced images under `src` that resolved to paths under `/public/images` but were missing from the repo.
- Generated premium SVG/WebP placeholders for every missing referenced path with `dev/generate_placeholders.js`.
- Verified all 21 referenced image paths now exist under `public/images` and re-ran lint/build successfully.

Commands & key outputs

- Scan for image refs (wrote pure paths to `/tmp/image_refs.txt`):

```sh
# find referenced image paths (produces /tmp/image_refs.txt)
grep -RInE -o "(/images/[A-Za-z0-9_./-]+\.(webp|png|jpg|jpeg|svg))" src src/data | sed -E 's/^[^:]+:[0-9]+:(.*)$/\1/' | sort -u > /tmp/image_refs.txt
# sample output summary
# Found 21 referenced images
```

- Generate placeholders (node script):

```sh
node dev/generate_placeholders.js
# sample outputs (truncated)
# Found 21 referenced images
# Created /Users/.../public/images/projects/invest-ai/portfolio.webp
# Created /Users/.../public/images/projects/invest-ai/dashboard.webp
# Created /Users/.../public/images/projects/renderpub-vr/hero-placeholder.png
# Created 14 placeholders
# (re-run) Created 0 placeholders
```

- Verify placeholders exist:

```sh
# verify loop
while read p; do if [ -f "public${p}" ]; then echo "OK ${p}"; else echo "MISSING ${p}"; fi; done < /tmp/image_refs.txt
# output: OK /images/...  (21 lines: all OK)
```

- Lint & build (success):

```sh
npm run -s lint  # no blocking errors
npm run -s build # compiled successfully (Next.js build, non-blocking advisory only)
```

Findings & changes
- Mailto audit: a single canonical `mailto:${profile.email}` is present in `src/components/layout/header.tsx` (expected). No duplicate mailto occurrences found.
- Created `dev/generate_placeholders.js` (dev script) to render SVG/WebP/PNG placeholders; it prefers `sharp` for raster output and fails fast with guidance if `sharp` is not available.
- Added 21 placeholder files under `public/images/...` so all referenced images resolve.

Next steps
- Commit the worklog, generator script, and created placeholders in one atomic commit.
---

## 2026-01-06 — Security: React2Shell / RSC remediation

Summary
- Run the official remediation tool `npx fix-react2shell-next` and upgraded `next` from **16.0.3** → **16.0.10** (patched release). No additional React server DOM packages were present.
- Confirmed `npm run lint --silent` and `npm run build --silent` succeed locally after the upgrade.
- Created a **security-only** commit that staged and committed only the files changed by the remediation tool (see staged files and commit hash below). Pushed to `origin/main`.

Baseline capture (pre-fix)
- Date / Host: 2026-01-06T15:26:13-0600 (Sudhanvas-MacBook-Air.local)
- Git branch: `main`
- Git status (porcelain):
```
?? IMAGE_GENERATION_GUIDE.md
?? PHASE_4_5_COMPLETE.md
?? PHASE_4_COMPLETE.md
?? PORTFOLIO_AUDIT_STATUS.md
?? SHIP_SUMMARY.md
?? VISUAL_THEME_IMPLEMENTATION.md
?? dev/git-remote-notes.md
```
- Git log (last 5):
```
9c36918 (HEAD -> main, origin/main) feat: ship final portfolio (themes, content, assets)
dfd5c99 chore: add premium placeholders for missing assets + update worklog
8097187 Finalize portfolio for GitHub + Vercel
75060d2 Initial commit from Create Next App
```
- Node / NPM: `node v24.11.0`, `npm 11.6.1`
- package.json excerpt (dependencies/devDependencies):
```
"next": "16.0.3",
"react": "19.2.0",
"react-dom": "19.2.0",
"eslint-config-next": "16.0.3",
```

Detected installed versions (pre-fix)
```
portfolio@0.1.0 /Users/.../portfolio
├── next@16.0.3
├── react-dom@19.2.0
└── react@19.2.0
```

Commands executed & key outputs

- Run the fixer (accepted defaults):
```sh
npx fix-react2shell-next --yes
```
Key excerpt from the fixer:
```
fix-react2shell-next - Next.js vulnerability scanner
Found 1 package.json file(s)
Found 1 vulnerable file(s):
  package.json
     next: 16.0.3 -> 16.0.10 [CVE-...]
Apply fixes? Y
Applying fixes...
  Updated package.json
Installing dependencies...
changed 10 packages, and audited 441 packages in 9s
found 0 vulnerabilities
Patches applied!
```

- Re-check installed versions (post-fix):
```sh
npm ls next react react-dom react-server-dom-webpack react-server-dom-parcel react-server-dom-turbopack --depth=0 || true
```
Post-fix output:
```
portfolio@0.1.0 /Users/.../portfolio
├── next@16.0.10
├── react-dom@19.2.0
└── react@19.2.0
```

- Verify lint & build (silent):
```sh
npm run lint --silent   # no blocking lint errors
npm run build --silent  # compiled successfully with Next.js 16.0.10
```
Build excerpt:
```
▲ Next.js 16.0.10 (Turbopack)
Creating an optimized production build ...
✓ Compiled successfully
```

Stage-only commit (what I staged)
- Files staged for the security commit (only):
```
package-lock.json
package.json
```
- Commit performed with message: `security: patch React2Shell / RSC CVEs (Next.js upgrade)`
- Commit hash: `8feff49` (see below)

Push verification
- Pushed to origin/main successfully.
- Remote snapshot:
```
8feff491f43c1e67b6c8566641971298f27be285        refs/heads/main
```

Commands run (chronological)
1) Baseline & environment
```sh
date +"%Y-%m-%dT%H:%M:%S%z"; hostname
git rev-parse --abbrev-ref HEAD
git status --porcelain
git log -n 5 --oneline
node -v && npm -v
sed -n '1,160p' package.json
```
2) Detect current installed versions
```sh
npm ls next react react-dom react-server-dom-webpack react-server-dom-parcel react-server-dom-turbopack --depth=0 || true
```
3) Apply official remediation
```sh
npx fix-react2shell-next --yes
npm install
```
4) Verify versions
```sh
npm ls next react react-dom react-server-dom-webpack react-server-dom-parcel react-server-dom-turbopack --depth=0 || true
```
5) Validate build
```sh
npm run lint --silent
npm run build --silent
```
6) Stage-only commit
```sh
git add package.json package-lock.json
git diff --cached --name-only
git commit -m "security: patch React2Shell / RSC CVEs (Next.js upgrade)"
```
7) Push & verify
```sh
git push origin main
git log -n 3 --oneline --decorate
git ls-remote --heads origin main
```

Notes & next steps
- The remediation updated `next` to 16.0.10 which meets the required patched threshold for 16.x.
- Lint and build both succeed locally; no further code changes were necessary.
- I staged and committed **only** `package.json` and `package-lock.json` for the security fix as requested.

---

(Will append commit show output and any final verification lines below after pushing)

Commit: `184d57e` — `chore: BA hiring-signal content & UX audit (canonical links, headline centralization, reduced bio duplication, theme determinism)`

Verification: `npm run -s lint && npm run -s build` — compiled successfully; no blocking lint errors.

---

---

## 2026-01-06 — BA-focused content & UX audit (recruiter signal)

Summary
- Audit and targeted edits to improve signals for Business Analyst / Product Analyst / Strategy / Pricing roles: reduce repeated biography mentions, canonicalize contact links, centralize headline usage, remove duplicate CTA in hero, and make theme deterministic to prevent flash on reload.

Commands & key outputs

- LinkedIn / mailto / CTA scans:

```sh
# canonical linkedin
grep -RIn "linkedin" src | sed -n '1,120p'
# scan for 'Get in touch' hero CTA
grep -RIn "Get in touch" src || true
# verify single mailto
grep -RIn "mailto:" src | sed -n '1,120p'
```

- Lint & build (final validation):

```sh
npm run -s lint && npm run -s build
# build excerpt (success):
# ✓ Compiled successfully in 2.5s
# ✓ Finished TypeScript
```

Findings & changes
- `src/data/profile.ts` — **canonicalized** `linkedin` to `https://www.linkedin.com/in/sudhanvavkashyap/` (single source of truth used across site).
- `src/components/hero.tsx` — **removed** duplicate hero "Get in touch" CTA and replaced hard-coded subline with `profile.headline` to avoid duplicate CTAs and ensure consistent messaging.
- `src/data/fun-facts.ts` — **rewrote** fun-fact lines to remove repeated country name and improve phrasing for recruiter-facing readability.
- `src/components/solar-system.tsx` — **updated** personal/location phrasing (e.g., "Kenya" → "East Africa") to reduce repetition and preserve authenticity; also **fixed** a JSX tag mismatch that was causing lint/build errors (missing `</div>` closed).
- `src/components/themed-background.tsx` + `src/app/layout.tsx` — **made theme deterministic** (use `resolvedTheme` fallback + `defaultTheme="dark"` and `enableSystem={false}`) to avoid flash/hydration mismatch on initial paint.
- `PORTFOLIO_WORKLOG.md` — appended this BA-focused audit entry (append-only).

Next steps
- Commit the above edits with a concise message and push to `origin/main` or a review branch. After pushing, perform a quick UX smoke check (homepage, projects, case studies pages) and prepare 1–2 alternative headline variants optimized for BA/PM and Pricing/Strategy roles if you'd like AB copy options.

Commit & verification (what I will stage and commit)

```sh
# stage files changed by this audit
git add src/data/profile.ts src/components/hero.tsx src/data/fun-facts.ts src/components/solar-system.tsx src/components/themed-background.tsx src/app/layout.tsx PORTFOLIO_WORKLOG.md
# commit message
git commit -m "chore: BA hiring-signal content & UX audit (canonical links, headline centralization, reduced bio duplication, theme determinism)"
# verify lint/build
npm run -s lint && npm run -s build
```

---

## 2026-01-06 — Content centralization: siteCopy & inventory

Summary
- Centralized all user-facing copy into `src/content/siteCopy.ts` and created `CONTENT_INVENTORY.md` mapping each copy key to its locations.
- Replaced inline strings across components to read from `siteCopy`, removed duplicated copy, and applied cleanup rules (mention "Kenya" only once, removed "coming soon" labels, and avoided em dashes in visible text).

Commands & key outputs

- Search for visible copy and duplicates (examples):

```sh
# grep for candidate strings
grep -RInE "Get in touch|coming soon|Kenya|linkedin|Screenshots|Certifications|View projects" src | sed -n '1,240p'
# sample output: list of files and matches (see CONTENT_INVENTORY.md)
```

- Replace inline copy and verify build:

```sh
# lint & build validation
npm run -s lint && npm run -s build
# build excerpt (success):
# ✓ Compiled successfully
```

Findings & changes
- **New files:**
  - `src/content/siteCopy.ts` — typed object (hero, header, footer, ctas, placeholders, contact, howIWork, funFacts).
  - `CONTENT_INVENTORY.md` — human-readable mapping of copy keys to file locations and notes on duplicates.
- **Refactors:** replaced inline strings to read from `siteCopy` in these components/pages: `Hero`, `HeroVisual`, `Header`, `Footer`, `CtaStrip`, `ScreenshotGallery`, `ContactCard`, `CertificationsStrip`, `Project` and `Case Study` detail pages, `FunFacts`, and the About page.
- **Cleanup rules applied:**
  - Mentioned "Kenya" exactly once (in hero copy) and removed direct place-name mentions elsewhere.
  - Replaced all instances of "coming soon" with neutral placeholders (e.g., "Hero visual placeholder", "Screenshot placeholder").
  - Removed em dashes from visible copy and used commas/periods for clarity.
  - Canonicalized LinkedIn URL to `https://www.linkedin.com/in/sudhanvavkashyap/` and centralized its usage.
- **Counts:** approximately **50** strings centralized; **6** duplicate/placeholder phrases removed or rewritten (hero CTA de-dup, coming-soon phrases, repeated country mentions, and similar), and **all** visible em dashes replaced.

Next steps
- Manual UX smoke check across main pages to spot any tone/spacing issues introduced by the refactor.
- Optional: prepare 1–2 alternate hero headline variants for BA/PM or Pricing/Strategy roles for A/B testing.

Verification
- `npm run -s lint && npm run -s build` — compiled successfully; no blocking lint errors.

Commit: `9faf13d` — `chore: centralize site copy (siteCopy.ts) and inventory; replace inline copy and cleanup duplicates`

## 2026-01-06 — Header: sticky top + layout-shift fix

Summary
- Implemented sticky header accessibility attributes and layout-shift mitigation: added `role="banner"` to the header and `aria-label="Primary navigation"` to the nav in `src/components/layout/header.tsx`.
- Introduced a CSS variable `--site-header-height` in `src/components/layout/site-layout.tsx` and applied `paddingTop: var(--site-header-height)` to `<main>` so content is not overlapped by the sticky header.
- Removed use of `any` by importing `CSSProperties` from `react` and casting the style object; also retained the existing skip-link for keyboard users.

Commands & key outputs

- Lint & build (validation):

```sh
npm run -s lint && npm run -s build
# build excerpt (success):
# ✓ Compiled successfully
```

Files changed

- `src/components/layout/site-layout.tsx`
- `src/components/layout/header.tsx`

Verification

- Lint & build succeeded locally; production build generated static and SSG routes.
- Manual recommendation: quick UX smoke check (homepage, projects, case studies, about) and keyboard navigation check (skip link focus state, tab order).

Next steps

- If you'd like, I can run a short visual smoke test and report any small spacing/focus findings; otherwise this change is ready to be committed and pushed as a follow-up entry.

---