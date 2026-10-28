import { SectionHeading } from "@/components/section-heading";
import { experiences } from "../data";

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-titulo"
      className="flex scroll-mt-20 flex-col gap-10"
    >
      <SectionHeading id="experiencia-titulo" eyebrow="Experiência" title="" />

      <ol className="relative flex flex-col gap-10 border-l border-border-strong pl-8">
        {experiences.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative flex flex-col gap-4">
            <span
              aria-hidden
              className={`absolute top-1.5 -left-[39px] size-3.5 rounded-full border-2 border-background ${
                job.current ? "bg-primary" : "bg-border-strong"
              }`}
            />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <p className="font-medium text-text-brand">{job.company}</p>
              </div>
              <p className="text-sm whitespace-nowrap text-text-tertiary">
                {job.period}
                {job.current && (
                  <span className="ml-2 rounded-full bg-highlight px-2 py-0.5 text-xs font-medium text-highlight-foreground">
                    Atual
                  </span>
                )}
              </p>
            </div>

            <ul className="flex list-disc flex-col gap-2 pl-5 text-text-secondary marker:text-text-brand">
              {job.highlights.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

            <ul aria-label="Tecnologias" className="flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border bg-surface px-2.5 py-1 text-xs font-medium text-text-secondary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
