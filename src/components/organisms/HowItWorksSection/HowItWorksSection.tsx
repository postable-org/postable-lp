"use client";

import { useState } from "react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";
import { HowItWorksTab } from "@/components/molecules/HowItWorksTab";
import { useTranslation } from "@/hooks/useTranslation";
import type { IconName } from "@/components/atoms/Icon";

interface Step {
  number: string;
  iconKey: string;
  icon: IconName;
  titleKey: string;
  descriptionKey: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    iconKey: "tabs.0",
    icon: "zap",
    titleKey: "howItWorks.steps.0.title",
    descriptionKey: "howItWorks.steps.0.description",
  },
  {
    number: "02",
    iconKey: "tabs.1",
    icon: "chart",
    titleKey: "howItWorks.steps.1.title",
    descriptionKey: "howItWorks.steps.1.description",
  },
  {
    number: "03",
    iconKey: "tabs.2",
    icon: "target",
    titleKey: "howItWorks.steps.2.title",
    descriptionKey: "howItWorks.steps.2.description",
  },
  {
    number: "04",
    iconKey: "tabs.3",
    icon: "check",
    titleKey: "howItWorks.steps.3.title",
    descriptionKey: "howItWorks.steps.3.description",
  },
];

export const HowItWorksSection = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const step = STEPS[activeStep];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <Badge variant="default">{t("howItWorks.badge")}</Badge>
          <Typography
            variant="h2"
            className="max-w-2xl text-[#0A0A0A]"
          >
            {t("howItWorks.heading")}
          </Typography>
        </div>

        {/* Tab grid: 2×2 on mobile, pill row on desktop */}
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:justify-center mb-6">
          {STEPS.map((s, i) => (
            <HowItWorksTab
              key={s.number}
              stepNumber={s.number}
              label={t(`howItWorks.tabs.${i}`)}
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
            {t(step.titleKey)}
          </Typography>

          {/* Description */}
          <Typography
            variant="body"
            className="text-[#6B6B6B] max-w-xl"
          >
            {t(step.descriptionKey)}
          </Typography>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Button variant="primary" size="md">
            {t("howItWorks.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};
