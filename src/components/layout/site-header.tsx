import { Download } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { profile } from "@/features/profile/data";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#inicio" className="font-heading text-xs text-text-brand">
          GmBuzatto
        </a>

        <nav aria-label="Seções" className="hidden md:block">
          <ul className="flex gap-8 text-sm text-text-secondary">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-md border border-border-strong px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary hover:text-text-brand"
          >
            <Download className="size-4" aria-hidden />
            Currículo
          </a>
        </div>
      </div>
    </header>
  );
}
