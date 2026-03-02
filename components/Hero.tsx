"use client";

import { motion } from "framer-motion";
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
        <motion.h1
          className="text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-loose text-white/90 sm:text-lg md:max-w-7xl"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t("hero.description")}
        </motion.p>
      </div>
    </section>
  );
}
