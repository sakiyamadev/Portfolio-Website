import type { Experience } from "../types";

// Edit experiences, roles, dates, bullet points, and optional media here.
export const experiences: Experience[] = [
  {
    id: "company-one",
    organization: "Company Name Here",
    role: "Role Title Here",
    dateRange: "Month 2026 - Present",
    location: "City, State",
    shortDescription:
      "Short description goes here. Summarize the team, product area, and what you contributed.",
    bullets: [
      "Resume bullet point here describing ownership, impact, and tools used.",
      "Resume bullet point here describing collaboration with engineers or cross-functional partners.",
      "Resume bullet point here describing a shipped feature, prototype, or technical result.",
    ],
    technologies: ["React", "TypeScript", "Python", "Git"],
    media: [
      {
        type: "image",
        src: "/assets/experience-placeholder.png",
        alt: "Experience media placeholder",
        caption: "Replace with a team, lab, club, or workplace-safe image.",
      },
    ],
  },
  {
    id: "robotics-club",
    organization: "Team / Club Name Here",
    role: "Engineering Role Title Here",
    dateRange: "Month 2025 - Month 2026",
    location: "Campus / Lab",
    shortDescription:
      "Short description goes here. Mention robotics, embedded systems, hardware, or leadership work.",
    bullets: [
      "Resume bullet point here describing subsystem ownership.",
      "Resume bullet point here describing prototyping, integration, or testing.",
      "Resume bullet point here describing documentation, mentoring, or competition outcomes.",
    ],
    technologies: ["C++", "CAD", "Sensors", "Firmware"],
    media: [
      {
        type: "image",
        src: "/assets/experience-placeholder.png",
        alt: "Robotics team placeholder",
        caption: "Replace with robot, workspace, or club media.",
      },
    ],
  },
  {
    id: "research-lab",
    organization: "Research / Lab Name Here",
    role: "Technical Assistant Title Here",
    dateRange: "Month 2024 - Month 2025",
    location: "University / Remote",
    shortDescription:
      "Short description goes here. Explain the research area and the technical systems you supported.",
    bullets: [
      "Resume bullet point here describing analysis, automation, or prototype work.",
      "Resume bullet point here describing results, reliability, or data quality.",
      "Resume bullet point here describing communication, documentation, or demos.",
    ],
    technologies: ["Python", "Linux", "GitHub", "Instrumentation"],
  },
];
