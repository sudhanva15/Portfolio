import type { Metadata } from "next";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Sudhanva Kashyap",
  description: "Portfolio of analytics, product, and strategy builds led by Sudhanva Kashyap.",
};

export default function ProjectsPage() {
  return (
    <div className="text-gray-900 dark:text-gray-50">
      <section className="border-b border-transparent py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">Project Library</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">Projects</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            End-to-end builds where my MSBA and design background show up in shipped work. From ETF intelligence engines to self-healing scrapers to VR content ops, each project blends analytics rigor with calm, human-centered execution.
          </p>
        </div>
      </section>

      <Section
        title="All Projects"
        description="Browse the complete archive. Every build blends user understanding, quantitative rigor, and pragmatic delivery."
      >
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
