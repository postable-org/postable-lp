"use client";

import { useState } from "react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";
import { HowItWorksTab } from "@/components/molecules/HowItWorksTab";
import type { IconName } from "@/components/atoms/Icon";

interface Step {
  number: string;
  tab: string;
  icon: IconName;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    tab: "Onboarding",
    icon: "zap",
    title: "Informe seu nicho e cidade",
    description:
      "Em menos de 5 minutos você configura seu perfil: tipo de negócio, cidade e público-alvo. Sem formulários longos, sem configurações técnicas.",
  },
  {
    number: "02",
    tab: "Análise",
    icon: "chart",
    title: "Mapeamos seus concorrentes locais",
    description:
      "Nossa IA identifica automaticamente os 3 principais concorrentes da sua região e analisa o que eles postam — frequência, temas e engajamento.",
  },
  {
    number: "03",
    tab: "Gap",
    icon: "target",
    title: "Encontramos o espaço vazio",
    description:
      "Com base na análise competitiva, detectamos os tópicos que nenhum concorrente cobre. Esse é o seu espaço para dominar a conversa local.",
  },
  {
    number: "04",
    tab: "Publicação",
    icon: "check",
    title: "Posts prontos, você aprova",
    description:
      "A Postable gera os posts com base nos gaps identificados. Você revisa, ajusta se quiser e aprova. A publicação é agendada automaticamente.",
  },
];

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const step = STEPS[activeStep];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <Badge variant="default">Como funciona</Badge>
          <Typography
            variant="h2"
            className="max-w-2xl text-[#0A0A0A]"
          >
            Do onboarding ao primeiro post em menos de 10 minutos.
          </Typography>
        </div>

        {/* Tab grid: 2×2 on mobile, pill row on desktop */}
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:justify-center mb-6">
          {STEPS.map((s, i) => (
            <HowItWorksTab
              key={s.number}
              stepNumber={s.number}
              label={s.tab}
              active={activeStep === i}
              onClick={() => setActiveStep(i)}
            />
          ))}
        </div>

        {/* Content card */}
        <div className="relative overflow-hidden border border-[#E0E0E0] rounded-xl p-8 md:p-12 bg-white">
          {/* Watermark step number */}
          <span
            className="absolute top-4 right-6 text-[#F5F5F5] text-[72px] md:text-[120px] font-bold leading-none select-none pointer-events-none font-[family-name:var(--font-dm-sans)]"
            aria-hidden="true"
          >
            {step.number}
          </span>

          {/* Icon chip */}
          <div className="inline-flex items-center justify-center w-10 h-10 border border-[#E0E0E0] rounded-lg mb-4">
            <Icon name={step.icon} size={20} className="text-[#0A0A0A]" />
          </div>

          {/* Title */}
          <Typography variant="h3" className="text-[#0A0A0A] mb-3">
            {step.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body"
            className="text-[#6B6B6B] max-w-xl"
          >
            {step.description}
          </Typography>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Button variant="primary" size="md">
            Começar agora — 7 dias grátis
          </Button>
        </div>
      </div>
    </section>
  );
};
