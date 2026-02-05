"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-secondary"
    >
      {/* Background: imagen o gradiente con overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1547514701-42782101795e?w=1920&q=80)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary/90" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Fresh Citrus from Chile
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-white/95 sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          Quality you can trust
        </motion.p>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base text-white/85 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Expertos en exportación de limones frescos con certificación GlobalG.A.P.
          y Systems Approach para el mundo.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#productos"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-secondary shadow-lg transition hover:bg-primary-light"
          >
            Ver producto
          </a>
          <a
            href="#contacto"
            className="rounded-full border-2 border-white/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contactar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
