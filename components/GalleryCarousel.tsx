"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const CAROUSEL_IMAGES: { src: string; alt: string }[] = [
  { src: "/carousel/01.png", alt: "Agro South West - Campo y cítricos Chile" },
  { src: "/carousel/02.png", alt: "Agro South West - Cítricos frescos exportación" },
  { src: "/carousel/03.png", alt: "Agro South West - Limones y naranjas Chile" },
  { src: "/carousel/04.png", alt: "Agro South West - Proceso exportación cítricos" },
  { src: "/carousel/05.png", alt: "Agro South West - Fruta chilena premium" },
  { src: "/carousel/07.png", alt: "Galería Agro South West - Cítricos 7" },
  { src: "/carousel/08.png", alt: "Galería Agro South West - Cítricos 8" },
  { src: "/carousel/09.png", alt: "Galería Agro South West - Cítricos 9" },
  { src: "/carousel/10.png", alt: "Galería Agro South West - Cítricos 10" },
  { src: "/carousel/11.png", alt: "Galería Agro South West - Cítricos 11" },
  { src: "/carousel/12.png", alt: "Galería Agro South West - Cítricos 12" },
  { src: "/carousel/14.png", alt: "Galería Agro South West - Cítricos 14" },
];

export default function GalleryCarousel() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const step = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("gallery.subtitle")}
          </h2>
        </motion.div>
        <motion.div
          className="relative mt-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 pt-2 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CAROUSEL_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className="relative h-72 w-80 flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-white/20 shadow-lg sm:h-80 sm:w-96"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 320px, 384px"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-primary shadow-lg transition hover:bg-primary hover:text-secondary hover:border-primary sm:-left-4"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-primary shadow-lg transition hover:bg-primary hover:text-secondary hover:border-primary sm:-right-4"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
