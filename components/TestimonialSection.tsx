"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TeamCard } from "@/components/TeamSection";

type Testimonial = {
  id: string;
  quoteEn: string;
  quoteZh: string;
  quoteEs: string;
  author: string;
  locationEn: string;
  locationZh: string;
  locationEs: string;
  lang: "en" | "zh" | "es";
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    lang: "es",
    quoteEn: "",
    quoteZh: "",
    quoteEs:
      "Trabajar con Agro SouthWest nos dio la seguridad de recibir un producto con trazabilidad y documentación en orden. La comunicación fue fluida en todo el proceso.",
    author: "Gerente de compras, Argentina",
    locationEn: "",
    locationZh: "",
    locationEs: "Córdoba, Argentina",
  },
  {
    id: "2",
    lang: "es",
    quoteEn: "",
    quoteZh: "",
    quoteEs:
      "Llevamos dos temporadas abasteciéndonos de cítricos con Agro SouthWest. Calidad confiable, entrega a tiempo y equipo profesional. Lo recomendamos para quien busque suministro contraestacional en el Cono Sur.",
    author: "Director de compras, Argentina",
    locationEn: "",
    locationZh: "",
    locationEs: "Córdoba, Argentina",
  },
  {
    id: "3",
    lang: "es",
    quoteEn: "",
    quoteZh: "",
    quoteEs:
      "La colaboración con Agro SouthWest fue muy fluida. La calidad del producto es estable, llegó en buen estado y la documentación estuvo completa. Seguiremos comprando.",
    author: "Importador, Uruguay",
    locationEn: "",
    locationZh: "",
    locationEs: "Montevideo, Uruguay",
  },
  {
    id: "4",
    lang: "es",
    quoteEn: "",
    quoteZh: "",
    quoteEs:
      "La ventana de suministro de cítricos chilenos complementa muy bien nuestra temporada. Agro SouthWest responde rápido, las cotizaciones son claras y la experiencia de cooperación es muy buena.",
    author: "Encargado de abastecimiento, Uruguay",
    locationEn: "",
    locationZh: "",
    locationEs: "Montevideo, Uruguay",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

function getTestimonialContent(
  t: Testimonial,
  showSpanish: Record<string, boolean>
): { quote: string; location: string; lang: string } {
  const useSpanish = showSpanish[t.id];
  if (useSpanish) return { quote: t.quoteEs, location: t.locationEs, lang: "es" };
  if (t.lang === "es") return { quote: t.quoteEs, location: t.locationEs, lang: "es" };
  if (t.lang === "zh" && t.quoteZh)
    return { quote: t.quoteZh, location: t.locationZh, lang: "zh" };
  return {
    quote: t.quoteEn || t.quoteEs,
    location: t.locationEn || t.locationEs,
    lang: "en",
  };
}

export default function TestimonialSection() {
  const { t } = useLanguage();
  const [showSpanish, setShowSpanish] = useState<Record<string, boolean>>({});

  const toggleSpanish = (id: string) => {
    setShowSpanish((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const needsTranslateButton = (testimonial: Testimonial) => {
    return testimonial.quoteEs.length > 0;
  };

  return (
    <section className="bg-accent-gray py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            {t("testimonial.sectionLabel")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            {t("testimonial.title")}
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial) => {
            const { quote, location, lang } = getTestimonialContent(
              testimonial,
              showSpanish
            );
            const showTranslate = needsTranslateButton(testimonial);
            const isShowingSpanish = showSpanish[testimonial.id];

            if (!quote) return null;

            return (
              <motion.div
                key={testimonial.id}
                className="relative rounded-2xl border border-accent-gray bg-white p-8 shadow-lg"
                {...fadeIn}
              >
                <Quote className="absolute left-6 top-6 h-10 w-10 text-primary/20" />
                <blockquote className="relative pt-4" lang={lang}>
                  <p className="text-base leading-relaxed text-secondary sm:text-lg">
                    {quote}
                  </p>
                  <footer className="mt-6">
                    <p className="font-semibold text-secondary">
                      {testimonial.author}
                    </p>
                    {location && (
                      <p className="mt-1 text-sm text-secondary/70">
                        {location}
                      </p>
                    )}
                  </footer>
                </blockquote>
                {showTranslate && (
                  <button
                    type="button"
                    onClick={() => toggleSpanish(testimonial.id)}
                    className="mt-4 flex items-center gap-2 text-sm font-medium text-primary-dark hover:underline"
                  >
                    <Languages className="h-4 w-4" />
                    {isShowingSpanish
                      ? t("testimonial.showOriginal")
                      : t("testimonial.translateToSpanish")}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 flex flex-col items-center"
          {...fadeIn}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            {t("about.teamLabel")}
          </p>
          <div className="mt-8 grid w-full min-w-0 gap-8 sm:grid-cols-2 [&>*]:min-w-0">
            <TeamCard
              imageSrc="/team/javier-vargas.png"
              imageAlt={t("about.javierName")}
              name={t("about.javierName")}
              role={t("about.javierRole")}
              bio={t("about.javierBio")}
              fallbackInitials="JVC"
            />
            <TeamCard
              imageSrc="/team/felipe-zurita.png?v=2"
              imageAlt={t("about.felipeName")}
              name={t("about.felipeName")}
              role={t("about.felipeRole")}
              bio={t("about.felipeBio")}
              fallbackInitials="FZ"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
