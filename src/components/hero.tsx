"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroVisual from "@/components/hero-visual";
import FunFactBadge from "@/components/fun-fact-badge";
import type { Profile } from "@/data/profile";
import { funFacts } from "@/data/fun-facts";

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  const heroFact = funFacts.find((f) => f.id === "hero-curiosity");

  return (
    <section id="top" className="relative border-b border-transparent py-20 md:py-24 lg:py-28 2xl:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 md:text-5xl lg:text-6xl">
                I&apos;m {profile.name}—I grew up in Kenya, studied communication design in India, and now build calm, explainable analytics systems in the US.
              </h1>
              <p className="max-w-prose text-[17px] leading-relaxed md:text-lg text-gray-700 dark:text-gray-300">
                I help teams turn messy signals into confident product decisions.
              </p>
              {heroFact && (
                <div className="pt-2">
                  <FunFactBadge fact={heroFact} size="sm" />
                </div>
              )}
            </div>

            <div className="rounded-full border border-gray-200 bg-gray-50/50 px-6 py-3 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-400">
              <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>MSBA (Analytics) · B.Des (Communication Design)</span>
                <span className="text-gray-400 dark:text-gray-600">·</span>
                <span>Product + Strategy + Design</span>
                <span className="text-gray-400 dark:text-gray-600">·</span>
                <span>F1 OPT-eligible (US)</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                View projects
              </Link>
              <Link
                href="/case-studies"
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-100 dark:hover:text-blue-400"
              >
                View case studies
              </Link>

            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:pl-6"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
