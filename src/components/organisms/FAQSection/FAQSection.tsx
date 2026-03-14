"use client";

import { useState } from "react";
import { FAQItem } from "@/components/molecules/FAQItem";
import { Typography } from "@/components/atoms/Typography";
import { useTranslation } from "@/hooks/useTranslation";

interface FAQEntry {
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQEntry[] = [
    {
      question: t("faq.items.0.q"),
      answer: t("faq.items.0.a"),
    },
    {
      question: t("faq.items.1.q"),
      answer: t("faq.items.1.a"),
    },
    {
      question: t("faq.items.2.q"),
      answer: t("faq.items.2.a"),
    },
    {
      question: t("faq.items.3.q"),
      answer: t("faq.items.3.a"),
    },
    {
      question: t("faq.items.4.q"),
      answer: t("faq.items.4.a"),
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Typography variant="label" className="text-[#B0B0B0] mb-3 block">
            {t("faq.badge")}
          </Typography>
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold text-[#0A0A0A]"
          >
            {t("faq.heading")}
          </Typography>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              open={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
