import { useState } from "react";
import type { ComponentType } from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope, FaRegFileAlt } from "react-icons/fa";
import { dockLinks } from "../data/links";

type DockProps = {
  onResumeShortcut?: () => void;
};

// Recognizable brand icons per dock link id. Edit link URLs in src/data/links.ts.
const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  email: FaEnvelope,
  resume: FaRegFileAlt,
};

export function Dock({ onResumeShortcut }: DockProps) {
  const [bouncingId, setBouncingId] = useState<string | null>(null);

  const handleDockClick = (linkId: string, url: string) => {
    setBouncingId(linkId);
    window.setTimeout(() => {
      if (linkId === "resume") {
        onResumeShortcut?.();
      }
      window.open(url, "_blank", "noopener,noreferrer");
      setBouncingId(null);
    }, 360);
  };

  return (
    <nav
      aria-label="External links dock"
      className="fixed bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-6 rounded-lg border border-[#1f1f1f] bg-[#0b0b0b] px-6 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.55)] max-sm:bottom-2 max-sm:gap-4 max-sm:px-4"
    >
      {dockLinks.map((link) => {
        const Icon = iconMap[link.id] ?? FaRegFileAlt;
        return (
          <motion.button
            key={link.id}
            type="button"
            aria-label={link.label}
            onClick={() => handleDockClick(link.id, link.url)}
            animate={bouncingId === link.id ? { y: [0, -12, 0, -5, 0] } : { y: 0 }}
            whileHover={{ y: -4, scale: 1.12 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="group relative flex items-center justify-center text-[#aeb4be] transition-colors hover:text-[#e8e3da]"
          >
            <Icon size={26} />
            <span className="pointer-events-none absolute bottom-full mb-2 text-[0.65rem] font-medium text-[#9a9a9a] opacity-0 transition group-hover:opacity-100">
              {link.label}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
}
