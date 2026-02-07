"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const CAROUSEL_IMAGES = [
  "/carousel/01.png",
  "/carousel/02.png",
  "/carousel/03.png",
  "/carousel/04.png",
  "/carousel/05.png",
  "/carousel/06.png",
  "/carousel/07.png",
  "/carousel/08.png",
  "/carousel/09.png",
  "/carousel/10.png",
  "/carousel/11.png",
  "/carousel/12.png",
  "/carousel/14.png",
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

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
    <section className="bg-accent-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            {t("gallery.title")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            {t("gallery.subtitle")}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-lg text-secondary/80">
            {t("gallery.description")}
          </p>
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
            {CAROUSEL_IMAGES.map((src, i) => (
              <div
                key={src}
                className="relative h-72 w-80 flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-accent-gray bg-white shadow-lg sm:h-80 sm:w-96"
              >
                <Image
                  src={src}
                  alt={`Galería Agro SouthWest ${i + 1}`}
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
            className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-accent-gray bg-white/95 text-secondary shadow-lg transition hover:bg-primary hover:text-white hover:border-primary sm:-left-4"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-accent-gray bg-white/95 text-secondary shadow-lg transition hover:bg-primary hover:text-white hover:border-primary sm:-right-4"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
