export type FunFact = {
  id: string;
  text: string;
  icon?: string;
  context?: "about" | "hero" | "project" | "case-study" | "footer";
};

export const funFacts: FunFact[] = [
  {
    id: "kenya-childhood",
    text: "I grew up in Kenya—spent my childhood watching giraffes from the back seat.",
    icon: "🦒",
    context: "about",
  },
  {
    id: "giraffe-attempt",
    text: "I once tried (and failed) to touch a giraffe at a sanctuary.",
    icon: "🤚",
    context: "about",
  },
  {
    id: "bike-fixing",
    text: "I love fixing bicycles. There's something satisfying about diagnosing a stuck derailleur.",
    icon: "🔧",
    context: "about",
  },
  {
    id: "trails-photography",
    text: "I love trails and wildlife photography—always learning too many things at once.",
    icon: "📸",
    context: "about",
  },
  {
    id: "maasai-mara",
    text: "I haven't been to Maasai Mara or Mombasa yet—trip in the works.",
    icon: "🗺️",
    context: "about",
  },
  {
    id: "hero-curiosity",
    text: "Endlessly curious and always learning too many things at once.",
    icon: "✨",
    context: "hero",
  },
  {
    id: "dorm-room-hacking",
    text: "I hacked the first version together in a dorm room during midterms.",
    icon: "💡",
    context: "project",
  },
  {
    id: "racing-sim-retro",
    text: "I ran playtest retros from a racing-sim cockpit to mimic headset field-of-view constraints.",
    icon: "🏎️",
    context: "project",
  },
  {
    id: "vr-whiteboard",
    text: "I sketched the first archetype storyboards inside a VR whiteboard to stay immersed.",
    icon: "🥽",
    context: "project",
  },

  {
    id: "scraper-siren",
    text: "I rigged drift alerts to play a synth siren in Slack so ops could literally hear when extractors broke.",
    icon: "🔔",
    context: "project",
  },
  {
    id: "svc-consulting",
    text: "I joined SVC Consulting to get my hands dirty with real strategy work—not just theory.",
    icon: "🌍",
    context: "case-study",
  },
  {
    id: "footer-personality",
    text: "Built with intention in Rochester, NY—probably while fixing a bike.",
    icon: "🚴",
    context: "footer",
  },
];
