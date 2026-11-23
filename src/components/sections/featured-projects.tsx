import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowButton } from "@/components/ui/arrow-button";
import { ProjectCard } from "@/components/project-card/project-card";
import { Reveal } from "@/components/layout/reveal";
import { getFeaturedProjects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <section data-testid="featured-projects-section" className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Projects"
            title={
              <>
                Selected work, from the floor <em className="italic text-teal">to the classroom</em>
              </>
            }
          />
          <Reveal delay={0.1} className="shrink-0">
            <ArrowButton href="/projects" variant="outline" testId="view-all-projects-button">
              View all projects
            </ArrowButton>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {featured.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i * 0.08}
              className={cn("lg:col-span-6", i === 2 && "lg:col-span-12")}
            >
              <ProjectCard project={project} wide={i === 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
