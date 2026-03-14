'use client';

import { useRef, useEffect } from "react";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { useTranslation } from "@/hooks/useTranslation";

interface Testimonial {
  authorName: string;
  authorRole: string;
  authorCity: string;
  avatarInitials: string;
  highlightedPhrase: string;
  fullQuote: string;
}

export const TestimonialsSection = () => {
  const { t } = useTranslation();
  const headerRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  const TESTIMONIALS: Testimonial[] = [
    {
      authorName: t("testimonials.items.0.authorName"),
      authorRole: t("testimonials.items.0.authorRole"),
      authorCity: t("testimonials.items.0.authorCity"),
      avatarInitials: t("testimonials.items.0.avatarInitials"),
      highlightedPhrase: t("testimonials.items.0.highlightedPhrase"),
      fullQuote: t("testimonials.items.0.fullQuote"),
    },
    {
      authorName: t("testimonials.items.1.authorName"),
      authorRole: t("testimonials.items.1.authorRole"),
      authorCity: t("testimonials.items.1.authorCity"),
      avatarInitials: t("testimonials.items.1.avatarInitials"),
      highlightedPhrase: t("testimonials.items.1.highlightedPhrase"),
      fullQuote: t("testimonials.items.1.fullQuote"),
    },
    {
      authorName: t("testimonials.items.2.authorName"),
      authorRole: t("testimonials.items.2.authorRole"),
      authorCity: t("testimonials.items.2.authorCity"),
      avatarInitials: t("testimonials.items.2.avatarInitials"),
      highlightedPhrase: t("testimonials.items.2.highlightedPhrase"),
      fullQuote: t("testimonials.items.2.fullQuote"),
    },
    {
      authorName: t("testimonials.items.3.authorName"),
      authorRole: t("testimonials.items.3.authorRole"),
      authorCity: t("testimonials.items.3.authorCity"),
      avatarInitials: t("testimonials.items.3.avatarInitials"),
      highlightedPhrase: t("testimonials.items.3.highlightedPhrase"),
      fullQuote: t("testimonials.items.3.fullQuote"),
    },
    {
      authorName: t("testimonials.items.4.authorName"),
      authorRole: t("testimonials.items.4.authorRole"),
      authorCity: t("testimonials.items.4.authorCity"),
      avatarInitials: t("testimonials.items.4.avatarInitials"),
      highlightedPhrase: t("testimonials.items.4.highlightedPhrase"),
      fullQuote: t("testimonials.items.4.fullQuote"),
    },
    {
      authorName: t("testimonials.items.5.authorName"),
      authorRole: t("testimonials.items.5.authorRole"),
      authorCity: t("testimonials.items.5.authorCity"),
      avatarInitials: t("testimonials.items.5.avatarInitials"),
      highlightedPhrase: t("testimonials.items.5.highlightedPhrase"),
      fullQuote: t("testimonials.items.5.fullQuote"),
    },
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('revealed'); });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    [headerRef, col1Ref, col2Ref].forEach((r) => { if (r.current) obs.observe(r.current); });
    return () => obs.disconnect();
  }, []);

  const column1 = TESTIMONIALS.filter((_, i) => i % 2 === 0);
  const column2 = TESTIMONIALS.filter((_, i) => i % 2 !== 0);

  return (
    <section
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{ background: '#12132A' }}
    >
      {/* Ambient glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '800px',
          height: '300px',
          background: 'radial-gradient(ellipse at top, rgba(56,189,248,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto flex flex-col gap-14">
        <div
          ref={headerRef}
          className="reveal flex flex-col items-center text-center gap-3"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase"
            style={{ color: '#38BDF8' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block animate-pulse"
              style={{ background: '#38BDF8', boxShadow: '0 0 6px #38BDF8' }}
            />
            {t("testimonials.badge")}
          </span>
          <h2
            className="font-[family-name:var(--font-fraunces)] font-normal text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
            style={{ color: '#ffffff' }}
          >
            {t("testimonials.heading")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div ref={col1Ref} className="reveal flex flex-col gap-5">
            {column1.map((item) => (
              <TestimonialCard key={item.authorName} {...item} />
            ))}
          </div>
          <div ref={col2Ref} className="reveal reveal-delay-1 flex flex-col gap-5 md:mt-8">
            {column2.map((item) => (
              <TestimonialCard key={item.authorName} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
