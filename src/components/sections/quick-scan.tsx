import { Reveal } from "@/components/layout/reveal";

const ITEMS = [
  {
    value: "15+",
    label: "Years in high-end retail",
    note: "Luxury sales, clienteling and service",
  },
  {
    value: "10",
    label: "Years with CHANEL",
    note: "Beauty & skincare — exact dates under verification",
  },
  {
    value: "OJT",
    label: "Coaching & onboarding",
    note: "Shadowing, guided practice, daily debriefs",
  },
  {
    value: "04",
    label: "Competency areas",
    note: "Retail · Training · Coaching · L&D",
  },
];

export function QuickScan() {
  return (
    <section data-testid="highlights-section" aria-label="Professional highlights" className="border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest2 text-teal">
            Professional Highlights
          </p>
          <div
            data-testid="highlights-grid"
            className="mt-10 grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4"
          >
            {ITEMS.map((item) => (
              <div key={item.label} data-testid="highlight-cell" className="bg-ivory p-8 lg:p-10">
                <p className="font-serif text-4xl font-light tracking-tight lg:text-5xl">
                  {item.value}
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-ink">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-stone-light">
            Employment dates subject to final verification · No other figures are claimed
          </p>
        </Reveal>
      </div>
    </section>
  );
}
