import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const primaryLink = project.links?.[0];
  const heroTag = project.tags[0];
  const detailHref = `/projects/${project.slug}`;

  return (
    <article
      className="group rounded-2xl border p-6 shadow-sm backdrop-blur-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow dark:border-slate-800/70 dark:bg-slate-900/70 border-slate-200/80 bg-white/80 wire-surface wire-surface-ticked"
      aria-labelledby={`${project.slug}-title`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{project.timeframe}</p>
        {heroTag && (
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
            {heroTag}
          </span>
        )}
      </div>
      <h3 id={`${project.slug}-title`} className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-50">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">{project.role}</p>
      {project.collaborators && project.collaborators.length > 0 && (
        <p className="mt-1 text-xs italic text-gray-500 dark:text-gray-400">
          w/ {project.collaborators[0].name}
        </p>
      )}
      <p className="mt-3 text-base text-gray-700 dark:text-gray-300">{project.summary ?? project.subtitle}</p>
      {project.impactMetrics && project.impactMetrics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.impactMetrics.slice(0, 2).map((metric) => (
            <span
              key={metric.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
            >
              <span className="text-[0.65rem] uppercase tracking-wider text-gray-500 dark:text-gray-400">{metric.label}:</span>
              <span className="font-semibold">{metric.value}</span>
            </span>
          ))}
        </div>
      )}
      <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
        {project.techStack.map((tool) => (
          <span key={tool} className="rounded-full border border-gray-200 px-3 py-1 dark:border-gray-700">
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
        <Link
          href={detailHref}
          className="text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View project
        </Link>
        {primaryLink && (
          <Link
            href={primaryLink.url}
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 underline-offset-4 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            {primaryLink.label ?? "External doc"}
          </Link>
        )}
      </div>
    </article>
  );
}
