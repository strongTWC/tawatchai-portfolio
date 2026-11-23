import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/layout/reveal";
import { ArrowButton } from "@/components/ui/arrow-button";
import { PlaceholderChip } from "@/components/ui/tag";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background of Tawatchai — luxury retail, product knowledge development and the transition into Learning & Development.",
};

const JOURNEY = [
  {
    index: "01",
    title: "The floor",
    body: "Fifteen-plus years in high-end retail: luxury sales, clienteling and service in prestige beauty environments — a decade of it with CHANEL.",
  },
  {
    index: "02",
    title: "The craft",
    body: "Alongside selling, the work became about people: developing product knowledge, supporting OJT and onboarding, and coaching advisors until good service became second nature.",
  },
  {
    index: "03",
    title: "The direction",
    body: "That floor experience is now the foundation for Learning & Development — designing training that respects both the standards of a maison and the realities of a busy boutique.",
  },
];

const RESPONSIBILITIES = [
  "Delivering luxury sales and clienteling to brand standard",
  "Developing product knowledge for beauty advisors",
  "Supporting OJT, shadowing and onboarding",
  "Coaching confidence in client conversations",
  "Translating brand guidelines into daily floor practice",
  "Collaborating with managers on team engagement",
];

export default function AboutPage() {
  return (
    <>
      <section data-testid="about-hero" className="pt-28 sm:pt-36 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest2 text-teal">About</p>
            <h1 className="mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              From the boutique floor to{" "}
              <em className="italic text-teal">Learning & Development</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">
              {profile.professionalSummary}
            </p>
            <p
              data-testid="about-accuracy-note"
              className="mt-8 max-w-2xl border border-dashed border-stone/40 bg-ivory-soft px-4 py-3 font-mono text-[10px] uppercase leading-relaxed tracking-widest text-stone"
            >
              Content accuracy — details marked [in brackets] are placeholders. No employers,
              dates, figures or contact details are invented.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="about-journey-section" className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:px-16">
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden border border-hairline">
              <Image
                src="/images/about_detail.jpg"
                alt="Luxury skincare products arranged on warm ivory linen"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-stone-light">
              Still life — beauty editorial
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-widest2 text-teal">
                Career Journey
              </h2>
            </Reveal>
            <div className="mt-8 border-t border-hairline">
              {JOURNEY.map((step, i) => (
                <Reveal
                  key={step.index}
                  delay={i * 0.05}
                  className="grid grid-cols-[auto_1fr] gap-6 border-b border-hairline py-8 md:grid-cols-[80px_240px_1fr] md:gap-8"
                >
                  <span className="font-mono text-xs text-teal">{step.index}</span>
                  <h3 className="col-start-2 font-serif text-2xl tracking-tight md:col-start-auto">
                    {step.title}
                  </h3>
                  <p className="col-span-2 col-start-1 text-sm leading-relaxed text-stone md:col-span-1 md:col-start-auto">
                    {step.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-testid="about-history-section" className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-widest2 text-teal">
              Employment History
            </h2>
            <div className="mt-8 border-t border-hairline" data-testid="employment-history-list">
              {profile.employmentHistory.map((entry) => (
                <div
                  key={entry.company}
                  data-testid="employment-entry"
                  className="flex flex-col gap-3 border-b border-hairline py-8 md:flex-row md:items-baseline md:justify-between"
                >
                  <div>
                    <p className="flex flex-wrap items-center gap-3 font-serif text-xl tracking-tight sm:text-2xl">
                      {entry.company}
                      {entry.placeholder && <PlaceholderChip />}
                    </p>
                    <p className="mt-2 text-sm text-stone">{entry.role}</p>
                    {entry.note && (
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone">{entry.note}</p>
                    )}
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-stone-light md:shrink-0 md:pl-10">
                    {entry.period}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section data-testid="about-responsibilities-section" className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-widest2 text-teal">
              Key Responsibilities
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-4 border-t border-hairline pt-8 sm:grid-cols-2" data-testid="responsibilities-list">
              {RESPONSIBILITIES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                  <svg className="mt-1.5 h-2 w-2 shrink-0 text-teal" viewBox="0 0 8 8" aria-hidden>
                    <rect x="1.6" y="1.6" width="4.8" height="4.8" transform="rotate(45 4 4)" fill="currentColor" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section data-testid="about-skills-section" className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-widest2 text-teal">
              Skills & Competencies
            </h2>
            <div className="mt-8 flex flex-wrap gap-2 border-t border-hairline pt-8" data-testid="skills-chip-list">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  data-testid="skill-chip"
                  className="border border-hairline bg-white px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-ink-soft transition-colors duration-300 hover:border-teal hover:text-teal"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section data-testid="about-education-section" className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-widest2 text-teal">
              Education & Professional Development
            </h2>
            <div className="mt-8 border-t border-hairline" data-testid="education-list">
              {profile.education.map((entry) => (
                <div
                  key={entry.title}
                  data-testid="education-entry"
                  className="flex flex-col gap-2 border-b border-hairline py-8 md:flex-row md:items-baseline md:justify-between"
                >
                  <div>
                    <p className="flex flex-wrap items-center gap-3 text-base sm:text-lg">
                      {entry.title}
                      {entry.placeholder && <PlaceholderChip />}
                    </p>
                    {entry.issuer && <p className="mt-2 text-sm text-stone">{entry.issuer}</p>}
                    {entry.note && (
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone">{entry.note}</p>
                    )}
                  </div>
                  {entry.period && (
                    <p className="font-mono text-[10px] uppercase tracking-widest text-stone-light md:shrink-0 md:pl-10">
                      {entry.period}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section data-testid="about-cta-section" className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal className="flex flex-col items-start justify-between gap-8 border border-hairline bg-ivory-soft p-8 md:flex-row md:items-center md:p-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-teal">
                Career direction
              </p>
              <p className="mt-4 max-w-xl font-serif text-xl leading-snug tracking-tight sm:text-2xl">
                {profile.careerDirection}
              </p>
            </div>
            <ArrowButton href="/contact" testId="about-contact-button">
              Start a conversation
            </ArrowButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
