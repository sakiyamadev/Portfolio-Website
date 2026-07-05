import type { ReactNode } from "react";
import { Cpu, Mail, Sparkles } from "lucide-react";
import { siteContent } from "../data/siteContent";
import { SectionHeader } from "../components/SectionHeader";
import { TechStackGrid } from "../components/TechStackGrid";

export function HomeSection() {
  return (
    <div className="p-8 max-sm:p-5">
      <SectionHeader eyebrow="Home / About / Contact" title={`Hey, I'm ${siteContent.name}.`} accent="neutral" />
      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-md border border-[#2a2a2a] bg-[#1a1a1a] p-3">
          {/* Replace profile-placeholder.png with your real profile photo. */}
          <img
            src={siteContent.profileImage}
            alt="Shun Akiyama profile placeholder"
            className="aspect-[4/5] w-full rounded border border-[#2f2f2f] object-cover"
          />
        </div>
        <div className="rounded-md border border-[#2a2a2a] bg-[#1a1a1a] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7faeaf]">{siteContent.headline}</p>
          <h2 className="heading-serif mt-3 text-3xl font-bold text-[#e8e3da]">About Me</h2>
          <p className="mt-4 text-base leading-8 text-[#c9c9c9]">{siteContent.intro}</p>
          <p className="mt-4 text-base leading-8 text-[#a8a8a8]">{siteContent.about}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <InfoPanel icon={<Sparkles size={18} />} title="Personal Interests" text={siteContent.interests} />
            <InfoPanel icon={<Cpu size={18} />} title="Technical Focus" text={siteContent.technicalFocus} />
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-[#2f2f2f] bg-[#121212] px-4 py-2 text-sm text-[#a8a8a8]">
            <Mail size={16} />
            Use the dock below for GitHub, LinkedIn, Instagram, email, and resume.
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-md border border-[#2a2a2a] bg-[#171717] p-5">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a8a8a8]">Flexible Content Area</p>
          <h2 className="heading-serif mt-2 text-2xl font-bold text-[#e8e3da]">Personal Photos / Notes</h2>
          <p className="mt-2 text-sm leading-6 text-[#a8a8a8]">
            Add writing, lifestyle photos, robotics build photos, captions, or anything that helps the site feel like you.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {siteContent.personalPhotos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-md border border-[#2a2a2a] bg-[#121212]">
              <img src={photo.src} alt={photo.alt} className="aspect-video w-full object-cover" />
              <figcaption className="border-t border-[#2a2a2a] px-4 py-3 text-xs text-[#a8a8a8]">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <TechStackGrid />
    </div>
  );
}

function InfoPanel({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-md border border-[#2f2f2f] bg-[#121212] p-4">
      <div className="mb-3 flex items-center gap-2 text-[#7faeaf]">
        {icon}
        <h3 className="text-xs font-semibold uppercase tracking-[0.1em]">{title}</h3>
      </div>
      <p className="text-sm leading-6 text-[#a8a8a8]">{text}</p>
    </div>
  );
}
