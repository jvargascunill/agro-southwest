"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

function ArgentinaFlagIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
    >
      <rect width="32" height="10.67" fill="#75AADB" />
      <rect y="10.67" width="32" height="10.67" fill="#fff" />
      <rect y="21.33" width="32" height="10.67" fill="#75AADB" />
      <circle cx="16" cy="16" r="4" fill="#F4B719" />
      <g fill="none" stroke="#F4B719" strokeWidth="0.5">
        {[...Array(16)].map((_, i) => {
          const a = (i * 22.5 * Math.PI) / 180;
          const r1 = 3.2;
          const r2 = 4.5;
          return (
            <line
              key={i}
              x1={16 + r1 * Math.cos(a)}
              y1={16 + r1 * Math.sin(a)}
              x2={16 + r2 * Math.cos(a)}
              y2={16 + r2 * Math.sin(a)}
            />
          );
        })}
      </g>
    </svg>
  );
}

function UruguayFlagIcon({ className }: { className?: string }) {
  const h = 32 / 9;
  const stripes = [
    "#fff", "#5B9BD5", "#fff", "#5B9BD5", "#fff", "#5B9BD5", "#fff", "#5B9BD5", "#fff",
  ];
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      {stripes.map((fill, i) => (
        <rect key={i} y={i * h} width="32" height={h} fill={fill} />
      ))}
      <rect width="10.67" height="10.67" fill="#fff" />
      <circle cx="5.33" cy="5.33" r="2.8" fill="#F4B719" />
      <g fill="none" stroke="#F4B719" strokeWidth="0.4">
        {[...Array(16)].map((_, i) => {
          const a = (i * 22.5 * Math.PI) / 180;
          const r1 = 2.2;
          const r2 = 3.2;
          return (
            <line
              key={i}
              x1={5.33 + r1 * Math.cos(a)}
              y1={5.33 + r1 * Math.sin(a)}
              x2={5.33 + r2 * Math.cos(a)}
              y2={5.33 + r2 * Math.sin(a)}
            />
          );
        })}
      </g>
    </svg>
  );
}

const markets = [
  { name: "Argentina", modeKey: "markets.modeTerrestrial", icon: ArgentinaFlagIcon, isFlag: true },
  { name: "Uruguay", modeKey: "markets.modeTerrestrial", icon: UruguayFlagIcon, isFlag: true },
];

export default function Markets() {
  const { t } = useLanguage();
  return (
    <section id="mercados" className="bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" {...fadeIn}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("markets.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            {t("markets.description")}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {markets.map((market) => {
          const Icon = market.icon;
          return (
            <motion.div
              key={market.name}
              className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/5 p-8 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-md"
              {...fadeIn}
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/20 text-primary">
                <Icon className={market.isFlag ? "h-8 w-8" : "h-7 w-7"} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {market.name}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-white/80">
                <MapPin className="h-4 w-4" />
                {t(market.modeKey)}
              </p>
            </motion.div>
          );
        })}
        </div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4"
          {...fadeIn}
        >
          <span className="text-sm font-medium text-white/85">
            {t("markets.terrestrial")}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
