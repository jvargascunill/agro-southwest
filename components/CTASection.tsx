"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="border-t border-accent-gray bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {t("cta.title")}
          </h2>
          <p className="mt-3 text-white/85">
            {t("cta.description")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contacto"
              className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-secondary shadow-lg transition hover:bg-primary-light hover:shadow-xl"
            >
              {t("cta.button")}
            </Link>
            <a
              href="mailto:contacto@agrosouthwest.com"
              className="rounded-full border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              contacto@agrosouthwest.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
