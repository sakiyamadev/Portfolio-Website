import type { DockLink } from "../types";

// Edit external links and dock icon paths here.
export const dockLinks: DockLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/your-username",
    icon: "/assets/icons/github.png",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/your-profile",
    icon: "/assets/icons/linkedin.png",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/your-profile",
    icon: "/assets/icons/instagram.png",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:shun@example.com",
    icon: "/assets/icons/email.png",
    external: true,
  },
  {
    id: "resume",
    label: "Resume",
    url: "/assets/resume-placeholder.pdf",
    icon: "/assets/icons/resume.png",
    external: true,
  },
];
