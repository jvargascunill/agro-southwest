"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const locales = [
  { code: "es" as const, label: "ES" },
  { code: "en" as const, label: "EN" },
  { code: "pt" as const, label: "PT" },
  { code: "zh" as const, label: "中文" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20"
        aria-label="Cambiar idioma"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" />
        <span>{current.label}</span>
      </button>
      {open && (
        <ul
          className="absolute right-0 top-full z-50 mt-1 min-w-[6rem] rounded-lg border border-white/20 bg-[#1A342B] py-1 shadow-lg"
          role="listbox"
        >
          {locales.map((l) => (
            <li key={l.code} role="option">
              <button
                type="button"
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2 text-left text-sm hover:bg-white/10 ${
                  locale === l.code ? "bg-white/15 font-medium text-white" : "text-white/90"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
