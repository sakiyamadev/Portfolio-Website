import { useEffect } from "react";
import { motion } from "motion/react";
import { siteContent } from "../data/siteContent";

type BootScreenProps = {
  onEnter: () => void;
};

export function BootScreen({ onEnter }: BootScreenProps) {
  useEffect(() => {
    const handleKeyDown = () => onEnter();
    window.addEventListener("keydown", handleKeyDown, { once: true });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onEnter]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black px-6 text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.55, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <img
          src={siteContent.bootIcon}
          alt="Boot icon"
          className="h-40 w-40 rounded-2xl border border-[#3a3a3a] bg-[#161616] object-cover p-4"
        />
        <div className="mt-8 h-1.5 w-64 overflow-hidden rounded-full bg-[#262626]">
          <motion.div
            className="h-full rounded-full bg-[#a8a8a8]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.35, ease: "easeInOut" }}
          />
        </div>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[#8a8a8a]">Welcome</p>
        <h1 className="mt-3 text-2xl font-semibold text-[#e8e3da]">Press any key to enter</h1>
        <button
          type="button"
          onClick={onEnter}
          className="mt-8 rounded-md border border-[#3a3a3a] bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-[#e8e3da] transition hover:border-[#4a4a4a] hover:bg-[#222222]"
        >
          Enter Portfolio
        </button>
      </motion.div>
    </motion.div>
  );
}
