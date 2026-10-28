import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectDetail } from "@/features/projects/components/project-detail";
import { allProjects } from "@/features/projects/data";
import { fetchReadme } from "@/features/projects/readme";
import { findProjectBySlug, getProjectHref, getProjectSlug } from "@/features/projects/utils";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: getProjectSlug(project) }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const project = findProjectBySlug((await params).slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: getProjectHref(project) },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const project = findProjectBySlug((await params).slug);
  if (!project) notFound();

  const readme = await fetchReadme(project.repositoryUrl);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <ProjectDetail project={project} readme={readme} />
      </main>
      <SiteFooter />
    </>
  );
}
