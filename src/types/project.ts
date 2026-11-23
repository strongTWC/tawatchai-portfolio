export type PublicationStatus = "Draft" | "Needs Review" | "Published" | "Private";

export type ProjectType =
  | "Historical Experience"
  | "Portfolio Demonstration"
  | "Proposed Framework";

export interface CaseStudy {
  overview: string;
  businessContext: string;
  objective: string;
  role: string;
  approach: string[];
  /** Qualitative outcomes only — no invented metrics. */
  outcomes: string[];
  relatedNotes?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  role?: string;
  outcomes?: string;
  detailUrl?: string;
  coverImage?: string;
  completedAt?: string | null;
  featured: boolean;
  skills: string[];
  publicationStatus: PublicationStatus;
  projectType: ProjectType;
  caseStudy?: CaseStudy;
}

export const PROJECT_CATEGORIES = [
  "Product Knowledge & Training",
  "Sales Performance & Business Development",
  "Team Engagement & Recruitment",
  "Learning & Development",
] as const;

export const TYPE_NOTES: Record<ProjectType, string> = {
  "Historical Experience":
    "Historical professional experience, drawn from actual work settings. Described qualitatively — no metrics have been invented.",
  "Portfolio Demonstration":
    "Self-initiated portfolio demonstration, created to illustrate capability. Not delivered as a company project.",
  "Proposed Framework":
    "Proposed framework — a concept designed for future use. It has not been implemented as a business project.",
};
