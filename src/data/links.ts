import type { DockLink } from "../types";

// Edit external dock links here. Icons are mapped by id in src/components/Dock.tsx.
export const dockLinks: DockLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/sakiyamadev",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sakiyamaubc",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/_czshun",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:shunaki0214@gmail.com",
    external: true,
  },
  {
    id: "resume",
    label: "Resume",
    url: "/assets/resume-placeholder.pdf",
    external: true,
  },
];
