import Link from "next/link";
import type { Profile } from "@/data/profile";

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  const focusLine = profile.focusAreas.join(" · ");

  return (
    <section id="top" className="border-b border-transparent py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        <div className="space-y-10">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {focusLine}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 md:text-5xl">
              Hi, I’m {profile.name} — {profile.headline}
            </h1>
            <p className="max-w-prose text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {profile.education}. I pair analytical rigor with product sense to uncover growth levers, shape roadmaps, and ship thoughtful internal tools.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">Program</p>
              <p className="mt-2 text-base font-semibold text-gray-900 dark:text-gray-100">{profile.education}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">Focus</p>
              <p className="mt-2 text-base font-semibold text-gray-900 dark:text-gray-100">{focusLine}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              View Projects
            </Link>
            <Link
              href={profile.resumeUrl}
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-100 dark:hover:text-blue-400"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
