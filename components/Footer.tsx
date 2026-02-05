"use client";

import Link from "next/link";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const INSTAGRAM_URL = "https://www.instagram.com/Agro_southwest/";
const OFFICE_ADDRESS = "Ahumada 131, of 913, Santiago, Chile";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#mercados", label: "Mercados" },
  { href: "#sostenibilidad", label: "Sostenibilidad" },
  { href: "#instagram", label: "Instagram" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-accent-gray bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold uppercase tracking-tight">
              {t("footer.company")}
            </p>
            <p className="mt-2 text-sm text-white/80">
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
              {t("footer.contact")}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition hover:text-primary"
                >
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>{t("contact.office")}: {t("contact.address")}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@agrosouthwest.com"
                  className="flex items-center gap-2 transition hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  contacto@agrosouthwest.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+56974265206"
                  className="flex items-center gap-2 transition hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +56 9 7426 5206
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  @Agro_southwest
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
              {t("footer.links")}
            </p>
            <ul className="mt-3 flex flex-wrap gap-4 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/50" aria-hidden="true">
          Exportación de limones desde Chile · Limones Chile · Lemon export · 智利柠檬出口 · Exportação de limões · Limones premium para mercados internacionales.
        </p>
        <div className="mt-6 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
