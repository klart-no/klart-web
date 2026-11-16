// Bilder og videoer øverst på en profil: stort profilbilde + inntil fire mindre.
// Videoer vises som avspillingsfelt (ekte avspilling kommer når filene ligger i Supabase).
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import type { MediaItem } from "@/types/vendor";

export default function MediaGallery({ media }: { media: MediaItem[] }) {
  const [main, ...rest] = media;
  const shown = rest.slice(0, 3);
  const hidden = rest.length - shown.length;

  return (
    <div className="grid h-80 gap-2 overflow-hidden rounded-2xl sm:grid-cols-4 sm:grid-rows-2">
      <PlaceholderImage
        image={main}
        className="h-full w-full sm:col-span-2 sm:row-span-2"
      />
      {shown.map((item) =>
        item.kind === "video" ? (
          <VideoTile key={item.alt} item={item} />
        ) : (
          <PlaceholderImage
            key={item.alt}
            image={item}
            className="hidden h-full w-full sm:flex"
          />
        ),
      )}
      {hidden > 0 && (
        <div className="hidden items-center justify-center bg-stone-200 text-sm font-semibold sm:flex">
          + {hidden} til
        </div>
      )}
    </div>
  );
}

function VideoTile({ item }: { item: MediaItem }) {
  return (
    <div
      role="img"
      aria-label={item.alt}
      className="hidden flex-col items-center justify-center gap-2 bg-stone-800 text-sm text-white sm:flex"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70">
        ▶
      </span>
      Video
    </div>
  );
}
