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
