import { Badge } from "@/components/atoms/Badge";
import { Typography } from "@/components/atoms/Typography";
import { PainCard } from "@/components/molecules/PainCard";

interface PainPoint {
  badge: string;
  title: string;
  description: string;
}

const PAIN_POINTS: PainPoint[] = [
  {
    badge: "01",
    title: "Não sabem o que postar",
    description:
      "Sem método, sem estratégia e sem tempo, a maioria dos negócios locais publica de forma aleatória — ou simplesmente para de postar.",
  },
  {
    badge: "02",
    title: "Sem consistência, sem alcance",
    description:
      "O algoritmo penaliza contas inativas. Cada semana sem publicação é uma semana ganha pelo concorrente que aparece todo dia.",
  },
  {
    badge: "03",
    title: "Zero visibilidade competitiva",
    description:
      "Você não sabe o que seus concorrentes publicam, o que ignoram nem onde estão os espaços abertos para dominar a conversa local.",
  },
  {
    badge: "04",
    title: "Conteúdo não gera leads",
    description:
      "Posts sem CTA e sem contexto local não convertem. Curtida não paga boleto — e a maioria do conteúdo orgânico nunca chega a quem compra.",
  },
];

export const PainPointsSection = () => {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <Badge variant="default">O problema</Badge>
          <Typography variant="h2" className="max-w-2xl text-[#0A0A0A]">
            Por que a maioria dos negócios locais some nas redes sociais.
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
          Esse ciclo tem solução. E não precisa de agência.
        </p>
      </div>
    </section>
  );
};
