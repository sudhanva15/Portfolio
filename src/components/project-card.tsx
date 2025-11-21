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
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
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
      <p className="mt-3 text-base text-gray-700 dark:text-gray-300">{project.subtitle}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
        {project.impact.map((detail) => (
          <li key={detail} className="flex gap-2">
            <span className="text-blue-600 dark:text-blue-400">•</span>
            <span className="max-w-prose leading-relaxed">{detail}</span>
          </li>
        ))}
      </ul>
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
