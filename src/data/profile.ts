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
  headline: "I help teams turn complex data into clear product and strategy decisions.",
  education: "MS in Business Analytics (STEM), Simon Business School, University of Rochester; B.Des in Communication Design, PES University",
  focusAreas: ["Product", "Strategy", "Analytics"],
  bio:
    "I pair quantitative rigor with systems-level design to surface actionable insights. My work spans ETF intelligence, research ops, and GTM analytics; I prioritize clear recommendations and measurable outcomes.",
  email: "skashya5@simon.rochester.edu",
  linkedin: "https://www.linkedin.com/in/sudhanvavkashyap/",
  avatar: "/sudhanva-avatar.svg",
  certifications: [
    { name: "Advanced Certificate of Achievement in Pricing", org: "Simon Business School" },
    { name: "SCALA Programming", org: "Ongoing" },
    { name: "JAVA Programming", org: "Ongoing" },
  ],
};
