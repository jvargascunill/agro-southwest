"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileCheck, Truck, PackageCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stepKeys = [
  { icon: MessageCircle, titleKey: "process.step1", descKey: "process.step1Desc" },
  { icon: FileCheck, titleKey: "process.step2", descKey: "process.step2Desc" },
  { icon: Truck, titleKey: "process.step3", descKey: "process.step3Desc" },
  { icon: PackageCheck, titleKey: "process.step4", descKey: "process.step4Desc" },
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function ProcessSection() {
  const { t } = useLanguage();
  return (
    <section id="proceso" className="bg-accent-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            {t("process.label")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            {t("process.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary/80">
            {t("process.description")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stepKeys.map((step, i) => (
            <motion.div
              key={step.titleKey}
              className="group relative flex flex-col items-center rounded-2xl border border-accent-gray bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 sm:p-8 sm:items-start sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="absolute -top-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-secondary shadow-md sm:left-8 sm:translate-x-0">
                {i + 1}
              </div>
              <div className="mt-2 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-dark shadow-inner transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110 sm:h-14 sm:w-14">
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-secondary">
                {t(step.titleKey)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary/80">
                {t(step.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
