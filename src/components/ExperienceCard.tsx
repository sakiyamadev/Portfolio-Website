import { MapPin } from "lucide-react";
import type { Experience } from "../types";
import { ExpandableCard } from "./ExpandableCard";
import { MediaRenderer } from "./MediaRenderer";

type ExperienceCardProps = {
  experience: Experience;
  isOpen: boolean;
  onToggle: () => void;
};

export function ExperienceCard({ experience, isOpen, onToggle }: ExperienceCardProps) {
  return (
    <ExpandableCard
      isOpen={isOpen}
      onToggle={onToggle}
      accent="green"
      expandedContent={
        <div className="space-y-5">
          <p className="text-sm leading-6 text-[#c9c9c9]">{experience.shortDescription}</p>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8aa88a]">Key Contributions</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#c9c9c9]">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8aa88a]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a8a8a8]">Skills / Technologies</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span key={tech} className="rounded border border-[#354035] bg-[#1a201a] px-2.5 py-1 text-xs text-[#c3d3c3]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <MediaRenderer media={experience.media ?? []} />
        </div>
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#8aa88a]">{experience.dateRange}</p>
      <h2 className="heading-serif mt-2 text-2xl font-bold text-[#e8e3da]">{experience.organization}</h2>
      <p className="mt-1 text-sm font-medium text-[#c3d3c3]">{experience.role}</p>
      <p className="mt-3 flex items-center gap-2 text-sm text-[#a8a8a8]">
        <MapPin size={15} />
        {experience.location}
      </p>
    </ExpandableCard>
  );
}
