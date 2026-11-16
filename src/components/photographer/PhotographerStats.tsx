import type { Photographer } from "@/types/photographer";

// Nøkkeltall i én rad: erfaring, antall bryllup, leveringstid, bilder levert.
export default function PhotographerStats({ p }: { p: Photographer }) {
  const stats = [
    { label: "Erfaring", value: `${p.yearsExperience} år` },
    { label: "Bryllup fotografert", value: `${p.weddingsShot}+` },
    { label: "Leveringstid", value: p.deliveryTime },
    { label: "Levert", value: p.photosDelivered },
  ];

  return (
    <dl className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-5 shadow-sm sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label}>
          <dt className="text-sm text-stone-500">{s.label}</dt>
          <dd className="text-xl font-bold">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
