import Link from "next/link";
import { navigation } from "@/config/navigation";

// Kortene på forsiden – én per kategori i menyen.
export default function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.children ? item.children[0].href : item.href}
          className="group rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold group-hover:text-rose-600">
            {item.label}
          </h2>
          <p className="mt-1 text-sm text-stone-500">{item.description}</p>
          <span className="mt-4 inline-block text-sm font-medium text-rose-600">
            Utforsk →
          </span>
        </Link>
      ))}
    </div>
  );
}
