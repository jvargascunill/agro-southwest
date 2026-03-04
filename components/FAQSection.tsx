"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const faqKeys = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <section id="faq" className="bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("faq.title")}
          </h2>
        </motion.div>

        <ul className="mt-12 space-y-3">
          {faqKeys.map((faq, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-white/20 bg-white/5 shadow-sm backdrop-blur-sm transition hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
              >
                <span className="text-sm sm:text-base">{t(faq.qKey)}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-white/70 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-white/20 px-5 py-4 text-sm leading-relaxed text-white/80">
                      {t(faq.aKey)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-white/85">
          {t("faq.moreQuestions")}{" "}
          <a href="#contacto" className="font-medium text-primary underline decoration-2 underline-offset-2 hover:no-underline">
            {t("faq.writeUs")}
          </a>
        </p>
      </div>
    </section>
  );
}
