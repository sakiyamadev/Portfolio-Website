import type { LucideIcon } from "lucide-react";

export type SectionId = "home" | "projects" | "experience" | "resume";

export type AccentName = "neutral" | "cyan" | "green" | "white";

export type ProjectCategory = "software" | "embedded";

export type MediaItem = {
  type: "image" | "localVideo" | "embedVideo";
  src: string;
  alt?: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  category: ProjectCategory;
  shortDescription: string;
  techStack: string[];
  detailedTechStack: string[];
  skills: string[];
  bullets: string[];
  media: MediaItem[];
  githubUrl?: string;
};

export type Experience = {
  id: string;
  organization: string;
  role: string;
  dateRange: string;
  location: string;
  shortDescription: string;
  bullets: string[];
  technologies: string[];
  media?: MediaItem[];
};

export type TechStackItem = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type TechStackGroup = {
  title: "Software" | "Embedded / Firmware" | "Tools";
  items: TechStackItem[];
};

export type DockLink = {
  id: string;
  label: string;
  url: string;
  icon: string;
  external: boolean;
};

export type NavItem = {
  id: SectionId;
  label: string;
  shortLabel: string;
  accent: AccentName;
};
