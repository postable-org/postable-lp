import { Typography } from '@/components/atoms/Typography';

const PROOF_STATS = [
  { value: '−28%', description: 'Alcance orgânico no Instagram' },
  { value: 'R$97/mês', description: 'vs R$800–2.500 com agência' },
  { value: '< R$0,05', description: 'custo por post via API' },
  { value: '7 dias grátis', description: 'Sem cartão de crédito' },
] as const;

export const TrustStrip = () => {
  return (
    <section className="border-y border-[#E0E0E0] bg-[#F5F5F5] py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
        <Typography variant="label" as="p">
          Números que explicam por que o Postable existe
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
          Fonte: Socialinsider 2025 Social Media Benchmarks Report
        </Typography>
      </div>
    </section>
  );
};
