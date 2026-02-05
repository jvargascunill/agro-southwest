"use client";

import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/Agro_southwest/";
const INSTAGRAM_USER = "Agro_southwest";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function InstagramSection() {
  return (
    <section
      id="instagram"
      className="bg-accent-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-sm font-medium text-primary-dark">
            <Instagram className="h-4 w-4" />
            Síguenos
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Nuestro Instagram
          </h2>
          <p className="mx-auto mt-2 max-w-md text-lg text-secondary/80">
            Conecta con nosotros y descubre nuestro día a día en @{INSTAGRAM_USER}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Tarjeta del perfil: enlace principal y preview embebido */}
          <div className="overflow-hidden rounded-2xl border border-accent-gray bg-white shadow-lg">
            <div className="grid sm:grid-cols-5">
              {/* Lado izquierdo: info y CTA */}
              <div className="flex flex-col justify-center gap-6 bg-accent-gray/30 p-8 sm:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 text-primary-dark">
                    <Instagram className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary/70">
                      Perfil oficial
                    </p>
                    <p className="text-xl font-bold text-secondary">
                      @{INSTAGRAM_USER}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-secondary/80">
                  Limones frescos, campo chileno y novedades de Agro SouthWest.
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-secondary shadow-sm transition hover:bg-primary-dark"
                >
                  Ver perfil en Instagram
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              {/* Lado derecho: grid tipo feed que enlaza al perfil (iframe de Instagram suele estar bloqueado por CORS) */}
              <div className="grid grid-cols-3 gap-1 p-4 sm:col-span-3 sm:p-6">
                {[...Array(6)].map((_, i) => (
                  <a
                    key={i}
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square rounded-lg bg-secondary/10 transition hover:bg-primary/20"
                    aria-label={`Ver publicación en Instagram ${i + 1}`}
                  >
                    <div className="flex h-full w-full items-center justify-center">
                      <Instagram className="h-8 w-8 text-secondary/40 sm:h-10 sm:w-10" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-secondary/60">
            Haz clic en &quot;Ver perfil en Instagram&quot; para seguirnos y ver
            todas las publicaciones.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
