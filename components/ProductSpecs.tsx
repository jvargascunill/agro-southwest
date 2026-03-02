"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Package,
  Scale,
  Calendar,
  Leaf,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const specKeys = [
  { icon: Leaf, labelKey: "product.tracking", valueKey: "product.trackingValue" },
  { icon: Package, labelKey: "product.calibres", valueKey: "product.calibresValue" },
  { icon: Scale, labelKey: "product.weight", valueKey: "product.weightValue" },
  { icon: Calendar, labelKey: "product.availability", valueKey: "product.availabilityValue" },
];

export default function ProductSpecs() {
  const { t } = useLanguage();
  return (
    <section id="productos" className="bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("product.title")}
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 max-w-5xl rounded-2xl border border-white/20 bg-white/5 overflow-hidden shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 sm:p-8 md:p-10">
            {/* Título arriba, ancho completo */}
            <h3 className="mb-6 text-2xl font-bold text-white sm:mb-8 sm:text-3xl">
              {t("product.cardTitle")}
            </h3>
            {/* Fila: foto a la izquierda del marco principal, tarjetas a la derecha */}
            <div className="flex flex-row items-stretch overflow-x-auto">
              {/* Foto a la izquierda; altura entre primera y última tarjeta */}
              <div className="flex min-w-[45%] flex-1 items-stretch justify-center pr-4 md:pr-8">
                <div className="relative h-full min-h-[340px] w-full overflow-hidden rounded-xl border-2 border-white/20 shadow-md sm:min-h-[380px] md:min-h-0">
                  <Image
                    src="/foto-limon.jpg"
                    alt="Limones en árbol - Agro South West"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 50vw"
                    priority
                  />
                </div>
              </div>
              {/* Tarjetas a la derecha del marco principal */}
              <div className="flex min-w-0 flex-1 flex-col pl-4 md:pl-8">
                <div className="flex flex-col gap-6">
                  {specKeys.map(({ icon: Icon, labelKey, valueKey }) => (
                    <div
                      key={labelKey}
                      className="flex items-start gap-4 rounded-xl bg-white/5 p-4 border border-white/10"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white/70">
                          {t(labelKey)}
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {t(valueKey)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Texto de variedad debajo de la fila tarjetas + foto */}
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/20 pt-8">
              <div className="flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-white">
                  {t("product.skin")}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
