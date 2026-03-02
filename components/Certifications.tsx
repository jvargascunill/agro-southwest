"use client";

import { motion } from "framer-motion";
import { Handshake, Leaf, Ship } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const certKeys = [
  { titleKey: "certs.globalgap", descKey: "certs.globalgapDesc", icon: Handshake },
  { titleKey: "certs.systems", descKey: "certs.systemsDesc", icon: Leaf },
  { titleKey: "certs.sustainability", descKey: "certs.sustainabilityDesc", icon: Ship },
];

export default function Certifications() {
  const { t } = useLanguage();
  return (
    <section id="sostenibilidad" className="bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("certs.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-lg leading-loose text-white/85">
            {t("certs.description")}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:items-stretch">
          {certKeys.map(({ titleKey, descKey, icon: Icon }) => (
            <motion.div
              key={titleKey}
              className="flex h-full flex-col items-center rounded-2xl border border-white/20 bg-white/5 p-8 text-center backdrop-blur-sm"
              {...fadeIn}
            >
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Icon className="h-8 w-8" />
              </div>
              <div className="mt-5 flex min-h-0 flex-1 flex-col">
                <h3 className="min-h-[4.5rem] flex-shrink-0 text-xl font-semibold text-white">
                  {t(titleKey)}
                </h3>
                <p className="mt-2 flex-1 text-center text-white/80">{t(descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
