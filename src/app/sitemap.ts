import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getPublishedProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticRoutes = ["", "/about", "/projects", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
  const projectRoutes = getPublishedProjects().map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: p.completedAt ? new Date(p.completedAt) : new Date(),
  }));
  return [...staticRoutes, ...projectRoutes];
}
