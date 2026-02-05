"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, Sprout } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const certKeys = [
  { titleKey: "certs.globalgap", descKey: "certs.globalgapDesc", icon: Shield },
  { titleKey: "certs.systems", descKey: "certs.systemsDesc", icon: Leaf },
  { titleKey: "certs.sustainability", descKey: "certs.sustainabilityDesc", icon: Sprout },
];

export default function Certifications() {
  const { t } = useLanguage();
  return (
    <section id="sostenibilidad" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t("certs.label")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("certs.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            {t("certs.description")}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {certKeys.map(({ titleKey, descKey, icon: Icon }) => (
            <motion.div
              key={titleKey}
              className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/5 p-8 text-center backdrop-blur-sm"
              {...fadeIn}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {t(titleKey)}
              </h3>
              <p className="mt-2 text-white/80">{t(descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
