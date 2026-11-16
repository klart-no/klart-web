"use client";

// Steg 2 for fotografer: navn, sted, tjeneste, språk, stil (opptil 3) og om meg.
import { useState } from "react";
import { fieldClass, labelClass } from "@/components/ui/formStyles";
import { regions } from "@/data/regions";
import { STYLES } from "@/lib/photographers";

const MAX_STYLES = 3;

export default function PhotographerAboutStep() {
  const [styles, setStyles] = useState<string[]>([]);
  const toggle = (s: string) => {
    if (styles.includes(s)) setStyles(styles.filter((x) => x !== s));
    else if (styles.length < MAX_STYLES) setStyles([...styles, s]);
  };

  return (
    <>
      <label className={labelClass}>
        Navn eller firmanavn
        <input
          name="name"
          placeholder="F.eks. Lysglimt Foto"
          className={fieldClass}
        />
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className={labelClass}>
          Hjemsted (region)
          <select name="region" className={fieldClass}>
            {regions.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Reiser til
          <select name="travel" className={fieldClass}>
            <option>Kun egen region</option>
            <option>Hele Norge</option>
            <option>Hele Norge og utlandet</option>
          </select>
        </label>
        <label className={labelClass}>
          Tjeneste
          <select name="service" className={fieldClass}>
            <option value="foto">Foto</option>
            <option value="video">Video</option>
            <option value="begge">Foto og video</option>
          </select>
        </label>
        <label className={labelClass}>
          Språk
          <input
            name="languages"
            placeholder="Norsk, engelsk"
            className={fieldClass}
          />
        </label>
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-stone-700">
          Stil (velg opptil {MAX_STYLES})
        </legend>
        <div className="flex flex-wrap gap-2">
          {STYLES.map((s) => {
            const on = styles.includes(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(s)}
                className={`rounded-full border px-4 py-2 text-sm ${on ? "border-gold-500 bg-gold-50 font-semibold text-gold-800" : "border-stone-300 bg-white"}`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>
      <label className={labelClass}>
        Om meg
        <textarea
          name="about"
          rows={4}
          placeholder="Bakgrunn, hvordan du jobber på dagen, hva som gjør stilen din særegen"
          className={fieldClass}
        />
      </label>
    </>
  );
}
