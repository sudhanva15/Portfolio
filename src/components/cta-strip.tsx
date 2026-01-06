import Link from "next/link";

const ctas = [
  {
    label: "Explore builds",
    description: "Dashboards, scrapers, and behavioral tools that ship and get used.",
    href: "/projects",
  },
  {
    label: "See decision stories",
    description: "Case studies that follow the data from noise to recommendation.",
    href: "/case-studies",
  },
  {
    label: "Learn how I work",
    description: "A hybrid of design thinking, analytics, and systems-level curiosity.",
    href: "/about",
  },
];

export default function CtaStrip() {
  return (
    <section className="border-b border-transparent py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ctas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className="rounded-2xl border p-5 shadow-sm backdrop-blur-sm transition duration-200 ease-out hover:-translate-y-1 hover:shadow-md md:motion-safe:animate-[fade-in-up_0.35s_ease-out] dark:border-slate-800/70 dark:bg-slate-900/70 border-slate-200/80 bg-white/80 wire-surface"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{cta.label}</p>
              <p className="mt-3 text-base font-medium text-gray-900 dark:text-gray-100">{cta.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                Start here
                <span aria-hidden="true" className="ml-2 text-lg">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
