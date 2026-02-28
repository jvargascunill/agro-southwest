import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const tiffany = localFont({
  src: "./fonts/Tiffany.woff",
  variable: "--font-tiffany",
  display: "swap",
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import {
  SITE_URL,
  SEO_KEYWORDS,
  SEO_META_DESCRIPTION,
  SEO_LONG_DESCRIPTION,
  SEO_TITLE,
  SEO_TITLE_SHORT,
  SEO_SITE_NAME,
  SEO_DEFAULT_IMAGE_ALT,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE,
    template: `%s | ${SEO_SITE_NAME}`,
  },
  description: SEO_META_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SEO_SITE_NAME, url: SITE_URL }],
  creator: SEO_SITE_NAME,
  publisher: SEO_SITE_NAME,
  alternates: { canonical: SITE_URL },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/flavicon.png", type: "image/png", sizes: "32x32" }, { url: "/flavicon.png", type: "image/png", sizes: "192x192" }],
    apple: "/flavicon.png",
  },
  openGraph: {
    title: SEO_TITLE_SHORT,
    description: SEO_LONG_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SEO_SITE_NAME,
    locale: "es_CL",
    images: [
      {
        url: `${SITE_URL}/flavicon.png`,
        width: 512,
        height: 512,
        alt: "Agro South West - Cítricos de Chile para el mundo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE_SHORT,
    description: SEO_LONG_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow",
  },
  other: {
    "theme-color": "#1a3d2e",
    "apple-mobile-web-app-title": SEO_SITE_NAME,
    "revisit-after": "7 days",
    language: "Spanish",
  },
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
        name: SEO_SITE_NAME,
        alternateName: [
          "Agro SouthWest",
          "Agro South West",
          "agro south west",
          "agrosouthwest",
          "Agro SouthWest Chile",
          "Agro SouthWest Citrus Export",
          "Agro SouthWest Lemon Export",
          "Agro SouthWest 智利柠檬出口",
          "Agro SouthWest exportación cítricos",
          "Agro SouthWest limones Chile",
        ],
        url: SITE_URL,
        description: SEO_LONG_DESCRIPTION,
        email: "contacto@agrosouthwest.com",
        telephone: "+56974265206",
        knowsAbout: [
          "Exportación de cítricos",
          "Exportación de limones",
          "Exportación de naranjas",
          "Exportación de mandarinas",
          "Fruta chilena",
          "Citrus export",
          "Cítricos Chile",
          "Limones Chile",
          "柑橘出口",
          "Global G.A.P.",
          "Systems Approach",
        ],
        sameAs: ["https://www.instagram.com/Agro_southwest/"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        name: `${SEO_SITE_NAME} - Exportación de Cítricos Chile`,
        alternateName: [
          "Agro SouthWest Citrus Export",
          "Agro SouthWest Limones Naranjas Mandarinas",
          "智利柑橘出口",
        ],
        url: SITE_URL,
        description: SEO_LONG_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}#organization` },
        inLanguage: ["es", "en", "pt", "zh"],
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/#contacto` },
          "query-input": "required name=contact",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}#localbusiness`,
        name: SEO_SITE_NAME,
        image: `${SITE_URL}/flavicon.png`,
        url: SITE_URL,
        telephone: "+56974265206",
        email: "contacto@agrosouthwest.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ahumada 131, of 913",
          addressLocality: "Santiago",
          addressCountry: "CL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -33.4372,
          longitude: -70.6506,
        },
        openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
        priceRange: "$$",
        description: SEO_LONG_DESCRIPTION,
      },
      {
        "@type": "Product",
        "@id": `${SITE_URL}#product-citricos`,
        name: "Cítricos Premium Chile",
        alternateName: ["Exportación de cítricos", "Cítricos Chile", "Citrus export Chile", "智利优质柑橘"],
        description: "Exportación de cítricos frescos desde Chile: limones, naranjas y mandarinas. Calibres 95-165, Global G.A.P., Systems Approach. Temporada mayo a diciembre. Trazabilidad y documentación fitosanitaria.",
        brand: { "@type": "Brand", name: SEO_SITE_NAME },
        category: "Cítricos",
        keywords: "cítricos, cítricos Chile, exportación de cítricos, fruta chilena, citrus export",
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", url: `${SITE_URL}/#contacto` },
      },
      {
        "@type": "Product",
        "@id": `${SITE_URL}#product-limones`,
        name: "Limones Chile - Exportación",
        alternateName: ["Limones chilenos", "Exportación de limones", "Comprar limones", "Lemon export Chile", "智利柠檬"],
        description: "Exportación de limones frescos desde Chile. Limones premium con certificación Global G.A.P. y Systems Approach. Calibres 95-165, temporada mayo a diciembre. Comprar limones para Argentina, Uruguay y más.",
        brand: { "@type": "Brand", name: SEO_SITE_NAME },
        category: "Limones",
        keywords: "limones, limones Chile, exportación de limones, comprar limones, limones chilenos, lemon export",
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", url: `${SITE_URL}/#contacto` },
      },
      {
        "@type": "Product",
        "@id": `${SITE_URL}#product-naranjas`,
        name: "Naranjas Chile - Exportación",
        alternateName: ["Naranjas chilenos", "Exportación de naranjas", "Comprar naranjas", "Orange export Chile"],
        description: "Exportación de naranjas frescas desde Chile. Naranjas premium con Global G.A.P. y Systems Approach. Fruta chilena para Cono Sur y mercados internacionales.",
        brand: { "@type": "Brand", name: SEO_SITE_NAME },
        category: "Naranjas",
        keywords: "naranjas, naranjas Chile, exportación de naranjas, comprar naranjas, fruta chilena",
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", url: `${SITE_URL}/#contacto` },
      },
      {
        "@type": "Product",
        "@id": `${SITE_URL}#product-mandarinas`,
        name: "Mandarinas Chile - Exportación",
        alternateName: ["Mandarinas chilenos", "Exportación de mandarinas", "Comprar mandarinas"],
        description: "Exportación de mandarinas frescas desde Chile. Mandarinas premium con certificación Global G.A.P. y Systems Approach. Fruta chilena de temporada.",
        brand: { "@type": "Brand", name: SEO_SITE_NAME },
        category: "Mandarinas",
        keywords: "mandarinas, mandarinas Chile, exportación de mandarinas, comprar mandarinas, fruta chilena",
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", url: `${SITE_URL}/#contacto` },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cuál es el volumen mínimo de compra?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Trabajamos con pedidos que se adapten a tu operación. Contáctanos con tu volumen estimado y destino para darte una cotización a medida.",
            },
          },
          {
            "@type": "Question",
            name: "¿Entregan documentación fitosanitaria y certificados?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Todas las exportaciones incluyen la documentación requerida (Systems Approach SAG/USDA cuando aplica, certificados de origen, etc.). Global G.A.P. respalda nuestra trazabilidad.",
            },
          },
          {
            "@type": "Question",
            name: "¿En qué temporada están disponibles los cítricos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nuestra temporada de exportación va de mayo a diciembre (contraestación para el Hemisferio Norte). Es la ventana óptima de calidad desde la zona norte y central de Chile.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo se coordina la logística hasta mi país?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Para el Cono Sur (Argentina y Uruguay) usamos logística terrestre. Te acompañamos en la coordinación y te mantenemos informado del estado del embarque.",
            },
          },
        ],
      },
      {
        "@type": "ImageGallery",
        name: "Galería Agro South West - Campo y exportación de cítricos",
        description: "Campo, cosecha y proceso de exportación de cítricos desde Chile. Limones, naranjas y mandarinas.",
        author: { "@id": `${SITE_URL}#organization` },
        image: [
          { "@type": "ImageObject", contentUrl: `${SITE_URL}/carousel/01.png`, name: "Agro South West - Campo y cítricos Chile" },
          { "@type": "ImageObject", contentUrl: `${SITE_URL}/carousel/02.png`, name: "Agro South West - Cítricos frescos exportación" },
          { "@type": "ImageObject", contentUrl: `${SITE_URL}/carousel/03.png`, name: "Agro South West - Limones y naranjas Chile" },
          { "@type": "ImageObject", contentUrl: `${SITE_URL}/carousel/04.png`, name: "Agro South West - Proceso exportación cítricos" },
          { "@type": "ImageObject", contentUrl: `${SITE_URL}/carousel/05.png`, name: "Agro South West - Fruta chilena premium" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Cítricos Chile", item: `${SITE_URL}/#productos` },
          { "@type": "ListItem", position: 3, name: "Contacto", item: `${SITE_URL}/#contacto` },
        ],
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning className={tiffany.variable}>
      <body className="min-h-screen flex flex-col font-sans font-normal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Datos estructurados oficiales para que Google reconozca el sitio de la organización */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Agro South West",
              alternateName: ["Agro SouthWest", "agro southwest", "agro south west", "agrosouthwest"],
              url: "https://www.agrosouthwest.com/",
              description:
                "Conectando Chile con el Mundo. Logística terrestre y marítima en el Cono Sur.",
              sameAs: ["https://www.instagram.com/agro_southwest/"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ahumada 131, of 913",
                addressLocality: "Santiago",
                addressCountry: "CL",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "contacto@agrosouthwest.com",
                telephone: "+56 9 7426 5206",
                contactType: "customer service",
                areaServed: "CL",
              },
            }),
          }}
        />
        <ClientProviders>
          <Header />
          <main className="flex-1" id="main-content">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}
