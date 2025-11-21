import Hero from "@/components/hero";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import CaseStudyCard from "@/components/case-study-card";
import SkillsGrid from "@/components/skills-grid";
import HowIWork from "@/components/how-i-work";
import ContactCard from "@/components/contact-card";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";
import { skills } from "@/data/skills";
import { howIWork } from "@/data/how-i-work";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
      <Hero profile={profile} />
      <Section
        id="projects"
        eyebrow="Highlighted work"
        title="Featured Projects"
        description="Analytics-heavy builds where I owned the product narrative, experimentation, and systems design."
      >
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        id="case-studies"
        eyebrow="Strategy & Analytics"
        title="Case Studies"
        description="End-to-end narratives where I combined quantitative depth with qualitative insight to steer outcomes."
      >
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Toolbox"
        title="Skills"
        description="I move fluidly between quant analysis, systems thinking, and product storytelling."
      >
        <SkillsGrid groups={skills} />
      </Section>

      <Section
        id="how-i-work"
        eyebrow="Operating system"
        title="How I Work"
        description="A lightweight framework for how I partner with founders, PMs, and cross-functional leaders."
      >
        <HowIWork content={howIWork} />
      </Section>

      <Section
        id="contact"
        eyebrow="Let’s partner"
        title="Contact"
        description="If the work resonates, reach out. I’m excited to help teams turn messy signals into confident decisions."
      >
        <ContactCard profile={profile} />
      </Section>
    </div>
  );
}
