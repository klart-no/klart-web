"use client";

// Steg: bilder og video. Viser hvor mange filer som er valgt; opplasting til Supabase kommer senere.
import { useState } from "react";
import {
  fieldClass,
  labelClass,
  uploadClass,
} from "@/components/ui/formStyles";

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

function UploadField(props: {
  label: string;
  hint: string;
  accept: string;
  multiple?: boolean;
  onFiles: (files: FileList) => void;
}) {
  return (
    <div className="space-y-1.5">
      <p className="text-sm font-medium text-stone-700">{props.label}</p>
      <label className={uploadClass}>
        <span>{props.hint}</span>
        <input
          type="file"
          accept={props.accept}
          multiple={props.multiple}
          className="sr-only"
          onChange={(e) => e.target.files && props.onFiles(e.target.files)}
        />
      </label>
    </div>
  );
}
