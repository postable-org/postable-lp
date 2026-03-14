import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { useTranslation } from '@/hooks/useTranslation';

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white min-h-screen flex items-center px-4" style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Headline */}
        <div
          className="animate-fade-up flex flex-col items-center"
          style={{ animationDelay: '0ms' }}
        >
          <Typography
            variant="h1"
            className="!font-[family-name:var(--font-fraunces)] !font-normal !text-5xl md:!text-[5rem] !leading-[1.05] !tracking-tight !text-[#1C1917] !mb-12 !max-w-5xl"
          >
            {t("hero.heading")}
          </Typography>
        </div>

        {/* Subtitle */}
        <div
          className="animate-fade-up max-w-xl"
          style={{ animationDelay: '80ms' }}
        >
          <Typography variant="body" className="!text-lg md:!text-xl !text-zinc-600 !leading-relaxed">
            {t("hero.subtitle")}
          </Typography>
        </div>

        {/* CTA group */}
        <div
          className="mt-10 animate-fade-up flex flex-col sm:flex-row items-center gap-4 z-10 w-full justify-center"
          style={{ animationDelay: '160ms' }}
        >
          <Button variant="primary" size="lg" className="!rounded-full !px-8 !py-2.5 !text-lg">
            {t("hero.primaryCTA")}
          </Button>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out bg-transparent text-[#0A0A0A] border border-[#E0E0E0] hover:border-[#0A0A0A] rounded-full px-8 py-2.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2"
          >
            {t("hero.secondaryCTA")}
          </a>
        </div>

      </div>
    </section>
  );
};
