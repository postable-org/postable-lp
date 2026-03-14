'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { useTranslation } from '@/hooks/useTranslation';

export const HeroSection = () => {
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);

  // Staggered reveal on mount
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    // Already visible immediately, just ensure CSS animations play
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center px-4 overflow-hidden"
      style={{
        paddingTop: '10vh',
        paddingBottom: '10vh',
        background: '#ffffff',
      }}
    >
      {/* Gradient mesh background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 15% 20%, rgba(165,200,250,0.45) 0%, transparent 60%),
            radial-gradient(ellipse 70% 60% at 85% 75%, rgba(165,200,250,0.28) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 50% 95%, rgba(200,231,250,0.2) 0%, transparent 65%),
            radial-gradient(ellipse 40% 30% at 80% 10%, rgba(56,189,248,0.08) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Animated orb 1 */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '520px',
          height: '520px',
          top: '5%',
          left: '-8%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(165,200,250,0.28) 0%, transparent 70%)',
          animation: 'orb1 14s ease-in-out infinite',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      {/* Animated orb 2 */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '380px',
          height: '380px',
          bottom: '10%',
          right: '-5%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(165,200,250,0.22) 0%, transparent 70%)',
          animation: 'orb2 18s ease-in-out infinite',
          filter: 'blur(50px)',
        }}
        aria-hidden="true"
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 10%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 10%, transparent 100%)',
          opacity: 0.25,
        }}
        aria-hidden="true"
      />

      {/* Orbiting rings */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          width: '720px',
          height: '720px',
          border: '1px solid rgba(165,200,250,0.2)',
          borderRadius: '50%',
          top: '50%',
          right: '-14%',
          transform: 'translateY(-50%)',
          animation: 'spinSlow 22s linear infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none select-none"
        style={{
          width: '480px',
          height: '480px',
          border: '1px solid rgba(165,200,250,0.14)',
          borderRadius: '50%',
          top: '50%',
          right: '-3%',
          transform: 'translateY(-50%)',
          animation: 'spinSlow 32s linear infinite reverse',
        }}
        aria-hidden="true"
      />
      {/* Accent dot on ring */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: '#38BDF8',
          top: 'calc(50% - 360px)',
          right: 'calc(-14% + 360px)',
          boxShadow: '0 0 20px 6px rgba(56,189,248,0.4)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#A5C8FA',
          top: 'calc(50% + 220px)',
          right: 'calc(-3% - 10px)',
          boxShadow: '0 0 12px 4px rgba(165,200,250,0.5)',
        }}
        aria-hidden="true"
      />

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        aria-hidden="true"
      >
        <span
          className="text-[10px] font-mono tracking-[0.2em] uppercase"
          style={{ color: '#B0B0B0' }}
        >
          scroll
        </span>
        <div
          className="flex flex-col items-center gap-0.5"
          style={{ animation: 'scrollBounce 1.8s ease-in-out infinite' }}
        >
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#B0B0B0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="rgba(176,176,176,0.4)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative max-w-7xl mx-auto flex flex-col items-center text-center gap-7 z-10">
        {/* Eyebrow badge */}
        <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
          <span
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full border"
            style={{
              color: '#0EA5E9',
              borderColor: 'rgba(56,189,248,0.4)',
              backgroundColor: 'rgba(56,189,248,0.06)',
              letterSpacing: '0.12em',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block shrink-0 animate-pulse"
              style={{ background: '#38BDF8', boxShadow: '0 0 6px rgba(56,189,248,0.8)' }}
            />
            Postable
          </span>
        </div>

        {/* Headline */}
        <div
          className="animate-fade-up flex flex-col items-center"
          style={{ animationDelay: '70ms' }}
        >
          <h1
            className="font-[family-name:var(--font-fraunces)] font-normal text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.04] tracking-tight text-[#1C1917] max-w-5xl"
          >
            {t("hero.heading")}
          </h1>
        </div>

        {/* Separator */}
        <div className="animate-fade-up" style={{ animationDelay: '110ms' }} aria-hidden="true">
          <div
            style={{
              width: '56px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #38BDF8 40%, #38BDF8 60%, transparent)',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Subtitle */}
        <div
          className="animate-fade-up max-w-xl"
          style={{ animationDelay: '130ms' }}
        >
          <Typography
            variant="body"
            className="!text-lg md:!text-xl !text-zinc-500 !leading-relaxed"
          >
            {t("hero.subtitle")}
          </Typography>
        </div>

        {/* CTAs */}
        <div
          className="mt-6 animate-fade-up flex flex-col sm:flex-row items-center gap-4 z-10 w-full justify-center"
          style={{ animationDelay: '190ms' }}
        >
          <Button
            variant="primary"
            size="lg"
            className="!rounded-full !px-9 !py-3.5 !text-lg !border-none !font-bold transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)',
              color: '#080912',
              boxShadow: '0 4px 24px rgba(56,189,248,0.4), 0 0 50px rgba(56,189,248,0.12)',
            } as React.CSSProperties}
          >
            {t("hero.primaryCTA")}
          </Button>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out bg-white/80 text-[#0A0A0A] border border-[#E0E0E0] hover:border-[#A5C8FA] hover:bg-white rounded-full px-9 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2"
          >
            {t("hero.secondaryCTA")}
          </a>
        </div>

        {/* Trust micro-copy */}
        <div
          className="animate-fade-up flex items-center gap-2"
          style={{ animationDelay: '250ms' }}
        >
          <div className="flex -space-x-1">
            {['AM', 'CL', 'RF'].map((initials, i) => (
              <span
                key={i}
                className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold border-2 border-white"
                style={{ background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)', color: '#080912' }}
              >
                {initials}
              </span>
            ))}
          </div>
          <span
            className="text-xs font-[family-name:var(--font-inter)]"
            style={{ color: '#9CA3AF' }}
          >
            +200 criadores já usam o Postable
          </span>
        </div>
      </div>
    </section>
  );
};
