import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { TypeBadge } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  wide = false,
  className,
}: {
  project: Project;
  wide?: boolean;
  className?: string;
}) {
  return (
    <article
      data-testid={`project-card-${project.slug}`}
      className={cn("group flex h-full flex-col", className)}
    >
      <Link
        href={`/projects/${project.slug}`}
        data-testid={`project-card-link-${project.slug}`}
        aria-label={`View case study: ${project.title}`}
        className="flex h-full flex-col"
      >
        <div className="relative overflow-hidden border border-hairline bg-ivory-soft">
          <div className={cn("relative", wide ? "aspect-[16/9] lg:aspect-[21/9]" : "aspect-[16/10]")}>
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={`${project.title} — project cover image`}
                fill
                sizes={wide ? "(min-width: 1024px) 88rem, 100vw" : "(min-width: 640px) 33vw, 100vw"}
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
            ) : (
              <div
                data-testid="project-card-image-fallback"
                className="flex h-full items-center justify-center"
                aria-label="Cover image to be added"
              >
                <span className="font-serif text-7xl font-light text-stone-light/50">T</span>
                <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-stone-light">
                  Image to be added
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-teal">
            {project.category}
          </span>
          <TypeBadge type={project.projectType} />
        </div>

        <h3 className="mt-3 font-serif text-xl leading-snug tracking-tight sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone">{project.summary}</p>

        <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-[10px] uppercase tracking-widest text-ink">
          View case study
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </Link>
    </article>
  );
}
