"use client";

import Image from "next/image";
import { useState } from "react";
import { PlaceholderFrame } from "@/components/screenshot-gallery";
import { siteCopy } from "@/content/siteCopy";

const heroImage = {
  src: "/images/hero/mission-control.webp",
  alt: siteCopy.placeholders.heroVisualAlt,
};

const stats = [
  { value: "4", label: "Flagship builds" },
  { value: "Hybrid", label: "Design × Analytics" },
];

export default function HeroVisual() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="space-y-4">
      <div className="group rounded-2xl border p-4 shadow-sm backdrop-blur-sm transition duration-200 ease-out md:motion-safe:transition-transform md:motion-safe:duration-200 md:motion-safe:hover:-translate-y-1 md:motion-safe:hover:shadow-lg dark:border-slate-800/70 dark:bg-slate-900/70 border-slate-200/80 bg-white/80 wire-surface-ticked">
        {!imageError ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-950">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="relative">
            <PlaceholderFrame label={siteCopy.placeholders.heroVisual} className="h-60 rounded-xl shadow-sm" />
            <span className="absolute left-4 top-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 wire-label">FIG. 01 · HERO VISUAL</span> 
          </div>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border p-4 shadow-sm backdrop-blur-sm transition-shadow dark:border-slate-800/70 dark:bg-slate-900/70 border-slate-200/80 bg-white/80 wire-surface"
          >
            <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">{stat.value}</p>
            <p className="mt-1 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
