import type { AccentName } from "../types";

// Muted, flat accent colors per section (no gradients/neon).
const eyebrowClasses: Record<AccentName, string> = {
  neutral: "text-[#a8a8a8]",
  cyan: "text-[#7faeaf]",
  green: "text-[#8aa88a]",
  purple: "text-[#a89bb8]",
};

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  helper?: string;
  accent?: AccentName;
};

export function SectionHeader({ eyebrow, title, helper, accent = "neutral" }: SectionHeaderProps) {
  return (
    <header className="mb-8">
      {eyebrow ? (
        <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.14em] ${eyebrowClasses[accent]}`}>
          {eyebrow}
        </p>
      ) : null}
      <h1 className="section-heading text-5xl font-bold text-[#e8e3da] max-sm:text-4xl">
        {title}
      </h1>
      {helper ? <p className="mt-3 max-w-2xl text-sm leading-6 text-[#a8a8a8]">{helper}</p> : null}
    </header>
  );
}
