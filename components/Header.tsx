"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/Agro_southwest/";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_PATH = "/logo.png";

function Logo() {
  const [useFallback, setUseFallback] = useState(false);
  // ~3x el tamaño original (56×144 → 168×432)
  if (useFallback) return <span className="h-[5.5rem] w-[13rem] flex-shrink-0 sm:h-[7rem] sm:w-[18rem]" aria-hidden />;
  return (
    <span className="relative flex h-[5.5rem] w-[13rem] flex-shrink-0 sm:h-[7rem] sm:w-[18rem] md:h-[8rem] md:w-[20rem]">
      <Image
        src={LOGO_PATH}
        alt="Agro SouthWest"
        fill
        className="object-contain object-left"
        unoptimized
        onError={() => setUseFallback(true)}
        sizes="(max-width: 640px) 208px, (max-width: 768px) 288px, 320px"
      />
    </span>
  );
}

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#mercados", label: "Mercados" },
  { href: "#sostenibilidad", label: "Sostenibilidad" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent-gray bg-accent-white/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-[5.5rem] max-w-7xl items-center justify-between gap-4 py-2 px-4 sm:min-h-[7rem] sm:py-3 sm:px-6 md:min-h-[8rem] md:py-4 lg:px-8">
        <Link
          href="/#inicio"
          onClick={goToTop}
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary/90 transition hover:text-primary-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
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
            Cotizar / Quote
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-secondary hover:bg-accent-gray"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
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
                Cotizar / Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
