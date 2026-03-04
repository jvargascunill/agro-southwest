"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobilePortrait } from "@/hooks/useIsMobilePortrait";

export default function IntroSplash() {
  const { t } = useLanguage();
  const isMobilePortrait = useIsMobilePortrait();
  const backgroundImage = isMobilePortrait ? "url(/logo-inicio-mobile.png)" : "url(/hero-logo.png)";

  return (
    <section
      id="inicio"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-secondary"
      style={{ minHeight: "100vh" }}
      aria-label="Agro SouthWest"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage,
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      {/* Brillo sutil en los bordes */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-secondary/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <motion.div
        className="relative z-10 mt-auto flex flex-wrap items-center justify-center gap-4 pb-14"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Link
          href="#contacto"
          className="rounded-full border-2 border-primary bg-transparent px-5 py-2.5 text-xs font-semibold text-primary transition hover:bg-primary/20 sm:px-6 sm:py-3 sm:text-sm"
        >
          {t("hero.ctaContact")}
        </Link>
      </motion.div>
    </section>
  );
}

