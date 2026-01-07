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
      "Helped a B2B talent client design a focused pilot to test adoption and renewal among campus and partner buyers.",
    impact: [
      "Problem: No clear ICP or testable plan for campus adoption, risking wasted sales effort.",
      "Approach: Mapped buyer segments and ran a hands-on pilot with interviews and journey mapping to observe in-context behavior.",
      "Deliverable: A three-phase pilot with metrics aligned to each ICP and a partner-ready narrative for sales.",
      "Decision: Recommended a phased launch (students first) to prove engagement before scaling; leadership adopted the approach.",
      "Why it mattered: Clarified ICP, reduced rollout risk, and created a testable adoption plan for partners.",
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
      "Partnered with product and finance to stop week-two trial churn and introduce a pricing approach that balanced retention with revenue.",
    impact: [
      "Problem: Trials dropped off in week two and ad-hoc discounting reduced ARPU.",
      "Approach: Cohort analysis, engagement tracking, and behavioral segmentation informed a retained-focused experimentation plan.",
      "What I built: A pricing sandbox and two coordinated experiments that improved paid conversion while keeping churn contained.",
      "Decision: Recommended hybrid bundles and a weekly review cadence to make pricing decisions systematic.",
      "Why it mattered: Gave teams a shared targeting language, reduced ad-hoc discounts, and established a repeatable experiment process.",
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
