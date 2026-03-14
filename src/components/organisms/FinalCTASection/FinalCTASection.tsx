import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { useTranslation } from '@/hooks/useTranslation';

export const FinalCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto bg-white border border-[#E0E0E0] rounded-2xl p-10 md:p-16">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Headline */}
          <Typography variant="h2">
            {t("finalCta.heading")}
          </Typography>

          {/* Sub-copy */}
          <Typography variant="body">
            {t("finalCta.subtitle")}
          </Typography>

          {/* CTA Button */}
          <Button variant="primary" size="lg">
            {t("finalCta.ctaButton")}
          </Button>

          {/* Micro-copy */}
          <Typography variant="caption">
            {t("finalCta.microcopy")}
          </Typography>
        </div>
      </div>
    </section>
  );
};
