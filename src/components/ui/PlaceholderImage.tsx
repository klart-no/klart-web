// Viser ekte bilde hvis det finnes, ellers en fargeflate med tekst.
import type { VenueImage } from "@/types/venue";

export default function PlaceholderImage({
  image,
  className = "",
}: {
  image: VenueImage;
  className?: string;
}) {
  if (image.src) {
    // Vanlig <img> inntil bildene ligger i Supabase – byttes da til next/image.
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image.src}
        alt={image.alt}
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={image.alt}
      className={`flex items-center justify-center bg-gradient-to-br text-sm text-stone-600/70 ${image.tone} ${className}`}
    >
      {image.alt}
    </div>
  );
}
