import Link from "next/link";
import CategoryGrid from "@/components/home/CategoryGrid";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="py-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Alt til den store dagen – på ett sted
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
          Finn lokale, DJ, fotograf og utstyr til bryllup, bursdag og fest i
          hele Norge.
        </p>
        <Link
          href="/selskapslokaler"
          className="mt-8 inline-block rounded-full bg-rose-500 px-7 py-3 font-semibold text-white hover:bg-rose-600"
        >
          Finn selskapslokale
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Hva trenger du?</h2>
        <CategoryGrid />
      </section>
    </div>
  );
}
