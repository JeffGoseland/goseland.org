export type NavPage = "intro" | "work" | "projects" | "education" | "contact";

export interface WorkRole {
  organization: string;
  location: string;
  role: string;
  dates: string;
  bullets: string[];
}

export interface EducationRecord {
  school: string;
  location: string;
  degree: string;
  dates: string;
  note?: string;
  courses?: string[];
  variant?: "default" | "orange";
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  bullets?: string[];
  extraParagraph?: string;
  metrics?: string[];
  links: ProjectLink[];
}
