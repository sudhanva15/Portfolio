import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const detailHref = `/case-studies/${study.slug}`;
  return (
    <article
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
      aria-labelledby={`${study.slug}-title`}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">{study.context}</p>
      <h3 id={`${study.slug}-title`} className="mt-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
        {study.title}
      </h3>
      <p className="mt-3 text-base text-gray-700 dark:text-gray-300">{study.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
        {study.impact.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-blue-600 dark:text-blue-400">•</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300">
            {tag}
          </span>
        ))}
      </div>
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
