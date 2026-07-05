import { ExternalLink } from "lucide-react";
import type { Project } from "../types";
import { ExpandableCard } from "./ExpandableCard";
import { MediaRenderer } from "./MediaRenderer";

type ProjectCardProps = {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
};

export function ProjectCard({ project, isOpen, onToggle }: ProjectCardProps) {
  return (
    <ExpandableCard
      isOpen={isOpen}
      onToggle={onToggle}
      accent="cyan"
      expandedContent={
        <div className="space-y-5">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7faeaf]">Resume Bullets</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#c9c9c9]">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7faeaf]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <TagGroup title="Skills Used" tags={project.skills} />
            <TagGroup title="More Tech Details" tags={project.detailedTechStack} />
          </div>
          <MediaRenderer media={project.media} />
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[#3a3a3a] bg-[#1a1a1a] px-4 py-2 text-sm font-medium text-[#e8e3da] transition hover:border-[#4a4a4a] hover:bg-[#222222]"
            >
              View GitHub <ExternalLink size={15} />
            </a>
          ) : null}
        </div>
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7faeaf]">{project.year}</p>
      <h2 className="heading-serif mt-2 text-2xl font-bold text-[#e8e3da]">{project.title}</h2>
      <p className="mt-3 text-sm leading-6 text-[#a8a8a8]">{project.shortDescription}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="rounded border border-[#3a3a3a] bg-[#1a1a1a] px-2.5 py-1 text-xs text-[#c9c9c9]">
            {tech}
          </span>
        ))}
      </div>
    </ExpandableCard>
  );
}

function TagGroup({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a8a8a8]">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded border border-[#33403f] bg-[#18201f] px-2.5 py-1 text-xs text-[#bcd0d0]">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
