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
    id: "BizTech",
    organization: "UBC BizTech",
    role: "Software Engineer",
    dateRange: "Apr 2025 - Present",
    location: "Vancouver, BC",
    shortDescription:
      "Working in a multidisciplinary team to maintain and improve legacy full-stack applications",
    bullets: [
      "Building a full-stack hackathon and conference platform for UBC's largest technology club, serving 1,900+ users and streamlining event registration, membership, and payment workflows.",
      "Integrated AWS API Gateway, Lambda, Cognito, and DynamoDB across a 20-microservice architecture to enable secure authentication, scalable backend APIs, and event registration logic.",
      "Implemented Stripe webhook automation for $20,000+ in membership payments, reducing manual payment verification and triggering event confirmation workflows.",
      "Partnered with product, design, and engineering teams through GitHub-based development, pull requests, code reviews, and sprint planning to ship reliable platform features.",
    ],
    technologies: ["Typescript", "React", "AWS Lambda", "DynamoDB"],
    media: [
      {
        type: "image",
        src: "/assets/experience-placeholder.png",
        alt: "Robotics team placeholder",
        caption: "Replace with robot, workspace, or club media.",
      },
    ],
  },
];
