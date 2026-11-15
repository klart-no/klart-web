// Formatering av tall og datoer for visning.

export function formatNok(amount: number): string {
  return `${amount.toLocaleString("nb-NO")} kr`;
}

export function formatPriceRange(min: number, max: number): string {
  return `${min.toLocaleString("nb-NO")}–${max.toLocaleString("nb-NO")} kr`;
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
