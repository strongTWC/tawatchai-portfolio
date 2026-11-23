import { cn } from "@/lib/utils";
import type { ProjectType } from "@/types/project";

const TYPE_STYLES: Record<ProjectType, string> = {
  "Historical Experience": "border-ink/25 text-ink",
  "Portfolio Demonstration": "border-stone/40 text-stone",
  "Proposed Framework": "border-teal/50 text-teal",
};

export function TypeBadge({
  type,
  className,
}: {
  type: ProjectType;
  className?: string;
}) {
  return (
    <span
      data-testid="project-type-badge"
      className={cn(
        "inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest",
        TYPE_STYLES[type],
        className
      )}
    >
      <span className="h-1 w-1 rounded-full bg-current" aria-hidden />
      {type}
    </span>
  );
}

export function CategoryTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("font-mono text-[10px] uppercase tracking-widest text-teal", className)}>
      {children}
    </span>
  );
}

export function PlaceholderChip({ className }: { className?: string }) {
  return (
    <span
      data-testid="placeholder-chip"
      className={cn(
        "inline-flex items-center border border-dashed border-stone/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-stone",
        className
      )}
    >
      Placeholder
    </span>
  );
}
