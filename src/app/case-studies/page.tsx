import type { Metadata } from "next";
import Section from "@/components/section";
import CaseStudyCard from "@/components/case-study-card";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies - Sudhanva Kashyap",
  description: "Structured problem solving and analytics-led case studies by Sudhanva Kashyap.",
};

export default function CaseStudiesPage() {
  return (
    <div className="text-gray-900 dark:text-gray-50">
      <section className="border-b border-transparent py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">Strategy & Analytics</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">Case Studies</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Real-world decision stories from consulting and client work, presented NDA-safe with anonymized details. Each case focuses on the problem, the trade-offs, and what I learned, spanning pricing, retention, GTM, and ops.
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
