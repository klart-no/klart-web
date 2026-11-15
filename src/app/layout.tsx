import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "NordicOccasions – Lokaler og tjenester til bryllup og fest",
  description:
    "Finn selskapslokaler, DJ, fotograf og utstyr til bryllup, bursdag og fest i hele Norge.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body className="bg-stone-50 text-stone-900 antialiased">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
