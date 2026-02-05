"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export default function TestimonialSection() {
  return (
    <section className="bg-accent-gray py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-2xl border border-accent-gray bg-white p-10 shadow-lg sm:p-14"
          {...fadeIn}
        >
          <Quote className="absolute left-8 top-8 h-12 w-12 text-primary/20 sm:left-10 sm:top-10" />
          <blockquote className="relative text-center">
            <p className="text-lg font-medium leading-relaxed text-secondary sm:text-xl">
              Trabajar con Agro SouthWest nos dio la seguridad de recibir un
              producto con trazabilidad y documentación en orden. La
              comunicación fue fluida en todo el proceso.
            </p>
            <footer className="mt-8">
              <p className="font-semibold text-secondary">
                Cliente importador, Cono Sur
              </p>
              <p className="mt-1 text-sm text-secondary/70">
                Confidencial · testimonio verificado
              </p>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
