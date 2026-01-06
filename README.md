# Sudhanva Kashyap — Portfolio

Calm Next.js App Router experience highlighting Sudhanva’s product, strategy, and analytics work. Tailwind CSS and `next-themes` keep light/dark palettes balanced, while structured data in `src/data` drives every card.

## Tech Stack

- Next.js 16 (App Router, TypeScript, `src/` layout)
- Tailwind CSS 3 with class-based dark mode
- next-themes for persistent theme toggling
- Local TypeScript data modules powering reusable components

## Local Development

From the project root:

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at http://localhost:3000 by default.

## Quality Checks

- `npm run lint` – Next.js ESLint config
- `npm run build` – Type-check + Turbopack production build

## Content Entry

Structured data lives in:

- `src/data/projects.ts` – analytics/product builds
- `src/data/case-studies.ts` – strategy + analytics narratives
- `src/data/skills.ts` – grouped skill sets
- `src/data/how-i-work.ts` – operating principles

Edit or extend those files to add new work without touching layout logic.

## Deploying via GitHub + Vercel

This project is designed to deploy from a GitHub repository through Vercel. A remote hasn’t been configured yet, so start by creating one.

### 1. Create a GitHub repo and add the remote

1. Create a repository on GitHub (for example, `https://github.com/<USERNAME>/<REPO_NAME>`).
2. From this project folder, add the remote and (optionally) rename your default branch:

```bash
git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
git branch -M main   # optional if you prefer "main" as the default branch
```

### 2. Push your code

```bash
git status
git add .
git commit -m "Finalize portfolio for deployment"
git push -u origin main
```

### 3. Connect the repo to Vercel

1. Visit https://vercel.com/import and choose **Import Git Repository**.
2. Select the portfolio repo you just pushed and continue with GitHub if prompted.
3. Vercel will auto-detect Next.js, run `npm run build`, and serve from `.next`.
4. Click **Deploy**. Each push to `main` will trigger a new deployment automatically.

## Deploying with the Vercel CLI (optional)

Prefer shipping directly from the command line? Use the Vercel CLI:

```bash
# Install once
npm install -g vercel

# Verify locally
npm run lint
npm run build

# Create a preview deployment
vercel

# Promote to production
vercel --prod
```

`vercel` guides you through linking or selecting the hosted project and returns preview/production URLs once the deploy completes.
