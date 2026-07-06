import type { Experience } from "../types";

// Edit experiences, roles, dates, bullet points, and optional media here.
export const experiences: Experience[] = [
  {
    id: "FormulaE",
    organization: "UBC Formula Electric",
    role: "Software/Firmware Engineer",
    dateRange: "Sept 2025 - Present",
    location: "Vancouver, BC",
    shortDescription:
      "Working with a team of 30 to build vehicle software for a FSAE Electric car.",
    bullets: [
      "Developing embedded firmware in C/C++ for STM32 microcontrollers in a Formula SAE electric vehicle.",
      "Integrating brake pressure sensors, suspension systems, tire temperature sensors, IMUs, and coolant flowmeters into the rear sensor module by developing functions to retrieve data from the hardware, calculate quantities using datasheets, and communicate over the CAN bus.",
      "Validating firmware using Segger J-Link to flash PCBs and conducting Software-In-Loop testing for CAN message transmission",
      "Constructed Chimera, a Python abstraction script for the electrical team to test their hardware and object-oriented drivers for potentiometer and software watchdog implementation",
    ],
    technologies: ["C/C++", "STM32", "CMake", "SEGGER J-Link", "Python"],
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
