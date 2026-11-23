import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowButton } from "@/components/ui/arrow-button";
import { Reveal } from "@/components/layout/reveal";

export function ContactCta() {
  return (
    <section data-testid="contact-cta-section" className="bg-ink-deep text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <SectionHeading
          dark
          eyebrow="Contact"
          title={
            <>
              Let's shape how your teams <em className="italic text-teal">learn</em>
            </>
          }
        >
          <p className="mt-6 max-w-xl leading-relaxed text-stone-light">
            Open to conversations about retail training, product knowledge programmes and
            Learning & Development roles within luxury.
          </p>
        </SectionHeading>
        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-4">
          <ArrowButton href="/contact" variant="teal" testId="contact-cta-button">
            Get in touch
          </ArrowButton>
          <ArrowButton href="/projects" variant="ghost-light" testId="contact-cta-projects-button">
            See the work
          </ArrowButton>
        </Reveal>
      </div>
    </section>
  );
}
