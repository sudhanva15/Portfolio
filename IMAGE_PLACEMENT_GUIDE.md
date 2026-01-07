# Image Placement Guide

This doc lists every image path the site expects, where to place it, and what the image should contain. Drop files into `public/` using the exact paths below so Next.js can serve them at `/images/...`.

General guidance

- Prefer `.webp` for final assets; keep filenames exactly as listed.
- Project + case study hero images render at 16:9. Aim for ~1600×900 or larger.
- Project galleries render square on small screens and 16:9 on desktop. Aim for ~1600×900; avoid dense UI text.
- The homepage hero visual renders 4:3. Aim for ~1600×1200.
- See `IMAGE_GENERATION_GUIDE.md` for prompt ideas that match the site’s visual style.

Homepage hero

- `public/images/hero/mission-control.webp`
  - Content: A confident, premium "mission control" style visual that reads as analytics/strategy. Can be abstract or a real UI mockup.
  - Aspect: 4:3.

Projects

Invest_AI
- `public/images/projects/invest-ai/hero.webp`
  - Content: Invest_AI landing page overview introducing the workflow.
  - Aspect: 16:9.
- `public/images/projects/invest-ai/dashboard.webp`
  - Content: Side-by-side optimizer dashboards with allocations.
  - Aspect: 16:9 or square-safe crop.
- `public/images/projects/invest-ai/risk-profile.webp`
  - Content: Risk profiling UI with guided questions.
  - Aspect: 16:9 or square-safe crop.
- `public/images/projects/invest-ai/portfolio.webp`
  - Content: Monte Carlo corridor chart or risk-return envelope.
  - Aspect: 16:9 or square-safe crop.
- Optional expanded gallery (revealed via + tile):
  - `public/images/projects/invest-ai/portfolios-comparison.webp` — portfolio comparison table.
  - `public/images/projects/invest-ai/portfolios-run-simulation.webp` — simulation run controls and risk sliders.
  - `public/images/projects/invest-ai/macros-1.webp` — macro indicators dashboard view.
  - `public/images/projects/invest-ai/macros-2.webp` — macro indicators detail view.
  - `public/images/projects/invest-ai/settings.webp` — settings page with beginner mode.

Unified Scraper
- `public/images/projects/unified-scraper/hero.webp`
  - Content: Central data hub with multiple pipelines feeding it.
  - Aspect: 16:9.
- `public/images/projects/unified-scraper/drift-detection.webp`
  - Content: Two wireframe layouts highlighting selector drift/misalignment.
  - Aspect: 16:9 or square-safe crop.
- `public/images/projects/unified-scraper/data-lineage.webp`
  - Content: Node graph showing lineage across source → extractor → cleaner → export.
  - Aspect: 16:9 or square-safe crop.
- `public/images/projects/unified-scraper/retry-engine.webp`
  - Content: Loop/decision diagram for retry paths.
  - Aspect: 16:9 or square-safe crop.

Neurodivulge
- `public/images/projects/neurodivulge/hero.webp`
  - Content: Human silhouette with orbiting UI cards, mixing calm + jitter to signal cognitive friction.
  - Aspect: 16:9.
- `public/images/projects/neurodivulge/archetypes.webp`
  - Content: Archetype clusters with narrative cards.
  - Aspect: 16:9 or square-safe crop.
- `public/images/projects/neurodivulge/opportunity.webp`
  - Content: Opportunity sizing dashboard with TAM and pricing sliders.
  - Aspect: 16:9 or square-safe crop.

Renderpub VR (currently placeholders)
- `public/images/projects/renderpub-vr/hero-placeholder.png`
  - Content: VR content pipeline or editor overview.
  - Aspect: 16:9.
- `public/images/projects/renderpub-vr/telemetry-placeholder.png`
  - Content: Telemetry or analytics panel from VR usage data.
  - Aspect: 16:9 or square-safe crop.
- `public/images/projects/renderpub-vr/brief-system-placeholder.png`
  - Content: Brief system / workflow board for VR content ops.
  - Aspect: 16:9 or square-safe crop.

Case studies

Penpal B2B
- `public/images/case-studies/penpal-b2b/hero.webp`
  - Content: Campus map / network graph with profile icons and engagement flow arrows.
  - Aspect: 16:9.
- `public/images/case-studies/penpal-b2b/secondary.webp`
  - Content: Phased adoption journey diagram (students → universities).
  - Aspect: 16:9.

SVC Retention + Pricing
- `public/images/case-studies/svc-retention-pricing/hero.webp`
  - Content: Retention curves and pricing model comparison panels.
  - Aspect: 16:9.
- `public/images/case-studies/svc-retention-pricing/secondary.webp`
  - Content: Pricing sandbox with discount guardrails and margin scenarios.
  - Aspect: 16:9.

Perry Pricing Analytics
- `public/images/case-studies/perry-pricing-analytics/hero.webp`
  - Content: Factory dashboard with speed dials and KPI panels.
  - Aspect: 16:9.
- `public/images/case-studies/perry-pricing-analytics/secondary.webp`
  - Content: Statistical analysis chart showing speed band variance across workcenters.
  - Aspect: 16:9.
