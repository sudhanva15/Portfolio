import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScreenshotGallery, { PlaceholderFrame } from "@/components/screenshot-gallery";
import {
  InvestAiArchitectureDiagram,
  NeurodivulgeArchitectureDiagram,
  RenderpubVrArchitectureDiagram,
  UnifiedScraperArchitectureDiagram,
} from "@/components/architecture-diagrams";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — Sudhanva Kashyap",
    };
  }

  return {
    title: `${project.title} — Sudhanva Kashyap`,
    description: project.subtitle,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50" aria-labelledby="project-title">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-0">
        <div className="space-y-4">
          <Link
            href="/projects"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← Back to projects
          </Link>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {project.role} · {project.timeframe}
          </p>
          <h1 id="project-title" className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            {project.title}
          </h1>
          <p className="max-w-prose text-lg text-gray-700 dark:text-gray-300">{project.subtitle}</p>
          <div className="flex flex-wrap gap-2 pt-2 text-sm text-gray-600 dark:text-gray-300">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-gray-200 px-3 py-1 dark:border-gray-800">
                {tag}
              </span>
            ))}
          </div>
          {project.impactMetrics && project.impactMetrics.length > 0 && (
            <section className="mt-4">
              <div className="flex flex-wrap gap-3">
                {project.impactMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200"
                  >
                    <span className="mr-1 text-[0.65rem] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                      {metric.label}:
                    </span>
                    <span>{metric.value}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-4">
              {project.links.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-700 dark:border-gray-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {link.label ?? "View link"}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          {project.heroImage ? (
            <Image
              src={project.heroImage}
              alt={`${project.title} hero`}
              width={1600}
              height={900}
              className="h-auto w-full max-h-[320px] object-cover md:max-h-[420px]"
              priority
            />
          ) : (
            <PlaceholderFrame label="Project visual coming soon" className="h-48 border-none bg-transparent text-sm font-medium" />
          )}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Problem</h2>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-gray-700 dark:text-gray-300">{project.problem}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Solution</h2>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-gray-700 dark:text-gray-300">{project.solution}</p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">Impact</h2>
          <ul className="mt-4 space-y-3 text-base text-gray-700 dark:text-gray-300">
            {project.impact.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-10">
            <ScreenshotGallery images={project.gallery} altPrefix={project.title} />
          </section>
        )}

        {project.impactMetrics && project.impactMetrics.length > 0 && (
          <section className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
              Key metrics
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.impactMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{metric.label}</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-50">{metric.value}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.architecture && (
          <section className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">Architecture</h2>
            <div className="mt-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{project.architecture}</p>
              {project.slug === "invest-ai" && <InvestAiArchitectureDiagram />}
              {project.slug === "unified-scraper" && <UnifiedScraperArchitectureDiagram />}
              {project.slug === "neurodivulge" && <NeurodivulgeArchitectureDiagram />}
              {project.slug === "renderpub-vr" && <RenderpubVrArchitectureDiagram />}
            </div>
          </section>
        )}

        {project.techStack.length > 0 && (
          <section className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">Tech used</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
