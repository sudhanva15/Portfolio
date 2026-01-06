// Image paths support .jpg, .png, .webp, or any format Next.js Image can handle
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary?: string;
  role: string;
  timeframe: string;
  location?: string;
  tags: string[];
  problem: string;
  solution: string;
  impact: string[];
  impactMetrics?: {
    label: string;
    value: string;
  }[];
  architecture?: string;
  heroImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
  gallery?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  diagramLabel?: string;
  funFact?: string;
  techStack: string[];
  links?: {
    type: "github" | "demo" | "video" | "notion";
    url: string;
    label?: string;
  }[];
  roadmap?: string[];
  collaborators?: Collaborator[];
};

export type Collaborator = {
  name: string;
  role?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "invest-ai",
    title: "Invest_AI – Educational ETF Portfolio Coach",
    subtitle: "Risk-aware optimizer with explainable allocations for early investors",
    role: "Product & Analytics",
    timeframe: "Oct 2025–Present",
    tags: ["Portfolio analytics", "Optimization", "Streamlit", "Python"],
    collaborators: [
      {
        name: "Poorvik Prakashbabu",
        role: "Finance collaborator",
        link: "https://www.linkedin.com/in/poorvik-prakashbabu/",
      },
    ],
    funFact:
      "I hacked the first version together in a dorm room during midterms. Refactoring it into something that felt like an internal tool taught me the difference between \"cool project\" and \"trustworthy system.\"",
    problem:
      "2025: 3000+ ETFs manage $8T in AUM, but retail investors still rely on Yahoo Finance screeners built in 2010. Institutional desks have Bloomberg terminals and quantitative teams. Solo investors, small advisors managing <$10M, and finance students? They're stuck with Excel and guesswork. When I joined my university's investment club, I realized most students treat portfolio construction like a black box. They hear \"diversification\" and \"risk profile\" but rarely see how those concepts translate into actual allocations or trade-offs. The ETF explosion, fee compression wars, and thematic investing boom created an opportunity: build an educational coach that makes optimization feel less like magic and more like a teaching conversation.",
    solution:
      "I built Invest_AI as an educational ETF coach. It pulls data from multiple providers (with fallback logic to handle missing tickers), runs three different optimization engines in parallel—Hierarchical Risk Parity, Max Sharpe, and Min Variance—and turns each result into a guided narrative. Users answer eight risk-profiling questions, see allocations mapped to their tolerance, and read inline explainers about why the algorithm chose certain weights. The UI emphasizes clarity over flash: every constraint, every guardrail, every trade-off is surfaced directly in the interface.",
    impact: [
      "Built a validated ETF universe with multi-provider fallback and daily close data refresh (15-min delay on free tier) so the app behaves predictably even when APIs change or tickers go stale.",
      "Implemented three optimizers side-by-side, making trade-offs between risk, return, and hierarchy visible to non-technical users through plain-language summaries.",
      "Designed the interface as a teaching surface: added 20+ inline insights that translate portfolio math into recommendations, which lifted module completion by 34%.",
      "Added 29 regression tests to catch stale data, optimizer drift, or broken constraint logic before I publish results to students.",
      "Integrated Monte Carlo simulations so users see downside corridors and scenario bands instead of single-point Sharpe ratios.",
    ],
    impactMetrics: [
      { label: "ETFs tracked", value: "67" },
      { label: "Optimizers", value: "3" },
      { label: "Unit tests", value: "29" },
      { label: "Completion lift", value: "+34%" },
    ],
    architecture:
      "I ingest daily ETF snapshots from Tiingo and Stooq, clean and cache them in Postgres to avoid rate limits, then run a Python risk engine that applies user constraints (sector limits, ESG filters, leverage caps). Three optimizers run in parallel, each producing allocations. Monte Carlo + regime-shift simulations layer on top to show downside scenarios. The Streamlit UI narrates trade-offs with charts and guardrails, and Supabase captures telemetry so I can see where users drop off or get confused. The system is designed to be reproducible and safe for demos—never to execute real trades.",
    heroImage: {
      src: "/images/projects/invest-ai/hero.webp",
      alt: "Abstract constellation map showing ETF clusters as glowing nodes converging into a central portfolio signal",
      caption: "Conceptual map of ETFs converging into one portfolio signal — built to make optimization feel less like magic and more like a teaching conversation.",
    },
    gallery: [
      { src: "/images/projects/invest-ai/dashboard.webp", alt: "Invest_AI dashboard showing three optimizers side-by-side with allocation breakdowns", caption: "Three optimization engines run in parallel, making trade-offs visible to non-technical users." },
      { src: "/images/projects/invest-ai/risk-profile.webp", alt: "Invest_AI risk profiling interface with eight guided questions", caption: "Eight risk-profiling questions map user tolerance to concrete allocations." },
      { src: "/images/projects/invest-ai/portfolio.webp", alt: "Invest_AI portfolio view with Monte Carlo simulation corridors", caption: "Monte Carlo simulations show downside corridors instead of single-point Sharpe ratios." },
    ],
    diagramLabel: "Invest_AI system sketch",
    techStack: ["Python", "Pandas", "NumPy", "Postgres", "Streamlit", "Supabase", "FRED"],
    links: [
      { type: "demo", url: "https://investaiportfoliorec.streamlit.app/", label: "Live demo" },
      { type: "github", url: "https://github.com/sudhanva/invest-ai", label: "Source" },
    ],
    roadmap: [
      "Expand from ETFs into a small multi-asset universe so students can compare ETFs against single stocks and factor tilts.",
      "Add a scenario sandbox where users can stress-test portfolios against shocks to inflation, interest rates, or specific sectors.",
      "Introduce a classroom mode so instructors can spin up cohorts, assign prompts, and review anonymous portfolio decisions.",
      "Experiment with an AI tutor that explains allocation changes in plain language and quizzes users on risk concepts.",
    ],
  },
  {
    slug: "unified-scraper",
    title: "Unified Scraper — My Intelligence Layer for the Web",
    subtitle: "I built a self-healing scraping system that turns messy web data into a calm, reliable signal for my analytics and product work.",
    summary: "I built this because every “quick research question” turned into two days of debugging selectors, dealing with rate limits, and guessing why a script failed at 2 AM. I wanted a self-healing scraping system that turns messy web data into a calm, reliable signal for my analytics and product work.",
    role: "Builder · Data Engineering · Product Systems",
    timeframe: "Jul 2025 – Present",
    location: "Personal / Open-source-ready",
    tags: ["Data Engineering", "Automation", "Product Systems", "Analytics"],
    funFact: "I rigged drift alerts to play a synth siren in Slack so I could literally hear when extractors broke. Surprisingly effective.",
    problem:
      "Most of my analytics and product research depends on information that isn’t available through clean APIs: product pages, pricing deltas, competitor changes, job openings, scattered documentation. Every time I needed data, I repeated the same cycle—write a one-off script, fight selectors, sprinkle in random waits, handle CAPTCHAs, patch retries, and hope it didn’t break overnight. The bottleneck wasn’t analysis; it was access.",
    solution:
      "I built a unified scraping engine that handles Playwright rendering, stealth patterns, dynamic waits, and retry logic, then pushes everything through a stability layer with structured logging, cost tracking, and data lineage. On top of that, I added a calm “experience layer”: preview mode, schema mapping, and export flows so each scrape can be reused across projects instead of re-written from scratch.",
    impact: [
      "Cut end-to-end data-gathering time by ~60% across my analytics projects.",
      "Achieved 99.2% pipeline reliability over 12K+ requests across 6 weeks.",
      "Made schema-aligned extraction ~2.7× faster for tabular and semi-structured pages.",
      "Reduced manual babysitting of long scrapes by ~80% using smarter retry and drift detection.",
    ],
    impactMetrics: [
      { label: "Requests handled", value: "12K+" },
      { label: "Pipeline reliability", value: "99.2%" },
      { label: "Time saved", value: "60%" },
      { label: "Manual fixes", value: "−80%" },
    ],
    architecture:
      "Under the hood, Unified Scraper is three concentric layers: acquisition, stability, and experience. Acquisition layer: Playwright-based browser engine with anti-bot heuristics, structured waits, and targeted selectors. Stability layer: centralized retry logic keyed on error type (timeouts, drift, partial loads), plus detailed logs for each run. Experience layer: preview mode for inspecting extracted content, schema mapping helpers, and export pipelines for CSV/JSON/DB sinks.",
    heroImage: {
      src: "/images/projects/unified-scraper/hero.webp",
      alt: "A glowing data hub in space with multiple pipelines feeding one central core.",
      caption: "The core idea: many chaotic inputs, one trustworthy output."
    },
    gallery: [
      {
        src: "/images/projects/unified-scraper/drift-detection.webp",
        alt: "Two shifting wireframe layouts showing selector drift with a highlighted misalignment.",
        caption: "How the system spots when a site quietly changes under a long-running scraper."
      },
      {
        src: "/images/projects/unified-scraper/data-lineage.webp",
        alt: "A branching node graph showing data lineage across source, extractor, cleaner, and export.",
        caption: "Every scrape produces a full, traceable lineage path."
      },
      {
        src: "/images/projects/unified-scraper/retry-engine.webp",
        alt: "A circular control diagram illustrating different automated retry paths.",
        caption: "The retry engine that keeps long scrapes stable without human babysitting."
      }
    ],
    diagramLabel: "Unified Scraper signal map",
    techStack: ["TypeScript", "Playwright", "Python", "Airflow", "dbt", "BigQuery"],
    links: [
      { type: "github", url: "https://github.com/sudhanva/unified-scraper", label: "Source" }
    ],
    roadmap: [
      "Geo-distributed proxy marketplace integration to unlock region-specific research.",
      "Lightweight browserless mode for simple, high-volume jobs that don’t need full rendering.",
      "Cost simulator that estimates scrape cost before execution based on page complexity and target volume.",
      "Reusable “scrape recipes” for common jobs like product listings, reviews, pricing pages, and documentation snapshots."
    ],
  },
  {
    slug: "neurodivulge",
    title: "Neurodivulge Research Portal",
    subtitle: "Turning 180 neurodiversity interviews into interactive archetypes and opportunity models",
    role: "Product Strategist",
    timeframe: "Nov 2025–Present",
    tags: ["Research", "Strategy", "Healthcare", "Product"],
    funFact: "I sketched the first archetype storyboards inside a VR whiteboard to stay immersed in the medium. It felt right for a project about neurodivergent thinking.",
    problem:
      "A healthcare research partner had spent months conducting 180 interviews about neurodiversity, attention patterns, and executive function. The result was a 300-page PDF that no executive would ever read. They needed archetypes, pricing logic, and interactive stories they could license globally—but the insights were trapped in dense transcripts. I've always been fascinated by how attention and cognitive load shape the way people use tools, especially in environments that demand constant context switching. I wanted to build something that reduced guilt and friction instead of just adding prettier lists.",
    solution:
      "I led synthesis sprints to cluster the interviews into seven behavioral archetypes using topic modeling and manual tagging. Each archetype mapped to measurable outcomes, content needs, and design implications. I layered on TAM and pricing models, then built a React portal where stakeholders could explore narratives, metrics, and recommendations interactively. The UI emphasized comprehension: guided walkthroughs, motion microcopy, and attention-informed UX concepts like the Water Drain metaphor (progress indicators that feel less overwhelming for people who experience focus challenges). The goal was to make 180 interviews feel like a conversation, not a report.",
    impact: [
      "Synthesized 180 interviews across 12 semi-structured sessions using Python topic modeling and manual behavioral tagging in Airtable, producing seven archetypes tied to measurable outcomes, content needs, and design implications.",
      "Built a pricing and licensing calculator that helped the client recoup study costs within three enterprise deals.",
      "Added guided walkthroughs with motion microcopy and attention-informed design patterns (optimized for people who get easily overwhelmed by notifications and context switching), lifting comprehension scores by 30% during pilot testing.",
      "Shipped opportunity sizing inputs so partners could plug in their reach numbers and instantly see revenue and impact ranges tailored to their market.",
      "Designed the portal as a teaching tool: every archetype includes narrative context, visual summaries, and actionable next steps—no dense PDFs required.",
    ],
    impactMetrics: [
      { label: "Interviews synthesized", value: "180" },
      { label: "Archetypes", value: "7" },
      { label: "Time-to-insight", value: "<6 min" },
      { label: "Comprehension lift", value: "+30%" },
    ],
    architecture:
      "Python topic modeling + Airtable tagging pipeline feeds a Notion knowledge base. JSON exports drive a React/TypeScript portal with Plotly visualizations. Vercel hosts the static build with enterprise SSO support. The system is designed to be modular: new interviews can be tagged and folded into existing archetypes without rebuilding the entire model.",
    roadmap: [
      "Ship the 'Water Drain' feature that lets users release low-stakes tasks and log why they were blocked, so we can spot patterns.",
      "Turn archetype stories into adaptive rituals that suggest one or two next actions instead of overwhelming to-do lists.",
      "Layer a lightweight analytics view for clinicians or researchers to explore themes across anonymized cohorts.",
      "Explore integrations with calendar and wearable data to gently nudge users when their energy and focus windows are best.",
    ],
    heroImage: {
      src: "/images/projects/neurodivulge/hero.webp",
      alt: "Abstract illustration of a human silhouette with UI cards orbiting around it, some smooth and aligned, others jittered to represent cognitive friction",
      caption: "Representing attention and cognitive load in digital products — built to reduce guilt and friction instead of just adding prettier lists.",
    },
    gallery: [
      { src: "/images/projects/neurodivulge/archetypes.webp", alt: "Neurodivulge archetypes portal showing seven behavioral clusters with narrative context", caption: "Seven archetypes mapped from 180 interviews, each tied to measurable outcomes and design implications." },
      { src: "/images/projects/neurodivulge/opportunity.webp", alt: "Neurodivulge opportunity sizing calculator with TAM and pricing models", caption: "Interactive sizing tool that helps partners plug in their reach numbers and see instant revenue projections." },
    ],
    diagramLabel: "Neurodivulge research universe",
    techStack: ["React", "TypeScript", "Plotly", "Airtable", "Python", "Vercel"],
    links: [
      { type: "demo", url: "https://neurodivulge.vercel.app/", label: "Live demo" },
      { type: "github", url: "https://github.com/sudhanva/neurodivulge", label: "Source" },
    ],
  },
  {
    slug: "renderpub-vr",
    title: "Renderpub VR Design Ops",
    subtitle: "Hybrid creative + product + ops system for VR content pipelines",
    role: "Product & Ops Lead",
    timeframe: "Sep 2021–Jan 2024",
    tags: ["Product", "Operations", "VR", "Analytics", "Creative"],
    funFact: "I ran playtest retros from a racing-sim cockpit to mimic the headset's field-of-view constraints. It forced me to think like a user trapped in a narrow visual cone.",
    problem:
      "At Renderpub, we were shipping weekly VR experiences for brand activations and immersive storytelling. But every playtest felt like chaos: briefs lived in Slack threads, assets broke in handoffs, telemetry lived in scattered spreadsheets, and learnings evaporated after each retro. Scenes would fail in headset reviews, and no one could trace why. PMs, artists, and engineers were working in parallel universes.",
    solution:
      "I built a design-ops system that brought everyone onto the same operating picture. I standardized brief templates in Notion, automated asset QA with Python lint scripts that caught broken materials before they hit Unity, instrumented Unity telemetry that logged every user interaction to BigQuery, and designed FigJam retro templates that made insights searchable. The result was a calm, repeatable pipeline where creative, product, and engineering could move fast without breaking things.",
    impact: [
      "Instrumented Unity telemetry that exposed a 32% drop-off at scene seven. We redesigned that scene and lifted completion by 21%.",
      "Automated asset QA and packaging with Python scripts, saving the art team 18 hours per week in manual handoffs and reducing broken builds by 40%.",
      "Introduced prioritization scorecards that aligned PM and creative leads on experiment bets every sprint, reducing thrash and rework.",
      "Stored every playtest insight in Airtable with FigJam retro templates, making learnings searchable and reusable instead of trapped in Slack.",
      "Built exposure to Unreal, Unity, diverse 3D modeling and archviz tools, VFX workflows, and cross-functional rituals at startup scale, working on Renderpub's proprietary VR platform—a SaaS-like suite for immersive storytelling.",
      "The hybrid creative + product + ops nature of the role taught me how to translate between designers, engineers, and stakeholders—a foundation for product analytics and strategy work later.",
    ],
    impactMetrics: [
      { label: "Scenes tested", value: "40+" },
      { label: "QA time saved", value: "18 hrs/wk" },
      { label: "Completion lift", value: "+21%" },
      { label: "Broken builds", value: "-40%" },
    ],
    architecture:
      "Notion brief templates feed Jira epics with acceptance criteria and asset checklists. Unity editors trigger Python lint scripts that catch broken materials, missing textures, and malformed metadata before export. Telemetry logs every user interaction to BigQuery. Looker dashboards surface drop-offs and friction points in real time. FigJam retro templates capture insights with tags for discoverability. The system is designed to be scrappy but rigorous—startup-scale ops without the chaos.",
    heroImage: {
      src: "/images/projects/renderpub-vr/hero-placeholder.png",
      alt: "Placeholder hero for Renderpub VR",
    },
    gallery: [
      { src: "/images/projects/renderpub-vr/telemetry-placeholder.png", alt: "Renderpub VR telemetry placeholder" },
      { src: "/images/projects/renderpub-vr/brief-system-placeholder.png", alt: "Renderpub VR brief system placeholder" },
    ],
    diagramLabel: "Renderpub VR ops loop",
    techStack: ["Notion", "Unity", "Python", "BigQuery", "Looker", "Airtable"],
    links: [
      { type: "demo", url: "https://renderpub-vr-ops.vercel.app", label: "Ops playbook" },
      { type: "notion", url: "https://www.notion.so/renderpub", label: "Research notes" },
    ],
  },
];
