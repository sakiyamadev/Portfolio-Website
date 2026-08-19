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
        "Developed embedded firmware in C/C++ for STM32 ECUs in an FSAE electric vehicle.",
        "Enabled in-vehicle firmware updates over CAN by implementing a custom bootloader with flash partitioning, CRC32 image verification, and linker-script memory layout configuration.",
        "Reduced multi-board firmware deployment time by 84% by developing a parallel bootloading tool that coordinated flash erasure, firmware programming, asynchronous communication, automatic retries, and per-board progress tracking.",
        "Improved STM32 build consistency across STM32F4/H5/H7 targets by contributing to a Modern CMake framework for configurable embedded builds, host tests, firmware packaging, and CubeMX validation.",
        "Improved firmware portability and code reuse by developing a shared C++ potentiometer driver interface that decoupled board-specific hardware access from ECU application logic.",
        "Strengthened fault detection across 6 STM32 ECUs by developing a watchdog library that refreshes the hardware watchdog only after 1 Hz, 100 Hz and 1 kHz FreeRTOS tasks report healthy states.",
        "Accelerated board bring-up by developing Chimera, a Python HIL framework for remote GPIO, ADC, I2C, and SPI validation"
    ],
    technologies: ["C/C++", "STM32", "CMake", "SEGGER J-Link", "Python"],
    media: [
      {
        type: "image",
        src: "/assets/formulaECar.jpg",
        alt: "FormulaE Car",
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
      "Developing a full-stack hackathon and conference platform for UBC's largest technology club, serving 2000+ users and streamlining event registration, membership, payment, and real-time event workflows.",
      "Deployed a serverless backend with a 20-microservice architecture using AWS Lambda + Cognito to manage registrations, payment, and event workflows",
      "Implemented Stripe webhook automation for $30,000+ in membership payments, reducing manual payment verification and triggering event confirmation workflows.",
    ],
    technologies: ["Typescript", "React", "AWS Lambda", "DynamoDB"],
    media: [
      {
        type: "image",
        src: "/assets/biztechApp.png",
        alt: "BizTech Portal",
      },
    ],
  },
];
