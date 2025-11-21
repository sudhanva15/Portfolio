export type CaseStudy = {
  slug: string;
  title: string;
  context: string;
  summary: string;
  impact: string[];
  tags: string[];
  link?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "penpal-b2b",
    title: "PenPal B2B Strategy",
    context: "Series B SaaS · Product + Growth + Analytics",
    summary:
      "PenPal’s consumer pen-pal app was pivoting into a B2B enablement platform for HR teams. I was embedded to map the buyer journey, design the first enterprise bundle, and prove the revenue story with data-backed experiments. Over eight weeks I aligned product, marketing, and RevOps around one decision tree so we could ship a confident beta.",
    impact: [
      "Mapped the employer journey across 5 segments and identified two ICPs responsible for 72% of qualified demand.",
      "Built a quantitative scoring model that prioritized roadmap bets by impact vs. effort vs. data confidence.",
      "Structured a pilot program with usage dashboards + success criteria that shortened sales cycles by 21%.",
      "Authored the narrative deck and pricing one-pager that secured executive approval to launch the B2B line.",
    ],
    tags: ["Product", "Strategy", "Analytics"],
    link: "https://www.notion.so/penpal-b2b",
  },
  {
    slug: "svc-retention-pricing",
    title: "SVC Retention & Pricing Framework",
    context: "Subscription video platform · Retention + Monetization",
    summary:
      "SVC was losing trial users in week two and discounting without a system. I partnered with product, lifecycle marketing, and finance to diagnose why members churned and to craft a pricing playbook that balanced retention with ARPU. The engagement produced a defensible KPI tree, experimentation roadmap, and launch plan for new bundles.",
    impact: [
      "Combined cohort, content, and behavioral data into a retention segmentation that explained 83% of churn variance.",
      "Designed a pricing sandbox with guardrails for discount depth, offer frequency, and margin contribution.",
      "Ran two price/feature experiments that lifted paid conversion by 11% while holding churn statistically flat.",
      "Codified the operating cadence—weekly signal review + monthly pricing council—so decisions stopped living in Slack threads.",
    ],
    tags: ["Strategy", "Pricing", "Analytics"],
    link: "https://www.notion.so/svc-pricing",
  },
  {
    slug: "perry-pricing-analytics",
    title: "Perry’s Pricing Analytics",
    context: "Omnichannel retail · Inventory + Pricing",
    summary:
      "Perry’s specialty retail chain needed a data-driven way to refresh seasonal pricing without gut-feel spreadsheets. I built a command center that fused POS, inventory, and promo data, then facilitated cross-functional rituals so merch, finance, and field leaders could act quickly. The work modernized pricing governance while keeping the experience human.",
    impact: [
      "Integrated POS + supply feeds into a dbt semantic layer refreshed every 30 minutes for 1,200 stores.",
      "Created exception playbooks that trimmed 22 analyst hours per week and clarified escalation paths.",
      "Identified $4.2M margin opportunity by pairing elasticity clusters with inventory risk tiers.",
      "Enabled regional leads to simulate markdown scenarios in under five minutes, improving decision speed by 3x.",
    ],
    tags: ["Product", "Operations", "Analytics"],
    link: "https://www.notion.so/perry-pricing",
  },
];
