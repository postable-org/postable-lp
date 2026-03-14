import { Typography } from "@/components/atoms/Typography";
import { useTranslation } from "@/hooks/useTranslation";

export const FeaturesIntro = () => {
  const { t } = useTranslation();

  return (
    <section id="funcionalidades" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          <Typography variant="h2" className="max-w-3xl">
            {t("featuresIntro.heading")}
          </Typography>
          <Typography variant="body" className="max-w-xl">
            {t("featuresIntro.subtitle")}
          </Typography>
        </div>
      </div>
    </section>
  );
};
