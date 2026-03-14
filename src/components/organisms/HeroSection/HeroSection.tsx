import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';

export const HeroSection = () => {
  return (
    <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Headline */}
        <div
          className="animate-fade-up max-w-3xl"
          style={{ animationDelay: '0ms' }}
        >
          <Typography variant="h1" className="!font-questrial">
            Transforme tendências em clientes.
          </Typography>
        </div>

        {/* Subtitle */}
        <div
          className="animate-fade-up max-w-xl"
          style={{ animationDelay: '80ms' }}
        >
          <Typography variant="body" className="!font-[family-name:var(--font-geist)] !text-[#71717a]">
            Postable analisa os top 3 concorrentes locais do seu nicho, identifica os temas que eles ignoram e gera posts estratégicos para você ganhar visibilidade sem precisar de agência.
          </Typography>
        </div>

        {/* CTA group */}
        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center gap-4 mb-20 z-10 w-full justify-center"
          style={{ animationDelay: '160ms' }}
        >
          <Button variant="primary" size="lg" className="!rounded-full !px-8 !py-2.5 !text-lg">
            Começar teste grátis de 7 dias
          </Button>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out bg-transparent text-[#0A0A0A] border border-[#E0E0E0] hover:border-[#0A0A0A] rounded-full px-8 py-2.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2"
          >
            Ver como funciona →
          </a>
        </div>

      </div>
    </section>
  );
};
