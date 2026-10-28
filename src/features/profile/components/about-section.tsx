import { BrainCircuit, Cloud, Network, Server } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "../data";

const focusIcons = [Server, Network, BrainCircuit, Cloud];

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="grid scroll-mt-20 gap-12 lg:grid-cols-2"
    >
      <div className="flex flex-col gap-6">
        <SectionHeading id="sobre-titulo" eyebrow="Sobre mim" title="" />
        {profile.about.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-text-secondary">
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="grid content-start gap-4 sm:grid-cols-2">
        {profile.focusAreas.map((area, index) => {
          const Icon = focusIcons[index % focusIcons.length];
          return (
            <li
              key={area.title}
              className="flex flex-col gap-3 rounded-lg border bg-surface p-5 transition-colors hover:border-primary"
            >
              <Icon className="size-6 text-text-brand" aria-hidden />
              <h3 className="font-semibold">{area.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{area.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
