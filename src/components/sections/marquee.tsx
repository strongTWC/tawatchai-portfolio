const ITEMS = [
  "15+ Years High-End Luxury Retail",
  "10 Years CHANEL Atelier & Boutique Excellence",
  "Service Architecture",
  "Retail L&D Transformation",
  "Behavioral Clienteling",
  "Product Knowledge Craft",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap font-serif text-sm uppercase tracking-[0.2em] text-stone sm:text-base">
            {item}
          </span>
          <svg className="mx-8 h-2 w-2 text-teal" viewBox="0 0 8 8" aria-hidden>
            <rect x="1.6" y="1.6" width="4.8" height="4.8" transform="rotate(45 4 4)" fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export function RibbonMarquee() {
  return (
    <section data-testid="editorial-marquee" className="ribbon overflow-hidden border-b border-hairline bg-ivory-soft py-5">
      <div className="ribbon-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
