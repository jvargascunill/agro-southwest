"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="border-t border-accent-gray bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            ¿Listo para cotizar?
          </h2>
          <p className="mt-3 text-white/85">
            Cuéntanos tu volumen y destino. Te respondemos en menos de 24 horas.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contacto"
              className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-secondary shadow-lg transition hover:bg-primary-light hover:shadow-xl"
            >
              Solicitar cotización
            </Link>
            <a
              href="mailto:contacto@agrosouthwest.cl"
              className="rounded-full border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              contacto@agrosouthwest.cl
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
