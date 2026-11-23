import type { Metadata } from "next";
import { Reveal } from "@/components/layout/reveal";
import { ProjectCard } from "@/components/project-card/project-card";
import { ProjectGrid } from "@/components/project-grid/project-grid";
import { getFeaturedProjects, getPublishedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from luxury retail: product knowledge training, skincare sales development, clienteling frameworks, onboarding and coaching.",
};

export default function ProjectsPage() {
  const published = getPublishedProjects();
  const featured = getFeaturedProjects()[0];

  return (
    <>
      <section data-testid="projects-header" className="pt-28 sm:pt-36 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest2 text-teal">Portfolio</p>
            <h1 className="mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Work that moved <em className="italic text-teal">teams forward</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">
              Case studies from the boutique floor and the classroom — historical experience,
              self-initiated demonstrations and proposed frameworks. Every record states which,
              honestly.
            </p>
          </Reveal>
        </div>
      </section>

      {featured && (
        <section data-testid="featured-case-study-section" className="pt-16 sm:pt-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest2 text-teal">
                Featured case study
              </p>
              <div className="mt-6">
                <ProjectCard project={featured} wide />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <ProjectGrid projects={published} />
        </div>
      </section>
    </>
  );
}
