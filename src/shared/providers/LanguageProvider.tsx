"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLanguage, languageStorageKey, languages, siteCopy, type SiteCopy, type SiteLanguage } from "@/features/landing/content/statica";

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  copy: SiteCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [language, setLanguageState] = useState<SiteLanguage>(defaultLanguage);

  useEffect(() => {
    const stored = window.localStorage.getItem(languageStorageKey);

    if (stored && languages.includes(stored as SiteLanguage)) {
      setLanguageState(stored as SiteLanguage);
      return;
    }

    const preferred = window.navigator.language.toLowerCase().startsWith("ka") ? "ka" : defaultLanguage;
    setLanguageState(preferred);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(languageStorageKey, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      copy: siteCopy[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider.");
  }

  return context;
}
