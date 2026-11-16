"use client";

// Porteføljen i tre faner: Bilder, Filmer og Hele bryllup.
import { useState } from "react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import type { Album } from "@/types/photographer";
import type { MediaItem } from "@/types/vendor";

type Tab = "images" | "films" | "albums";

// Fast mønster for store og små bilder, så rutenettet ser ut som en kuratert portefølje.
const SPANS = [
  "col-span-2 row-span-2",
  "",
  "row-span-2",
  "",
  "col-span-2",
  "",
  "",
  "col-span-2",
  "col-span-2",
];

export default function Portfolio({
  media,
  albums,
}: {
  media: MediaItem[];
  albums: Album[];
}) {
  const images = media.filter((m) => m.kind === "image");
  const films = media.filter((m) => m.kind === "video");
  const [tab, setTab] = useState<Tab>("images");

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "images", label: "Bilder", count: images.length },
    { id: "films", label: "Filmer", count: films.length },
    { id: "albums", label: "Hele bryllup", count: albums.length },
  ];

  return (
    <section className="space-y-4">
      <div
        role="tablist"
        aria-label="Portefølje"
        className="flex flex-wrap gap-2"
      >
        {tabs
          .filter((t) => t.count > 0)
          .map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full border px-5 py-2.5 ${tab === t.id ? "border-navy-900 bg-navy-900 font-semibold text-white" : "border-stone-300 bg-white"}`}
            >
              {t.label} ({t.count})
            </button>
          ))}
      </div>

      {tab === "images" && (
        <div className="grid grid-flow-row-dense auto-rows-[150px] grid-cols-2 gap-2 sm:grid-cols-4">
          {images.slice(0, 9).map((img, i) => (
            <PlaceholderImage
              key={img.alt}
              image={img}
              className={`h-full w-full rounded-lg ${SPANS[i]}`}
            />
          ))}
        </div>
      )}

      {tab === "films" && (
        <div className="grid gap-3 sm:grid-cols-2">
          {films.map((f) => (
            <div
              key={f.alt}
              role="img"
              aria-label={f.alt}
              className="flex h-60 flex-col items-center justify-center gap-2 rounded-xl bg-stone-800 text-white"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70">
                ▶
              </span>
              {f.alt}
            </div>
          ))}
        </div>
      )}

      {tab === "albums" && (
        <div className="grid gap-3 sm:grid-cols-3">
          {albums.map((a) => (
            <div
              key={a.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <PlaceholderImage image={a} className="h-44 w-full" />
              <div className="p-3">
                <strong className="block">{a.title}</strong>
                <span className="text-sm text-stone-500">{a.meta}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
