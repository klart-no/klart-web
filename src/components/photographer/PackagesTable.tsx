import { formatNok } from "@/lib/format";
import type { PhotoPackage } from "@/types/photographer";

export default function PackagesTable({
  packages,
}: {
  packages: PhotoPackage[];
}) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold">Pakker og priser</h2>
      <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-stone-100 text-sm">
            <tr>
              <th className="p-3">Pakke</th>
              <th className="p-3">Inkluderer</th>
              <th className="p-3">Pris fra</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pk) => (
              <tr key={pk.name} className="border-t border-stone-200">
                <td className="p-3 font-semibold">{pk.name}</td>
                <td className="p-3 text-stone-700">{pk.includes}</td>
                <td className="p-3 whitespace-nowrap">
                  {formatNok(pk.priceFrom)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
