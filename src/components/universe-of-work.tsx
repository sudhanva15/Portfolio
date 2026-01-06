"use client";

import { useState } from "react";

const nodes = [
  { id: "product", label: "Product Systems", ring: 1 },
  { id: "analytics", label: "Analytics & BI", ring: 2 },
  { id: "design", label: "Design & VR", ring: 2 },
  { id: "pricing", label: "Pricing & Strategy", ring: 3 },
  { id: "behavior", label: "Behavior & Research", ring: 3 },
];

const nodeNotes: Record<string, string> = {
  product: "Examples: Invest_AI optimizer, Unified Scraper control plane.",
  analytics: "Examples: retention cohorts, telemetry ops, dbt modeling.",
  design: "Examples: Renderpub VR rituals, behavior-led prototyping.",
  pricing: "Examples: SVC pricing council, Perry’s elasticity playbooks.",
  behavior: "Examples: Neurodivulge archetypes, PenPal enablement labs.",
};

const ringPositions: Record<number, string[]> = {
  1: ["top-[18%] left-1/2 -translate-x-1/2"],
  2: ["top-1/2 left-[20%] -translate-y-1/2", "top-1/2 right-[20%] -translate-y-1/2"],
  3: ["bottom-[18%] left-[28%]", "bottom-[18%] right-[28%]"],
};

export default function UniverseOfWork() {
  const defaultActive = nodes[0]?.id ?? null;
  const [activeNode, setActiveNode] = useState<string | null>(defaultActive);
  const ringOrder: Record<number, number> = { 1: 0, 2: 0, 3: 0 };

  return (
    <div className="mx-auto max-w-xl space-y-4">
      <div className="relative aspect-square rounded-2xl border p-6 shadow-sm backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70 border-slate-200/80 bg-white/80 wire-surface-ticked">
        <div className="absolute inset-0 pointer-events-none dark:md:motion-safe:animate-[spin_40s_linear_infinite]">
          <div className="absolute inset-6 rounded-full border border-gray-100 opacity-50 dark:border-gray-700 dark:shadow-[0_0_20px_rgba(59,130,246,0.2)]"></div>
          <div className="absolute inset-12 rounded-full border border-gray-200 opacity-70 dark:border-gray-600 dark:shadow-[0_0_20px_rgba(59,130,246,0.2)]"></div>
          <div className="absolute inset-20 rounded-full border border-gray-300 opacity-80 dark:border-gray-500 dark:shadow-[0_0_20px_rgba(59,130,246,0.2)]"></div>
        </div>
        <div className="absolute inset-0">
          {nodes.map((node) => {
            const positionIndex = ringOrder[node.ring] ?? 0;
            const positionClass = ringPositions[node.ring]?.[positionIndex] ?? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
            ringOrder[node.ring] = positionIndex + 1;

            return (
              <button
                type="button"
                key={node.id}
                className={`absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border text-center text-xs font-semibold tracking-wide shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 ${positionClass} ${
                  activeNode === node.id
                    ? "border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-500/20 dark:text-blue-100"
                    : "border-gray-300 bg-transparent text-gray-600 dark:border-gray-700 dark:text-gray-300"
                }`}
                onMouseEnter={() => setActiveNode(node.id)}
                onFocus={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(defaultActive)}
                onBlur={() => setActiveNode(defaultActive)}
              >
                <span>{node.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center text-sm text-gray-600 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 wire-surface">
        {activeNode ? nodeNotes[activeNode] ?? "Examples: Invest_AI, pricing capstone, VR simulation." : "Hover to explore each orbit."}
      </div>
    </div>
  );
}
