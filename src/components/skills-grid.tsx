type SkillsRecord = Record<string, string[]>;

interface SkillsGridProps {
  groups: SkillsRecord;
}

export default function SkillsGrid({ groups }: SkillsGridProps) {
  const entries = Object.entries(groups);
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      {entries.map(([category, items]) => {
        const label = category
          .split(/[\s_-]+/)
          .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
          .join(" ");
        return (
          <div
            key={category}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{label}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
