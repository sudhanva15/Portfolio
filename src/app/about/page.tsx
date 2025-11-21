import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/section";
import HowIWork from "@/components/how-i-work";
import { profile } from "@/data/profile";
import { howIWork } from "@/data/how-i-work";

export const metadata: Metadata = {
  title: "About — Sudhanva Kashyap",
  description: "Background and working style of Sudhanva Kashyap, a design-minded analytics strategist.",
};

export default function AboutPage() {
  const focusLine = profile.focusAreas.join(" · ");
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
      <section className="border-b border-transparent py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
          <div className="grid gap-10 md:grid-cols-[minmax(0,240px)_1fr] md:items-center">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                <Image src={profile.avatar} alt={`${profile.name} avatar`} width={160} height={160} className="h-full w-full object-cover" priority />
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-50">{profile.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{focusLine}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">MSBA — Simon</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">About</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">{profile.headline}</h1>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-lg font-semibold text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
                  SK
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{profile.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">{focusLine}</p>
                </div>
              </div>
              <div className="mt-4 max-w-prose space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                <p>{profile.education} graduate blending product instincts, design systems, and analytics rigor.</p>
                <p>{profile.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Background"
        description="From VR studios to analytics roadmaps, I keep a throughline of curiosity, systems thinking, and calm delivery."
      >
        <div className="max-w-prose space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            I earned my MS in Business Analytics (STEM) at Simon Business School where I focused on experimentation, quantitative modeling, and translating data stories for leadership. Before grad school, I shipped immersive VR/3D experiences and behavior design work—crafting narrative environments and collaborating with engineers, artists, and researchers.
          </p>
          <p>
            That blend of design sensitivity and analytical structure now powers how I build product and strategy work. Whether it’s bringing an ETF intelligence tool to life or operationalizing research insights, I anchor decisions in data while keeping the human experience intelligible.
          </p>
        </div>
      </Section>

      <Section
        title="How I Work"
        description="A short look at the rituals and principles that keep projects grounded."
      >
        <HowIWork content={howIWork} />
      </Section>

      <Section title="Today" description="What I’m focused on right now.">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            I’m open to full-time Product, Strategy, and Analytics roles in the US (F1 OPT eligible). If the portfolio resonates, reach out for a calm conversation about how I can help your team turn messy signals into confident decisions.
          </p>
        </div>
      </Section>
    </div>
  );
}
