"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
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
  image?: string;
}

const STEPS: Step[] = [
  { number: "01", iconKey: "tabs.0", icon: "zap", titleKey: "howItWorks.steps.0.title", descriptionKey: "howItWorks.steps.0.description", image: "" },
  { number: "02", iconKey: "tabs.1", icon: "chart", titleKey: "howItWorks.steps.1.title", descriptionKey: "howItWorks.steps.1.description", image: "" },
  { number: "03", iconKey: "tabs.2", icon: "target", titleKey: "howItWorks.steps.2.title", descriptionKey: "howItWorks.steps.2.description", image: "" },
  { number: "04", iconKey: "tabs.3", icon: "check", titleKey: "howItWorks.steps.3.title", descriptionKey: "howItWorks.steps.3.description", image: "" },
];

export const HowItWorksSection = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, height: 0, opacity: 0 });

  useLayoutEffect(() => {
    const container = tabContainerRef.current;
    const tab = tabRefs.current[activeStep];
    if (!container || !tab) return;
    const containerRect = container.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    setPillStyle({
      left: tabRect.left - containerRect.left,
      width: tabRect.width,
      height: tabRect.height,
      opacity: 1,
    });
  }, [activeStep]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('revealed'); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const step = STEPS[activeStep];

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-white">
      <div ref={sectionRef} className="reveal max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-14">
          <span
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase"
            style={{ color: '#0EA5E9' }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#38BDF8' }} />
            {t("howItWorks.badge")}
          </span>
          <h2
            className="font-[family-name:var(--font-fraunces)] font-normal text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-2xl text-[#0A0A0A]"
          >
            {t("howItWorks.heading")}
          </h2>
        </div>

        {/* Tab grid */}
        <div className="flex justify-center mb-4">
          <div
            ref={tabContainerRef}
            className="relative inline-flex rounded-full p-1 gap-1"
            style={{ backgroundColor: '#F2F2F2' }}
          >
            {/* Sliding pill */}
            <div
              aria-hidden="true"
              className="absolute top-1 rounded-full pointer-events-none"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                height: pillStyle.height,
                opacity: pillStyle.opacity,
                backgroundColor: 'white',
                boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
                transition: 'left 0.25s cubic-bezier(0.4,0,0.2,1), width 0.25s cubic-bezier(0.4,0,0.2,1), opacity 0.15s',
              }}
            />
            {STEPS.map((s, i) => (
              <div key={s.number} ref={(el) => { tabRefs.current[i] = el; }}>
                <HowItWorksTab
                  stepNumber={s.number}
                  label={t(`howItWorks.tabs.${i}`)}
                  active={activeStep === i}
                  onClick={() => setActiveStep(i)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300 ease-out"
              style={{
                width: activeStep === i ? '22px' : '6px',
                height: '6px',
                backgroundColor: activeStep === i ? '#38BDF8' : '#E0E0E0',
                boxShadow: activeStep === i ? '0 0 8px rgba(56,189,248,0.5)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Content card */}
        <div
          key={step.number}
          className="relative overflow-hidden border rounded-2xl p-8 md:p-12 bg-white"
          style={{
            borderColor: '#E0E0E0',
            borderTop: '3px solid #38BDF8',
            boxShadow: '0 4px 24px rgba(56,189,248,0.08)',
            animation: 'stepSwitch 0.3s cubic-bezier(0.16,1,0.3,1) both',
          }}
        >
          <div className="grid md:grid-cols-[1fr_1.2fr] md:gap-8 md:items-center">
            {/* Left column - Text content */}
            <div className="relative">
              {/* Watermark */}
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: '160px',
                  fontWeight: 900,
                  opacity: 0.06,
                  letterSpacing: '-0.05em',
                  lineHeight: 0,
                  position: 'absolute',
                  top: '-40px',
                  left: '-6px',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  color: '#0A0A0A',
                }}
              >
                {step.number}
              </span>

              {/* Step counter */}
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{
                    background: 'rgba(56,189,248,0.1)',
                    border: '1px solid rgba(56,189,248,0.3)',
                  }}
                >
                  <Icon name={step.icon} size={20} className="text-[#0EA5E9]" />
                </div>
                <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#0EA5E9' }}>
                  {t("howItWorks.badge")} {step.number} / {STEPS.length.toString().padStart(2, '0')}
                </span>
              </div>

              <Typography variant="h3" className="text-[#0A0A0A] mb-3">
                {t(step.titleKey)}
              </Typography>
              <Typography variant="body" className="text-[#6B6B6B] max-w-xl">
                {t(step.descriptionKey)}
              </Typography>

              {activeStep < STEPS.length - 1 && (
                <button
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase transition-opacity hover:opacity-70 focus:outline-none"
                  style={{ color: '#0EA5E9' }}
                  onClick={() => setActiveStep(activeStep + 1)}
                >
                  {t(`howItWorks.tabs.${activeStep + 1}`)}
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Right column - Image */}
            <div
              className="rounded-xl overflow-hidden border min-h-[320px] md:min-h-[400px] bg-gray-50 flex items-center justify-center"
              style={{
                borderColor: '#E0E0E0',
                borderStyle: 'dashed',
              }}
            >
              {step.image ? (
                <img
                  src={step.image}
                  alt={t(step.titleKey)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center px-4">
                  <div
                    className="w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(56,189,248,0.1)' }}
                  >
                    <Icon name={step.icon} size={32} className="text-[#0EA5E9]" />
                  </div>
                  <Typography variant="body" className="text-[#6B6B6B]">
                    {t(step.titleKey)}
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="primary"
            size="md"
            className="!rounded-full !border-none !font-bold transition-all hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)',
              color: '#080912',
              boxShadow: '0 4px 16px rgba(56,189,248,0.35)',
            } as React.CSSProperties}
          >
            {t("howItWorks.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};
