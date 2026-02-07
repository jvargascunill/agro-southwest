"use client";

import { motion } from "framer-motion";
import {
  Package,
  Scale,
  Calendar,
  Route,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const specKeys = [
  { icon: Package, labelKey: "product.calibres", valueKey: "product.calibresValue" },
  { icon: Scale, labelKey: "product.weight", valueKey: "product.weightValue" },
  { icon: Calendar, labelKey: "product.availability", valueKey: "product.availabilityValue" },
  { icon: Route, labelKey: "product.tracking", valueKey: "product.trackingValue" },
];

export default function ProductSpecs() {
  const { t } = useLanguage();
  return (
    <section id="productos" className="bg-accent-gray py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            {t("product.label")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            {t("product.title")}
          </h2>
          <p className="mt-2 text-lg text-secondary/70">
            <em>{t("product.scientific")}</em>
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 max-w-4xl rounded-2xl border border-accent-gray bg-white p-8 shadow-lg sm:p-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-8 sm:grid-cols-2">
            {specKeys.map(({ icon: Icon, labelKey, valueKey }) => (
              <div
                key={labelKey}
                className="flex items-start gap-4 rounded-xl bg-accent-white p-4"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary-dark">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary/70">
                    {t(labelKey)}
                  </p>
                  <p className="text-lg font-semibold text-secondary">
                    {t(valueKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-accent-gray pt-8">
            <div className="flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2">
              <Sparkles className="h-5 w-5 text-primary-dark" />
              <span className="text-sm font-medium text-secondary">
                {t("product.skin")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
