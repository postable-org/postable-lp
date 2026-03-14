import { Badge } from "@/components/atoms/Badge";
import { Typography } from "@/components/atoms/Typography";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";

const TESTIMONIALS = [
  {
    authorName: "Ana Carvalho",
    authorRole: "Nutricionista",
    authorCity: "Belo Horizonte",
    avatarInitials: "AC",
    highlightedPhrase: "Descobri lacunas que nenhum concorrente meu cobre.",
    fullQuote:
      "Antes eu postava aleatório e nunca sabia se estava na direção certa. Com o Postable, vi exatamente o que faltava no meu nicho em BH. Hoje tenho uma agenda cheia de consultas vindas do Instagram.",
  },
  {
    authorName: "Rafael Moura",
    authorRole: "Personal Trainer",
    authorCity: "São Paulo",
    avatarInitials: "RM",
    highlightedPhrase: "Meu WhatsApp lotou de leads sem pagar um centavo em anúncio.",
    fullQuote:
      "Sempre achei que precisava investir em tráfego pago para crescer. O Postable me mostrou que posts orgânicos bem pensados convertem mais do que qualquer campanha que eu já rodei. Os alunos chegam sozinhos.",
  },
  {
    authorName: "Camila Teixeira",
    authorRole: "Consultora de Carreira",
    authorCity: "Curitiba",
    avatarInitials: "CT",
    highlightedPhrase: "Os posts são pensados para a realidade da minha cidade.",
    fullQuote:
      "Eu precisava de conteúdo que ressoasse com o mercado de trabalho de Curitiba, não com fórmulas genéricas de São Paulo. O Postable entendeu isso e meus seguidores percebem a diferença na hora.",
  },
  {
    authorName: "Dr. Pedro Alves",
    authorRole: "Dentista",
    authorCity: "Porto Alegre",
    avatarInitials: "PA",
    highlightedPhrase: "Economizo R$1.800 por mês que pagava a uma freelancer.",
    fullQuote:
      "Contratei uma freelancer por dois anos e ainda ficava na dependência dela para publicar. Hoje eu aprovo o conteúdo em minutos, publico na hora certa e o resultado é muito melhor. O retorno foi imediato.",
  },
  {
    authorName: "Luiza Fernandes",
    authorRole: "Fundadora de SaaS",
    authorCity: "Recife",
    avatarInitials: "LF",
    highlightedPhrase: "Conteúdo profissional sem precisar entender de marketing.",
    fullQuote:
      "Sou desenvolvedora, não marqueteira. Sempre soube que precisava estar presente nas redes, mas nunca soube como. O Postable resolve isso de forma tão simples que hoje eu mesma cuido de tudo sem abrir mão do produto.",
  },
  {
    authorName: "Dra. Marta Santos",
    authorRole: "Fisioterapeuta",
    authorCity: "Florianópolis",
    avatarInitials: "MS",
    highlightedPhrase: "Passei a dominar um nicho de assunto que ninguém na minha cidade abordava.",
    fullQuote:
      "O Postable identificou um tema específico de fisioterapia esportiva que era pouco explorado em Floripa. Comecei a publicar sobre isso e em três meses me tornei referência no assunto na cidade. A agenda esgota semanas antes.",
  },
];

export const TestimonialsSection = () => {
  const column1 = TESTIMONIALS.filter((_, i) => i % 2 === 0);
  const column2 = TESTIMONIALS.filter((_, i) => i % 2 !== 0);

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-3">
          <Badge variant="outline">DEPOIMENTOS</Badge>
          <Typography as="h2" variant="h2">
            PMEs brasileiras que já postam com estratégia.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            {column1.map((t) => (
              <TestimonialCard key={t.authorName} {...t} />
            ))}
          </div>
          <div className="flex flex-col gap-6 md:mt-8">
            {column2.map((t) => (
              <TestimonialCard key={t.authorName} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
