# Copilot Instructions – Sudhanva Portfolio

## 1. Project Context

You are helping build a personal portfolio site for **Sudhanva Kashyap**.

Goals:

- Showcase:
  - MS **Business Analytics (STEM)** background
  - Strong **analytics + product + strategy** skills
  - Clear, tasteful **design sense** (without over-designing)
- Help Sudhanva get **F1 OPT-friendly product/analytics roles** in the US.
- Demonstrate:
  - Real projects (Invest_AI, Unified Scraper, Neurodivulge, Renderpub VR)
  - Strategy & analytics case studies (PenPal, SVC, pricing, etc.)
  - Clear narrative about **how he works**.

The site must feel:

> calm • professional • intelligent • modern

Not flashy, not “Dribbble for the sake of Dribbble.”

---

## 2. Tech Stack (Fixed Decisions)

Always assume:

- **Framework:** Next.js with the **App Router** (`/src/app`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Theming:** `next-themes` with `darkMode: "class"` in `tailwind.config`
- **Content:** Static, local TypeScript data files (no CMS, no backend)
- **Deployment:** Vercel (but you don’t need deployment code)

If you’re unsure between:
- App Router vs Pages → **App Router**
- JavaScript vs TypeScript → **TypeScript**
- New library vs built-in Next.js/Tailwind → **built-in**, unless a comment explicitly asks for a lib.

---

## 3. Theming (Light + Dark Mode)

Dark mode must be first-class, not an afterthought.

Root settings (already or to be used):

- Tailwind: `darkMode: "class"`
- `<html>` / `<body>` should end up with something like:

  ```tsx
  <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
  ```

For surfaces / components, always pair classes like:
- Backgrounds:
  - `bg-white dark:bg-gray-900`
  - `bg-gray-50 dark:bg-gray-900`
- Borders:
  - `border border-gray-200 dark:border-gray-800`
- Text:
  - `text-gray-900 dark:text-gray-50` for main
  - `text-gray-600 dark:text-gray-300` for secondary
- Accents (buttons, links, tags):
  - `text-blue-600 dark:text-blue-400`
  - `bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600`

Never hardcode only light colors (like `text-black`) without a dark equivalent.

---

## 4. Design Principles

The site should:

- Use generous white space, clear grids, and simple layouts.
- Avoid:
  - Gradients
  - Glassmorphism
  - Overly playful animations
  - Heavy shadows
- Use 1–2 column layouts for most sections.
- Constrain width with `className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0"`.

**Cards**

Default card style:

```tsx
className="
  rounded-2xl
  border border-gray-200 dark:border-gray-800
  bg-white dark:bg-gray-900
  p-6
  shadow-sm
  hover:shadow-md
  transition-shadow
"
```

Keep hover effects subtle: small shadow change and maybe a tiny `-translate-y-0.5` if needed.

**Typography**

- Use a modern sans (e.g. Inter) if already wired; otherwise default.
- Hero title: `text-4xl md:text-5xl font-semibold tracking-tight`
- Section titles: `text-2xl md:text-3xl font-semibold`
- Body: `text-base leading-relaxed text-gray-700 dark:text-gray-300`
- Captions / meta: `text-sm text-gray-500 dark:text-gray-400`

Keep text blocks around 60–70 characters wide using `max-w-prose` where appropriate.

---

## 5. Architecture & Routing

Use App Router structure inside `src/app`:

- `/` → `src/app/page.tsx` (Home)
- `/projects` → `src/app/projects/page.tsx`
- `/projects/[slug]` → `src/app/projects/[slug]/page.tsx`
- `/case-studies` → `src/app/case-studies/page.tsx`
- `/case-studies/[slug]` → `src/app/case-studies/[slug]/page.tsx`
- `/about` → `src/app/about/page.tsx` (optional)
- `/resume` (optional) or direct link to `/resume.pdf` in `public`

Do not add backend routes or APIs unless explicitly requested.

---

## 6. Layout & Core Components

Assume or create:

- `src/components/Layout.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/Section.tsx`
- `src/components/Hero.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/CaseStudyCard.tsx`
- `src/components/SkillsGrid.tsx`
- `src/components/HowIWork.tsx`
- `src/components/ContactCard.tsx`
- Theme-related components:
  - `src/components/ThemeProvider.tsx`
  - `src/components/ThemeToggle.tsx`

**Layout**

- Wrap all pages in `<Layout>` in `RootLayout` (`src/app/layout.tsx`).
- `<Layout>` should render:
  - `<Header>` with:
    - Name/logo: “Sudhanva Kashyap”
    - Nav: Home, Projects, Case Studies, About
    - A light/dark theme toggle using `useTheme()` from `next-themes`.
  - `<main>` with `mx-auto max-w-5xl px-4 sm:px-6 lg:px-0 py-10`.
  - `<Footer>` with email + LinkedIn + maybe a tiny note.

**Hero (Home)**

Content:

- Title:
  > Hi, I’m Sudhanva — a design-minded analytics strategist who builds tools, insights, and experiences that help companies make better product and business decisions.
- Sub-lines:
  - “MSBA, Simon Business School”
  - “Product · Strategy · Analytics”
- Buttons:
  - Primary: “View Projects” → `/projects`
  - Secondary: “Download Resume” → `/resume.pdf` in `/public`

Layout:

- Single column
- `py-20`
- `mx-auto max-w-3xl`
- Centered text on mobile, left-aligned on desktop is fine.

---

## 7. Content Structure (Home Page)

Home page sections (in this order):

1. **Hero**
2. **Featured Projects**
   - Top 3–4 projects:
     - Invest_AI (flagship)
     - Unified Scraper
     - Neurodivulge
     - Renderpub VR Case
   - Use `<ProjectCard>` and data from `src/data/projects.ts`.
3. **Strategy & Analytics Case Studies**
   - e.g. PenPal B2B, SVC retention/pricing, pricing analytics work.
   - Use `<CaseStudyCard>` and `src/data/caseStudies.ts`.
4. **Skills Section**
   - Grouped into 4 columns or blocks:
     - Product
     - Analytics
     - Technical Tools
     - Design
   - Data from `src/data/skills.ts`.
5. **“How I Work”**
   - A short paragraph based on:
     > I build by combining analytical structure with user-centered creativity. My background in VR, behavior design, and analytics allows me to work across strategy, data, and product. I operate well in fast iterations and high-cognitive environments, and ADHD has shaped my ability to hyperfocus and break down problems from first principles.
   - Plus ~3 bullet points like:
     - “Structure first, then creativity”
     - “Fast feedback loops”
     - “Clear written communication”
6. **Contact**
   - A simple card with:
     - Email (clickable `mailto:`)
     - LinkedIn profile link
     - Resume link

Each of these sections should be wrapped in a reusable `<Section>` component.

---

## 8. Data-Driven Content (Analytics-Friendly)

All content should live in `src/data` and be imported into pages/components.

Suggested files:

- `src/data/profile.ts`
- `src/data/projects.ts`
- `src/data/caseStudies.ts`
- `src/data/skills.ts`

**Projects data shape (example)**

```ts
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeframe: string;
  tags: string[];
  heroImage?: string;
  gallery?: string[];
  problem: string;
  solution: string;
  impact: string[];
  impactMetrics?: {
    label: string;
    value: string;
  }[];
  architecture?: string;
  techStack: string[];
  links?: {
    type: "github" | "demo" | "video" | "notion";
    url: string;
    label?: string;
  }[];
};
```

When in doubt, err toward including at least one quantitative or analytic detail in `impact` or `impactMetrics`.

---

## 9. Analytics Emphasis

For each project, prefer bullet points like:

- “Built a risk-adjusted allocation engine across 67 ETFs using HRP, Max Sharpe, and Min-Var optimizers.”
- “Used funnel analysis to identify drop-off points and improved user engagement by ~30%.”
- “Reduced manual steps for hiring trend research by building a scraper-driven workflow.”

You do not need to implement complex charts yet, but layout and data structures should make it easy to add:

- simple “Key Metrics” summaries
- small stats blocks (`impactMetrics`).

---

## 10. Coding Style & Quality

- Use functional React components with TypeScript.
- Define prop types with `type` or `interface`.
- Prefer composable, small components over giant pages.
- Always use semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<h1>`…`<h3>`, etc.
- Always include alt text for images.
- Handle dark mode on all backgrounds, borders, and text.

Keep Tailwind class lists:

- Logical order (layout → spacing → colors → borders → typography → effects)
- Reasonably short; break into multiple lines if needed.

---

## 11. How to Handle Typical Copilot Questions / Behaviors

If you (Copilot) are “unsure” or want to ask:

1. “Should I use App Router or Pages?”
   → Use App Router. All pages go under `src/app`.
2. “Should I use JavaScript or TypeScript?”
   → Use TypeScript.
3. “Should I add a new UI library (Chakra, MUI, shadcn, etc.)?”
   → No, unless there is a very explicit comment asking to install a specific library.
4. “Should I add a backend, API routes, authentication, or database?”
   → No, this portfolio is static and content-driven. Use local `src/data/*.ts` files.
5. “Should I create or edit configuration files (tsconfig, next.config, tailwind.config)?”
   → Only do small, necessary edits related to dark mode settings, adding `src` paths to content, or adding fonts to Tailwind’s theme. Do not introduce advanced Next.js features unless asked.
6. “Should I run npm scripts or terminal commands?”
   → Do not generate or assume terminal execution. You may show example commands in comments, but don’t rely on them being auto-run.
7. “Can I create tests?”
   → You may add simple unit tests if a component has nontrivial logic, but tests are optional and should not block development.
8. “Should I refactor everything into a new structure?”
   → Avoid large, breaking refactors. Prefer incremental improvements that respect existing architecture unless a comment explicitly asks for a refactor.
9. “Should I over-stylize with animations or complex visuals?”
   → No. Use subtle, short-duration transitions and keep visuals calm.

---

## 12. Summary for Copilot

When generating code:

- Respect light + dark mode in every component.
- Use App Router, TypeScript, Tailwind.
- Keep design calm, balanced, and modern, highlighting Sudhanva’s design taste without overdoing it.
- Organize content via `src/data/*.ts` and render it through reusable components (`Hero`, `ProjectCard`, `CaseStudyCard`, `SkillsGrid`, etc.).
- Surface analytics and metrics wherever meaningful.
- Favor clear, semantic, accessible HTML with minimal, tasteful motion.

If in doubt, choose:

- simpler layout over complex
- static data over new dependencies
- more structure and clarity over visual gimmicks.

---

You can now:

- Save this as `/.github/copilot-instructions.md`, **or**
- Paste it as a big comment in `src/app/layout.tsx` and `src/components/Layout.tsx`.

Once this is in place, Copilot will have a very clear “brain” to follow.
