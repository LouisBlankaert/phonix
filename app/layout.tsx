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
  title: "Phonix - Réparation de Téléphones à Bruxelles & Geraardsbergen | iPhone, Samsung, Xiaomi, Huawei",
  description: "Réparation professionnelle de téléphones à Bruxelles et Geraardsbergen. Écran OLED, batterie, caméra, vitre arrière. iPhone, Samsung, Xiaomi, Huawei. Réparation rapide, garantie 12 mois. Déplacement possible.",
  keywords: "réparation téléphone Bruxelles, réparation iPhone Bruxelles, réparation Samsung Bruxelles, réparation écran téléphone, batterie téléphone, Phonix, Geraardsbergen, réparation mobile Belgique",
  authors: [{ name: "Phonix" }],
  openGraph: {
    title: "Phonix - Réparation de Téléphones Professionnelle",
    description: "Réparation rapide et professionnelle de téléphones à Bruxelles et Geraardsbergen. Garantie 12 mois.",
    type: "website",
    locale: "fr_BE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-BE">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="BE-BRU" />
        <meta name="geo.placename" content="Bruxelles" />
        <link rel="canonical" href="https://phonix-repair.be" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
