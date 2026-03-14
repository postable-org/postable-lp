"use client";

import { useTranslation } from "@/hooks/useTranslation";

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
}

export const LanguageSwitcher = ({ variant = "desktop" }: LanguageSwitcherProps) => {
  const { language, setLanguage, t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "PT" : "EN");
  };

  if (variant === "desktop") {
    return (
      <button
        onClick={toggleLanguage}
        className="mt-1 px-3 py-1.5 border border-black/10 rounded-full text-[13px] font-medium text-[#45474D] hover:text-black hover:bg-black/5 hover:border-black/20 transition-all uppercase flex items-center gap-1"
        aria-label={t("header.languageLabel")}
      >
        {language === "EN" ? t("header.languageEn") : t("header.languagePt")}
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="text-[15px] font-medium text-[#45474D] py-2 text-left"
      aria-label={t("header.languageLabel")}
    >
      {t("header.languageLabel")}
      {language === "EN" ? t("header.languageEnFull") : t("header.languagePtFull")}
    </button>
  );
};
