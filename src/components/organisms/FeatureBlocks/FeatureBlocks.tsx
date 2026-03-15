"use client";

import { useState } from "react";
import { Badge } from "@/components/atoms/Badge";
import { Typography } from "@/components/atoms/Typography";
import { FeatureListItem } from "@/components/molecules/FeatureListItem";
import { useTranslation } from "@/hooks/useTranslation";

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

interface FeatureBlockProps {
  block: FeatureBlockData;
}

const FeatureBlock = ({ block }: FeatureBlockProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const textCol = (
    <div className="flex flex-col gap-5 lg:col-span-2">
      <Badge variant="outline" className="w-fit">{block.badge}</Badge>
      <div className="flex flex-col gap-2">
        <Typography variant="h3">{block.title}</Typography>
        <Typography variant="body">{block.subtitle}</Typography>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <FeatureListItem
          number="1"
          label={block.items[0].label}
          active={true}
        />
      </div>
    </div>
  );

  const videoCol = (
    <div
      className="relative rounded-xl overflow-hidden bg-[#F5F5F5] aspect-video lg:col-span-3"
      style={{
        border: '1px solid #E0E0E0',
        borderTop: '3px solid #38BDF8',
        boxShadow: '0 4px 24px rgba(56,189,248,0.08)',
      }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-[#E0E0E0]" />
      )}
      <video
        key={block.id}
        src={block.items[0].videoSrc}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className="w-full h-full object-cover"
        style={{ animation: 'stepSwitch 0.3s ease-out both' }}
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
          <>
            {textCol}
            {videoCol}
          </>
        </div>
      </div>
    </section>
  );
};

export const FeatureBlocks = () => {
  const { t } = useTranslation();

  const FEATURE_BLOCKS: FeatureBlockData[] = [
    {
      id: "competitive-gap",
      badge: t("featureBlocks.blocks.0.badge"),
      title: t("featureBlocks.blocks.0.title"),
      subtitle: t("featureBlocks.blocks.0.subtitle"),
      reversed: false,
      items: [
        {
          number: "1",
          label: t("featureBlocks.blocks.0.items.0"),
          videoSrc: "/videos/feature-1-1.mp4",
        },
      ],
    },
    {
      id: "content-generation",
      badge: t("featureBlocks.blocks.1.badge"),
      title: t("featureBlocks.blocks.1.title"),
      subtitle: t("featureBlocks.blocks.1.subtitle"),
      reversed: true,
      items: [
        {
          number: "1",
          label: t("featureBlocks.blocks.1.items.0"),
          videoSrc: "/videos/feature-2-1.mp4",
        },
      ],
    },
    {
      id: "approval-publishing",
      badge: t("featureBlocks.blocks.2.badge"),
      title: t("featureBlocks.blocks.2.title"),
      subtitle: t("featureBlocks.blocks.2.subtitle"),
      reversed: false,
      items: [
        {
          number: "1",
          label: t("featureBlocks.blocks.2.items.0"),
          videoSrc: "/videos/feature-3-1.mp4",
        },
      ],
    },
    {
      id: "distribution",
      badge: t("featureBlocks.blocks.3.badge"),
      title: t("featureBlocks.blocks.3.title"),
      subtitle: t("featureBlocks.blocks.3.subtitle"),
      reversed: true,
      items: [
        {
          number: "1",
          label: t("featureBlocks.blocks.3.items.0"),
          videoSrc: "/videos/feature-4-1.mp4",
        },
      ],
    },
    {
      id: "results",
      badge: t("featureBlocks.blocks.4.badge"),
      title: t("featureBlocks.blocks.4.title"),
      subtitle: t("featureBlocks.blocks.4.subtitle"),
      reversed: false,
      items: [
        {
          number: "1",
          label: t("featureBlocks.blocks.4.items.0"),
          videoSrc: "/videos/feature-5-1.mp4",
        },
      ],
    },
  ];

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
