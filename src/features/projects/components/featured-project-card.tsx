import { ArrowUpRight, BookOpen, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import type { FeaturedProject } from "../schema";
import { getProjectHref } from "../utils";

export function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <article className="flex flex-col gap-8 rounded-xl border-2 border-primary bg-surface p-6 sm:p-8">
      <header className="flex flex-col gap-4">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-highlight px-3 py-1 font-heading text-[10px] tracking-widest text-highlight-foreground uppercase">
          <Star className="size-3" aria-hidden />
          Projeto principal
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.name}</h3>
          <p className="text-lg font-medium text-text-brand">{project.tagline}</p>
        </div>
        <p className="max-w-3xl leading-relaxed text-text-secondary">{project.description}</p>
      </header>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {project.highlights.map((highlight) => (
          <li key={highlight.title} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-text-highlight" aria-hidden />
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-semibold">{highlight.title}</h4>
              <p className="text-sm leading-relaxed text-text-secondary">{highlight.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <footer className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-2" aria-label="Tecnologias">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border bg-background-subtle px-2.5 py-1 text-xs text-text-secondary"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 flex-wrap items-center gap-4 text-sm">
          <Link
            href={getProjectHref(project)}
            className="inline-flex items-center gap-1.5 rounded-md border border-primary px-4 py-2 font-medium text-text-brand transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <BookOpen className="size-4" aria-hidden />
            Ler README completo
          </Link>
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
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Ver código
            <ArrowUpRight className="size-4" aria-hidden />
            <span className="sr-only">de {project.name} no GitHub (abre em nova aba)</span>
          </a>
        </div>
      </footer>
    </article>
  );
}
