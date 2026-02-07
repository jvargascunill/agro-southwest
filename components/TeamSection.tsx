"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export default function TeamSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-accent-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center"
          {...fadeIn}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            {t("about.teamLabel")}
          </p>
          <div className="mt-6 flex max-w-2xl flex-col items-center rounded-2xl border border-accent-gray bg-white p-8 shadow-sm sm:flex-row sm:items-start sm:gap-8 sm:text-left">
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-accent-gray">
              <img
                src="/team/javier-vargas.png"
                alt={t("about.javierName")}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <span
                className="absolute inset-0 hidden items-center justify-center text-2xl font-bold text-secondary/60"
                style={{ display: "none" }}
                aria-hidden
              >
                JVC
              </span>
            </div>
            <div className="mt-6 sm:mt-0">
              <h3 className="text-xl font-semibold text-secondary">
                {t("about.javierName")}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-dark">
                {t("about.javierRole")}
              </p>
              <p className="mt-4 text-secondary/80">
                {t("about.javierBio")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
