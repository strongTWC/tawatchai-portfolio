import type { ReactNode } from "react";
import { Reveal } from "@/components/layout/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  className,
  dark = false,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  className?: string;
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p className="font-mono text-xs uppercase tracking-widest2 text-teal">{eyebrow}</p>
      <h2
        className={cn(
          "mt-5 font-serif text-2xl font-light tracking-tight sm:text-3xl lg:text-4xl",
          dark ? "text-ivory" : "text-ink"
        )}
      >
        {title}
      </h2>
      {children}
    </Reveal>
  );
}
