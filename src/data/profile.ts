export type Profile = {
  name: string;
  headline: string;
  education: string;
  focusAreas: string[];
  bio: string;
  email: string;
  linkedin: string;
  resumeUrl: string;
  avatar: string;
};

export const profile: Profile = {
  name: "Sudhanva Kashyap",
  headline: "Design-minded analytics strategist for data-informed product bets.",
  education: "MS Business Analytics (STEM), Simon Business School",
  focusAreas: ["Product", "Strategy", "Analytics"],
  bio:
    "I pair quantitative rigor with systems-level design thinking to help teams see signal faster. My work spans ETF intelligence, research ops, and GTM analytics, always anchored in calm storytelling and actionable metrics.",
  email: "sudhanva.kashyap@simon.rochester.edu",
  linkedin: "https://www.linkedin.com/in/sudhanvavkashyap/",
  resumeUrl: "/resume.pdf",
  avatar: "/sudhanva-avatar.svg",
};
