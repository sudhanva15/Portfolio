import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
}

export default function Section({ id, title, eyebrow, description, children }: SectionProps) {
  return (
    <section id={id} className="border-b border-transparent py-24 md:py-28 wire-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:motion-safe:animate-[fadeInUp_0.4s_ease-out]">
        <div className="mb-12 space-y-3">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 wire-label">{eyebrow}</p>}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl">{title}</h2>
            {description && <p className="max-w-prose text-base leading-relaxed text-gray-700 md:leading-loose dark:text-gray-300">{description}</p>}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
