export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeframe: string;
  tags: string[];
  problem: string;
  solution: string;
  impact: string[];
  impactMetrics?: {
    label: string;
    value: string;
  }[];
  architecture?: string;
  heroImage?: string;
  gallery?: string[];
  techStack: string[];
  links?: {
    type: "github" | "demo" | "video" | "notion";
    url: string;
    label?: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "invest-ai",
    title: "Invest_AI Portfolio Intelligence",
    subtitle: "Risk-aware ETF tutor with explainable optimizers and scenario modeling",
    role: "Product & Analytics Lead",
    timeframe: "2024–2025",
    tags: ["Product", "Analytics", "Fintech", "Optimization"],
    problem:
      "Clubs and first-time investors stitched together brittle spreadsheets to understand diversification, shocks, and risk scores. Data feeds broke weekly and no one could translate optimizer output into calm next steps.",
    solution:
      "Designed an explainable coach that ingests daily ETF snapshots, scores risk via an eight-question flow, runs HRP / Max Sharpe / Min-Var optimizers in parallel, and narrates trade-offs with Monte Carlo scenarios and guardrails.",
    impact: [
      "Built a constraint engine that bounds allocations by sector, leverage, and ESG filters while staying legible for non-quants.",
      "Instrumented Monte Carlo + regime-shift simulations so users see downside corridors rather than single Sharpe values.",
      "Wrote 20+ inline insights that translate portfolio math into recommendations, boosting module completion by 34%.",
      "Added 29 regression tests that catch stale ETF data or optimizer drift before publishing results.",
    ],
    impactMetrics: [
      { label: "ETF Universe", value: "67 tracked" },
      { label: "Risk Profiles", value: "420+" },
      { label: "Completion Lift", value: "+34%" },
    ],
    architecture:
      "Tiingo + Stooq snapshot jobs hydrate Postgres → Python risk engine applies profiling + constraints → Optimizers + Monte Carlo run in parallel → Streamlit UI renders charts/narratives → Supabase captures telemetry.",
    heroImage: "/images/projects/invest-ai/hero.png",
    gallery: [
      "/images/projects/invest-ai/dashboard.png",
      "/images/projects/invest-ai/risk-profile.png",
      "/images/projects/invest-ai/portfolio-view.png",
    ],
    techStack: ["Python", "Pandas", "NumPy", "Postgres", "Streamlit", "Supabase", "FRED"],
    links: [
      { type: "demo", url: "https://investaiportfoliorec.streamlit.app/", label: "Live demo" },
      { type: "github", url: "https://github.com/sudhanva/invest-ai", label: "Source" },
    ],
  },
  {
    slug: "unified-scraper",
    title: "Unified Scraper Intelligence Layer",
    subtitle: "Control plane for 40+ lead-gen scrapers with drift scoring",
    role: "Product Analytics Contractor",
    timeframe: "2023",
    tags: ["Data Platform", "Automation", "Ops", "Analytics"],
    problem:
      "Revenue teams ran dozens of one-off scrapers without logging or SLAs. Schema drift silently poisoned CRM data and fresh leads took hours to appear.",
    solution:
      "Centralized extractors behind Airflow, normalized payloads with dbt, layered drift scoring, and piped health signals into Slack/Teams plus Salesforce webhooks so ops trusted ingestion without manual QA.",
    impact: [
      "Stabilized 2M+ weekly rows with schema diffing and lineage tracking that pinpoints the failing extractor in seconds.",
      "Auto-paused unhealthy scrapers and paged owners within 90 seconds when drift or captchas spiked.",
      "Cut spreadsheet QA time by 62% by surfacing anomalies in Looker cards tied to each SLA.",
      "Routed enriched leads to CRM within 12 minutes, unlocking $250K incremental pipeline in the first quarter.",
    ],
    impactMetrics: [
      { label: "Sources", value: "43 scrapers" },
      { label: "Rows / Week", value: "2.1M" },
      { label: "QA Time", value: "-62%" },
    ],
    architecture:
      "Airflow orchestrates extraction → Cloud Run workers pull HTML/JSON → dbt models standardize schemas → BigQuery stores curated tables → Looker dashboards expose health → Slack + Salesforce webhooks broadcast alerts and push leads.",
    heroImage: "/images/projects/unified-scraper/hero.png",
    gallery: [
      "/images/projects/unified-scraper/control-plane.png",
      "/images/projects/unified-scraper/drift.png",
    ],
    techStack: ["Python", "Airflow", "Cloud Run", "dbt", "BigQuery", "Looker", "Salesforce"],
    links: [
      { type: "demo", url: "https://unified-scraper-control.vercel.app", label: "Product tour" },
      { type: "github", url: "https://github.com/sudhanva/unified-scraper", label: "Source" },
    ],
  },
  {
    slug: "neurodivulge",
    title: "Neurodivulge Research Portal",
    subtitle: "Transforming 180 interviews into archetypes and opportunity sizing",
    role: "Product Strategist",
    timeframe: "2022",
    tags: ["Research", "Strategy", "Healthcare", "Product"],
    problem:
      "Healthcare partners funded a neurodiversity study but received a 300-page PDF no exec would read. They needed archetypes, pricing logic, and interactive stories to license the IP globally.",
    solution:
      "Led synthesis sprints to cluster interviews into seven archetypes, layered TAM + pricing modeling, and shipped a React portal where stakeholders explore narratives, metrics, and ready-to-act recommendations.",
    impact: [
      "Combined topic modeling with behavioral tagging to craft archetypes tied to measurable outcomes and content needs.",
      "Built a pricing/licensing calculator that recouped study cost within three enterprise deals.",
      "Added guided walkthroughs with motion microcopy that raised comprehension scores by 30% during pilots.",
      "Shipped opportunity sizing inputs so partners plug in reach numbers and instantly see revenue + impact ranges.",
    ],
    impactMetrics: [
      { label: "Interviews", value: "180" },
      { label: "Archetypes", value: "7" },
      { label: "Time-to-Insight", value: "<6 min" },
    ],
    architecture:
      "Python topic modeling + Airtable tagging → Notion knowledge base → JSON content feeds a React/TypeScript portal → Plotly visualizes KPIs → Vercel hosts static build for enterprise SSO.",
    heroImage: "/images/projects/neurodivulge/hero.png",
    gallery: [
      "/images/projects/neurodivulge/archetypes.png",
      "/images/projects/neurodivulge/opportunity.png",
    ],
    techStack: ["React", "TypeScript", "Plotly", "Airtable", "Python", "Vercel"],
    links: [
      { type: "demo", url: "https://neurodivulge.vercel.app/", label: "Live demo" },
      { type: "github", url: "https://github.com/sudhanva/neurodivulge", label: "Source" },
    ],
  },
  {
    slug: "renderpub-vr",
    title: "Renderpub VR Design Ops",
    subtitle: "Ops OS aligning VR research, creative, and telemetry",
    role: "Product & Ops Lead",
    timeframe: "2021",
    tags: ["Product", "Operations", "VR", "Analytics"],
    problem:
      "Weekly VR playtests broke because briefs, assets, and telemetry lived in silos. Scenes failed in headset reviews and learnings stayed trapped in ad-hoc docs.",
    solution:
      "Built a design-ops system with standard briefs, automated asset QA, Looker telemetry, and retros so PMs, artists, and engineers shared one calm operating picture.",
    impact: [
      "Instrumented Unity telemetry that exposed a 32% drop at scene seven, leading to redesign and +21% completion.",
      "Automated asset QA and packaging, saving 18 hours of handoffs per week for the art team.",
      "Introduced prioritization scorecards that aligned PM + creative leads on experiment bets every sprint.",
      "Stored every playtest insight in Airtable + FigJam templates, making retros searchable within seconds.",
    ],
    impactMetrics: [
      { label: "Scenes Tested", value: "40+" },
      { label: "QA Time Saved", value: "18 hrs/wk" },
      { label: "Completion Lift", value: "+21%" },
    ],
    architecture:
      "Notion brief templates feed Jira epics → Unity editors trigger Python lint scripts → Telemetry logs to BigQuery → Looker dashboards + FigJam retros summarize learnings for stakeholders.",
    heroImage: "/images/projects/renderpub-vr/hero.png",
    gallery: [
      "/images/projects/renderpub-vr/telemetry.png",
      "/images/projects/renderpub-vr/brief-system.png",
    ],
    techStack: ["Notion", "Unity", "Python", "BigQuery", "Looker", "Airtable"],
    links: [
      { type: "demo", url: "https://renderpub-vr-ops.vercel.app", label: "Ops playbook" },
      { type: "notion", url: "https://www.notion.so/renderpub", label: "Research notes" },
    ],
  },
];
