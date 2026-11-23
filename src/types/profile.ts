export interface EmploymentEntry {
  company: string;
  role: string;
  period: string;
  note?: string;
  /** True when the entry is an explicit placeholder, not a real record. */
  placeholder?: boolean;
}

export interface EducationEntry {
  title: string;
  issuer?: string;
  period?: string;
  note?: string;
  placeholder?: boolean;
}

export interface Profile {
  name: string;
  headline: string;
  professionalSummary: string;
  location: string;
  experience: string;
  employmentHistory: EmploymentEntry[];
  skills: string[];
  education: EducationEntry[];
  careerDirection: string;
  /** Placeholders only — no contact details are invented. */
  email: string;
  linkedin: string;
}
