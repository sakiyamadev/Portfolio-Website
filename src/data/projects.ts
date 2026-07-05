import type { Project } from "../types";

// Edit projects, photos, videos, resume bullets, and GitHub URLs here.
export const projects: Project[] = [
  {
    id: "robotics-platform",
    title: "Project Title Here",
    year: "2026",
    category: "embedded",
    shortDescription:
      "Placeholder robotics / firmware project description goes here. Describe the system, sensors, and problem solved.",
    techStack: ["C++", "ESP32", "Sensors", "React"],
    detailedTechStack: ["C++ firmware", "ESP32", "I2C / UART", "React dashboard", "Data logging"],
    skills: ["Embedded debugging", "System integration", "Robotics prototyping", "Technical documentation"],
    bullets: [
      "Resume bullet point here describing measurable project impact.",
      "Resume bullet point here describing hardware, firmware, and software integration.",
      "Resume bullet point here describing testing, iteration, or reliability improvements.",
    ],
    media: [
      {
        type: "image",
        src: "/assets/project-placeholder.png",
        alt: "Project image placeholder",
        caption: "Replace with a real project photo or render.",
      },
      {
        type: "embedVideo",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Replace with a real YouTube or Vimeo embed.",
      },
    ],
    githubUrl: "https://github.com/your-username/project-title-here",
  },
  {
    id: "software-tool",
    title: "Software Project Title Here",
    year: "2025",
    category: "software",
    shortDescription:
      "Placeholder software project description goes here. Describe the app, workflow, or developer tool.",
    techStack: ["React", "TypeScript", "Tailwind", "Node"],
    detailedTechStack: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Vite"],
    skills: ["Frontend architecture", "State management", "UI design", "API integration"],
    bullets: [
      "Resume bullet point here describing the user-facing feature built.",
      "Resume bullet point here describing technical architecture or performance work.",
      "Resume bullet point here describing testing, deployment, or documentation.",
    ],
    media: [
      {
        type: "image",
        src: "/assets/project-placeholder.png",
        alt: "Software project placeholder",
        caption: "Replace with a screenshot of your app.",
      },
    ],
    githubUrl: "https://github.com/your-username/software-project-title-here",
  },
  {
    id: "firmware-lab",
    title: "Firmware / Controls Project Title Here",
    year: "2024",
    category: "embedded",
    shortDescription:
      "Placeholder embedded systems project description goes here. Mention control loops, testing, and measured behavior.",
    techStack: ["C", "STM32", "Oscilloscope", "Python"],
    detailedTechStack: ["C", "STM32 HAL", "PWM", "ADC", "Python plotting", "Bench testing"],
    skills: ["Firmware design", "Signal analysis", "Hardware bring-up", "Debugging"],
    bullets: [
      "Resume bullet point here describing firmware implementation.",
      "Resume bullet point here describing validation with real hardware.",
      "Resume bullet point here describing data collection or analysis.",
    ],
    media: [
      {
        type: "image",
        src: "/assets/project-placeholder.png",
        alt: "Firmware project placeholder",
        caption: "Replace with a bench test, PCB, or scope capture.",
      },
    ],
    githubUrl: "https://github.com/your-username/firmware-project-title-here",
  },
];
