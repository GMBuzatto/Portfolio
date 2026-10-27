import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { profile } from "../data";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="grid scroll-mt-20 items-center gap-12 md:grid-cols-[1fr_auto]"
    >
      <div className="flex flex-col gap-6">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Aberto a novas oportunidades
        </p>

        <div className="flex flex-col gap-4">
          <h1
            id="inicio-titulo"
            className="font-heading text-2xl leading-snug sm:text-3xl lg:text-4xl lg:leading-snug"
          >
            {profile.name}
          </h1>
          <p className="text-xl font-semibold text-text-brand sm:text-2xl">{profile.role}</p>
          <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
            {profile.headline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={profile.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            <Download className="size-4" aria-hidden />
            Baixar currículo
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-text-brand"
          >
            <Mail className="size-4" aria-hidden />
            Entrar em contato
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2.5 text-text-secondary transition-colors hover:text-text-brand"
          >
            <LinkedinIcon className="size-5" aria-hidden />
            <span className="sr-only">LinkedIn (abre em nova aba)</span>
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2.5 text-text-secondary transition-colors hover:text-text-brand"
          >
            <GithubIcon className="size-5" aria-hidden />
            <span className="sr-only">GitHub (abre em nova aba)</span>
          </a>
        </div>
      </div>

      <div className="order-first mx-auto rounded-full bg-gradient-to-br from-primary to-highlight p-1 md:order-none md:mx-0">
        <Image
          src={profile.avatarUrl}
          alt={`Foto de ${profile.name}`}
          width={260}
          height={260}
          priority
          className="size-44 rounded-full border-4 border-background object-cover sm:size-56 lg:size-64"
        />
      </div>
    </section>
  );
}
