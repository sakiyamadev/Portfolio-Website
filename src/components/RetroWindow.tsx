import type { ReactNode } from "react";
import { WindowTopBar } from "./WindowTopBar";

type RetroWindowProps = {
  children: ReactNode;
};

export function RetroWindow({ children }: RetroWindowProps) {
  return (
    <section className="relative z-10 mx-auto flex h-[calc(100vh-7.75rem)] w-[min(1060px,calc(100vw-8.5rem))] min-w-0 flex-col overflow-hidden rounded-xl border border-[#3a3a3a] bg-[#121212] shadow-[0_18px_40px_rgba(0,0,0,0.55)] max-md:h-[calc(100vh-7rem)] max-md:w-[calc(100vw-6.25rem)] max-sm:w-[calc(100vw-5.5rem)]">
      <WindowTopBar />
      <div className="window-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-[#121212]">
        {children}
      </div>
    </section>
  );
}
