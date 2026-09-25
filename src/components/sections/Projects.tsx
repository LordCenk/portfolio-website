import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-scroll-offset bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="What I've Built" title="Projects" />
        <div className="flex flex-col gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
