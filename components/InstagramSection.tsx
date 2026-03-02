"use client";

import { useEffect } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const INSTAGRAM_URL = "https://www.instagram.com/Agro_southwest/";
const INSTAGRAM_USER = "Agro_southwest";

/**
 * Opción A – Fotos reales por URLs: pega 3–6 enlaces de posts (en Instagram: foto → ⋮ → Copiar enlace).
 * Opción B – Feed por usuario: crea un widget gratis en elfsight.com o snapwidget.com con @Agro_southwest
 *   y pega aquí la URL del iframe (ej. de Elfsight te dan una URL tipo https://widgets.elfsight.com/...).
 */
const INSTAGRAM_POST_URLS: string[] = [
  "https://www.instagram.com/p/DUCWq-XjOwv/",
];

/** Si usas un widget (Elfsight, SnapWidget, etc.), pega aquí la URL del iframe. Si está vacío no se usa. */
const INSTAGRAM_FEED_WIDGET_URL = "";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function InstagramSection() {
  const { t } = useLanguage();
  const hasPosts = INSTAGRAM_POST_URLS.length > 0;
  const hasWidget = Boolean(INSTAGRAM_FEED_WIDGET_URL);
  const showRealFeed = hasPosts || hasWidget;

  const processEmbeds = () => {
    const w = typeof window !== "undefined" ? window : null;
    const instgrm = w && (w as unknown as { instgrm?: { Embeds?: { process: () => void } } }).instgrm;
    instgrm?.Embeds?.process?.();
  };

  useEffect(() => {
    if (hasPosts) processEmbeds();
  }, [hasPosts]);

  return (
    <section
      id="instagram"
      className="bg-secondary py-14 sm:py-20"
    >
      {hasPosts && (
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
          onLoad={processEmbeds}
        />
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
            <Instagram className="h-4 w-4" />
            {t("instagram.follow")}
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("instagram.title")}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-lg text-white/85">
            {t("instagram.description")}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-lg backdrop-blur-sm">
            <div className="grid sm:grid-cols-5">
              <div className="flex flex-col justify-center gap-6 bg-white/5 p-8 sm:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 text-primary">
                    <Instagram className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/70">
                      {t("instagram.profile")}
                    </p>
                    <p className="text-xl font-bold text-white">
                      @{INSTAGRAM_USER}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  Limones frescos, campo chileno y novedades de Agro SouthWest.
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-secondary shadow-sm transition hover:bg-primary-light"
                >
                  {t("instagram.verPerfil")}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Fotos reales: widget iframe o grid de posts embebidos */}
              <div className="flex min-h-[280px] items-center justify-center p-4 sm:col-span-3 sm:p-6">
                {hasWidget ? (
                  <iframe
                    title="Instagram feed Agro SouthWest"
                    src={INSTAGRAM_FEED_WIDGET_URL}
                    className="h-full min-h-[320px] w-full rounded-lg border-0"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : hasPosts ? (
                  <div className={`grid w-full gap-4 ${INSTAGRAM_POST_URLS.length === 1 ? "grid-cols-1 place-items-center" : "grid-cols-2 sm:grid-cols-3"}`}>
                    {INSTAGRAM_POST_URLS.slice(0, 6).map((url) => (
                      <blockquote
                        key={url}
                        className="instagram-media instagram-media-rendered"
                        data-instgrm-permalink={url}
                        data-instgrm-version="14"
                        style={{ minWidth: INSTAGRAM_POST_URLS.length === 1 ? 400 : 320, maxWidth: INSTAGRAM_POST_URLS.length === 1 ? 540 : 540 }}
                      >
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          Ver publicación en Instagram
                        </a>
                      </blockquote>
                    ))}
                  </div>
                ) : (
                  <div className="grid w-full grid-cols-3 gap-1">
                    {[...Array(6)].map((_, i) => (
                      <a
                        key={i}
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aspect-square rounded-lg bg-white/10 transition hover:bg-primary/20"
                        aria-label={`Ver publicación en Instagram ${i + 1}`}
                      >
                        <div className="flex h-full w-full items-center justify-center">
                          <Instagram className="h-8 w-8 text-white/40 sm:h-10 sm:w-10" />
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {!showRealFeed && (
            <p className="mt-4 text-center text-sm text-white/60">
              Para mostrar fotos reales: en{" "}
              <code className="rounded bg-white/10 px-1 py-0.5 text-xs">
                components/InstagramSection.tsx
              </code>{" "}
              usa <strong>Opción A</strong> (pega 3–6 URLs de posts) o <strong>Opción B</strong> (URL de widget de Elfsight / SnapWidget).
            </p>
          )}
          {showRealFeed && !hasWidget && (
            <p className="mt-4 text-center text-sm text-white/60">
              Haz clic en cualquier publicación para verla en Instagram.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
