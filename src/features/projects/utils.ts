import { allProjects } from "./data";
import type { Project } from "./schema";

export function getProjectSlug(project: Project) {
  return project.name.toLowerCase();
}

export function getProjectHref(project: Project) {
  return `/projetos/${getProjectSlug(project)}`;
}

export function findProjectBySlug(slug: string) {
  return allProjects.find((project) => getProjectSlug(project) === slug);
}

export function parseGithubRepository(repositoryUrl: string) {
  const [owner, repo] = new URL(repositoryUrl).pathname.split("/").filter(Boolean);
  return { owner, repo };
}
