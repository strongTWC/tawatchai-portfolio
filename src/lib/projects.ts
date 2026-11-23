import { Project } from "@/types/project";
import { projects } from "@/data/projects";

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.publicationStatus === "Published");
}

export function getFeaturedProjects(): Project[] {
  return getPublishedProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getPublishedProjects().find((p) => p.slug === slug);
}

export function getRelatedProjects(project: Project, limit = 2): Project[] {
  const sameCategory = getPublishedProjects().filter(
    (p) => p.id !== project.id && p.category === project.category
  );
  const others = getPublishedProjects().filter(
    (p) => p.id !== project.id && p.category !== project.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getNextProject(project: Project): Project | undefined {
  const published = getPublishedProjects();
  const index = published.findIndex((p) => p.id === project.id);
  return index >= 0 ? published[(index + 1) % published.length] : undefined;
}
