"use client";

import { useState } from "react";
import { FAQItem } from "@/components/molecules/FAQItem";
import { Typography } from "@/components/atoms/Typography";

interface FAQEntry {
  question: string;
  answer: string;
}

const faqData: FAQEntry[] = [
  {
    question: "Quanto custa a Postable?",
    answer:
      "A Postable oferece três planos: Básico por R$97/mês, Avançado por R$197/mês (mais popular) e Agência por R$297/mês. Todos incluem uma prova gratuita de 7 dias e podem ser pagos anualmente com 20% de desconto. Sem cartão de crédito necessário.",
  },
  {
    question: "Preciso de experiência em marketing?",
    answer:
      "Não. Você só precisa informar seu nicho e cidade. A Postable faz toda a análise competitiva, identificação de gaps e geração de conteúdo estratégico. Perfeito para PMEs que querem começar sem experiência em marketing.",
  },
  {
    question: "Posso revisar os posts antes de publicar?",
    answer:
      "Sim, sempre. Cada post gerado pela Postable passa por um workflow de aprovação. Você pode revisar, editar ou rejeitar qualquer conteúdo antes de publicar. Total controle editorial em suas mãos.",
  },
  {
    question: "Como funciona a análise de concorrentes?",
    answer:
      "A Postable mapeia automaticamente seus 3 principais concorrentes locais no seu nicho e cidade. Identifica o gap de conteúdo (tópicos que eles não cobrem), prioriza temas estratégicos e usa essa inteligência para gerar posts baseados em oportunidades reais.",
  },
  {
    question: "Funciona para qualquer tipo de negócio?",
    answer:
      "A Postable foi otimizada para PMEs de 1 a 30 funcionários que vendem digitalmente. Funciona bem com nutricionistas, personal trainers, consultores, dentistas, agências e negócios SaaS. Se você vende online e quer crescer através de conteúdo estratégico, a Postable é para você.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Typography variant="label" className="text-[#B0B0B0] mb-3 block">
            DÚVIDAS FREQUENTES
          </Typography>
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold text-[#0A0A0A]"
          >
            Perguntas comuns sobre a Postable
          </Typography>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              open={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
