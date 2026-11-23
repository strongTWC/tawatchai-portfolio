"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { PROJECT_CATEGORIES, type Project } from "@/types/project";
import { ProjectCard } from "@/components/project-card/project-card";
import { EASE } from "@/components/layout/reveal";
import { cn, slugify } from "@/lib/utils";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    for (const c of PROJECT_CATEGORIES) {
      map[c] = projects.filter((p) => p.category === c).length;
    }
    return map;
  }, [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCategory = category === "All" || p.category === category;
      const haystack = `${p.title} ${p.summary} ${p.skills.join(" ")}`.toLowerCase();
      return inCategory && (!q || haystack.includes(q));
    });
  }, [projects, category, query]);

  return (
    <div data-testid="project-grid">
      <div className="flex flex-col gap-6 border-y border-hairline py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {["All", ...PROJECT_CATEGORIES].map((c) => (
            <button
              key={c}
              type="button"
              data-testid={`filter-pill-${slugify(c)}`}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={cn(
                "border px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest transition-colors duration-300",
                category === c
                  ? "border-teal bg-teal text-ivory"
                  : "border-hairline text-stone hover:border-ink hover:text-ink"
              )}
            >
              {c} <span className="ml-1 opacity-60">{counts[c] ?? 0}</span>
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-72">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-light"
            aria-hidden
          />
          <input
            data-testid="project-search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects"
            aria-label="Search projects"
            className="w-full border border-hairline bg-transparent py-3 pl-10 pr-4 text-sm text-ink placeholder:text-stone-light focus:border-teal focus:outline-none"
          />
        </div>
      </div>

      <p
        data-testid="project-grid-count"
        aria-live="polite"
        className="mt-6 font-mono text-[10px] uppercase tracking-widest text-stone-light"
      >
        Showing {filtered.length} of {projects.length} projects
      </p>

      {filtered.length === 0 ? (
        <div
          data-testid="project-grid-empty"
          className="mt-12 border border-hairline bg-ivory-soft px-8 py-16 text-center"
        >
          <p className="font-serif text-2xl tracking-tight">No projects match your filters</p>
          <p className="mt-3 text-sm leading-relaxed text-stone">
            Try a different category or clear the search.
          </p>
          <button
            type="button"
            data-testid="project-grid-clear-button"
            onClick={() => {
              setCategory("All");
              setQuery("");
            }}
            className="mt-8 border border-ink bg-ink px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-ivory transition-colors duration-300 hover:bg-transparent hover:text-ink"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
