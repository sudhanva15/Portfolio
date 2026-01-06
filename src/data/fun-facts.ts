export type FunFact = {
  id: string;
  text: string;
  icon?: string;
  context?: "about" | "hero" | "project" | "case-study" | "footer";
};

import { siteCopy } from "@/content/siteCopy";

export const funFacts: FunFact[] = [
  {
    id: "childhood-giraffes",
    text: siteCopy.funFacts["childhood-giraffes"],
    icon: "🦒",
    context: "about",
  },
  {
    id: "giraffe-attempt",
    text: siteCopy.funFacts["giraffe-attempt"],
    icon: "🤚",
    context: "about",
  },
  {
    id: "bike-fixing",
    text: siteCopy.funFacts["bike-fixing"],
    icon: "🔧",
    context: "about",
  },
  {
    id: "trails-photography",
    text: siteCopy.funFacts["trails-photography"],
    icon: "📸",
    context: "about",
  },
  {
    id: "wildlife-destinations",
    text: siteCopy.funFacts["wildlife-destinations"],
    icon: "🗺️",
    context: "about",
  },
  {
    id: "hero-curiosity",
    text: siteCopy.funFacts["hero-curiosity"],
    icon: "✨",
    context: "hero",
  },
  {
    id: "dorm-room-hacking",
    text: siteCopy.funFacts["dorm-room-hacking"],
    icon: "💡",
    context: "project",
  },
  {
    id: "racing-sim-retro",
    text: siteCopy.funFacts["racing-sim-retro"],
    icon: "🏎️",
    context: "project",
  },
  {
    id: "vr-whiteboard",
    text: siteCopy.funFacts["vr-whiteboard"],
    icon: "🥽",
    context: "project",
  },

  {
    id: "scraper-siren",
    text: siteCopy.funFacts["scraper-siren"],
    icon: "🔔",
    context: "project",
  },
  {
    id: "svc-consulting",
    text: siteCopy.funFacts["svc-consulting"],
    icon: "🌍",
    context: "case-study",
  },
  {
    id: "footer-personality",
    text: siteCopy.funFacts["footer-personality"],
    icon: "🚴",
    context: "footer",
  },
];
