import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

type ExpandableCardProps = {
  isOpen: boolean;
  onToggle: () => void;
  accent: "cyan" | "green";
  children: ReactNode;
  expandedContent: ReactNode;
};

// Flat, muted section-tinted card backgrounds (no gradients/glow).
const accentStyles = {
  cyan: "border-[#2f3a40] bg-[#161d20] hover:border-[#3f4e55]",
  green: "border-[#2f3a30] bg-[#171d16] hover:border-[#3f4e3c]",
};

const dividerStyles = {
  cyan: "border-[#2f3a40]",
  green: "border-[#2f3a30]",
};

export function ExpandableCard({ isOpen, onToggle, accent, children, expandedContent }: ExpandableCardProps) {
  return (
    <motion.article
      layout
      className={`rounded-md border transition ${accentStyles[accent]}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 p-5 text-left"
      >
        <div className="min-w-0 flex-1">{children}</div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="mt-1 rounded-md border border-[#3a3a3a] bg-[#1a1a1a] p-2 text-[#a8a8a8]"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`border-t px-5 pb-5 pt-4 ${dividerStyles[accent]}`}>{expandedContent}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
