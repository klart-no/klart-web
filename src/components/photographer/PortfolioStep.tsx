"use client";

// Steg 3 for fotografer: portefølje. Minst 20 bilder kreves før profilen kan publiseres.
import { useState } from "react";
import UploadField from "@/components/signup/UploadField";
import { fieldClass, labelClass } from "@/components/ui/formStyles";

export const MIN_PORTFOLIO = 20;
const MAX_PORTFOLIO = 150;

export default function PortfolioStep() {
  const [images, setImages] = useState(0);
  const [films, setFilms] = useState(0);
  const missing = Math.max(0, MIN_PORTFOLIO - images);

  return (
    <>
      <p className="rounded-lg bg-stone-50 p-3 text-sm text-stone-700">
        Porteføljen er det viktigste på profilen din. Last opp minst{" "}
        <strong>{MIN_PORTFOLIO} bilder</strong> i høy kvalitet, gjerne fra flere
        bryllup. Det første bildet vises i listen.
      </p>
      <UploadField
        label="Profilbilde av deg"
        hint="Last opp profilbilde"
        accept="image/*"
        onFiles={() => {}}
      />
      <UploadField
        label={`Porteføljebilder (minst ${MIN_PORTFOLIO}, opptil ${MAX_PORTFOLIO})`}
        hint={
          images
            ? `${Math.min(images, MAX_PORTFOLIO)} bilder valgt`
            : "Velg bilder"
        }
        accept="image/*"
        multiple
        onFiles={(f) => setImages(f.length)}
      />
      <p className={`text-sm ${missing ? "text-amber-800" : "text-green-800"}`}>
        {missing
          ? `${missing} bilder til før profilen kan publiseres`
          : "Nok bilder til å publisere"}
      </p>
      <UploadField
        label="Filmer (opptil 6)"
        hint={films ? `${Math.min(films, 6)} filmer valgt` : "Last opp film"}
        accept="video/*"
        multiple
        onFiles={(f) => setFilms(f.length)}
      />
      <label className={labelClass}>
        …eller lim inn lenke til YouTube eller Vimeo
        <input name="filmLink" placeholder="https://" className={fieldClass} />
      </label>
      <label className={labelClass}>
        Hele bryllup (valgfritt, anbefalt): lenke til et galleri fra ett bryllup
        <input name="albumLink" placeholder="https://" className={fieldClass} />
      </label>
    </>
  );
}
