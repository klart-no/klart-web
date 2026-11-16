import Link from "next/link";

// Felles side for kategorier som ikke er bygget ennå.
export default function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-xl py-16 text-center">
      <span className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800">
        Kommer snart
      </span>
      <h1 className="mt-4 text-3xl font-bold">{title}</h1>
      <p className="mt-3 text-stone-600">{description}</p>
      <Link
        href="/selskapslokaler"
        className="mt-8 inline-block rounded-lg bg-navy-900 px-5 py-3 font-semibold text-white hover:bg-navy-700"
      >
        Se selskapslokaler i mellomtiden
      </Link>
    </div>
  );
}
