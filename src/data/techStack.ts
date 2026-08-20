import { FaAws } from "react-icons/fa";
import {
  SiCmake,
  SiCplusplus,
  SiCursor,
  SiEspressif,
  SiGit,
  SiJira,
  SiLinear,
  SiPython,
  SiReact,
  SiStmicroelectronics,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { TechStackGroup } from "../types";

// Edit tech stack items, descriptions, and logos here.
export const techStackGroups: TechStackGroup[] = [
  {
    title: "Software",
    items: [
      { name: "React", description: "Fast, interactive UI systems", logos: [{ Icon: SiReact, alt: "React" }] },
      { name: "TypeScript", description: "Typed Javascript for safer code", logos: [{ Icon: SiTypescript, alt: "TypeScript" }] },
      { name: "Python", description: "Automation, analysis scripts, and robotics tooling", logos: [{ Icon: SiPython, alt: "Python" }] },
      { name: "AWS", description: "Serverless backend architecture", logos: [{ Icon: FaAws, alt: "Amazon Web Services" }] },
    ],
  },
  {
    title: "Embedded / Firmware",
    items: [
      { name: "C / C++", description: "Low-level firmware and performance-sensitive code", logos: [{ Icon: SiCplusplus, alt: "C++" }] },
      {
        name: "STM32/ESP32",
        description: "Microcontroller systems, peripherals",
        logos: [
          { Icon: SiStmicroelectronics, alt: "STMicroelectronics" },
          { Icon: SiEspressif, alt: "Espressif" },
        ],
      },
      { name: "CMake", description: "Customizable build system configurable development", logos: [{ Icon: SiCmake, alt: "CMake" }] },
      {
        name: "SEGGER J-Link",
        description: "Testing firmware on STM32 on custom PCBs",
        logos: [{ src: "/logos/segger.png", alt: "SEGGER", className: "h-9 w-9" }],
      },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", description: "Version control and clean engineering history", logos: [{ Icon: SiGit, alt: "Git" }] },
      {
        name: "Jira/Linear",
        description: "Ticket system for team workflows",
        logos: [
          { Icon: SiJira, alt: "Jira" },
          { Icon: SiLinear, alt: "Linear" },
        ],
      },
      {
        name: "Cursor / VS Code",
        description: "Modern development workflow and AI-assisted iteration",
        logos: [
          { Icon: SiCursor, alt: "Cursor" },
          { Icon: VscVscode, alt: "Visual Studio Code" },
        ],
      },
      {
        name: "Altium / CAD Tools",
        description: "Hardware design placeholders for PCB and mechanical work",
        logos: [{ src: "/logos/altium.svg", alt: "Altium Designer" }],
      },
    ],
  },
];
