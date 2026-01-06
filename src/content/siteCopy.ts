export type SiteCopy = {
  hero: {
    introTemplate: string; // use {name} as placeholder
    subhead: string;
    badges: string[];
    ctas: { projectsLabel: string; caseStudiesLabel: string };
    factBadge?: string;
  };
  header: {
    siteTitle: string;
    nav: { label: string; href: string }[];
    contactLabel: string;
  };
  footer: {
    builtLine: string;
    tagline: string;
    linkedinLabel: string;
  };
  ctaStrip: { label: string; description: string; href: string }[];
  placeholders: {
    heroVisual: string;
    screenshot: string;
  };
  sections: {
    screenshotsHeading: string;
    certificationsHeading: string;
  };
  contact: {
    openToText: string;
    resumePrompt: string;
    linkedinLabel: string;
    linkedinUrl: string;
  };
  howIWork: {
    summary: string;
    principles: { title: string; description: string; emoji: string }[];
  };
  funFacts: { [id: string]: string };
};

export const siteCopy: SiteCopy = {
  hero: {
    introTemplate:
      "I'm {name}. I grew up in Kenya, studied communication design in India, and now build calm, explainable analytics systems in the US.",
    subhead: "I help teams turn messy signals into confident product & strategy decisions.",
    badges: ["MSBA (Analytics) · B.Des (Communication Design)", "Product + Strategy + Design", "F1 OPT-eligible (US)"],
    ctas: { projectsLabel: "View projects", caseStudiesLabel: "View case studies" },
    factBadge: "Endlessly curious and always learning too many things at once.",
  },
  header: {
    siteTitle: "Sudhanva Kashyap",
    nav: [
      { label: "Projects", href: "/projects" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "About", href: "/about" },
    ],
    contactLabel: "Get in touch",
  },
  footer: {
    builtLine: "Built with intention in Rochester, NY.",
    tagline: "Somewhere between giraffes and dashboards.",
    linkedinLabel: "View LinkedIn profile",
  },
  ctaStrip: [
    {
      label: "Explore builds",
      description: "Dashboards, scrapers, and behavioral tools that ship and get used.",
      href: "/projects",
    },
    {
      label: "See decision stories",
      description: "Case studies that follow the data from noise to recommendation.",
      href: "/case-studies",
    },
    {
      label: "Learn how I work",
      description: "A hybrid of design thinking, analytics, and systems-level curiosity.",
      href: "/about",
    },
  ],
  placeholders: {
    heroVisual: "Hero visual placeholder",
    screenshot: "Screenshot placeholder",
  },
  sections: {
    screenshotsHeading: "Screenshots",
    certificationsHeading: "Certifications",
  },
  contact: {
    openToText:
      "I am open to full-time Product, Strategy, and Analytics roles (F1 OPT). Send a note and I'll respond within a day.",
    resumePrompt: "Request my latest resume using the Get in touch button in the header.",
    linkedinLabel: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/sudhanvavkashyap/",
  },
  howIWork: {
    summary:
      "I like to zoom out, then zoom in. First I map the system, the people, and the incentives. Then I use data, experiments, and design to make that system feel calmer and more legible.",
    principles: [
      {
        title: "Structure first, then creativity.",
        description: "Start with constraints, metrics, and edge cases, then explore creative ways to work within them.",
        emoji: "🧭",
      },
      {
        title: "Fast feedback loops.",
        description: "Ship a small version, instrument it well, and learn quickly.",
        emoji: "🔁",
      },
      {
        title: "Explainable analytics.",
        description: "If a stakeholder can’t explain the logic, the model or dashboard isn’t done yet.",
        emoji: "🔍",
      },
      {
        title: "Empathy for both users and teams.",
        description: "Care about how tools feel to use and how realistically a team can maintain them.",
        emoji: "🤝",
      },
      {
        title: "Written clarity.",
        description: "Use clear docs, diagrams, and narratives so decisions don’t vanish into meetings.",
        emoji: "📝",
      },
    ],
  },
  funFacts: {
    "childhood-giraffes": "Spent my childhood watching giraffes from the back seat.",
    "giraffe-attempt": "I once tried (and failed) to touch a giraffe at a sanctuary.",
    "bike-fixing": "I love fixing bicycles. There's something satisfying about diagnosing a stuck derailleur.",
    "trails-photography": "I love trails and wildlife photography.",
    "wildlife-destinations": "I have a few wildlife destinations on my travel list.",
    "hero-curiosity": "Endlessly curious and always learning too many things at once.",
    "dorm-room-hacking": "I hacked the first version together in a dorm room during midterms.",
    "racing-sim-retro": "I ran playtest retros from a racing-sim cockpit.",
    "vr-whiteboard": "I sketched the first archetype storyboards inside a VR whiteboard.",
    "scraper-siren": "I rigged drift alerts to play a synth siren in Slack so ops could hear when extractors broke.",
    "svc-consulting": "I joined SVC Consulting to get my hands dirty with real strategy work.",
    "footer-personality": "Built with intention in Rochester, NY, probably while fixing a bike.",
  },
};
