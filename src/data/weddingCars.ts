// EKSEMPELDATA – bryllupsbiler fra private eiere (fiktive). Eierne registrerer bilen selv senere.
import type { RentalItem, Spec } from "@/types/rental";

type CarInput = {
  id: string;
  name: string;
  description: string;
  price: number;
  place: string;
  tone: string;
  year: string;
  color: string;
  seats: string;
  driver: string;
  hours: string;
  area: string;
  rain: string;
};

function car(c: CarInput): RentalItem {
  const specs: Spec[] = [
    { label: "Årsmodell", value: c.year },
    { label: "Farge", value: c.color },
    { label: "Seter for gjester", value: c.seats },
    { label: "Sjåfør", value: c.driver },
    { label: "Varighet", value: `Opptil ${c.hours} timer` },
    { label: "Kjøreområde", value: c.area },
    { label: "Ved regn", value: c.rain },
  ];
  return {
    id: c.id,
    category: "bryllupsbil",
    name: c.name,
    description: c.description,
    keyPoints: ["Med sjåfør", `${c.seats} seter`, `Opptil ${c.hours} timer`],
    specs,
    price: c.price,
    badge: `Privat eier · ${c.place}`,
    tone: c.tone,
  };
}

export const weddingCars: RentalItem[] = [
  car({
    id: "cabriolet-1965",
    name: "Amerikansk cabriolet, 1965 (eksempel)",
    description: "Åpen klassiker i lys blå med hvitt skinninteriør.",
    price: 6000,
    place: "Oslo",
    tone: "from-sky-100 to-blue-200",
    year: "1965",
    color: "Lys blå",
    seats: "3",
    driver: "Eieren kjører selv",
    hours: "3",
    area: "Oslo og omegn",
    rain: "Kalesje kan slås opp",
  }),
  car({
    id: "limousin-1958",
    name: "Engelsk limousin, 1958 (eksempel)",
    description: "Sort og krem veteranbil med god plass til brudekjolen.",
    price: 7500,
    place: "Bærum",
    tone: "from-stone-200 to-stone-300",
    year: "1958",
    color: "Sort og krem",
    seats: "4",
    driver: "Eieren kjører selv, i uniform",
    hours: "4",
    area: "Oslo og Viken",
    rain: "Lukket bil",
  }),
  car({
    id: "folkebuss-1974",
    name: "Folkebuss fra 70-tallet (eksempel)",
    description: "Sjarmerende minibuss i mintgrønt – populær til bilder.",
    price: 4500,
    place: "Stavanger",
    tone: "from-emerald-100 to-teal-200",
    year: "1974",
    color: "Mintgrønn og hvit",
    seats: "6",
    driver: "Eieren kjører selv",
    hours: "3",
    area: "Nord-Jæren",
    rain: "Lukket bil",
  }),
];
