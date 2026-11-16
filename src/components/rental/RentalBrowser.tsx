"use client";

// Hele leiesiden: velg kategori, plukk produkter og send én samlet forespørsel.
// Valgene (kategori, dato, sted, handlekurv) lever her, så kurven beholdes når kategorien byttes.
import { useState } from "react";
import { RENTAL_CATEGORIES, RENTAL_REGIONS } from "@/lib/rentals";
import type { RentalCategory, RentalItem } from "@/types/rental";
import RentalCart from "./RentalCart";
import RentalFilters from "./RentalFilters";
import RentalItemCard from "./RentalItemCard";

type Props = { items: RentalItem[]; initialCategory: RentalCategory };

export default function RentalBrowser({ items, initialCategory }: Props) {
  const [category, setCategory] = useState(initialCategory);
  const [date, setDate] = useState("");
  const [region, setRegion] = useState(RENTAL_REGIONS[0]);
  const [picked, setPicked] = useState<string[]>([]);

  const info = RENTAL_CATEGORIES.find((c) => c.id === category)!;
  const visible = items.filter((item) => item.category === category);
  const cart = items.filter((item) => picked.includes(item.id));

  function changeCategory(next: RentalCategory) {
    setCategory(next);
    // Oppdaterer nettadressen uten å laste siden på nytt, så lenken kan deles.
    window.history.replaceState(null, "", `/utstyr/${next}`);
  }

  function toggle(id: string) {
    setPicked(
      picked.includes(id) ? picked.filter((x) => x !== id) : [...picked, id],
    );
  }

  return (
    <div className="space-y-8">
      <RentalFilters
        category={category}
        date={date}
        region={region}
        onCategory={changeCategory}
        onDate={setDate}
        onRegion={setRegion}
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">{info.label}</h2>
            <p className="text-sm text-stone-500">{info.intro}</p>
          </div>
          {visible.map((item) => (
            <RentalItemCard
              key={item.id}
              item={item}
              picked={picked.includes(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </section>

        <aside className="lg:sticky lg:top-4 lg:self-start">
          <RentalCart
            items={cart}
            date={date}
            region={region}
            onRemove={toggle}
            onSent={() => setPicked([])}
          />
        </aside>
      </div>
    </div>
  );
}
