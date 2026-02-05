"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const INSTAGRAM_URL = "https://www.instagram.com/Agro_southwest/";
const LOGO_PATH = "/logo.png";

const navLinks = [
  { href: "#inicio", key: "nav.inicio" },
  { href: "#nosotros", key: "nav.nosotros" },
  { href: "#productos", key: "nav.productos" },
  { href: "#mercados", key: "nav.mercados" },
  { href: "#sostenibilidad", key: "nav.sostenibilidad" },
  { href: "#instagram", key: "nav.instagram" },
  { href: "#faq", key: "nav.faq" },
  { href: "#contacto", key: "nav.contacto" },
];

function Logo() {
  return (
    <span className="relative flex h-14 w-44 flex-shrink-0 sm:h-16 sm:w-52 md:w-60 lg:w-72">
      <img
        src={LOGO_PATH}
        alt="Agro SouthWest"
        className="h-full w-full object-cover object-left"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent-gray bg-accent-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/#inicio"
          onClick={goToTop}
          className="flex min-w-0 items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary/90 transition hover:text-primary-dark"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
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
          <Link
            href="#contacto"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-secondary shadow-sm transition hover:bg-primary-dark hover:text-secondary-dark"
          >
            {t("nav.cotizar")}
          </Link>
        </div>

        <button
          type="button"
          className="rounded p-2 text-secondary md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
              <div className="mb-2 flex justify-end">
                <LanguageSwitcher />
              </div>
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
              <Link
                href="#contacto"
                className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-secondary"
                onClick={() => setOpen(false)}
              >
                {t("nav.cotizar")}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
