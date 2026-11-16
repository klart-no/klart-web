"use client";

// Steg: bilder og video. Viser hvor mange filer som er valgt; opplasting til Supabase kommer senere.
import { useState } from "react";
import { fieldClass, labelClass } from "@/components/ui/formStyles";
import UploadField from "./UploadField";

type Props = { maxImages: number; maxVideos: number; videoHint: string };

export default function StepMedia({ maxImages, maxVideos, videoHint }: Props) {
  const [profile, setProfile] = useState("");
  const [images, setImages] = useState(0);
  const [videos, setVideos] = useState(0);

  return (
    <>
      <UploadField
        label="Profilbilde"
        hint={profile || "Last opp profilbilde (JPG eller PNG)"}
        accept="image/*"
        onFiles={(f) => setProfile(f[0]?.name ?? "")}
      />
      <UploadField
        label={`Bilder fra oppdrag (opptil ${maxImages})`}
        hint={
          images ? `${Math.min(images, maxImages)} bilder valgt` : "Velg bilder"
        }
        accept="image/*"
        multiple
        onFiles={(f) => setImages(f.length)}
      />
      <UploadField
        label={`Videoer (opptil ${maxVideos})`}
        hint={
          videos ? `${Math.min(videos, maxVideos)} videoer valgt` : videoHint
        }
        accept="video/*"
        multiple
        onFiles={(f) => setVideos(f.length)}
      />
      <label className={labelClass}>
        …eller lim inn lenke til YouTube, Vimeo eller Instagram
        <input name="videoLink" placeholder="https://" className={fieldClass} />
      </label>
    </>
  );
}
