import { Info } from "lucide-react";
import { TYPE_NOTES, type ProjectType } from "@/types/project";
import { cn } from "@/lib/utils";

export function ProjectTypeNote({ type, className }: { type: ProjectType; className?: string }) {
  return (
    <div
      data-testid="project-type-note"
      className={cn(
        "flex items-start gap-3 border px-5 py-4",
        type === "Proposed Framework"
          ? "border-teal/30 bg-teal-wash"
          : "border-hairline bg-ivory-soft",
        className
      )}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
      <p className="text-sm leading-relaxed text-ink-soft">{TYPE_NOTES[type]}</p>
    </div>
  );
}
