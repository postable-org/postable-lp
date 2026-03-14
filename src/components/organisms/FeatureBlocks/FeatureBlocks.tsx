"use client";

import { useState } from "react";
import { Badge } from "@/components/atoms/Badge";
import { Typography } from "@/components/atoms/Typography";
import { FeatureListItem } from "@/components/molecules/FeatureListItem";

interface SubFeature {
  number: string;
  label: string;
  videoSrc: string;
}

interface FeatureBlockData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  reversed: boolean;
  items: SubFeature[];
}

const FEATURE_BLOCKS: FeatureBlockData[] = [
  {
    id: "competitive-gap",
    badge: "01",
    title: "Análise de gap competitivo",
    subtitle:
      "Entenda o que seus concorrentes publicam, onde estão os espaços abertos e quais temas você deveria dominar antes deles.",
    reversed: false,
    items: [
      {
        number: "1",
        label: "Mapeamento de concorrentes",
        videoSrc: "/videos/feature-1-1.mp4",
      },
      {
        number: "2",
        label: "Identificação de gaps",
        videoSrc: "/videos/feature-1-2.mp4",
      },
      {
        number: "3",
        label: "Priorização de temas",
        videoSrc: "/videos/feature-1-3.mp4",
      },
    ],
  },
  {
    id: "content-generation",
    badge: "02",
    title: "Geração de conteúdo estratégico",
    subtitle:
      "Crie posts personalizados baseados em tendências regionais e nos gaps identificados, com tom calibrado para o seu negócio.",
    reversed: true,
    items: [
      {
        number: "1",
        label: "Tendências regionais",
        videoSrc: "/videos/feature-2-1.mp4",
      },
      {
        number: "2",
        label: "Posts baseados em gaps",
        videoSrc: "/videos/feature-2-2.mp4",
      },
      {
        number: "3",
        label: "Calibração de tom",
        videoSrc: "/videos/feature-2-3.mp4",
      },
    ],
  },
  {
    id: "approval-publishing",
    badge: "03",
    title: "Aprovação e publicação",
    subtitle:
      "Organize seu calendário editorial, aprove conteúdos com facilidade e publique nos horários certos sem esforço manual.",
    reversed: false,
    items: [
      {
        number: "1",
        label: "Calendário editorial",
        videoSrc: "/videos/feature-3-1.mp4",
      },
      {
        number: "2",
        label: "Fluxo de aprovação",
        videoSrc: "/videos/feature-3-2.mp4",
      },
      {
        number: "3",
        label: "Publicação agendada",
        videoSrc: "/videos/feature-3-3.mp4",
      },
    ],
  },
  {
    id: "distribution",
    badge: "04",
    title: "Automatização de distribuição",
    subtitle:
      "Publique em múltiplas plataformas automaticamente, no momento ideal para cada rede, e acompanhe o desempenho em tempo real.",
    reversed: true,
    items: [
      {
        number: "1",
        label: "Agendamento multiplataforma",
        videoSrc: "/videos/feature-4-1.mp4",
      },
      {
        number: "2",
        label: "Otimização de horário",
        videoSrc: "/videos/feature-4-2.mp4",
      },
      {
        number: "3",
        label: "Rastreamento de performance",
        videoSrc: "/videos/feature-4-3.mp4",
      },
    ],
  },
  {
    id: "results",
    badge: "05",
    title: "Análise de resultados",
    subtitle:
      "Meça o impacto real do seu conteúdo: engajamento, ROI e recomendações práticas para crescer mais a cada ciclo.",
    reversed: false,
    items: [
      {
        number: "1",
        label: "Métricas de engajamento",
        videoSrc: "/videos/feature-5-1.mp4",
      },
      {
        number: "2",
        label: "Cálculo de ROI",
        videoSrc: "/videos/feature-5-2.mp4",
      },
      {
        number: "3",
        label: "Recomendações de otimização",
        videoSrc: "/videos/feature-5-3.mp4",
      },
    ],
  },
];

interface FeatureBlockProps {
  block: FeatureBlockData;
}

const FeatureBlock = ({ block }: FeatureBlockProps) => {
  const [activeItem, setActiveItem] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleItemClick = (index: number) => {
    if (index === activeItem) return;
    setActiveItem(index);
    setIsLoaded(false);
  };

  const textCol = (
    <div className="flex flex-col gap-5 lg:col-span-2">
      <Badge variant="outline">{block.badge}</Badge>
      <div className="flex flex-col gap-2">
        <Typography variant="h3">{block.title}</Typography>
        <Typography variant="body">{block.subtitle}</Typography>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {block.items.map((item, index) => (
          <FeatureListItem
            key={item.number}
            number={item.number}
            label={item.label}
            active={activeItem === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );

  const videoCol = (
    <div className="relative rounded-xl border border-[#E0E0E0] overflow-hidden bg-[#F5F5F5] aspect-video lg:col-span-3">
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-[#E0E0E0]" />
      )}
      <video
        key={block.items[activeItem].videoSrc}
        src={block.items[activeItem].videoSrc}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={[
            "grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center",
            block.reversed ? "lg:[&>*:first-child]:order-last" : "",
          ]
            .join(" ")
            .trim()}
        >
          {block.reversed ? (
            <>
              {videoCol}
              {textCol}
            </>
          ) : (
            <>
              {textCol}
              {videoCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export const FeatureBlocks = () => {
  return (
    <div>
      {FEATURE_BLOCKS.map((block, index) => (
        <div key={block.id}>
          {index > 0 && <div className="border-t border-[#E0E0E0]" />}
          <FeatureBlock block={block} />
        </div>
      ))}
    </div>
  );
};
