'use client';

import { useRef, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

// Static star positions — deterministic, no Math.random() to avoid SSR/client mismatch
const STARS = [
  { w: 1.5, h: 2.2, top: 18.3, left: 59.2, op: 0.17, dur: 4.9, delay: 3.7 },
  { w: 2.6, h: 2.1, top: 72.1, left: 72.5, op: 0.26, dur: 4.7, delay: 1.8 },
  { w: 2.0, h: 2.5, top: 9.4,  left: 80.5, op: 0.22, dur: 4.6, delay: 2.5 },
  { w: 2.3, h: 2.8, top: 62.7, left: 12.4, op: 0.17, dur: 6.8, delay: 2.5 },
  { w: 1.0, h: 2.9, top: 81.8, left: 45.1, op: 0.35, dur: 5.8, delay: 1.4 },
  { w: 2.4, h: 2.5, top: 8.8,  left: 3.5,  op: 0.20, dur: 5.3, delay: 1.1 },
  { w: 2.8, h: 2.3, top: 10.5, left: 29.5, op: 0.21, dur: 5.6, delay: 2.5 },
  { w: 2.1, h: 1.1, top: 75.1, left: 91.4, op: 0.34, dur: 4.9, delay: 0.1 },
  { w: 1.8, h: 2.2, top: 57.5, left: 16.6, op: 0.10, dur: 5.8, delay: 1.4 },
  { w: 2.7, h: 1.0, top: 50.7, left: 40.8, op: 0.31, dur: 7.4, delay: 3.9 },
  { w: 2.6, h: 2.6, top: 71.1, left: 69.4, op: 0.36, dur: 4.5, delay: 2.3 },
  { w: 2.5, h: 2.5, top: 35.8, left: 16.2, op: 0.28, dur: 4.0, delay: 1.0 },
  { w: 2.0, h: 2.0, top: 71.2, left: 35.2, op: 0.29, dur: 6.7, delay: 3.0 },
  { w: 1.0, h: 2.5, top: 37.6, left: 70.2, op: 0.38, dur: 6.8, delay: 1.8 },
  { w: 2.7, h: 1.0, top: 4.4,  left: 61.4, op: 0.17, dur: 4.9, delay: 1.2 },
  { w: 2.6, h: 2.6, top: 77.7, left: 99.7, op: 0.15, dur: 5.0, delay: 3.7 },
  { w: 2.6, h: 1.9, top: 53.3, left: 62.4, op: 0.36, dur: 7.5, delay: 2.8 },
  { w: 2.6, h: 1.5, top: 95.2, left: 34.8, op: 0.16, dur: 6.1, delay: 1.8 },
  { w: 1.3, h: 2.1, top: 30.6, left: 43.7, op: 0.33, dur: 4.6, delay: 0.7 },
  { w: 2.6, h: 1.6, top: 79.1, left: 58.3, op: 0.19, dur: 7.4, delay: 1.7 },
  { w: 2.3, h: 1.3, top: 97.0, left: 91.6, op: 0.21, dur: 7.3, delay: 3.3 },
  { w: 2.1, h: 1.2, top: 86.3, left: 55.8, op: 0.29, dur: 7.7, delay: 0.3 },
  { w: 2.7, h: 1.9, top: 61.8, left: 51.6, op: 0.28, dur: 5.1, delay: 1.1 },
  { w: 2.7, h: 3.0, top: 47.2, left: 96.6, op: 0.24, dur: 5.5, delay: 0.9 },
  { w: 2.9, h: 2.8, top: 71.9, left: 66.7, op: 0.21, dur: 4.9, delay: 1.3 },
  { w: 1.8, h: 2.5, top: 35.7, left: 74.7, op: 0.24, dur: 7.5, delay: 3.7 },
  { w: 2.5, h: 2.4, top: 23.8, left: 75.8, op: 0.38, dur: 7.0, delay: 2.4 },
  { w: 2.6, h: 1.4, top: 28.6, left: 64.0, op: 0.15, dur: 4.7, delay: 2.4 },
  { w: 1.7, h: 1.9, top: 54.2, left: 32.4, op: 0.16, dur: 6.3, delay: 0.6 },
  { w: 1.4, h: 1.4, top: 98.6, left: 61.4, op: 0.37, dur: 7.5, delay: 3.2 },
];

export const FinalCTASection = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('revealed'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{ background: '#080912' }}
    >
      {/* Stars background — static positions to avoid SSR/hydration mismatch */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: s.w + 'px',
              height: s.h + 'px',
              top: s.top + '%',
              left: s.left + '%',
              background: `rgba(255,255,255,${s.op})`,
              animation: `floatY ${s.dur}s ease-in-out infinite`,
              animationDelay: s.delay + 's',
            }}
          />
        ))}
      </div>

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div
        ref={containerRef}
        className="reveal relative max-w-3xl mx-auto"
      >
        {/* Card */}
        <div
          className="relative rounded-3xl p-px overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(56,189,248,0.4) 0%, rgba(14,165,233,0.1) 50%, rgba(56,189,248,0.3) 100%)',
          }}
        >
          {/* Shimmer */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none" aria-hidden="true">
            <div
              className="absolute top-0 bottom-0 w-1/3"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
                animation: 'shimmer 4s linear infinite',
              }}
            />
          </div>

          <div
            className="relative rounded-[22px] p-10 md:p-16 flex flex-col items-center text-center gap-7"
            style={{ background: '#0A0E1F' }}
          >
            {/* Eyebrow */}
            <span
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase"
              style={{ color: '#38BDF8' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: '#38BDF8', boxShadow: '0 0 6px #38BDF8' }}
              />
              Postable
            </span>

            {/* Headline */}
            <h2
              className="font-[family-name:var(--font-fraunces)] font-normal text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
              style={{ color: '#ffffff' }}
            >
              {t("finalCta.heading")}
            </h2>

            {/* Sub-copy */}
            <p
              className="font-[family-name:var(--font-inter)] text-base md:text-lg max-w-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              {t("finalCta.subtitle")}
            </p>

            {/* CTA */}
            <button
              className="px-10 py-4 rounded-full font-[family-name:var(--font-dm-sans)] font-bold text-lg transition-all duration-200 hover:scale-[1.03] hover:opacity-90 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)',
                color: '#080912',
                boxShadow: '0 4px 30px rgba(56,189,248,0.45), 0 0 60px rgba(56,189,248,0.15)',
              }}
            >
              {t("finalCta.ctaButton")}
            </button>

            {/* Microcopy */}
            <p
              className="font-[family-name:var(--font-inter)] text-xs"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              {t("finalCta.microcopy")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
