"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuál es el volumen mínimo de compra?",
    answer:
      "Trabajamos con pedidos que se adapten a tu operación. Contáctanos con tu volumen estimado y destino para darte una cotización a medida.",
  },
  {
    question: "¿Entregan documentación fitosanitaria y certificados?",
    answer:
      "Sí. Todas las exportaciones incluyen la documentación requerida (Systems Approach SAG/USDA cuando aplica, certificados de origen, etc.). GlobalG.A.P. respalda nuestra trazabilidad.",
  },
  {
    question: "¿En qué temporada están disponibles los limones?",
    answer:
      "Nuestra temporada de exportación va de abril a septiembre (contraestación para el Hemisferio Norte). Es la ventana óptima de calidad desde la zona central y sur de Chile.",
  },
  {
    question: "¿Cómo se coordina la logística hasta mi país?",
    answer:
      "Para el Cono Sur (Argentina, Uruguay) usamos logística terrestre. Para Brasil y Panamá, marítima. Te acompañamos en la coordinación y te mantenemos informado del estado del embarque.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-accent-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            Preguntas frecuentes
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Resolvemos tus dudas
          </h2>
        </motion.div>

        <ul className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-accent-gray bg-white shadow-sm transition hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
              >
                <span className="text-sm sm:text-base">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-secondary/70 transition-transform ${
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
                    <p className="border-t border-accent-gray px-5 py-4 text-sm leading-relaxed text-secondary/80">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-secondary/70">
          ¿Más preguntas?{" "}
          <a href="#contacto" className="font-medium text-primary-dark underline decoration-2 underline-offset-2 hover:no-underline">
            Escríbenos
          </a>
        </p>
      </div>
    </section>
  );
}
