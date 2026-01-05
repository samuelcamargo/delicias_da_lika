import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Açai e Delícias da Lika - Açaí Cremoso em Barueri | Delivery",
  description: "Açaí e Delícias da Lika - O melhor açaí cremoso de Barueri! Delivery via iFood e 99 Food. Açaí, cupuaçu, combos e muito mais. Peça agora!",
  keywords: "açaí barueri, cupuaçu barueri, açaí delivery, açaieteria barueri, açaí cremoso, delivery açaí, açaí vila nova barueri",
  authors: [{ name: "Açai e Delícias da Lika" }],
  openGraph: {
    title: "Açai e Delícias da Lika - Açaí Cremoso em Barueri",
    description: "O melhor açaí cremoso de Barueri! Delivery via iFood e 99 Food.",
    url: "https://acai-e-delicias-da-lika.vercel.app",
    siteName: "Açai e Delícias da Lika",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Açai e Delícias da Lika - Açaí Cremoso em Barueri",
    description: "O melhor açaí cremoso de Barueri! Delivery via iFood e 99 Food.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Açai e Delícias da Lika",
  "image": "https://acai-e-delicias-da-lika.vercel.app/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Luiz Gianezella, 78",
    "addressLocality": "Vila Nova",
    "addressRegion": "SP",
    "postalCode": "06420-090",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-23.5108",
    "longitude": "-46.8764"
  },
  "url": "https://acai-e-delicias-da-lika.vercel.app",
  "telephone": "+5511914861102",
  "priceRange": "$$",
  "servesCuisine": "Açaí e Cupuaçu",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
      "opens": "10:30",
      "closes": "23:40"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "10:30",
      "closes": "20:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
