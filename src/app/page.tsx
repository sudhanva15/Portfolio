import Hero from "@/components/hero";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import CaseStudyCard from "@/components/case-study-card";
import SkillsGrid from "@/components/skills-grid";
import HowIWork from "@/components/how-i-work";
import ContactCard from "@/components/contact-card";
import CertificationsStrip from "@/components/certifications-strip";
import CtaStrip from "@/components/cta-strip";
import ScrollFadeIn from "@/components/scroll-fade-in";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";
import { skills } from "@/data/skills";
import { howIWork } from "@/data/how-i-work";

export default function Home() {
  return (
    <div className="text-gray-900 dark:text-gray-50">
      <Hero profile={profile} />
      <CtaStrip />
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <CertificationsStrip items={profile.certifications} compact />
      </div>
      <Section
        id="projects"
        eyebrow="Selected Work"
        title="Projects"
        description="End-to-end builds combining analytics, product thinking, and systems design."
      >
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.slice(0, 4).map((project, idx) => (
              <ScrollFadeIn key={project.slug} delay={idx * 0.1}>
              <ProjectCard project={project} />
            </ScrollFadeIn>
          ))}
        </div>
      </Section>

      <Section
        id="case-studies"
        eyebrow="Real-World Work"
        title="Case Studies"
        description="Decision-making in action: strategy, analytics, and business outcomes."
      >
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {caseStudies.map((study, idx) => (
              <ScrollFadeIn key={study.slug} delay={idx * 0.1}>
              <CaseStudyCard study={study} />
            </ScrollFadeIn>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Toolbox"
        title="Skills"
        description="Quant analysis, systems thinking, and product storytelling."
      >
        <SkillsGrid groups={skills} />
      </Section>

      <Section
        id="how-i-work"
        eyebrow="Principles"
        title="How I Work"
        description="How I partner with founders, PMs, and cross-functional teams."
      >
        <HowIWork content={howIWork} />
      </Section>

      <Section
        id="contact"
        eyebrow="Get in touch"
        title="Contact"
        description="If you're hiring for analytics or product roles and this resonates, I'd love to talk."
      >
        <ContactCard profile={profile} />
      </Section>
    </div>
  );
}
