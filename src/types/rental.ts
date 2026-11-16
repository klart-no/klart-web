// Datatyper for utleie: eget utstyr (fotoboks m.m.) og bryllupsbiler fra private eiere.

export type RentalCategory = "fotoboks" | "fotovegg" | "bryllupsbil" | "annet";

export type Spec = { label: string; value: string };

export type RentalItem = {
  id: string;
  category: RentalCategory;
  name: string;
  description: string;
  keyPoints: string[]; // korte punkter som vises på kortet
  specs: Spec[]; // full liste under «Se spesifikasjoner»
  price: number; // NOK per arrangement (biler: fra-pris per bryllup)
  badge: string; // f.eks. "2 enheter" eller "Privat eier · Oslo"
  tone: string; // farge på bildeplassholderen (Tailwind-klasser)
};

export type RentalCategoryInfo = {
  id: RentalCategory;
  label: string;
  intro: string;
};
