"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, Sprout } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const items = [
  {
    title: "GlobalG.A.P.",
    description: "Trazabilidad y buenas prácticas agrícolas.",
    icon: Shield,
  },
  {
    title: "Systems Approach",
    description: "Cumplimiento fitosanitario SAG/USDA.",
    icon: Leaf,
  },
  {
    title: "Sostenibilidad",
    description: "Respeto por el entorno y comunidades.",
    icon: Sprout,
  },
];

export default function Certifications() {
  return (
    <section id="sostenibilidad" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Confianza
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Calidad y Certificaciones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Estándares que generan confianza en cada envío.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/5 p-8 text-center backdrop-blur-sm"
              {...fadeIn}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-white/80">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
