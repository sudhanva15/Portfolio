import type { Metadata } from "next";
import Image from "next/image";
import AssetHero from "@/components/asset-hero";
import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderFrame from "@/components/placeholder-frame";
import ScrollFadeIn from "@/components/scroll-fade-in";
import FunFactBadge from "@/components/fun-fact-badge";
import CollaboratorCard from "@/components/collaborator-card";
import { caseStudies } from "@/data/case-studies";
import { funFacts } from "@/data/fun-facts";
import { siteCopy } from "@/content/siteCopy";

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
      title: "Case Study Not Found - Sudhanva Kashyap",
    };
  }

  return {
    title: `${study.title} - Sudhanva Kashyap`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  // Map case study slug to a fun fact
  const studyFactMap: Record<string, string> = {
    "penpal-b2b": "svc-consulting",
    "manufacturing-pricing": "racing-sim-retro",
  };
  const studyFact = funFacts.find((f) => f.id === studyFactMap[slug]);

  return (
    <article className="text-gray-900 dark:text-gray-50" aria-labelledby="case-study-title">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <Link
            href="/case-studies"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← Back to case studies
          </Link>
          {study.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
              {study.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
          <h1 id="case-study-title" className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            {study.title}
          </h1>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{study.context}</p>
          <p className="max-w-prose text-lg leading-relaxed text-gray-700 dark:text-gray-300">{study.summary}</p>
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
          <div className="h-[1px] w-full mb-8 bg-gradient-to-r from-sky-400/90 via-purple-400/90 to-emerald-300/70 dark:opacity-100 opacity-80" />
          {study.collaborators && study.collaborators.length > 0 && (
            <section className="mt-6 mb-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Collaborators
              </p>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {study.collaborators.map((collab) => (
                  <CollaboratorCard
                    key={collab.name}
                    name={collab.name}
                    program={collab.program}
                    additionalInfo={collab.additionalInfo}
                    linkedinUrl={collab.linkedinUrl}
                    imageSrc={collab.imageSrc}
                    photoCredit={collab.photoCredit}
                  />
                ))}
              </div>
            </section>
          )}
        </div>

        <AssetHero
          image={study.heroImage}
          placeholderLabel={siteCopy.placeholders.heroVisual}
          aspect="16/9"
          className="mt-8"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <ScrollFadeIn>
            <section>
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
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.2}>
            <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900 wire-surface-ticked">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">Secondary visual</p>
              {study.secondaryImage ? (
                <div className="mt-4 space-y-2">
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                    <Image
                      src={study.secondaryImage.src}
                      alt={study.secondaryImage.alt}
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {study.secondaryImage.caption && (
                    <p className="text-center text-xs italic text-gray-600 dark:text-gray-400">{study.secondaryImage.caption}</p>
                  )}
                </div>
              ) : (
                <PlaceholderFrame
                  label={siteCopy.placeholders.heroVisual}
                  className="mt-4 h-40 rounded-xl text-sm font-medium shadow-sm"
                />
              )}
            </div>
          </ScrollFadeIn>
        </div>

        {/* Field Note - personal context */}
        {studyFact && (
          <ScrollFadeIn>
            <section className="mt-16 border-t border-gray-200 pt-12 dark:border-gray-800">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Field note
              </h2>
              <div className="mt-6">
                <FunFactBadge fact={studyFact} size="md" />
              </div>
            </section>
          </ScrollFadeIn>
        )}
      </div>
    </article>
  );
}
