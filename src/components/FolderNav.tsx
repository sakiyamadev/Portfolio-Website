import { motion } from "motion/react";
import type { SectionId } from "../types";

type FolderNavProps = {
  activeSection: SectionId;
  onSectionChange: (section: SectionId) => void;
};

const navItems: {
  id: SectionId;
  label: string;
  closedIcon: string;
  openIcon: string;
}[] = [
  {
    id: "home",
    label: "Home",
    closedIcon: "/assets/folder-home-closed.png",
    openIcon: "/assets/folder-home-open.png",
  },
  {
    id: "projects",
    label: "Projects",
    closedIcon: "/assets/folder-projects-closed.png",
    openIcon: "/assets/folder-projects-open.png",
  },
  {
    id: "experience",
    label: "Experience",
    closedIcon: "/assets/folder-experience-closed.png",
    openIcon: "/assets/folder-experience-open.png",
  },
  {
    id: "resume",
    label: "Resume",
    closedIcon: "/assets/folder-resume-closed.png",
    openIcon: "/assets/folder-resume-open.png",
  },
];

export function FolderNav({ activeSection, onSectionChange }: FolderNavProps) {
  return (
    <nav
      aria-label="Portfolio folders"
      className="fixed right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-5 max-sm:right-2 max-sm:gap-3.5"
    >
      {navItems.map((item) => {
        const isActive = item.id === activeSection;
        return (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => onSectionChange(item.id)}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.97 }}
            animate={{ rotate: isActive ? -5 : 0, x: isActive ? -2 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="flex flex-col items-center bg-transparent outline-none"
            aria-current={isActive ? "page" : undefined}
          >
            <img
              src={isActive ? item.openIcon : item.closedIcon}
              alt=""
              className="w-[82px] object-contain max-sm:w-16"
              draggable={false}
            />
            <span
              className={`mt-1 text-center text-[0.75rem] leading-tight max-sm:text-[0.62rem] ${
                isActive ? "font-semibold text-[#e8e3da]" : "font-normal text-[#9a9a9a]"
              }`}
            >
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
}
