import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ouaké Web – Culture, langues et actus locales",
  description:
    "Ouaké Web valorise les cultures locales de la commune de Ouaké : Lokpa, Peul, Foto et autres communautés. Infos, traditions, proverbes, musiques et langues à découvrir.",
  keywords: [
    "Ouaké",
    "Lokpa",
    "Peul",
    "Foto",
    "Langues béninoises",
    "Culture béninoise",
    "Traditions",
    "Proverbes africains",
    "Infos Ouaké",
    "Commune Ouaké",
  ],
  openGraph: {
    title: "Ouaké Web – Cultures & langues locales à l’honneur",
    description:
      "Une plateforme inclusive pour découvrir les cultures Lokpa, Peul, Foto et bien d'autres à Ouaké. Actus, proverbes, musiques, traditions.",
    url: "https://ouakeweb.bj",
    siteName: "Ouaké Web",
    images: [
      {
        url: "/og-inclusive.jpg", // image inclusive (ex: personnes de plusieurs communautés)
        width: 1200,
        height: 630,
        alt: "Diversité culturelle à Ouaké",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ouaké Web – Plateforme culturelle inclusive",
    description:
      "Découvrez toutes les cultures et langues de Ouaké : Lokpa, Peul, Foto et autres communautés valorisées sur une seule plateforme.",
    images: ["/og-inclusive.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
