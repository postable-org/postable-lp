"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import en from "@/locales/en";
import pt from "@/locales/pt";

export type Language = "EN" | "PT";

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translationsMap: Record<Language, any> = {
  EN: en,
  PT: pt,
};

const getNestedTranslation = (obj: any, path: string): string => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("PT");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language;
    if (savedLanguage && (savedLanguage === "EN" || savedLanguage === "PT")) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const t = (key: string): string => {
    const translations = translationsMap[language] || translationsMap["PT"];
    const value = getNestedTranslation(translations, key);
    if (value === undefined) {
      console.warn(`Translation key missing: ${key}`);
      return key;
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
