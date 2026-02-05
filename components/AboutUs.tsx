"use client";

import { motion } from "framer-motion";
import { Leaf, Target, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export default function AboutUs() {
  const { t } = useLanguage();
  return (
    <section id="nosotros" className="bg-accent-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          {...fadeIn}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            {t("about.label")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            {t("about.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary/80">
            {t("about.description")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <motion.div
            className="flex flex-col items-center rounded-2xl border border-accent-gray bg-white p-8 shadow-sm"
            {...fadeIn}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary-dark">
              <Leaf className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondary">
              {t("about.origin")}
            </h3>
            <p className="mt-2 text-center text-secondary/80">
              {t("about.originDesc")}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center rounded-2xl border border-accent-gray bg-white p-8 shadow-sm"
            {...fadeIn}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary-dark">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondary">
              {t("about.mission")}
            </h3>
            <p className="mt-2 text-center text-secondary/80">
              {t("about.missionDesc")}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center rounded-2xl border border-accent-gray bg-white p-8 shadow-sm"
            {...fadeIn}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary-dark">
              <Users className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondary">
              {t("about.commitment")}
            </h3>
            <p className="mt-2 text-center text-secondary/80">
              {t("about.commitmentDesc")}
            </p>
          </motion.div>
        </div>

        {/* Socio fundador */}
        <motion.div
          className="mt-20 flex flex-col items-center"
          {...fadeIn}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            {t("about.founders")}
          </p>
          <div className="mt-8 flex max-w-2xl flex-col items-center rounded-2xl border border-accent-gray bg-white p-8 shadow-sm sm:flex-row sm:items-start sm:gap-8 sm:text-left">
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
