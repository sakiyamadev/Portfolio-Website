import {
  Braces,
  CircuitBoard,
  Code2,
  Cpu,
  FileCode2,
  GitBranch,
  GitFork,
  Hammer,
  Layers,
  MonitorCog,
  PenTool,
  Terminal,
} from "lucide-react";
import type { TechStackGroup } from "../types";

// Edit tech stack items, descriptions, and categories here.
export const techStackGroups: TechStackGroup[] = [
  {
    title: "Software",
    items: [
      { name: "React", description: "Fast, interactive UI systems", icon: Layers },
      { name: "TypeScript", description: "Typed Javascript for safer code", icon: Braces },
      { name: "Python", description: "Automation, analysis scripts, and robotics tooling", icon: Terminal },
      { name: "AWS", description: "Serverless backend architecture", icon: Code2 },
    ],
  },
  {
    title: "Embedded / Firmware",
    items: [
      { name: "C / C++", description: "Low-level firmware and performance-sensitive code", icon: FileCode2 },
      { name: "STM32/ESP32", description: "Microcontroller systems, peripherals", icon: MonitorCog },
      { name: "CMake", description: "Customizable build system configurable development", icon: CircuitBoard },
      { name: "SEGGER J-Link", description: "Testing firmware on STM32 on custom PCBs", icon: Cpu },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", description: "Version control and clean engineering history", icon: GitBranch },
      { name: "Jira/Linear", description: "Ticket system for team workflows", icon: GitFork },
      { name: "Cursor / VS Code", description: "Modern development workflow and AI-assisted iteration", icon: PenTool },
      { name: "Altium / CAD Tools", description: "Hardware design placeholders for PCB and mechanical work", icon: Hammer },
    ],
  },
];
