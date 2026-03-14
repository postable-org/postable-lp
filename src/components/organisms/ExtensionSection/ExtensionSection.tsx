import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { useTranslation } from "@/hooks/useTranslation";

export const ExtensionSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 60% at 10% 40%, rgba(56,189,248,0.1) 0%, transparent 65%),
              radial-gradient(ellipse 50% 50% at 90% 60%, rgba(56,189,248,0.06) 0%, transparent 65%),
              #F5F5F5
            `,
            border: '1px solid #E0E0E0',
            borderTop: '3px solid #38BDF8',
            boxShadow: '0 0 0 1px rgba(56,189,248,0.08)',
          }}
        >
          {/* Dot grid decoration */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(165,200,250,0.45) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(ellipse 60% 60% at 90% 10%, black 0%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 90% 10%, black 0%, transparent 100%)',
              opacity: 0.4,
            }}
            aria-hidden="true"
          />

          {/* Header */}
          <div className="relative flex flex-col items-center text-center gap-4 mb-6 md:mb-8">
            <Badge variant="outline">{t("extension.badge")}</Badge>
            <Typography variant="h2" className="text-[#0A0A0A]">
              {t("extension.heading")}
            </Typography>
            <Typography variant="body" className="max-w-2xl text-[#6B6B6B]">
              {t("extension.subtitle")}
            </Typography>
          </div>

          {/* CTA Group */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#" className="inline-flex">
              <Button
                variant="primary"
                size="md"
                className="!rounded-full !border-none !font-bold"
            style={{ background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)', color: '#080912', boxShadow: '0 4px 16px rgba(56,189,248,0.3)' } as React.CSSProperties}
              >
                {t("extension.ctaPrimary")}
              </Button>
            </a>
            <Button
              variant="ghost"
              size="md"
              className="!rounded-full px-5 hover:!bg-white hover:border-[#A5C8FA]"
              style={{ border: '1px solid #E0E0E0' } as React.CSSProperties}
            >
              {t("extension.ctaSecondary")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
