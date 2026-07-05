import type { MediaItem } from "../types";

type MediaRendererProps = {
  media: MediaItem[];
};

export function MediaRenderer({ media }: MediaRendererProps) {
  if (media.length === 0) {
    return null;
  }

  return (
    <div className="mt-5 grid gap-4">
      {media.map((item) => (
        <figure key={`${item.type}-${item.src}`} className="overflow-hidden rounded-md border border-[#2a2a2a] bg-[#121212]">
          {item.type === "image" ? (
            <img src={item.src} alt={item.alt ?? ""} className="h-auto max-h-[420px] w-full object-cover" loading="lazy" />
          ) : null}
          {item.type === "localVideo" ? (
            <video src={item.src} controls className="w-full bg-black" preload="metadata">
              Your browser does not support the video tag.
            </video>
          ) : null}
          {item.type === "embedVideo" ? (
            <div className="aspect-video w-full">
              <iframe
                src={item.src}
                title={item.caption ?? "Embedded project video"}
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : null}
          {item.caption ? (
            <figcaption className="border-t border-[#2a2a2a] px-4 py-3 text-xs leading-5 text-[#a8a8a8]">
              {item.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
