// Datohjelpere for kalenderen. Alle datoer lagres som tekst: ÅÅÅÅ-MM-DD.

export const WEEKDAYS = ["Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"];

export function toIso(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function todayIso(): string {
  return toIso(new Date());
}

export function monthLabel(year: number, month: number): string {
  return new Date(year, month, 1).toLocaleDateString("nb-NO", {
    month: "long",
    year: "numeric",
  });
}

// Dager i måneden, med tomme plasser foran slik at uka starter på mandag.
export function monthGrid(year: number, month: number): (string | null)[] {
  const first = new Date(year, month, 1);
  const leadingBlanks = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (string | null)[] = Array(leadingBlanks).fill(null);
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(toIso(new Date(year, month, day)));
  }
  return cells;
}
