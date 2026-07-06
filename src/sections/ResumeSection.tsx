import { siteContent } from "../data/siteContent";
import { ResumeViewer } from "../components/ResumeViewer";
import { SectionHeader } from "../components/SectionHeader";

export function ResumeSection() {
  return (
    <div className="p-8 max-sm:p-5">
      <SectionHeader
        eyebrow="Resume"
        title="Resume"
        accent="purple"
      />
      <ResumeViewer resumePath={siteContent.resumePath} />
    </div>
  );
}
