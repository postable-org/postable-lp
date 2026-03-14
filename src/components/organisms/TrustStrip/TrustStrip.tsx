import { Typography } from '@/components/atoms/Typography';
import { useTranslation } from '@/hooks/useTranslation';

interface ProofStat {
  value: string;
  description: string;
}

export const TrustStrip = () => {
  const { t } = useTranslation();

  const PROOF_STATS: ProofStat[] = [
    { value: t("trustStrip.stats.0.value"), description: t("trustStrip.stats.0.description") },
    { value: t("trustStrip.stats.1.value"), description: t("trustStrip.stats.1.description") },
    { value: t("trustStrip.stats.2.value"), description: t("trustStrip.stats.2.description") },
    { value: t("trustStrip.stats.3.value"), description: t("trustStrip.stats.3.description") },
  ];

  return (
    <section className="border-y border-[#E0E0E0] bg-[#F5F5F5] py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
        <Typography variant="label" as="p">
          {t("trustStrip.heading")}
        </Typography>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
          {PROOF_STATS.map((stat, index) => (
            <div key={stat.value} className="flex items-center gap-8 md:gap-16">
              <div className="flex flex-col items-center gap-1 text-center">
                <Typography
                  variant="body"
                  as="span"
                  className="text-2xl font-bold text-[#0A0A0A] font-[family-name:var(--font-dm-sans)]"
                >
                  {stat.value}
                </Typography>
                <Typography variant="caption" as="span">
                  {stat.description}
                </Typography>
              </div>
              {index < PROOF_STATS.length - 1 && (
                <div className="hidden sm:block h-8 border-l border-[#E0E0E0]" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <Typography variant="caption" as="p">
          {t("trustStrip.source")}
        </Typography>
      </div>
    </section>
  );
};
