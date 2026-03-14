import { Badge } from "@/components/atoms/Badge";
import { Typography } from "@/components/atoms/Typography";
import { PainCard } from "@/components/molecules/PainCard";
import { useTranslation } from "@/hooks/useTranslation";

interface PainPoint {
  badge: string;
  title: string;
  description: string;
}

export const PainPointsSection = () => {
  const { t } = useTranslation();

  const PAIN_POINTS: PainPoint[] = [
    {
      badge: t("painPoints.badge"),
      title: t("painPoints.cards.0.title"),
      description: t("painPoints.cards.0.description"),
    },
    {
      badge: t("painPoints.badge2"),
      title: t("painPoints.cards.1.title"),
      description: t("painPoints.cards.1.description"),
    },
    {
      badge: t("painPoints.badge3"),
      title: t("painPoints.cards.2.title"),
      description: t("painPoints.cards.2.description"),
    },
    {
      badge: t("painPoints.badge4"),
      title: t("painPoints.cards.3.title"),
      description: t("painPoints.cards.3.description"),
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <Badge variant="default">{t("painPoints.sectionBadge")}</Badge>
          <Typography variant="h2" className="max-w-2xl text-[#0A0A0A]">
            {t("painPoints.heading")}
          </Typography>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PAIN_POINTS.map((point) => (
            <PainCard
              key={point.badge}
              badge={point.badge}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>

        {/* Emotional transition line */}
        <p className="mt-10 text-center font-[family-name:var(--font-inter)] text-[#6B6B6B] text-base italic">
          {t("painPoints.transition")}
        </p>
      </div>
    </section>
  );
};
