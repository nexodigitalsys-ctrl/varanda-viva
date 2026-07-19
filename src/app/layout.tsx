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
  title: "Varanda Viva Design | Móveis para Área Externa em Uberaba",
  description: "Móveis outdoor de fibra sintética e corda náutica em Uberaba. Design autoral, durabilidade 15+ anos. Entrega no Triângulo Mineiro. Sofás, cadeiras, espreguiçadeiras.",
  keywords: ["móveis área externa", "móveis outdoor", "fibra sintética", "corda náutica", "Uberaba", "Triângulo Mineiro"],
  authors: [{ name: "Varanda Viva Design" }],
  openGraph: {
    title: "Varanda Viva Design | Móveis para Área Externa",
    description: "Móveis outdoor de fibra sintética e corda náutica em Uberaba",
    url: "https://varandavivadesign.com.br",
    siteName: "Varanda Viva Design",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varanda Viva Design",
    description: "Móveis outdoor de fibra sintética e corda náutica em Uberaba",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "seu-código-verificação",
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
              name: "Varanda Viva Design",
              description: "Móveis outdoor de fibra sintética e corda náutica em Uberaba",
              url: "https://varandavivadesign.com.br",
              telephone: "+55-34-99999-9999",
              email: "contato@varandavivadesign.com.br",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Principal, 1000",
                addressLocality: "Uberaba",
                addressRegion: "MG",
                postalCode: "38000-000",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-19.74778",
                longitude: "-47.93194",
              },
              openingHours: "Mo-Fr 09:00-18:00,Sa 09:00-13:00",
              priceRange: "$$$",
              image: "https://varandavivadesign.com.br/og-image.jpg",
              sameAs: [
                "https://www.instagram.com/varandaviva",
                "https://www.facebook.com/varandaviva",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}