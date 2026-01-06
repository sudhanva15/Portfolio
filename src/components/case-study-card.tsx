import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const detailHref = `/case-studies/${study.slug}`;
  return (
    <article
      className="rounded-2xl border p-6 shadow-sm backdrop-blur-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-slate-800/70 dark:bg-slate-900/70 border-slate-200/80 bg-white/80 wire-surface wire-surface-ticked"
      aria-labelledby={`${study.slug}-title`}
    >
      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
        {study.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">{study.context}</p>
      <h3 id={`${study.slug}-title`} className="mt-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
        {study.title}
      </h3>
      <p className="mt-3 text-base text-gray-700 dark:text-gray-300">{study.summary}</p>
      {study.impact && study.impact.length > 0 && (
        <p className="mt-4 flex gap-2 text-sm text-gray-700 dark:text-gray-300">
          <span className="text-blue-600 dark:text-blue-400">→</span>
          <span className="leading-relaxed">{study.impact[0]}</span>
        </p>
      )}
      <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
        <Link
          href={detailHref}
          className="text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Open case study →
        </Link>
        {study.link && (
          <Link
            href={study.link}
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 underline-offset-4 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            External brief ↗
          </Link>
        )}
      </div>
    </article>
  );
}
