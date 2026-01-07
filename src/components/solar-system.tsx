"use client";

import React from "react";
import { useTheme } from "next-themes";
import { siteCopy } from "@/content/siteCopy";

const cn = (...classes: Array<string | false | undefined | null>) => classes.filter(Boolean).join(" ");

interface LocationNode {
  id: string;
  label: string;
  years: string;
  description: string;
  x: number;
  y: number;
}

// Locations are user-facing and centralized in siteCopy
const locations: LocationNode[] = (siteCopy?.solarSystem?.locations as unknown as LocationNode[]) || [
  {
    id: "east-africa",
    label: "East Africa",
    years: "2000–2018",
    description: "Where curiosity was born: wildlife, bikes, and backyard experiments.",
    x: 50,
    y: 20,
  },
  {
    id: "design-school",
    label: "Design school",
    years: "2018–2023",
    description: "Design studies, VR experiments, early product roles.",
    x: 25,
    y: 60,
  },
  {
    id: "analytics-classroom",
    label: "Analytics classroom",
    years: "2023–Present",
    description: "MS Business Analytics, building tools for product decisions.",
    x: 75,
    y: 60,
  },
];

export default function SolarSystem() {
  const { theme, systemTheme } = useTheme();
  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">{siteCopy.solarSystem.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">{siteCopy.solarSystem.intro}</p>
        </div>
        <div className="relative mx-auto h-[400px] max-w-4xl sm:h-[500px]">
          <svg className="pointer-events-none absolute inset-0 h-full w-full dark:hidden" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <ellipse cx="50%" cy="50%" rx="30%" ry="15%" fill="none" stroke="currentColor" strokeWidth="0.5" className={cn("animate-spin-slow", isDark ? "" : "text-gray-300 opacity-25")} style={{ animationDuration: "40s" }} />
            <ellipse cx="50%" cy="50%" rx="45%" ry="25%" fill="none" stroke="currentColor" strokeWidth="0.5" className={cn("animate-spin-slow", isDark ? "" : "text-gray-300 opacity-20")} style={{ animationDuration: "60s", animationDirection: "reverse" }} />
            <ellipse cx="50%" cy="50%" rx="60%" ry="35%" fill="none" stroke="currentColor" strokeWidth="0.5" className={cn("animate-spin-slow", isDark ? "" : "text-gray-300 opacity-15")} style={{ animationDuration: "80s" }} />
          </svg>

          <div className="pointer-events-none absolute inset-0 hidden dark:block">
            <div className={cn("absolute left-[20%] top-[15%] h-1 w-1 animate-pulse rounded-full", isDark ? "bg-sky-300/90" : "bg-sky-500/70", "opacity-40")} style={{ animationDuration: "3s" }} />
            <div className={cn("absolute left-[70%] top-[25%] h-1 w-1 animate-pulse rounded-full", isDark ? "bg-purple-300/90" : "bg-purple-400/70", "opacity-30")} style={{ animationDuration: "4s", animationDelay: "1s" }} />
            <div className={cn("absolute left-[40%] top-[70%] h-1 w-1 animate-pulse rounded-full", isDark ? "bg-emerald-300/90" : "bg-emerald-400/70", "opacity-30")} style={{ animationDuration: "5s", animationDelay: "2s" }} />
            <div className={cn("absolute left-[85%] top-[65%] h-1 w-1 animate-pulse rounded-full", isDark ? "bg-yellow-300/90" : "bg-yellow-400/70", "opacity-25")} style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
            <div className={cn("absolute left-[10%] top-[50%] h-1 w-1 animate-pulse rounded-full", isDark ? "bg-pink-300/90" : "bg-pink-400/70", "opacity-25")} style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
          </div>

          {locations.map((loc) => (
            <div key={loc.id} className="group absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${loc.x}%`, top: `${loc.y}%` }}>
              <div className="relative flex h-12 w-12 items-center justify-center">
                <div className={cn("absolute inset-0 animate-ping rounded-full opacity-20 group-hover:opacity-30 motion-safe:animate-ping motion-reduce:animate-none", isDark ? "bg-sky-400" : "bg-sky-500")} />
                <div className={cn("relative h-8 w-8 rounded-full border-2 shadow-md transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg", isDark ? "border-blue-400 bg-gray-800" : "border-blue-500 bg-white") } />
              </div>

              <div className="pointer-events-none absolute left-1/2 top-full mt-4 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="w-64 rounded-lg border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{loc.label}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{loc.years}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{loc.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow linear infinite; transform-origin: center; }
        @media (prefers-reduced-motion: reduce) { .animate-spin-slow, .animate-ping { animation: none; } }
      `}</style>
    </section>
  );
}
