// Image paths support .jpg, .png, .webp, or any format Next.js Image can handle
export type CaseStudy = {
  slug: string;
  title: string;
  context: string;
  summary: string;
  impact: string[];
  tags: string[];
  link?: string;
  heroImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "penpal-b2b",
    title: "Confidential B2B SaaS – HR & Enablement",
    context: "SVC Consulting · Series B SaaS Client · Feb–May 2025 · Competitive 3-month pro bono project",
    summary:
      "I was competitively selected into SVC Consulting's strategy team to help a B2B SaaS client in the HR and talent space figure out whether a new physical-to-digital product could drive better engagement in campus hiring and early-career networking. The client had strong product-market intuition but needed structure around pilot design, buyer journeys, and where to focus limited resources before scaling GTM.",
    impact: [
      "Problem: The client had product-market fit signals but no structured view of who would adopt the product or why they would renew. Pitching to universities without a clear ICP risked wasted sales effort.",
      "Approach: I mapped five buyer segments across students, campus services, and corporate partners, then used a hands-on pilot to observe in-context behavior. Methods included 8 user interviews, journey mapping in Figma, and adoption scenarios in spreadsheets.",
      "Deliverable: A three-phase pilot framework with usage metrics tied to each ICP and a partner-ready narrative that made adoption decisions testable.",
      "Decision: Recommend a phased launch (students first, universities second) to prove engagement before scaling sales efforts; leadership adopted the phased approach to reduce upfront complexity.",
      "Why it mattered: The pilot clarified the ICP, reduced rollout risk, and gave the leadership a concrete narrative for partners and investors.",
    ],
    tags: ["Strategy", "B2B", "GTM", "Pilot design", "ICP mapping"],
    heroImage: {
      src: "/images/case-studies/penpal-b2b/hero.webp",
      alt: "Stylized campus map showing building icons connected to profile cards with engagement flow arrows",
      caption: "University network diagram - mapping buyer segments and engagement flows for campus hiring and early-career networking.",
    },
    secondaryImage: {
      src: "/images/case-studies/penpal-b2b/secondary.webp",
      alt: "Journey flow diagram showing phased adoption from students to universities",
      caption: "Phased pilot framework: students first to prove engagement, then universities once usage data validated the model.",
    },
    link: "https://www.notion.so/confidential-b2b",
  },
  {
    slug: "svc-retention-pricing",
    title: "Confidential Video SaaS · Retention & Pricing",
    context: "Subscription video platform · Retention + Monetization",
    summary:
      "A subscription video platform was losing trial users in week two and discounting without a system. I partnered with product, lifecycle marketing, and finance to diagnose churn and craft a pricing playbook that balanced retention with ARPU. The engagement produced a defensible KPI tree, experimentation roadmap, and launch plan for new bundles.",
    impact: [
      "Problem: The platform was losing trial users in week two and discounting without a pricing framework, eroding ARPU without clear impact on retention.",
      "Methods: Combined cohort analysis in SQL, content engagement tracking, and behavioral clustering to build a retention segmentation that explained 83% of churn variance.",
      "What I built: Designed a pricing sandbox in spreadsheets with guardrails for discount depth, offer frequency, and margin contribution. Ran two price/feature experiments (A/B tests coordinated with lifecycle marketing) that lifted paid conversion by 11% while holding churn statistically flat.",
      "Decision & Trade-offs: We considered three pricing models: flat subscription, usage-based, and hybrid bundles. I recommended hybrid bundles because they balanced predictable revenue with upsell flexibility. Leadership agreed but wanted faster iteration cycles. We codified a weekly signal review + monthly pricing council so decisions stopped living in Slack threads.",
      "Why it mattered: The segmentation gave product and marketing a shared language for targeting. The pricing playbook reduced ad-hoc discounting and made trade-offs explicit. The operating cadence ensured experiments shipped on time.",
      "What I learned: Pricing work lives at the intersection of finance, product, and marketing. Next time, I'd involve finance earlier in experiment design to pre-align on margin thresholds and avoid last-minute pivots.",
    ],
    tags: ["Strategy", "Pricing", "Analytics"],
    heroImage: {
      src: "/images/case-studies/svc-retention-pricing/hero.webp",
      alt: "Abstract dashboard showing cohort retention curves and pricing model comparisons",
      caption: "Retention segmentation and pricing playbook - balancing ARPU growth with churn control through structured experimentation.",
    },
    secondaryImage: {
      src: "/images/case-studies/svc-retention-pricing/secondary.webp",
      alt: "Pricing sandbox showing discount guardrails and margin contribution scenarios",
      caption: "Pricing sandbox with guardrails for discount depth, offer frequency, and margin contribution.",
    },
    link: "https://www.notion.so/confidential-video-pricing",
  },
  {
    slug: "perry-pricing-analytics",
    title: "Confidential Manufacturing Client – Operations Analytics",
    context: "Graduate Analytics Project · Supply Chain Manufacturing · 2025",
    summary:
      "For a graduate analytics capstone, I partnered with a confidential manufacturing client to diagnose variability in their production runs. The challenge was understanding why certain speed bands and workcenters produced out-of-spec units at higher rates than others. I built dashboards and statistical models to surface patterns in weight variability, speed, and workcenter performance, giving the operations team actionable diagnostics they could use to adjust process parameters.",
    impact: [
      "Problem: Production runs at different speed settings (slow, medium, fast) were generating inconsistent output. Some workcenters had higher rates of out-of-spec units, but no one knew whether speed, operator behavior, or equipment calibration was driving the variance.",
      "Methods: I combined production logs with quality control data in Python (pandas), ran ANOVA and regression models to isolate variance drivers, and visualized distributions in Tableau.",
      "Insight: I found that fast-speed runs at certain workcenters showed 2x higher variance, suggesting equipment calibration issues rather than operator error. This redirected the ops team's focus from training to maintenance.",
      "What I built: Designed dashboards in Tableau that visualized weight distributions by speed band and workcenter, flagged out-of-spec runs in real time, and tracked variance trends over time. Also built a statistical model that quantified the contribution of speed, operator, and equipment factors to overall variability.",
      "Decision & Trade-offs: The ops team considered three interventions: operator retraining, speed limit enforcement, or equipment recalibration. I recommended recalibration at the two highest-variance workcenters based on the statistical evidence. Leadership chose recalibration because it was lower-cost than new equipment and showed measurable impact within one quarter.",
      "Why it mattered: The dashboards gave the ops team visibility they didn't have before. They used the findings to recalibrate equipment at two workcenters, which reduced out-of-spec rates by 18% in the following quarter. The work also gave me hands-on experience with process diagnostics, manufacturing data, and translating statistical findings into operational language.",
      "What I learned: Manufacturing data is messy and context-dependent. Understanding the physical process, what happens on the factory floor, matters as much as the numbers. This project taught me to ask better questions about data provenance and process constraints. Next time, I'd shadow floor operators earlier to build intuition before diving into models.",
    ],
    tags: ["Operations", "Analytics", "Manufacturing", "Process diagnostics"],
    heroImage: {
      src: "/images/case-studies/perry-pricing-analytics/hero.webp",
      alt: "Modern factory dashboard showing abstract machines with speed dials and floating KPI panels for throughput and defect rates",
      caption: "Operations diagnostics dashboard - surfacing patterns in weight variability, speed, and workcenter performance.",

    },
    secondaryImage: {
      src: "/images/case-studies/perry-pricing-analytics/secondary.webp",
      alt: "Statistical analysis chart showing speed band variance and workcenter performance distribution",
      caption: "ANOVA and regression models isolating variance drivers across speed settings and equipment calibration.",
    },
    link: "https://www.notion.so/confidential-retail-pricing",
  },
];
