"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoMobilePortraitRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    [videoRef.current, videoMobilePortraitRef.current].forEach((video) => {
      if (video) video.playbackRate = 0.7;
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-secondary"
    >
      {/* Solo celular en vertical (portrait) */}
      <video
        ref={videoMobilePortraitRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 hidden h-full w-full object-cover opacity-40 [@media(max-width:767px)_and_(orientation:portrait)]:block"
        aria-hidden
      >
        <source src="/video-iniciocel.mp4" type="video/mp4" />
      </video>
      {/* Resto: desktop, tablet, celular en horizontal */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40 [@media(max-width:767px)_and_(orientation:portrait)]:hidden"
        aria-hidden
      >
        <source src="/video-inicio.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/92 via-secondary/85 to-secondary/96" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <motion.h1
          className="text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t("hero.title")}
        </motion.h1>
      </div>
    </section>
  );
}
