import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, reverse }: { project: Project; reverse?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-8 overflow-hidden rounded-2xl border border-border bg-card lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="relative aspect-video w-full lg:w-1/2">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
          unoptimized={project.image.endsWith(".svg")}
        />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-4 p-6 lg:p-8">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>

        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-brand-purple hover:text-brand-purple"
          >
            <FaGithub /> Source
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              <FiExternalLink /> {project.demoLabel ?? "Live Demo"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
