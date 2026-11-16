import Link from "next/link";

// Knappen øverst til høyre: «Legg til din profil i …-listen».
export default function AddProfileLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white hover:bg-stone-700"
    >
      <span aria-hidden="true">+</span> {label}
    </Link>
  );
}
