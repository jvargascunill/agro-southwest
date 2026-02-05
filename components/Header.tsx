"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_PATH = "/logo.png";

function Logo() {
  const [useFallback, setUseFallback] = useState(false);
  if (useFallback) return <span className="h-10 w-10 flex-shrink-0" />;
  return (
    <span className="relative h-10 w-10 flex-shrink-0">
      <Image
        src={LOGO_PATH}
        alt=""
        width={40}
        height={40}
        className="object-contain"
        unoptimized
        onError={() => setUseFallback(true)}
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent-gray bg-accent-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/#inicio" className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-bold uppercase tracking-tight text-secondary">
            AGRO SOUTHWEST
          </span>
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

        <div className="hidden md:block">
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
