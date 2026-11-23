import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "teal" | "ghost-light";

const VARIANTS: Record<Variant, string> = {
  primary:
    "border border-ink bg-ink text-ivory hover:bg-transparent hover:text-ink",
  outline: "border border-ink text-ink hover:bg-ink hover:text-ivory",
  teal: "border border-teal bg-teal text-ivory hover:bg-transparent hover:text-teal",
  "ghost-light":
    "border border-white/25 text-ivory hover:bg-ivory hover:text-ink",
};

export function ArrowButton({
  href,
  children,
  variant = "primary",
  className,
  testId,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  testId?: string;
  external?: boolean;
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-3 px-7 py-4 font-mono text-xs uppercase tracking-widest transition-colors duration-300",
    VARIANTS[variant],
    className
  );
  const icon = (
    <ArrowRight
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden
    />
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" data-testid={testId}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} data-testid={testId}>
      {children}
      {icon}
    </Link>
  );
}
