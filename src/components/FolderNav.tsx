import { motion } from "motion/react";
import { navigationItems } from "../data/navigation";
import type { AccentName, SectionId } from "../types";

type FolderNavProps = {
  activeSection: SectionId;
  onSectionChange: (section: SectionId) => void;
};

// Muted section tab colors (no bright/neon).
const tabColors: Record<AccentName, string> = {
  neutral: "#c9c3b6",
  cyan: "#7a9bb8",
  green: "#8aa88a",
  white: "#b8b2a6",
};

const OUTLINE = "#141414";
const FILL = "#e8e3da";
const FILL_LIGHT = "#f0ebe0";

// Classic hand-drawn desktop folder. Closed = flat folder, open = front pocket + tab.
function FolderIcon({ open, tab }: { open: boolean; tab: string }) {
  return (
    <svg
      viewBox="0 0 72 58"
      className="h-[54px] w-[68px] max-sm:h-[42px] max-sm:w-[52px]"
      style={{ filter: "drop-shadow(2px 3px 0 rgba(17,17,17,0.55))" }}
      aria-hidden="true"
    >
      {/* folder tab */}
      <rect x="9" y="12" width="26" height="13" rx="3" fill={tab} stroke={OUTLINE} strokeWidth="2.5" />
      {/* folder body / back panel */}
      <rect x="7" y="21" width="58" height="29" rx="4" fill={FILL} stroke={OUTLINE} strokeWidth="2.5" />
      {/* open front pocket */}
      {open ? (
        <path
          d="M4 29 H68 L61 51 H11 Z"
          fill={FILL_LIGHT}
          stroke={OUTLINE}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      ) : null}
    </svg>
  );
}

export function FolderNav({ activeSection, onSectionChange }: FolderNavProps) {
  return (
    <nav
      aria-label="Portfolio folders"
      className="fixed right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-5 max-sm:right-2 max-sm:gap-3.5"
    >
      {navigationItems.map((item) => {
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
            <FolderIcon open={isActive} tab={tabColors[item.accent]} />
            <span
              className={`mt-1 text-center text-[0.75rem] leading-tight max-sm:text-[0.62rem] ${
                isActive ? "font-semibold text-[#e8e3da]" : "font-normal text-[#9a9a9a]"
              }`}
            >
              {item.shortLabel}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
}
