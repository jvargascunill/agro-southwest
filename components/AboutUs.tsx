"use client";

import { motion } from "framer-motion";
import { Leaf, Target, Users } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export default function AboutUs() {
  return (
    <section id="nosotros" className="bg-accent-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Sobre Nosotros
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary/80">
            Empresa chilena dedicada a la exportación de limones frescos de la zona
            central y sur de Chile.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <motion.div
            className="flex flex-col items-center rounded-2xl border border-accent-gray bg-white p-8 shadow-sm"
            {...fadeIn}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary-dark">
              <Leaf className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondary">
              Origen premium
            </h3>
            <p className="mt-2 text-center text-secondary/80">
              Limones de la zona central y sur de Chile, con condiciones
              climáticas óptimas para cítricos de alta calidad.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center rounded-2xl border border-accent-gray bg-white p-8 shadow-sm"
            {...fadeIn}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary-dark">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondary">
              Nuestra misión
            </h3>
            <p className="mt-2 text-center text-secondary/80">
              Proveer calidad, inocuidad y trazabilidad, potenciando a
              productores locales y mercados internacionales.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center rounded-2xl border border-accent-gray bg-white p-8 shadow-sm"
            {...fadeIn}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary-dark">
              <Users className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondary">
              Compromiso
            </h3>
            <p className="mt-2 text-center text-secondary/80">
              Trabajo cercano con agricultores y estándares que generan confianza
              en cada envío.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
