import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.agrosouthwest.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Exportación de Limones | Limones Chile | Lemon Export - Agro SouthWest",
  description:
    "Exportación de limones desde Chile. Somos exportadores de limones frescos (lemon export, 柠檬出口). Limones Chile con certificación GlobalG.A.P. y Systems Approach. Cotiza limones premium para USA, China, Argentina, Brasil.",
  keywords: [
    "exportación de limones",
    "exportacion de limones",
    "Limones Chile",
    "limones",
    "lemon export",
    "lemon export Chile",
    "exportación limones",
    "exportador de limones",
    "limones premium",
    "limones frescos Chile",
    "citrus Chile",
    "柠檬出口",
    "智利柠檬",
    "智利柠檬出口",
    "exportação de limões",
    "limones exportación internacional",
    "GlobalG.A.P.",
    "Systems Approach",
    "Agro SouthWest",
    "fruta fresca exportación",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Exportación de Limones | Limones Chile - Agro SouthWest",
    description:
      "Exportación de limones desde Chile. Lemon export, 柠檬出口. Limones frescos con GlobalG.A.P. y Systems Approach. Cotiza ya.",
    type: "website",
    url: SITE_URL,
    siteName: "Agro SouthWest",
    locale: "es_CL",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Agro SouthWest - Exportación de Limones Chile" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exportación de Limones | Limones Chile - Agro SouthWest",
    description: "Exportación de limones desde Chile. Lemon export. GlobalG.A.P. y Systems Approach.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: "Agro SouthWest",
        alternateName: [
          "Agro SouthWest Chile",
          "Agro SouthWest Lemon Export",
          "Agro SouthWest 智利柠檬出口",
        ],
        url: SITE_URL,
        description: "Exportación de limones desde Chile. Exportadora de limones frescos. Lemon export from Chile. 智利柠檬出口. Certificación GlobalG.A.P. y Systems Approach.",
        logo: `${SITE_URL}/icon.png`,
        knowsAbout: ["Exportación de limones", "Lemon export", "Limones Chile", "柠檬出口"],
      },
      {
        "@type": "WebSite",
        name: "Agro SouthWest - Exportación de Limones Chile",
        alternateName: "Agro SouthWest Lemon Export | 智利柠檬出口",
        url: SITE_URL,
        description: "Exportación de limones desde Chile. Lemon export. Limones Chile. 柠檬出口. Cotiza limones premium con GlobalG.A.P. y Systems Approach.",
        publisher: { "@id": `${SITE_URL}#organization` },
        inLanguage: ["es", "en", "zh"],
      },
      {
        "@type": "Product",
        name: "Limones Premium Chile",
        alternateName: ["Premium Chilean Lemons", "智利优质柠檬", "Exportación de limones"],
        description: "Exportación de limones frescos desde Chile. Lemon export. Calibres 95-165, GlobalG.A.P., Systems Approach. Temporada abril a septiembre. Limones para mercados internacionales.",
        brand: { "@type": "Brand", name: "Agro SouthWest" },
        category: "Limones",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cuál es el volumen mínimo de compra para exportación de limones?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Trabajamos con pedidos que se adapten a tu operación. Contáctanos con tu volumen estimado y destino para darte una cotización a medida de exportación de limones.",
            },
          },
          {
            "@type": "Question",
            name: "¿Entregan documentación fitosanitaria para exportación de limones?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Todas las exportaciones de limones incluyen la documentación requerida (Systems Approach SAG/USDA cuando aplica, certificados de origen, etc.). GlobalG.A.P. respalda nuestra trazabilidad.",
            },
          },
          {
            "@type": "Question",
            name: "¿En qué temporada están disponibles los limones Chile para exportación?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nuestra temporada de exportación de limones va de abril a septiembre (contraestación para el Hemisferio Norte). Es la ventana óptima de calidad desde la zona central y sur de Chile.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo se coordina la logística de exportación de limones hasta mi país?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Para el Cono Sur (Argentina, Uruguay) usamos logística terrestre. Para Brasil y Panamá, marítima. Te acompañamos en la coordinación y te mantenemos informado del estado del embarque.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientProviders>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}
