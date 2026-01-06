import type { Metadata } from "next";
import AssetHero from "@/components/asset-hero";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScreenshotGallery, { PlaceholderFrame } from "@/components/screenshot-gallery";
import ScrollFadeIn from "@/components/scroll-fade-in";
import FunFactBadge from "@/components/fun-fact-badge";
import { projects } from "@/data/projects";
import { funFacts } from "@/data/fun-facts";
import { siteCopy } from "@/content/siteCopy";

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
      title: "Project Not Found - Sudhanva Kashyap",
    };
  }

  return {
    title: `${project.title} - Sudhanva Kashyap`,
    description: project.subtitle,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  // Map project slug to a fun fact
  const projectFactMap: Record<string, string> = {
    "invest-ai": "dorm-room-hacking",
    "unified-scraper": "racing-sim-retro",
    "neurodivulge": "vr-whiteboard",
    "renderpub-vr": "vr-whiteboard",
  };
  const projectFact = funFacts.find((f) => f.id === projectFactMap[slug]);

  return (
    <article className="text-gray-900 dark:text-gray-50" aria-labelledby="project-title">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <Link
            href="/projects"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← Back to projects
          </Link>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {project.role} · {project.timeframe}
            {project.location ? <> · {project.location}</> : null}
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
          <div className="h-[1px] w-full mb-8 bg-gradient-to-r from-sky-400/90 via-purple-400/90 to-emerald-300/70 dark:opacity-100 opacity-80" />
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
          {project.collaborators && project.collaborators.length > 0 && (
            <section className="mt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Collaborators
              </p>
              <div className="flex flex-wrap gap-2">
                {project.collaborators.map((collab) => (
                  collab.link ? (
                    <Link
                      key={collab.name}
                      href={collab.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-300"
                    >
                      <span>{collab.name}</span>
                      {collab.role && <span className="text-gray-500 dark:text-gray-400">· {collab.role}</span>}
                    </Link>
                  ) : (
                    <span
                      key={collab.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                    >
                      <span>{collab.name}</span>
                      {collab.role && <span className="text-gray-500 dark:text-gray-400">· {collab.role}</span>}
                    </span>
                  )
                ))}
              </div>
            </section>
          )}
          {project.funFact && (
            <div className="mt-4">
              <span className="inline-flex items-center rounded-full border border-dashed border-gray-300 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
                Fun fact · <span className="ml-2 normal-case tracking-normal text-gray-900 dark:text-gray-100">{project.funFact}</span>
              </span>
            </div>
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

        <AssetHero
          image={project.heroImage}
          placeholderLabel={siteCopy.placeholders.heroVisual}
          aspect="16/9"
          className="mt-8"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ScrollFadeIn delay={0.08}>
            <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900 wire-surface-ticked">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Why I built this</h2>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-gray-700 dark:text-gray-300">{project.problem}</p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.16}>
            <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900 wire-surface-ticked">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">What I built</h2>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-gray-700 dark:text-gray-300">{project.solution}</p>
            </div>
          </ScrollFadeIn>
        </div>

        <ScrollFadeIn>
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
        </ScrollFadeIn>

        <section className="mt-10">
          {project.gallery && project.gallery.length > 0 ? (
            <ScreenshotGallery images={project.gallery} altPrefix={project.title} />
          ) : (
            <p className="text-sm text-gray-600 dark:text-gray-400">{siteCopy.placeholders.screenshot}</p>
          )}
        </section>

        {project.roadmap && project.roadmap.length > 0 && (
          <ScrollFadeIn>
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">Roadmap</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                This project is still evolving. Here&apos;s what I&apos;m exploring next:
              </p>
              <ul className="mt-4 space-y-3 text-base text-gray-700 dark:text-gray-300">
                {project.roadmap.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </ScrollFadeIn>
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
            <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)]">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{project.architecture}</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                {project.diagramLabel && (
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                    {project.diagramLabel}
                  </p>
                )}
                <PlaceholderFrame
                  label="Architecture diagram placeholder"
                  className="mt-4 h-48 rounded-xl text-sm font-medium shadow-sm"
                />
              </div>
            </div>
          </section>
        )}

        {project.techStack.length > 0 && (
          <ScrollFadeIn>
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
          </ScrollFadeIn>
        )}

        {/* Field Note - personal context */}
        {projectFact && (
          <ScrollFadeIn>
            <section className="mt-16 border-t border-gray-200 pt-12 dark:border-gray-800">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Field note
              </h2>
              <div className="mt-6">
                <FunFactBadge fact={projectFact} size="md" />
              </div>
            </section>
          </ScrollFadeIn>
        )}
      </div>
    </article>
  );
}
