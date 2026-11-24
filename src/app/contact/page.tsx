import type { Metadata } from "next";
import { Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { ArrowButton } from "@/components/ui/arrow-button";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tawatchai about retail training, product knowledge programmes and Learning & Development opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <section data-testid="contact-hero" className="pt-28 sm:pt-36 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest2 text-teal">Contact</p>
            <h1 className="mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Let's start a <em className="italic text-teal">conversation</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">
              Whether it is a retail training role, a product knowledge programme or a learning
              project for luxury teams — I would be glad to hear about it.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="contact-cards-section" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:px-10 md:grid-cols-2 lg:px-16 lg:gap-8">
          <Reveal className="h-full">
            <div
              data-testid="contact-email-card"
              className="flex h-full flex-col justify-between border border-hairline bg-white p-8 lg:p-10"
            >
              <Mail className="h-6 w-6 text-teal" strokeWidth={1.5} aria-hidden />
              <div className="mt-12">
                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-light">Email</p>
                <a
                  data-testid="contact-email-value"
                  href={`mailto:${profile.email}`}
                  className="mt-3 inline-block break-all font-mono text-sm text-ink transition-colors hover:text-teal"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div
              data-testid="contact-linkedin-card"
              className="flex h-full flex-col justify-between border border-hairline bg-white p-8 lg:p-10"
            >
              <Linkedin className="h-6 w-6 text-teal" strokeWidth={1.5} aria-hidden />
              <div className="mt-12">
                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-light">
                  LinkedIn
                </p>
                <a
                  data-testid="contact-linkedin-value"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block break-all font-mono text-sm text-ink transition-colors hover:text-teal"
                >
                  {profile.linkedin}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-testid="contact-cta-section" className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal className="border-t border-hairline pt-12">
            <p className="max-w-xl font-serif text-2xl leading-snug tracking-tight sm:text-3xl">
              Useful to mention: <em className="italic text-teal">your team</em>, the skills you
              want to build, and how you picture the learning.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ArrowButton href="/projects" variant="outline" testId="contact-see-work-button">
                Explore the work first
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
