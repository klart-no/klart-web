import Link from "next/link";
import CategoryGrid from "@/components/home/CategoryGrid";

export default function Home() {
  return (
    <div className="space-y-14">
      {/* Hovedfeltet: samme marineblå som logoen, med gull som aksent. */}
      <section className="rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-16 text-center sm:py-20">
        <div className="mx-auto mb-6 h-px w-24 bg-gold-400" />
        <h1 className="text-4xl font-semibold tracking-tight text-gold-50 sm:text-5xl">
          Alt til den store dagen – på ett sted
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gold-100">
          Finn lokale, DJ, fotograf og utstyr til bryllup, bursdag og fest i
          hele Norge.
        </p>
        <Link
          href="/selskapslokaler"
          className="mt-8 inline-block rounded-full bg-gold-200 px-7 py-3 font-semibold text-navy-950 hover:bg-gold-100"
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
