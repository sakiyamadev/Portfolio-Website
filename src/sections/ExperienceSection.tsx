import { useState } from "react";
import { experiences } from "../data/experience";
import { ExperienceCard } from "../components/ExperienceCard";
import { SectionHeader } from "../components/SectionHeader";

export function ExperienceSection() {
  const [expandedExperienceIds, setExpandedExperienceIds] = useState<Set<string>>(new Set());

  const toggleExperience = (experienceId: string) => {
    setExpandedExperienceIds((current) => {
      const next = new Set(current);
      if (next.has(experienceId)) {
        next.delete(experienceId);
      } else {
        next.add(experienceId);
      }
      return next;
    });
  };

  return (
    <div className="p-8 max-sm:p-5">
      <SectionHeader
        eyebrow="Experience"
        title="Experience"
        accent="green"
      />
      <div className="grid gap-5 xl:grid-cols-1">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isOpen={expandedExperienceIds.has(experience.id)}
            onToggle={() => toggleExperience(experience.id)}
          />
        ))}
      </div>
    </div>
  );
}
