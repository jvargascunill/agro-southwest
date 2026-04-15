"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const INSTAGRAM_URL = "https://www.instagram.com/Agro_southwest/";

const navLinks = [
  { href: "#inicio", key: "nav.inicio" },
  { href: "#nosotros", key: "nav.nosotros" },
  { href: "#sostenibilidad", key: "nav.sostenibilidad" },
  { href: "#productos", key: "nav.productos" },
  { href: "#mercados", key: "nav.mercados" },
  { href: "#instagram", key: "nav.instagram" },
  { href: "#contacto", key: "nav.contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-secondary/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="rounded p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <div className="flex flex-1 justify-end md:hidden">
          <LanguageSwitcher />
        </div>
        {/* Grid 1fr | auto | 1fr: mismo espacio a ambos lados del menú para centrarlo en la barra (los controles van en la tercera columna) */}
        <div className="hidden min-w-0 flex-1 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-x-2 md:gap-y-2">
          <div aria-hidden className="min-w-0" />
          <nav className="flex max-w-full min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-2 px-1 sm:gap-x-4 lg:gap-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => scrollToSection(link.href)}
                className="shrink-0 whitespace-nowrap text-base font-medium text-white/90 transition hover:text-primary [writing-mode:horizontal-tb] sm:text-lg"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>
          <div className="flex min-w-0 items-center justify-end gap-3">
            <LanguageSwitcher />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-white transition hover:text-primary"
              aria-label="Instagram Agro SouthWest"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-secondary md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-white/10 whitespace-nowrap [writing-mode:horizontal-tb]"
                  onClick={() => {
                    scrollToSection(link.href);
                    setOpen(false);
                  }}
                >
                  {t(link.key)}
                </Link>
              ))}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
