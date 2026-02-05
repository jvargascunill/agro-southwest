"use client";

import { motion } from "framer-motion";
import { Ship, Truck, MapPin } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const markets = [
  { name: "Argentina", mode: "Terrestre", icon: Truck },
  { name: "Uruguay", mode: "Terrestre", icon: Truck },
  { name: "Brasil", mode: "Marítima", icon: Ship },
  { name: "Panamá", mode: "Marítima", icon: Ship },
];

export default function Markets() {
  return (
    <section id="mercados" className="bg-accent-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Conectando Chile con el Mundo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary/80">
            Mercados prioritarios con logística terrestre en el Cono Sur y
            marítima hacia Brasil y Panamá.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map(({ name, mode, icon: Icon }) => (
            <motion.div
              key={name}
              className="flex flex-col items-center rounded-2xl border border-accent-gray bg-white p-8 shadow-sm transition hover:border-primary/30 hover:shadow-md"
              {...fadeIn}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary-dark">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-secondary">
                {name}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-secondary/70">
                <MapPin className="h-4 w-4" />
                {mode}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-xl border border-accent-gray bg-accent-gray/50 px-6 py-4"
          {...fadeIn}
        >
          <span className="text-sm font-medium text-secondary/80">
            Cono Sur: logística terrestre
          </span>
          <span className="text-accent-gray-dark">•</span>
          <span className="text-sm font-medium text-secondary/80">
            Brasil / Panamá: logística marítima
          </span>
        </motion.div>
      </div>
    </section>
  );
}
