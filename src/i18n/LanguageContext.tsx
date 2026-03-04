import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import en from "./en.json";
import hi from "./hi.json";

type Language = "en" | "hi";
const translations = { en, hi } as const;

type TranslationData = typeof en;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".");
      let result: any = translations[lang];
      for (const k of keys) {
        result = result?.[k];
      }
      return typeof result === "string" ? result : key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
