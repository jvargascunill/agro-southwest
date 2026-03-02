"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Users } from "lucide-react";
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
    <section id="nosotros" className="bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("about.title")}
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:items-stretch">
          <motion.div
            className="flex h-full flex-col items-center rounded-2xl border border-white/20 bg-white/5 p-8 shadow-sm backdrop-blur-sm"
            {...fadeIn}
          >
            <div className="flex h-14 w-14 min-h-14 min-w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Target className="h-7 w-7 shrink-0" />
            </div>
            <div className="mt-4 flex min-h-0 flex-1 flex-col">
              <h3 className="min-h-[3.5rem] text-center text-xl font-semibold text-white">
                {t("about.origin")}
              </h3>
              <p className="mt-2 flex-1 text-center text-white/80">
                {t("about.originDesc")}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex h-full flex-col items-center rounded-2xl border border-white/20 bg-white/5 p-8 shadow-sm backdrop-blur-sm"
            {...fadeIn}
          >
            <div className="flex h-14 w-14 min-h-14 min-w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Lightbulb className="h-7 w-7 shrink-0" />
            </div>
            <div className="mt-4 flex min-h-0 flex-1 flex-col">
              <h3 className="min-h-[3.5rem] text-center text-xl font-semibold text-white">
                {t("about.mission")}
              </h3>
              <p className="mt-2 flex-1 text-center text-white/80">
                {t("about.missionDesc")}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex h-full flex-col items-center rounded-2xl border border-white/20 bg-white/5 p-8 shadow-sm backdrop-blur-sm"
            {...fadeIn}
          >
            <div className="flex h-14 w-14 min-h-14 min-w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Users className="h-7 w-7 shrink-0" />
            </div>
            <div className="mt-4 flex min-h-0 flex-1 flex-col">
              <h3 className="min-h-[3.5rem] text-center text-xl font-semibold text-white">
                {t("about.commitment")}
              </h3>
              <p className="mt-2 flex-1 text-center text-white/80">
                {t("about.commitmentDesc")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
