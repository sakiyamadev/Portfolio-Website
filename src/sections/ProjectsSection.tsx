import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { projects } from "../data/projects";
import type { ProjectCategory } from "../types";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeader } from "../components/SectionHeader";

type ProjectFilter = "all" | ProjectCategory;

const filters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "software", label: "Software" },
  { id: "embedded", label: "Embedded / Robotics / Firmware" },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [expandedProjectIds, setExpandedProjectIds] = useState<Set<string>>(new Set());

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const toggleProject = (projectId: string) => {
    setExpandedProjectIds((current) => {
      const next = new Set(current);
      if (next.has(projectId)) {
        next.delete(projectId);
      } else {
        next.add(projectId);
      }
      return next;
    });
  };

  return (
    <div className="p-8 max-sm:p-5">
      <SectionHeader
        eyebrow="Projects"
        title="Projects"
        accent="cyan"
      />
      <div className="mb-6 flex flex-wrap items-center gap-2 rounded-md border border-[#2a2a2a] bg-[#171717] p-3">
        <div className="flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#a8a8a8]">
          <SlidersHorizontal size={15} />
          Filters
        </div>
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-[#3f4e55] bg-[#18201f] text-[#bcd0d0]"
                  : "border-[#2f2f2f] bg-[#121212] text-[#a8a8a8] hover:border-[#3a3a3a] hover:text-[#e8e3da]"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
      <div className="grid gap-5 xl:grid-cols-1">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOpen={expandedProjectIds.has(project.id)}
            onToggle={() => toggleProject(project.id)}
          />
        ))}
      </div>
    </div>
  );
}
