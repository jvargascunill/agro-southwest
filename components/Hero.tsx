"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-secondary"
    >
      {/* Background: foto del campo con transparencia y tema verde */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url(/hero-campo.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/92 via-secondary/85 to-secondary/96" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        {/* Badges de confianza */}
        <motion.div
          className="mb-6 flex flex-wrap items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider text-white/90 sm:gap-4 sm:text-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="rounded-full border border-white/40 bg-white/10 px-3 py-1 backdrop-blur-sm">
            GlobalG.A.P.
          </span>
          <span className="text-white/60">·</span>
          <span className="rounded-full border border-white/40 bg-white/10 px-3 py-1 backdrop-blur-sm">
            Systems Approach
          </span>
          <span className="text-white/60">·</span>
          <span className="rounded-full border border-white/40 bg-white/10 px-3 py-1 backdrop-blur-sm">
            {t("hero.badgeChile")}
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          className="mt-4 text-xl font-medium text-primary sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {t("hero.description")}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#productos"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-secondary shadow-lg transition hover:bg-primary-light hover:shadow-xl"
          >
            {t("hero.ctaProduct")}
          </a>
          <a
            href="#contacto"
            className="rounded-full border-2 border-white/80 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            {t("hero.ctaContact")}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#nosotros"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/70 transition hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Ir a siguiente sección"
      >
        <span className="text-xs uppercase tracking-widest">{t("hero.scrollMore")}</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
