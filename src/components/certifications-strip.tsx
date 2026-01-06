import type { Profile } from "@/data/profile";

interface CertificationsStripProps {
  items: Profile["certifications"];
  compact?: boolean;
}

export default function CertificationsStrip({ items, compact = false }: CertificationsStripProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      className={`rounded-2xl border px-4 py-4 shadow-sm backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70 border-slate-200/80 bg-white/80 wire-surface ${
        compact ? "md:px-6" : "md:px-8"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">Certifications</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={`${item.name}-${item.org}`}
            className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
          >
            <span className="font-medium text-gray-900 dark:text-gray-100">{item.name}</span>
            <span className="mx-2 h-4 w-px bg-gray-300 dark:bg-gray-700" aria-hidden="true" />
            <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{item.org}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
