"use client";

import { useState, useRef, useEffect } from "react";
import { FAQItem } from "@/components/molecules/FAQItem";
import { useTranslation } from "@/hooks/useTranslation";

interface FAQEntry {
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('revealed'); });
      },
      { threshold: 0.1 }
    );
    [headerRef.current, listRef.current].forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const faqData: FAQEntry[] = [
    { question: t("faq.items.0.q"), answer: t("faq.items.0.a") },
    { question: t("faq.items.1.q"), answer: t("faq.items.1.a") },
    { question: t("faq.items.2.q"), answer: t("faq.items.2.a") },
    { question: t("faq.items.3.q"), answer: t("faq.items.3.a") },
    { question: t("faq.items.4.q"), answer: t("faq.items.4.a") },
  ];

  return (
    <section id="faq" className="w-full bg-white py-20 md:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="reveal mb-14 text-center">
          <span
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-4"
            style={{ color: '#0EA5E9' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: '#38BDF8' }}
            />
            {t("faq.badge")}
          </span>
          <h2
            className="font-[family-name:var(--font-fraunces)] font-normal text-4xl md:text-5xl leading-[1.1] tracking-tight text-[#0A0A0A]"
          >
            {t("faq.heading")}
          </h2>
        </div>

        <div ref={listRef} className="reveal reveal-delay-1">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
