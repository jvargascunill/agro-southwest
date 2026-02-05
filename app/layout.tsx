import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agro SouthWest | Fresh Citrus from Chile - Exportación de Limones Premium",
  description:
    "Exportadora chilena de limones frescos con certificación GlobalG.A.P. y Systems Approach. Calidad, inocuidad y trazabilidad para mercados internacionales. Conectando Chile con Argentina, Uruguay, Brasil y Panamá.",
  keywords: [
    "exportación limones",
    "limones Chile",
    "citrus Chile",
    "GlobalG.A.P.",
    "Systems Approach",
    "Agro SouthWest",
    "fruta fresca exportación",
  ],
  openGraph: {
    title: "Agro SouthWest - Fresh Citrus from Chile",
    description:
      "Expertos en exportación de limones frescos con certificación GlobalG.A.P. y Systems Approach para el mundo.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
