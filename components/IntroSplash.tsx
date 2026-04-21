"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobilePortrait } from "@/hooks/useIsMobilePortrait";

/** Móvil horizontal o tablet (retrato o apaisado): bajar el arte hacia la zona del WhatsApp. Coma = OR en media queries. */
const TABLET_OR_MOBILE_LANDSCAPE =
  "(max-width: 1024px) and (orientation: landscape), (min-width: 481px) and (max-width: 1024px) and (orientation: portrait)";

export default function IntroSplash() {
  const { t } = useLanguage();
  const isMobilePortrait = useIsMobilePortrait();
  const backgroundImage = isMobilePortrait ? "url(/logo-inicio-mobile.png)" : "url(/hero-logo.png)";

  const [backgroundPosition, setBackgroundPosition] = useState("center 22%");
  const [tabletOrMobileLandscape, setTabletOrMobileLandscape] = useState(false);

  useEffect(() => {
    const mqPhonePortrait = window.matchMedia("(max-width: 480px) and (orientation: portrait)");
    const mqTabletOrLandscape = window.matchMedia(TABLET_OR_MOBILE_LANDSCAPE);

    const update = () => {
      const tabletOrLand = mqTabletOrLandscape.matches;
      setTabletOrMobileLandscape(tabletOrLand);
      if (mqPhonePortrait.matches) setBackgroundPosition("center -10%");
      else if (tabletOrLand) setBackgroundPosition("center 43%");
      else setBackgroundPosition("center 22%");
    };

    update();
    mqPhonePortrait.addEventListener("change", update);
    mqTabletOrLandscape.addEventListener("change", update);
    return () => {
      mqPhonePortrait.removeEventListener("change", update);
      mqTabletOrLandscape.removeEventListener("change", update);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-secondary"
      aria-label="Agro SouthWest"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage,
          backgroundPosition,
          backgroundSize: "cover",
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      {/* Brillo sutil en los bordes */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-secondary/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <motion.div
        className="relative z-10 mt-auto flex flex-wrap items-center justify-center gap-4 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] max-md:pb-[calc(6rem+env(safe-area-inset-bottom,0px))]"
        initial={{ opacity: 0, y: 16 }}
        animate={{
          opacity: 1,
          y: tabletOrMobileLandscape ? "37.5%" : 0,
        }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Link
          href="#contacto"
          className="rounded-full border-2 border-primary bg-transparent px-5 py-2.5 text-xs font-semibold text-primary transition hover:bg-primary/20 sm:px-6 sm:py-3 sm:text-sm"
        >
          {t("hero.ctaContact")}
        </Link>
      </motion.div>
    </section>
  );
}

