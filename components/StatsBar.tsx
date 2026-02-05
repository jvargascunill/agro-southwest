"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Calendar } from "lucide-react";

const stats = [
  { value: "4+", label: "Mercados", icon: Globe },
  { value: "2", label: "Certificaciones clave", sublabel: "GlobalG.A.P. · Systems Approach", icon: Shield },
  { value: "Abril–Sept", label: "Temporada exportación", sublabel: "Contraestación", icon: Calendar },
];

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function StatsBar() {
  return (
    <section className="relative z-10 -mt-1 border-b border-white/10 bg-secondary py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map(({ value, label, sublabel, icon: Icon }) => (
            <motion.div
              key={label}
              className="flex flex-col items-center text-center sm:border-r sm:border-white/10 sm:last:border-r-0"
              {...fadeIn}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary sm:h-14 sm:w-14">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-sm font-medium text-white/90">{label}</p>
              {sublabel && (
                <p className="mt-0.5 text-xs text-white/70">{sublabel}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
