import PlaceholderImage from "@/components/ui/PlaceholderImage";
import type { VenueImage } from "@/types/venue";

// Stort hovedbilde + 2 eller 4 mindre ved siden av (alltid uten tomme hull).
export default function VenueGallery({ images }: { images: VenueImage[] }) {
  const [main, ...rest] = images;
  const small = rest.length >= 4 ? rest.slice(0, 4) : rest.slice(0, 2);
  const cols = small.length === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3";

  return (
    <div
      className={`grid h-80 gap-2 overflow-hidden rounded-2xl sm:grid-rows-2 ${cols}`}
    >
      <PlaceholderImage
        image={main}
        className="h-full w-full sm:col-span-2 sm:row-span-2"
      />
      {small.map((img) => (
        <PlaceholderImage
          key={img.alt}
          image={img}
          className="hidden h-full w-full sm:flex"
        />
      ))}
    </div>
  );
}
