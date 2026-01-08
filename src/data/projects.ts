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
  galleryHidden?: {
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
  // Extended collaborator card fields
  program?: string;
  additionalInfo?: string;
  linkedinUrl?: string;
  imageSrc?: string;
  photoCredit?: string;
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
        program: "MS Finance 2025",
        linkedinUrl: "https://www.linkedin.com/in/poorvik-mandya-prakashbabu-7b957521b/",
        imageSrc: "/poorvik-prakashbabu.webp",
        photoCredit: "Photo provided by Poorvik Prakashbabu",
      },
    ],
    funFact:
      "I hacked the first version together in a dorm room during midterms. Refactoring it into something that felt like an internal tool taught me the difference between \"cool project\" and \"reliable tool.\"",
    problem:
      "Students and small advisors lacked tools to translate portfolio concepts into concrete allocations and trade-offs. Portfolio construction often felt like a black box, and learners needed a hands-on, explainable experience to see how constraints and risk choices change outcomes.",
    solution: "Invest_AI teaches portfolio construction. It ingests multiple data sources, runs parallel optimizers, and translates outputs into guided narratives tied to user constraints and risk answers so learners see trade-offs and export concrete allocations.",
    impact: [
      "Daily ETF snapshots with multi-provider fallbacks and cached refreshes to keep the app stable.",
      "Three parallel optimizers to surface trade-offs between risk and return for non-technical users.",
      "Inline teaching insights and guided explanations that help learners act on recommendations.",
      "Regression tests and monitoring to detect stale data and optimizer drift before release.",
      "Monte Carlo scenarios that show downside corridors rather than single-point metrics.",
    ],
    impactMetrics: [
      { label: "ETFs tracked", value: "67" },
      { label: "Optimizers", value: "3" },
      { label: "Unit tests", value: "29" },
      { label: "Completion lift", value: "+34%" },
    ],
    architecture:
      "I ingest daily ETF snapshots from Tiingo and Stooq, clean and cache them in Postgres to avoid rate limits, then run a Python risk engine that applies user constraints (sector limits, ESG filters, leverage caps). Three optimizers run in parallel, each producing allocations. Monte Carlo + regime-shift simulations layer on top to show downside scenarios. The Streamlit UI narrates trade-offs with charts and guardrails, and Supabase captures telemetry so I can see where users drop off or get confused. The system is designed to be reproducible and safe for demos, never to execute real trades.",
    heroImage: {
      src: "/images/projects/invest-ai/hero.webp",
      alt: "Invest_AI landing page showing the portfolio recommender overview and navigation",
      caption: "Landing screen that introduces the Invest_AI flow and core learning steps.",
    },
    gallery: [
      { src: "/images/projects/invest-ai/dashboard.webp", alt: "Invest_AI dashboard overview with portfolio summary and allocation table", caption: "Dashboard overview with portfolio summary, holdings, and allocation breakdowns." },
      { src: "/images/projects/invest-ai/risk-profile.webp", alt: "Invest_AI risk profiling screen with income and questionnaire panels", caption: "Risk profile builder combining financial inputs with preference questions." },
      { src: "/images/projects/invest-ai/portfolio.webp", alt: "Invest_AI portfolio recommendation view with risk band selection and allocations", caption: "Recommendation view highlighting the selected portfolio within the target risk band." },
    ],
    galleryHidden: [
      { src: "/images/projects/invest-ai/portfolios-comparison.webp", alt: "Invest_AI portfolio comparison table with multiple strategies side-by-side", caption: "Portfolio comparison table showing risk, volatility, and Sharpe across candidate portfolios." },
      { src: "/images/projects/invest-ai/portfolios-run-simulation.webp", alt: "Invest_AI simulation run screen with risk sliders and configuration panels", caption: "Simulation run controls for selecting objectives and generating portfolio candidates." },
      { src: "/images/projects/invest-ai/macros-1.webp", alt: "Invest_AI macroeconomic indicators dashboard with CPI and interest rate charts", caption: "Macroeconomic indicators explain the market context behind portfolio performance." },
      { src: "/images/projects/invest-ai/macros-2.webp", alt: "Invest_AI macro indicators view with unemployment trends and implications", caption: "Macro indicators with scenario notes to connect data to portfolio implications." },
      { src: "/images/projects/invest-ai/settings.webp", alt: "Invest_AI settings screen showing beginner mode explanations", caption: "Settings panel that toggles beginner mode and expands inline explanations." },
    ],
    diagramLabel: "Invest_AI architecture sketch",
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
    title: "Unified Scraper - My Intelligence Layer for the Web",
    subtitle: "Self-healing scraper for reliable, schema-aligned datasets.",
    summary: "A scraper that reduces maintenance, detects drift, and yields schema-aligned outputs for downstream analysis.",
    role: "Builder · Data Engineering · Product Systems",
    timeframe: "Jul 2025 – Present",
    location: "Personal / Open-source-ready",
    tags: ["Data Engineering", "Automation", "Product Systems", "Analytics"],
    funFact: "I rigged drift alerts to play a synth siren in Slack so I could literally hear when extractors broke. Surprisingly effective.",
    problem:
      "Many useful signals live on web pages without stable APIs. I kept building one-off scrapers that broke under drift, costing time and creating fragile datasets. The bottleneck was reliable access and consistent schema.",
    solution: "I built a unified scraping engine that handles Playwright rendering, stealth patterns, dynamic waits, and retry logic, then pushes runs through a stability layer with structured logging, cost tracking, and data lineage. An experience layer provides preview mode, schema mapping, and export flows so scrapes are reusable across projects instead of one-offs.",
    impact: [
      "Reduced end-to-end data-gathering time and maintenance overhead across analytics projects.",
      "High pipeline reliability with monitoring and drift detection over thousands of requests.",
      "Faster, schema-aligned extraction for tabular and semi-structured pages.",
      "Reduced manual babysitting with smarter retries and automated drift alerts.",
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
      alt: "Unified Scraper web interface showing the main workflow and navigation",
      caption: "Main interface showing the scraper workflow and operational overview."
    },
    gallery: [
      {
        src: "/images/projects/unified-scraper/retry-engine.webp",
        alt: "Job progress view for an Amazon scrape run showing pipeline stages",
        caption: "Pipeline progress tracking for long-running marketplace scrape jobs."
      },
      {
        src: "/images/projects/unified-scraper/drift-detection.webp",
        alt: "Reddit autodiscovery configuration view with deep crawl options",
        caption: "Autodiscovery mode that expands target coverage while preserving structure."
      },
      {
        src: "/images/projects/unified-scraper/data-lineage.webp",
        alt: "Distribution view showing results quality and coverage across collected items",
        caption: "Coverage and quality distribution to validate extraction performance."
      }
    ],
    galleryHidden: [
      {
        src: "/images/projects/unified-scraper/amazon-results.webp",
        alt: "Amazon results view before filters are applied with raw extraction output",
        caption: "Raw Amazon extraction results captured before filters and cleanup."
      },
      {
        src: "/images/projects/unified-scraper/web-result.webp",
        alt: "Web scrape output table showing extracted records and metadata",
        caption: "Unified web results table with structured fields ready for export."
      },
      {
        src: "/images/projects/unified-scraper/reddit-results.webp",
        alt: "Reddit results table listing extracted posts and attributes",
        caption: "Reddit extraction results with metadata fields aligned to schema."
      },
      {
        src: "/images/projects/unified-scraper/reddit-export.webp",
        alt: "Reddit results view with export controls enabled",
        caption: "Export-ready output view for downstream analysis pipelines."
      }
    ],
    diagramLabel: "Unified Scraper architecture map",
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
      "A partner had 180 interviews trapped in dense transcripts and needed usable archetypes and a way to evaluate licensing opportunities. Leaders needed clear, testable recommendations rather than a long report.",
    solution: "Led synthesis sprints to produce seven behavioral archetypes, each tied to measurable outcomes. Built a React portal with guided walkthroughs, concise microcopy, and a pricing calculator so stakeholders could explore narratives and business implications.",
    impact: [
      "Clustered 180 interviews into seven actionable archetypes with measurable outcomes.",
      "Built a pricing and licensing calculator that supported initial partner deals.",
      "Guided walkthroughs and attention-aware patterns improved comprehension during pilot testing.",
      "Opportunity sizing that let partners estimate revenue ranges tailored to their reach.",
      "Portal designed to surface next steps and make insights reusable instead of buried in PDFs.",
    ],
    impactMetrics: [
      { label: "Interviews synthesized", value: "180" },
      { label: "Archetypes", value: "7" },
      { label: "Time-to-insight", value: "<6 min" },
      { label: "Comprehension lift", value: "+30%" },
    ],
    architecture:
      "Python topic modeling + Airtable tagging pipeline feeds a Notion knowledge base. JSON exports drive a React/TypeScript portal with Plotly visualizations. Vercel hosts the static build with enterprise SSO support. The pipeline is modular: new interviews can be tagged and folded into existing archetypes without rebuilding the model.",
    roadmap: [
      "Ship the 'Water Drain' feature that lets users release low-stakes tasks and log why they were blocked, so we can spot patterns.",
      "Turn archetype stories into adaptive rituals that suggest one or two next actions instead of overwhelming to-do lists.",
      "Layer a lightweight analytics view for clinicians or researchers to explore themes across anonymized cohorts.",
      "Explore integrations with calendar and wearable data to gently nudge users when their energy and focus windows are best.",
    ],
    heroImage: {
      src: "/images/projects/neurodivulge/hero.webp",
      alt: "Abstract illustration of a human silhouette with UI cards orbiting around it, some smooth and aligned, others jittered to represent cognitive friction",
      caption: "Visualizing attention and cognitive load, practical design patterns that reduce friction and support comprehension.",
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
    subtitle: "Hybrid creative + product + ops pipeline for VR content",
    role: "Product & Ops Lead",
    timeframe: "Sep 2021–Jan 2024",
    tags: ["Product", "Operations", "VR", "Analytics", "Creative"],
    funFact: "I ran playtest retros from a racing-sim cockpit to mimic the headset's field-of-view constraints. It forced me to think like a user trapped in a narrow visual cone.",
    problem:
      "Playtests exposed frequent handoff failures: missing assets, unclear briefs, and scattered telemetry meant issues resurfaced across sprints.",
    solution: "Built a design-ops pipeline with standardized briefs, automated asset QA, telemetry-backed dashboards, and retro templates so teams could iterate faster and reduce regressions.",
    impact: [
      "Instrumented telemetry to spot a drop-off and iterated the scene to improve completion.",
      "Automated asset QA and packaging, saving hours in manual handoffs and reducing broken builds.",
      "Introduced prioritization scorecards that aligned PM and creative leads and reduced rework.",
      "Captured playtest insights in Airtable so learnings were searchable and reusable.",
      "The role bridged design, engineering, and product, strengthening my cross-functional translation skills.",
    ],
    impactMetrics: [
      { label: "Scenes tested", value: "40+" },
      { label: "QA time saved", value: "18 hrs/wk" },
      { label: "Completion lift", value: "+21%" },
      { label: "Broken builds", value: "-40%" },
    ],
    architecture:
      "Notion brief templates feed Jira epics with acceptance criteria and asset checklists. Unity editors trigger Python lint scripts that catch broken materials, missing textures, and malformed metadata before export. Telemetry logs every user interaction to BigQuery. Looker dashboards surface drop-offs and friction points in real time. FigJam retro templates capture insights with tags for discoverability. The system is designed to be scrappy but rigorous, startup-scale ops without the chaos.",
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
