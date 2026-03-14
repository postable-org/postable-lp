import { Typography } from "@/components/atoms/Typography";
import { useTranslation } from "@/hooks/useTranslation";

export const FeaturesIntro = () => {
  const { t } = useTranslation();

  return (
    <section id="funcionalidades" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-5">
          <span
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase"
            style={{ color: '#0EA5E9' }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#38BDF8' }} />
            Features
          </span>
          <h2
            className="font-[family-name:var(--font-fraunces)] font-normal text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-3xl text-[#0A0A0A]"
          >
            {t("featuresIntro.heading")}
          </h2>
          <div
            style={{
              width: '48px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #38BDF8, transparent)',
              borderRadius: '2px',
            }}
            aria-hidden="true"
          />
          <Typography variant="body" className="max-w-xl !text-zinc-500">
            {t("featuresIntro.subtitle")}
          </Typography>
        </div>
      </div>
    </section>
  );
};
