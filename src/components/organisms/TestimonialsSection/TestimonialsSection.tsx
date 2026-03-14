import { Badge } from "@/components/atoms/Badge";
import { Typography } from "@/components/atoms/Typography";
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

  const column1 = TESTIMONIALS.filter((_, i) => i % 2 === 0);
  const column2 = TESTIMONIALS.filter((_, i) => i % 2 !== 0);

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-3">
          <Badge variant="outline">{t("testimonials.badge")}</Badge>
          <Typography as="h2" variant="h2">
            {t("testimonials.heading")}
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            {column1.map((t) => (
              <TestimonialCard key={t.authorName} {...t} />
            ))}
          </div>
          <div className="flex flex-col gap-6 md:mt-8">
            {column2.map((t) => (
              <TestimonialCard key={t.authorName} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
