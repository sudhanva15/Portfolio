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
    "I blend analytical structure with design sensibility: clarify the decision, map the signals we trust, and craft artifacts that help teams move with calm confidence.",
  principles: [
    {
      title: "Start with clarity",
      description: "Define the decision, success metric, and unknowns up front so every teammate understands the target state.",
      emoji: "🎯",
    },
    {
      title: "Structured build",
      description: "Decompose messy problems into calm systems—roadmaps, instrumentation, and rituals that scale without drama.",
      emoji: "🧱",
    },
    {
      title: "Fast iteration",
      description: "Prototype, test, and narrate findings quickly so partners see progress and can course-correct early.",
      emoji: "⚡",
    },
    {
      title: "User empathy",
      description: "Pair data with field context—shadow users, run interviews, and translate insights into stories teams feel.",
      emoji: "🤝",
    },
    {
      title: "Storytelling",
      description: "Distill complex analyses into visuals and memos that make the next step obvious for leadership.",
      emoji: "📣",
    },
  ],
};
