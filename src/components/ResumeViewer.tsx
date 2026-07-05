import { Download } from "lucide-react";

type ResumeViewerProps = {
  resumePath: string;
};

export function ResumeViewer({ resumePath }: ResumeViewerProps) {
  return (
    <div className="rounded-md border border-[#2a2a2a] bg-[#1a1a1a] p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="heading-serif text-xl font-bold text-[#e8e3da]">Resume Preview</h2>
          <p className="mt-1 text-sm text-[#a8a8a8]">Replace the placeholder PDF in public/assets when ready.</p>
        </div>
        <a
          href={resumePath}
          download
          className="inline-flex items-center gap-2 rounded-md border border-[#3a3a3a] bg-[#222222] px-4 py-2 text-sm font-medium text-[#e8e3da] transition hover:border-[#4a4a4a] hover:bg-[#2a2a2a]"
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>
      <div className="h-[min(68vh,760px)] overflow-hidden rounded border border-[#2f2f2f] bg-[#121212]">
        <object data={resumePath} type="application/pdf" className="h-full w-full">
          <div className="flex h-full items-center justify-center p-8 text-center text-[#a8a8a8]">
            Resume preview could not load. Please use the download button.
          </div>
        </object>
      </div>
    </div>
  );
}
