"use client";

// Admin: skjema for å legge til et utleieprodukt vi eier selv.
// Lagring kobles på med Supabase – foreløpig viser skjemaet bare en bekreftelse.
import { useState } from "react";
import UploadField from "@/components/signup/UploadField";
import { fieldClass, labelClass } from "@/components/ui/formStyles";
import { RENTAL_CATEGORIES, RENTAL_REGIONS } from "@/lib/rentals";
import SpecRows from "./SpecRows";

const SUGGESTED_SPECS = [
  "Kamera",
  "Utskrift",
  "Plassbehov",
  "Strøm",
  "Oppsettstid",
  "Leietid",
].map((label) => ({ label, value: "" }));
const card = "space-y-4 rounded-2xl bg-white p-6 shadow-sm";

export default function ProductForm() {
  const [saved, setSaved] = useState(false);
  const [images, setImages] = useState(0);
  // Biler legges ikke inn her – bileierne registrerer dem selv.
  const categories = RENTAL_CATEGORIES.filter((c) => c.id !== "bryllupsbil");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSaved(true);
      }}
      className="space-y-6"
    >
      <section className={card}>
        <h2 className="text-lg font-semibold">Grunninfo</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className={labelClass}>
            Kategori
            <select name="category" className={fieldClass}>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
          <label className={labelClass}>
            Produktnavn
            <input
              name="name"
              required
              placeholder="F.eks. Speilboks"
              className={fieldClass}
            />
          </label>
        </div>
        <label className={labelClass}>
          Kort beskrivelse
          <textarea name="description" rows={2} className={fieldClass} />
        </label>
        <label className={labelClass}>
          Nøkkelpunkter på kortet (korte, skilt med komma)
          <input
            name="keyPoints"
            placeholder="Helfigur, utskrift, signatur på skjermen"
            className={fieldClass}
          />
        </label>
      </section>

      <section className={card}>
        <h2 className="text-lg font-semibold">Spesifikasjoner</h2>
        <SpecRows initial={SUGGESTED_SPECS} />
      </section>

      <section className={card}>
        <h2 className="text-lg font-semibold">Pris og lager</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className={labelClass}>
            Pris per arrangement (kr)
            <input
              name="price"
              type="number"
              min={0}
              required
              className={fieldClass}
            />
          </label>
          <label className={labelClass}>
            Antall enheter vi eier
            <input
              name="units"
              type="number"
              min={1}
              defaultValue={1}
              className={fieldClass}
            />
          </label>
          <label className={labelClass}>
            Lagersted
            <select name="region" className={fieldClass}>
              {RENTAL_REGIONS.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </label>
        </div>
        <label className={labelClass}>
          Innkjøpspris (kun synlig for oss, kr)
          <input
            name="purchasePrice"
            type="number"
            min={0}
            className={`${fieldClass} sm:max-w-64`}
          />
        </label>
      </section>

      <section className={card}>
        <h2 className="text-lg font-semibold">Bilder</h2>
        <UploadField
          label="Produktbilder (det første vises på kortet)"
          hint={images ? `${images} bilder valgt` : "Velg bilder"}
          accept="image/*"
          multiple
          onFiles={(f) => setImages(f.length)}
        />
      </section>

      {saved && (
        <p className="rounded-lg bg-amber-100 p-3 text-sm text-amber-900">
          Skjemaet er fylt ut riktig, men produktet er ikke lagret ennå –
          lagring kobles på når databasen (Supabase) er satt opp.
        </p>
      )}
      <div className="flex justify-end">
        <button className="rounded-lg bg-navy-900 px-6 py-3 font-semibold text-white hover:bg-navy-700">
          Publiser
        </button>
      </div>
    </form>
  );
}
