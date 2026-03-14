'use client';

import { useRef, useEffect } from "react";
import { Typography } from "@/components/atoms/Typography";
import { PainCard } from "@/components/molecules/PainCard";
import { useTranslation } from "@/hooks/useTranslation";

interface PainPoint {
  badge: string;
  title: string;
  description: string;
}

export const PainPointsSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const PAIN_POINTS: PainPoint[] = [
    {
      badge: t("painPoints.badge"),
      title: t("painPoints.cards.0.title"),
      description: t("painPoints.cards.0.description"),
    },
    {
      badge: t("painPoints.badge2"),
      title: t("painPoints.cards.1.title"),
      description: t("painPoints.cards.1.description"),
    },
    {
      badge: t("painPoints.badge3"),
      title: t("painPoints.cards.2.title"),
      description: t("painPoints.cards.2.description"),
    },
    {
      badge: t("painPoints.badge4"),
      title: t("painPoints.cards.3.title"),
      description: t("painPoints.cards.3.description"),
    },
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    cardsRef.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: '#080912' }}
    >
      {/* Ambient background orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '-100px',
          left: '-200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
          animation: 'orb1 12s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          bottom: '-60px',
          right: '-80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)',
          animation: 'orb2 15s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div
          ref={(el) => { if (el) cardsRef.current[0] = el; }}
          className="reveal flex flex-col items-center text-center gap-4 mb-14 md:mb-16"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase"
            style={{ color: '#38BDF8' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block animate-pulse"
              style={{ background: '#38BDF8', boxShadow: '0 0 6px #38BDF8' }}
            />
            {t("painPoints.sectionBadge")}
          </span>
          <h2
            className="font-[family-name:var(--font-fraunces)] font-normal text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-3xl"
            style={{ color: '#ffffff' }}
          >
            {t("painPoints.heading")}
          </h2>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {PAIN_POINTS.map((point, i) => (
            <div
              key={point.badge}
              ref={(el) => { if (el) cardsRef.current[i + 1] = el; }}
              className="reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <PainCard
                badge={point.badge}
                title={point.title}
                description={point.description}
              />
            </div>
          ))}
        </div>

        {/* Emotional transition */}
        <div
          ref={(el) => { if (el) cardsRef.current[5] = el; }}
          className="reveal mt-12 text-center"
        >
          <p
            className="font-[family-name:var(--font-fraunces)] text-lg italic"
            style={{ color: 'rgba(56,189,248,0.7)' }}
          >
            {t("painPoints.transition")}
          </p>
        </div>
      </div>
    </section>
  );
};
