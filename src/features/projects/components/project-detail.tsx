import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import type { Project } from "../schema";
import { ReadmeContent } from "./readme-content";

export function ProjectDetail({ project, readme }: { project: Project; readme: string | null }) {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-6 border-b pb-10">
        <Link
          href="/#projetos"
          className="inline-flex w-fit items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Voltar para projetos
        </Link>

        <div className="flex flex-col gap-3">
          <p className="font-heading text-[10px] tracking-widest text-text-highlight uppercase">
            README do projeto
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.name}</h1>
          <p className="max-w-3xl leading-relaxed text-text-secondary">{project.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="inline-flex items-center gap-1.5 text-text-highlight">
            <Code2 className="size-4" aria-hidden />
            {project.language}
          </span>
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
            Ver no GitHub
            <ArrowUpRight className="size-4" aria-hidden />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
      </header>

      {readme ? (
        <ReadmeContent markdown={readme} repositoryUrl={project.repositoryUrl} />
      ) : (
        <p className="text-text-secondary">
          Não foi possível carregar o README agora.{" "}
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-text-brand hover:underline"
          >
            Leia direto no GitHub
          </a>
          .
        </p>
      )}
    </div>
  );
}
