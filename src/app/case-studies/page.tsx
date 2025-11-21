import type { Metadata } from "next";
import Section from "@/components/section";
import CaseStudyCard from "@/components/case-study-card";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Sudhanva Kashyap",
  description: "Structured problem solving and analytics-led case studies by Sudhanva Kashyap.",
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
      <section className="border-b border-transparent py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">Strategy & Analytics</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">Case Studies</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Structured problem solving with measurable impact across GTM, operations, and analytics. Each engagement pairs calm rigor with decision-ready storytelling.
          </p>
        </div>
      </section>

      <Section
        title="All Case Studies"
        description="Browse engagements spanning pricing, enablement, ops, and analytics."
      >
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Section>
    </div>
  );
}
