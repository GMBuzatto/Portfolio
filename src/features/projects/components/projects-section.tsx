import { SectionHeading } from "@/components/section-heading";
import { featuredProject, projects } from "../data";
import { FeaturedProjectCard } from "./featured-project-card";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-titulo"
      className="flex scroll-mt-20 flex-col gap-10"
    >
      <SectionHeading
        id="projetos-titulo"
        eyebrow="Projetos"
        title="Meus projetos públicos no GitHub"
      />

      <FeaturedProjectCard project={featuredProject} />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.repositoryUrl} className="flex">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
