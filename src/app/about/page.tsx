import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/section";
import HowIWork from "@/components/how-i-work";
import UniverseOfWork from "@/components/universe-of-work";
import CertificationsStrip from "@/components/certifications-strip";
import SolarSystem from "@/components/solar-system";
import FunFactBadge from "@/components/fun-fact-badge";
import { profile } from "@/data/profile";
import { howIWork } from "@/data/how-i-work";
import { funFacts } from "@/data/fun-facts";

export const metadata: Metadata = {
  title: "About — Sudhanva Kashyap",
  description: "Background and working style of Sudhanva Kashyap, a design-minded analytics strategist.",
};

export default function AboutPage() {
  const focusLine = profile.focusAreas.join(" · ");
  
  // Select 3–5 fun facts for About page
  const aboutFacts = funFacts
    .filter((f) => ["kenya-childhood", "bike-fixing", "vr-whiteboard", "racing-sim-retro", "photography-trails"].includes(f.id))
    .slice(0, 4);

  const fieldNotes = [
    "As a kid, I spent hours trying (and failing) to touch a giraffe at a sanctuary. I learned early that proximity doesn't mean understanding. You have to watch, listen, and build trust. That's still how I approach data: get close, but don't assume you know the story until you've listened.",
    "I love fixing bicycles. Diagnosing why a derailleur won't shift teaches systems thinking: is it the cable tension, the hanger alignment, or the chain wear? That same diagnostic mindset powers how I debug dashboards, trace root causes in data, and design experiments.",
    "I take long trail walks with a camera. Photography taught me composition, lighting, and editing—skills that translate directly into dashboard design, data storytelling, and visual hierarchy.",
    "I haven't been to Maasai Mara or Mombasa yet. I&apos;m endlessly curious about the places I haven&apos;t explored—that same curiosity drives how I approach new datasets, industries, and product problems.",
  ];
  return (
    <div className="text-gray-900 dark:text-gray-50">
      <section className="border-b border-transparent py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,240px)_1fr] md:items-center">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900 wire-surface-ticked">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} avatar`}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-50">{profile.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{focusLine}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">MSBA — Simon</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">About</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">I design systems that help teams make confident product decisions—backed by data, shaped by design.</h1>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-lg font-semibold text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
                  SK
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{profile.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">{focusLine}</p>
                </div>
              </div>
              <div className="mt-4 max-w-prose space-y-5 text-[17px] leading-relaxed md:text-lg text-gray-700 dark:text-gray-300">
                <p>
                  I started in communication design, learning how to tell stories with layouts, motion, and interfaces. Over time, I realized I was just as
                  interested in the systems behind those stories—the data, incentives, and trade-offs that shape what gets built.
                </p>
                <p>
                  Today, I live in that overlap. I design and analyze tools that help teams make clearer decisions about products, pricing, and growth. Sometimes that looks like a
                  portfolio optimizer or scraping engine. Sometimes it&apos;s a retention case study. Sometimes it&apos;s a VR experience that quietly tracks where people drop off.
                </p>
                <p>
                  My philosophy: structure first, then creativity. I start with constraints, metrics, and edge cases, then explore ways to work within them. I care about fast feedback loops, explainable analytics, and written clarity. If a stakeholder can&apos;t explain the logic to someone else, the model or dashboard isn&apos;t done yet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <CertificationsStrip items={profile.certifications} />
        </div>
      </section>

      {/* Solar System - geography journey */}
      <SolarSystem />

      <Section
        title="Why I build things"
        description="I'm drawn to problems where design, data, and systems thinking collide."
      >
        <div className="mx-auto max-w-prose space-y-5 text-[17px] leading-relaxed md:text-lg text-gray-700 dark:text-gray-300">
          <p>
            I earned my MS in Business Analytics (STEM) at Simon Business School, where I focused on experimentation, quantitative modeling, and translating data stories for leadership. Before grad school, I shipped immersive VR and 3D experiences, crafting narrative environments and collaborating with engineers, artists, and researchers.
          </p>
          <p>
            That blend of design sensitivity and analytical rigor now powers how I approach product and strategy work. Whether it&apos;s building an ETF intelligence tool, operationalizing research insights, or diagnosing production variability, I anchor decisions in data while keeping the human experience intelligible.
          </p>
          <p>
            I&apos;ve spent a lot of time thinking about how attention and cognitive load affect the way people use tools—especially in environments that demand constant context switching. That curiosity shaped projects like Neurodivulge, where I explored interfaces that support people who get easily overwhelmed by notifications and distractions. This mindset now guides how I build dashboards, write reports, and structure stakeholder updates.
          </p>
          <p>
            I&apos;m curious about how tools shape behavior, how incentives shape systems, and how the right narrative can turn a spreadsheet into a decision. I like zooming out to map the system, then zooming in to fix the details. And I care deeply about building things that feel calm and trustworthy, not chaotic or magical.
          </p>
        </div>
      </Section>

      <Section
        title="How design and analytics coexist in my work"
        description="I think of my projects as orbiting a few connected domains. Some live mostly in analytics, some in design, some in product strategy—but they all pull on each other."
      >
        <UniverseOfWork />
      </Section>

      <Section title="Field notes" description="A few personal details that shape how I see the world.">
        <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 wire-surface-ticked">
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              {fieldNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span className="leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Fun facts grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutFacts.map((fact) => (
              <FunFactBadge key={fact.id} fact={fact} size="md" />
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="How I work"
        description="The rituals and principles that keep my projects grounded."
      >
        <HowIWork content={howIWork} />
      </Section>

      <Section title="Today" description="What I&apos;m focused on right now.">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900 wire-surface-ticked">
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            I&apos;m open to full-time Product, Strategy, and Analytics roles in the US (F1 OPT eligible). If the portfolio resonates, reach out for a calm conversation about how I can help your team turn messy signals into confident decisions.
          </p>
        </div>
      </Section>
    </div>
  );
}
