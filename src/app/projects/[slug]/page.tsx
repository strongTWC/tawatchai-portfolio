import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { ProjectCard } from "@/components/project-card/project-card";
import { ProjectTypeNote } from "@/components/ui/project-type-note";
import { TypeBadge } from "@/components/ui/tag";
import { getPublishedProjects, getProjectBySlug, getNextProject, getRelatedProjects } from "@/lib/projects";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary.slice(0, 155),
    openGraph: {
      title: project.title,
      description: project.summary.slice(0, 155),
      images: project.coverImage ? [{ url: project.coverImage }] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project, 2);
  const next = getNextProject(project);
  const cs = project.caseStudy;

  return (
    <>
      <article data-testid="project-detail-page" className="pt-28 sm:pt-36 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <Link
              href="/projects"
              data-testid="back-to-projects-link"
              className="link-sweep inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-stone transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All projects
            </Link>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-teal">
                {project.category}
              </span>
              <TypeBadge type={project.projectType} />
              <span
                data-testid="project-completed-at"
                className="font-mono text-[10px] uppercase tracking-widest text-stone-light"
              >
                {project.completedAt ? `Completed ${formatDate(project.completedAt)}` : "Date not specified"}
              </span>
            </div>

            <h1 className="mt-6 max-w-5xl font-serif text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            <ProjectTypeNote type={project.projectType} className="mt-8 max-w-3xl" />
          </Reveal>

          <Reveal delay={0.05} className="mt-12">
            <div className="relative overflow-hidden border border-hairline bg-ivory-soft" data-testid="project-hero-media">
              {project.coverImage ? (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} — supporting visual`}
                    fill
                    priority
                    sizes="(min-width: 1280px) 88rem, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  data-testid="project-hero-media-fallback"
                  className="flex aspect-[16/9] flex-col items-center justify-center gap-4"
                  aria-label="Cover image to be added"
                >
                  <span className="font-serif text-8xl font-light text-stone-light/50">T</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-stone-light">
                    Image to be added
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          {cs ? (
            <div className="mt-16 grid grid-cols-1 gap-12 pb-24 sm:pb-32 lg:grid-cols-12 lg:gap-16">
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <Reveal>
                    <p className="font-mono text-xs uppercase tracking-widest2 text-teal">My Role</p>
                    <p className="mt-4 text-base leading-relaxed text-ink-soft">{cs.role}</p>
                    <p className="mt-10 font-mono text-xs uppercase tracking-widest2 text-teal">
                      Skills Demonstrated
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2" data-testid="detail-skills-list">
                      {project.skills.map((skill) => (
                        <li
                          key={skill}
                          data-testid="detail-skill-chip"
                          className="border border-hairline bg-white px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-ink-soft"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </aside>

              <div className="lg:col-span-8">
                {[
                  { id: "01", title: "Overview", body: cs.overview },
                  { id: "02", title: "Business Context", body: cs.businessContext },
                  { id: "03", title: "Objective", body: cs.objective },
                ].map((section, i) => (
                  <Reveal key={section.id} delay={i * 0.04} className="border-t border-hairline py-10">
                    <p className="font-mono text-xs text-stone-light">{section.id}</p>
                    <h2 className="mt-3 font-serif text-2xl tracking-tight sm:text-3xl">
                      {section.title}
                    </h2>
                    <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">{section.body}</p>
                  </Reveal>
                ))}

                <Reveal className="border-t border-hairline py-10">
                  <p className="font-mono text-xs text-stone-light">04</p>
                  <h2 className="mt-3 font-serif text-2xl tracking-tight sm:text-3xl">
                    Approach & Activities
                  </h2>
                  <ol className="mt-6 space-y-5" data-testid="detail-approach-list">
                    {cs.approach.map((step, i) => (
                      <li key={step} className="flex items-start gap-4 text-base leading-relaxed text-ink-soft">
                        <span className="mt-0.5 font-mono text-xs text-teal">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </Reveal>

                <Reveal className="border-t border-b border-hairline py-10">
                  <p className="font-mono text-xs text-stone-light">05</p>
                  <h2 className="mt-3 font-serif text-2xl tracking-tight sm:text-3xl">Key Outcomes</h2>
                  <ul className="mt-6 space-y-4" data-testid="detail-outcomes-list">
                    {cs.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3 leading-relaxed text-ink-soft">
                        <svg className="mt-2 h-2 w-2 shrink-0 text-teal" viewBox="0 0 8 8" aria-hidden>
                          <rect x="1.6" y="1.6" width="4.8" height="4.8" transform="rotate(45 4 4)" fill="currentColor" />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-stone-light">
                    Qualitative outcomes only — no metrics are invented
                  </p>
                  {cs.relatedNotes && (
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">
                      {cs.relatedNotes}
                    </p>
                  )}
                </Reveal>
              </div>
            </div>
          ) : (
            <p className="py-16 text-stone">Full case study coming soon.</p>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section data-testid="related-projects-section" className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-widest2 text-teal">
                Related case studies
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {related.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {next && (
        <section data-testid="next-project-band" className="bg-ink-deep text-ivory">
          <Link
            href={`/projects/${next.slug}`}
            data-testid={`next-project-link-${next.slug}`}
            className="group mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 sm:px-10 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-16"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest2 text-teal-hover">
                Next case study
              </p>
              <p className="mt-4 max-w-3xl font-serif text-2xl font-light tracking-tight transition-opacity duration-300 group-hover:opacity-70 sm:text-3xl lg:text-4xl">
                {next.title}
              </p>
            </div>
            <ArrowRight
              className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:translate-x-2"
              aria-hidden
            />
          </Link>
        </section>
      )}
    </>
  );
}
