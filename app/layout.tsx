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
  title: "Exportación de Cítricos | Cítricos Chile | Citrus Export - Agro SouthWest",
  description:
    "Exportación de cítricos desde Chile. Somos exportadores de cítricos frescos (citrus export, 柑橘出口). Cítricos Chile con certificación Global G.A.P. y Systems Approach. Cotiza cítricos premium para USA, China, Argentina.",
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
    "Global G.A.P.",
    "Systems Approach",
    "Agro SouthWest",
    "fruta fresca exportación",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Exportación de Cítricos | Cítricos Chile - Agro SouthWest",
    description:
      "Exportación de cítricos desde Chile. Citrus export, 柑橘出口. Cítricos frescos con Global G.A.P. y Systems Approach. Cotiza ya.",
    type: "website",
    url: SITE_URL,
    siteName: "Agro SouthWest",
    locale: "es_CL",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Agro SouthWest - Exportación de Cítricos Chile" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exportación de Cítricos | Cítricos Chile - Agro SouthWest",
    description: "Exportación de cítricos desde Chile. Citrus export. Global G.A.P. y Systems Approach.",
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
        description: "Exportación de cítricos desde Chile. Exportadora de cítricos frescos. Citrus export from Chile. 智利柑橘出口. Certificación Global G.A.P. y Systems Approach.",
        logo: `${SITE_URL}/icon.png`,
        knowsAbout: ["Exportación de cítricos", "Citrus export", "Cítricos Chile", "柑橘出口"],
      },
      {
        "@type": "WebSite",
        name: "Agro SouthWest - Exportación de Cítricos Chile",
        alternateName: "Agro SouthWest Citrus Export | 智利柑橘出口",
        url: SITE_URL,
        description: "Exportación de cítricos desde Chile. Citrus export. Cítricos Chile. 柑橘出口. Cotiza cítricos premium con Global G.A.P. y Systems Approach.",
        publisher: { "@id": `${SITE_URL}#organization` },
        inLanguage: ["es", "en", "zh"],
      },
      {
        "@type": "Product",
        name: "Cítricos Premium Chile",
        alternateName: ["Premium Chilean Citrus", "智利优质柑橘", "Exportación de cítricos"],
        description: "Exportación de cítricos frescos desde Chile. Citrus export. Calibres 95-165, Global G.A.P., Systems Approach. Temporada mayo a diciembre. Seguimiento desde venta hasta recepción.",
        brand: { "@type": "Brand", name: "Agro SouthWest" },
        category: "Cítricos",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cuál es el volumen mínimo de compra para exportación de cítricos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Trabajamos con pedidos que se adapten a tu operación. Contáctanos con tu volumen estimado y destino para darte una cotización a medida de exportación de cítricos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Entregan documentación fitosanitaria para exportación de cítricos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Todas las exportaciones de cítricos incluyen la documentación requerida (Systems Approach SAG/USDA cuando aplica, certificados de origen, etc.). Global G.A.P. respalda nuestra trazabilidad.",
            },
          },
          {
            "@type": "Question",
            name: "¿En qué temporada están disponibles los cítricos Chile para exportación?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nuestra temporada de exportación de cítricos va de mayo a diciembre (contraestación para el Hemisferio Norte). Es la ventana óptima de calidad desde la zona norte y central de Chile.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo se coordina la logística de exportación de cítricos hasta mi país?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Para el Cono Sur (Argentina y Uruguay) usamos logística terrestre. Te acompañamos en la coordinación y te mantenemos informado del estado del embarque.",
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
