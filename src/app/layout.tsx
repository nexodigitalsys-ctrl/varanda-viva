import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mendes Design | Móveis para Áreas Externas em Uberaba",
  description: "Mendes Design — Reformas, revitalização e móveis para áreas externas em Uberaba. Troca de cordas náuticas, reforma em alumínio, revitalização completa. Atendimento em Uberaba e região.",
  keywords: ["móveis área externa", "reformas", "revitalização", "corda náutica", "alumínio", "Uberaba"],
  authors: [{ name: "Mendes Design" }],
  openGraph: {
    title: "Mendes Design | Móveis para Áreas Externas",
    description: "Reformas e revitalização com qualidade e sofisticação em Uberaba",
    siteName: "Mendes Design",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendes Design",
    description: "Reformas e revitalização com qualidade e sofisticação em Uberaba",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FurnitureStore",
              name: "Mendes Design",
              description: "Reformas e revitalização de móveis para áreas externas em Uberaba",
              telephone: "+55-34-99899-2309",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Uberaba",
                addressRegion: "MG",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-19.74778",
                longitude: "-47.93194",
              },
              openingHours: "Mo-Fr 09:00-18:00,Sa 09:00-13:00",
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans bg-surface text-text">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
