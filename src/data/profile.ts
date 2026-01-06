export type Profile = {
  name: string;
  headline: string;
  education: string;
  focusAreas: string[];
  bio: string;
  email: string;
  linkedin: string;
  avatar: string;
  certifications: {
    name: string;
    org: string;
  }[];
};

export const profile: Profile = {
  name: "Sudhanva Kashyap",
  headline: "I help teams turn messy signals into confident product & strategy decisions.",
  education: "MS Business Analytics (STEM), Simon Business School",
  focusAreas: ["Product", "Strategy", "Analytics"],
  bio:
    "I pair quantitative rigor with systems-level design thinking to help teams see signal faster. My work spans ETF intelligence, research ops, and GTM analytics, always anchored in calm storytelling and actionable metrics.",
  email: "skashya5@simon.rochester.edu",
  linkedin: "https://www.linkedin.com/in/sudhanvakashyap/",
  avatar: "/sudhanva-avatar.svg",
  certifications: [
    { name: "Advanced Certificate of Achievement in Pricing", org: "Simon Business School" },
    { name: "SCALA Programming", org: "Ongoing" },
    { name: "JAVA Programming", org: "Ongoing" },
  ],
};
