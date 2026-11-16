"use client";

// Steg 2 for DJ-er: artistnavn, sted, pris, sjangre, hva som er inkludert, om deg.
import { useState } from "react";
import { fieldClass, labelClass } from "@/components/ui/formStyles";
import { regions } from "@/data/regions";

const GENRES = [
  "Pop",
  "House",
  "Hip-hop",
  "Disco",
  "80-tall",
  "90-tall",
  "Norsk allsang",
  "Latin",
];
const INCLUDED = [
  "Lydanlegg",
  "Lys",
  "Mikrofon til taler",
  "Musikk til seremonien",
];

export default function DjAboutStep() {
  const [genres, setGenres] = useState<string[]>([]);
  const toggle = (g: string) =>
    setGenres(
      genres.includes(g) ? genres.filter((x) => x !== g) : [...genres, g],
    );

  return (
    <>
      <label className={labelClass}>
        Artistnavn
        <input
          name="name"
          placeholder="F.eks. DJ Nordlys"
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
            <option>Nabofylker</option>
            <option>Hele Norge</option>
          </select>
        </label>
        <label className={labelClass}>
          Pris fra (kr)
          <input
            name="priceMin"
            type="number"
            min={0}
            placeholder="8000"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Pris til (kr)
          <input
            name="priceMax"
            type="number"
            min={0}
            placeholder="15000"
            className={fieldClass}
          />
        </label>
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-stone-700">
          Sjangre (velg flere)
        </legend>
        <div className="flex flex-wrap gap-2">
          {GENRES.map((g) => {
            const on = genres.includes(g);
            return (
              <button
                key={g}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(g)}
                className={`rounded-full border px-4 py-2 text-sm ${on ? "border-rose-500 bg-rose-50 font-semibold text-rose-800" : "border-stone-300 bg-white"}`}
              >
                {g}
              </button>
            );
          })}
        </div>
      </fieldset>
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-stone-700">
          Inkludert i prisen
        </legend>
        <div className="grid gap-2 text-sm sm:grid-cols-2">
          {INCLUDED.map((i) => (
            <label key={i} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="included"
                value={i}
                className="h-5 w-5"
              />{" "}
              {i}
            </label>
          ))}
        </div>
      </fieldset>
      <label className={labelClass}>
        Om deg
        <textarea
          name="about"
          rows={4}
          placeholder="Fortell hvem du er og hva slags stemning du skaper"
          className={fieldClass}
        />
      </label>
    </>
  );
}
