import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';

export const FinalCTASection = () => {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto bg-white border border-[#E0E0E0] rounded-2xl p-10 md:p-16">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Headline */}
          <Typography variant="h2">
            Seus concorrentes não vão esperar.
          </Typography>

          {/* Sub-copy */}
          <Typography variant="body">
            Comece seu teste gratuito de 7 dias. Sem cartão de crédito necessário.
          </Typography>

          {/* CTA Button */}
          <Button variant="primary" size="lg">
            Começar teste grátis de 7 dias
          </Button>

          {/* Micro-copy */}
          <Typography variant="caption">
            Sem cartão de crédito · Cancele quando quiser · Primeiro post em menos de 10 minutos
          </Typography>
        </div>
      </div>
    </section>
  );
};
