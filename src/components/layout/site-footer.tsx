import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { profile } from "@/features/profile/data";

export function SiteFooter() {
  return (
    <footer id="contato" className="scroll-mt-20 border-t bg-background-subtle">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-20 text-center">
        <h2 className="font-heading text-[10px] tracking-widest text-text-highlight uppercase">
          Contato
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            <Mail className="size-4" aria-hidden />
            {profile.email}
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-text-brand"
          >
            <LinkedinIcon className="size-4" aria-hidden />
            LinkedIn
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-text-brand"
          >
            <GithubIcon className="size-4" aria-hidden />
            GitHub
          </a>
        </div>

        <p className="pt-8 text-xs text-text-tertiary">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
