import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) {
    return {
      title: "Case Study Not Found — Sudhanva Kashyap",
    };
  }

  return {
    title: `${study.title} — Sudhanva Kashyap`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50" aria-labelledby="case-study-title">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-0">
        <div className="space-y-4">
          <Link
            href="/case-studies"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← Back to case studies
          </Link>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{study.context}</p>
          <h1 id="case-study-title" className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            {study.title}
          </h1>
          <p className="max-w-prose text-lg leading-relaxed text-gray-700 dark:text-gray-300">{study.summary}</p>
          {study.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 text-sm text-gray-600 dark:text-gray-300">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 font-medium dark:border-gray-800 dark:bg-gray-900"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {study.link && (
            <Link
              href={study.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View supporting doc →
            </Link>
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">Visual</p>
          <p className="mt-2 leading-relaxed">
            Case study visual coming soon — this space will host funnels, KPI dashboards, or journey maps.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">Impact</h2>
          <ul className="mt-6 space-y-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {study.impact.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
