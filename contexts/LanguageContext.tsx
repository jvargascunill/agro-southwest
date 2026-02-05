"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { messages, type Locale } from "@/lib/messages";

const STORAGE_KEY = "agro-southwest-locale";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const defaultContext: LanguageContextType = {
  locale: "es",
  setLocale: () => {},
  t: (key: string) => key,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === "es" || stored === "en" || stored === "zh")) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang =
        newLocale === "zh" ? "zh-Hans" : newLocale === "en" ? "en" : "es";
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang =
      locale === "zh" ? "zh-Hans" : locale === "en" ? "en" : "es";
  }, [locale, mounted]);

  const t = useCallback(
    (key: string) => {
      const dict = messages[locale];
      return dict[key] ?? messages.es[key] ?? key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context ?? defaultContext;
}
