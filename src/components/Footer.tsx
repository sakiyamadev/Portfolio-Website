import { siteContent } from "../data/siteContent";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-[#2a2a2a] pt-6 text-xs leading-6 text-[#8a8a8a]">
      {siteContent.footerLines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </footer>
  );
}
