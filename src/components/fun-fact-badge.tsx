import type { FunFact } from "@/data/fun-facts";

interface FunFactBadgeProps {
  fact: FunFact;
  size?: "sm" | "md";
}

export default function FunFactBadge({ fact, size = "md" }: FunFactBadgeProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-dashed border-gray-300 bg-gray-50/50 font-medium text-gray-700 transition-all duration-150 motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02] motion-safe:hover:border-blue-400 motion-safe:hover:bg-blue-50/50 motion-safe:hover:text-blue-700 motion-safe:hover:shadow dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-300 dark:motion-safe:hover:border-blue-500 dark:motion-safe:hover:bg-blue-500/10 dark:motion-safe:hover:text-blue-300 ${sizeClasses[size]}`}
    >
      {fact.icon && <span className="text-base leading-none">{fact.icon}</span>}
      <span className="leading-snug">{fact.text}</span>
    </div>
  );
}
