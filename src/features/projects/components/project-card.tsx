import { ArrowUpRight, Code2, FolderGit2 } from "lucide-react";
import type { Project } from "../schema";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border bg-surface p-5 transition-colors hover:border-primary">
      <header className="flex items-center gap-3">
        <FolderGit2 className="size-5 shrink-0 text-text-brand" aria-hidden />
        <h3 className="font-heading text-xs leading-relaxed">{project.name}</h3>
      </header>

      <p className="flex-1 text-sm leading-relaxed text-text-secondary">{project.description}</p>

      <footer className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <span className="inline-flex items-center gap-1.5 text-text-highlight">
          <Code2 className="size-4" aria-hidden />
          {project.language}
        </span>

        <div className="flex gap-4">
          {project.homepageUrl && (
            <a
              href={project.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-text-brand hover:underline"
            >
              Demo
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          )}
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-text-brand hover:underline"
          >
            Código
            <ArrowUpRight className="size-4" aria-hidden />
            <span className="sr-only">de {project.name} no GitHub (abre em nova aba)</span>
          </a>
        </div>
      </footer>
    </article>
  );
}
