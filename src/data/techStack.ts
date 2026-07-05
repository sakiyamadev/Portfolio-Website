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
      { name: "React", description: "Interactive UI systems and portfolio frontends", icon: Layers },
      { name: "TypeScript", description: "Typed interfaces, safer data models, reusable components", icon: Braces },
      { name: "Python", description: "Automation, analysis scripts, and robotics tooling", icon: Terminal },
      { name: "HTML / CSS", description: "Responsive layouts, polished styling, and accessible structure", icon: Code2 },
    ],
  },
  {
    title: "Embedded / Firmware",
    items: [
      { name: "C / C++", description: "Low-level control, firmware logic, and performance-sensitive code", icon: FileCode2 },
      { name: "Arduino", description: "Rapid prototyping for sensors, actuators, and mechatronics", icon: CircuitBoard },
      { name: "ESP32", description: "Wireless embedded prototypes and connected devices", icon: Cpu },
      { name: "STM32", description: "Microcontroller systems, peripherals, and real-time workflows", icon: MonitorCog },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", description: "Version control and clean engineering history", icon: GitBranch },
      { name: "GitHub", description: "Project documentation, collaboration, and code hosting", icon: GitFork },
      { name: "Cursor / VS Code", description: "Modern development workflow and AI-assisted iteration", icon: PenTool },
      { name: "Altium / CAD Tools", description: "Hardware design placeholders for PCB and mechanical work", icon: Hammer },
    ],
  },
];
