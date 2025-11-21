import type { HowIWorkContent } from "@/data/how-i-work";

interface HowIWorkProps {
  content: HowIWorkContent;
}

export default function HowIWork({ content }: HowIWorkProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{content.summary}</p>
      <ul className="mt-6 space-y-4 text-sm text-gray-700 dark:text-gray-300">
        {content.principles.map((principle) => (
          <li key={principle.title} className="flex gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
              {principle.emoji}
            </span>
            <div className="space-y-1">
              <p className="font-semibold text-gray-900 dark:text-gray-50">{principle.title}</p>
              <p className="leading-relaxed">{principle.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
