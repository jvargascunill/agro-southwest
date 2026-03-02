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
  { href: "#faq", key: "nav.faq" },
  { href: "#contacto", key: "nav.contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent-gray bg-accent-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="rounded p-2 text-secondary md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <div className="flex flex-1 justify-end md:hidden">
          <LanguageSwitcher />
        </div>
        <div className="hidden flex-1 md:block" />
        <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-secondary/90 transition hover:text-primary-dark"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
          <LanguageSwitcher />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-secondary transition hover:text-primary-dark"
            aria-label="Instagram Agro SouthWest"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-accent-gray bg-accent-white md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-secondary hover:bg-accent-gray"
                  onClick={() => setOpen(false)}
                >
                  {t(link.key)}
                </Link>
              ))}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-secondary"
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
