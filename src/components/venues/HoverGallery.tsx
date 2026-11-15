"use client";

// Bildet på venue-kortet: når musen beveges over bildet, byttes bildet
// etter hvor musen er (venstre = første bilde, høyre = siste). Ingen klikk nødvendig.
import { useState } from "react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import type { VenueImage } from "@/types/venue";

export default function HoverGallery({ images }: { images: VenueImage[] }) {
  const [index, setIndex] = useState(0);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const share = (e.clientX - rect.left) / rect.width;
    setIndex(Math.min(images.length - 1, Math.floor(share * images.length)));
  }

  return (
    <div
      className="relative h-52 overflow-hidden"
      onMouseMove={onMove}
      onMouseLeave={() => setIndex(0)}
    >
      <PlaceholderImage image={images[index]} className="h-full w-full" />
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
          {images.map((img, i) => (
            <span
              key={img.alt}
              className={`h-1.5 w-1.5 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
