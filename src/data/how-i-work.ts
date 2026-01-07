export type HowIWorkContent = {
  summary: string;
  principles: Array<{
    title: string;
    description: string;
    emoji: string;
  }>;
};

export const howIWork: HowIWorkContent = {
  summary:
    "I like to zoom out, then zoom in. First I map the system, the people, and the incentives. Then I use data, experiments, and design to make that system more reliable and easier to act on. My background in VR, behavior design, and analytics means I’m comfortable moving between interface details, model choices, and the business story they need to support.",
  principles: [
    {
      title: "Structure first, then creativity.",
      description: "I start with constraints, metrics, and edge cases, then explore creative ways to work within them.",
      emoji: "🧭",
    },
    {
      title: "Fast feedback loops.",
      description: "I’d rather ship a small version, instrument it well, and learn, than polish something in isolation.",
      emoji: "🔁",
    },
    {
      title: "Explainable analytics.",
      description: "If a stakeholder can’t explain the logic to someone else, the model or dashboard isn’t done yet.",
      emoji: "🔍",
    },
    {
      title: "Empathy for both users and teams.",
      description: "I care about how tools feel to use, and how realistically a team can maintain them.",
      emoji: "🤝",
    },
    {
      title: "Written clarity.",
      description: "I rely heavily on clear docs, diagrams, and narratives so decisions don’t vanish into meetings.",
      emoji: "📝",
    },
  ],
};
