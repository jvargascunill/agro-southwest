"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export function TeamCard({
  imageSrc,
  imageAlt,
  name,
  role,
  bio,
  fallbackInitials,
}: {
  imageSrc: string;
  imageAlt: string;
  name: string;
  role: string;
  bio: string;
  fallbackInitials: string;
}) {
  return (
    <div className="flex min-w-0 max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-8 shadow-sm backdrop-blur-sm md:flex-row md:items-start md:gap-8 md:text-left">
      <div className="relative mx-auto h-52 w-40 flex-shrink-0 overflow-hidden rounded-lg border border-white/20 md:mx-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="160px"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <span
          className="absolute inset-0 hidden items-center justify-center text-2xl font-bold text-white/60"
          style={{ display: "none" }}
          aria-hidden
        >
          {fallbackInitials}
        </span>
      </div>
      <div className="mt-6 w-full min-w-0 flex-1 text-left md:mt-0">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{role}</p>
        <p className="mt-4 break-words text-white/80">{bio}</p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-accent-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center"
          {...fadeIn}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            {t("about.teamLabel")}
          </p>
          <div className="mt-8 grid w-full max-w-4xl gap-8 sm:grid-cols-2">
            <motion.div {...fadeIn}>
              <TeamCard
                imageSrc="/team/javier-vargas.png"
                imageAlt={t("about.javierName")}
                name={t("about.javierName")}
                role={t("about.javierRole")}
                bio={t("about.javierBio")}
                fallbackInitials="JVC"
              />
            </motion.div>
            <motion.div {...fadeIn}>
              <TeamCard
                imageSrc="/team/felipe-zurita.png?v=2"
                imageAlt={t("about.felipeName")}
                name={t("about.felipeName")}
                role={t("about.felipeRole")}
                bio={t("about.felipeBio")}
                fallbackInitials="FZ"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
