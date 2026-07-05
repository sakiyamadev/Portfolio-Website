import type { ReactNode } from "react";

type DesktopBackgroundProps = {
  children: ReactNode;
};

export function DesktopBackground({ children }: DesktopBackgroundProps) {
  return (
    <main className="fixed inset-0 overflow-hidden bg-[#050505] text-[#e5e5e5]">
      {/* Flat retro grid: thin subtle white/grey lines on near-black. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      {children}
    </main>
  );
}
