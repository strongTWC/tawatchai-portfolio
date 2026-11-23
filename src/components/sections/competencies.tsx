import { BookOpen, GraduationCap, Sparkles, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/layout/reveal";
import { cn } from "@/lib/utils";

const CELLS = [
  {
    index: "01",
    title: "Luxury Retail",
    icon: Sparkles,
    span: "md:col-span-8",
    tone: "bg-white",
    body: "Fifteen-plus years of floor experience in high-end retail — luxury sales, clienteling and service standards in prestige beauty, including ten years with CHANEL.",
    tags: ["Clienteling", "Skincare & Fragrance", "Service Excellence"],
  },
  {
    index: "02",
    title: "Product Training",
    icon: BookOpen,
    span: "md:col-span-4",
    tone: "bg-ivory-soft",
    body: "Turning product information into stories teams can tell — modules, rituals and launch briefings.",
    tags: ["Knowledge Design"],
  },
  {
    index: "03",
    title: "Coaching & Facilitation",
    icon: Users,
    span: "md:col-span-4",
    tone: "bg-white",
    body: "OJT support, shadowing and feedback that builds advisor confidence on the floor.",
    tags: ["OJT", "Workshops"],
  },
  {
    index: "04",
    title: "Learning Development",
    icon: GraduationCap,
    span: "md:col-span-8",
    tone: "bg-white",
    body: "Designing learning journeys end to end — from floor observation to curricula, workshops and coaching rhythms that hold up in busy boutiques. This is the direction this portfolio is built to demonstrate.",
    tags: ["Curriculum Design", "Onboarding", "Facilitation"],
  },
];

export function Competencies() {
  return (
    <section data-testid="competencies-section" className="pb-24 sm:pb-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Core Competencies"
          title={
            <>
              Four disciplines, one <em className="italic text-teal">standard of craft</em>
            </>
          }
        />
        <Reveal delay={0.1} className="mt-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8">
            {CELLS.map((cell) => {
              const Icon = cell.icon;
              return (
                <div
                  key={cell.index}
                  data-testid={`competency-cell-${cell.index}`}
                  className={cn(
                    "flex h-full flex-col justify-between border border-hairline p-8 md:p-10",
                    cell.span,
                    cell.tone
                  )}
                >
                  <div className="flex items-start justify-between">
                    <Icon className="h-6 w-6 text-teal" strokeWidth={1.5} aria-hidden />
                    <span className="font-mono text-xs text-stone-light">{cell.index}</span>
                  </div>
                  <div className="mt-10">
                    <h3 className="font-serif text-2xl tracking-tight">{cell.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{cell.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {cell.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-stone"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
