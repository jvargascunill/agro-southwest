"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileCheck, Truck, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Consulta",
    description: "Cuéntanos tu necesidad: volumen, destino y fechas. Te respondemos en menos de 24 h.",
  },
  {
    icon: FileCheck,
    title: "Cotización",
    description: "Recibes una propuesta formal con precios, condiciones y documentación fitosanitaria.",
  },
  {
    icon: Truck,
    title: "Logística",
    description: "Coordinamos embarque terrestre o marítimo según destino, con trazabilidad total.",
  },
  {
    icon: PackageCheck,
    title: "Entrega",
    description: "Tu producto llega en óptimas condiciones. Soporte post-entrega si lo necesitas.",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function ProcessSection() {
  return (
    <section className="bg-accent-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            Cómo trabajamos
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Del campo a tu mercado
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary/80">
            Un proceso claro y profesional, con comunicación constante en cada etapa.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="group relative flex flex-col rounded-2xl border border-accent-gray bg-white p-8 shadow-sm transition hover:border-primary/30 hover:shadow-lg"
              {...fadeIn}
            >
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-secondary">
                {i + 1}
              </div>
              <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary-dark transition group-hover:bg-primary/25">
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-secondary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary/80">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
