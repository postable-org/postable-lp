import { TestimonialCardProps } from "./TestimonialCard.types";

export const TestimonialCard = ({
  highlightedPhrase,
  fullQuote,
  authorName,
  authorRole,
  authorCity,
  avatarInitials,
  className = "",
  ...props
}: TestimonialCardProps) => {
  return (
    <div
      className={[
        "bg-white border border-[#E0E0E0] rounded-xl p-6",
        "flex flex-col gap-4",
        className,
      ].join(" ")}
      {...props}
    >
      <div className="flex gap-0.5" aria-label="5 estrelas">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="#0A0A0A"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      <p className="font-[family-name:var(--font-dm-sans)] font-bold text-base text-[#0A0A0A] leading-snug">
        "{highlightedPhrase}"
      </p>

      <p className="font-[family-name:var(--font-inter)] text-sm text-[#6B6B6B] leading-relaxed">
        {fullQuote}
      </p>

      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-[#E0E0E0]">
        <span
          className={[
            "inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0",
            "bg-[#0A0A0A] text-white",
            "font-[family-name:var(--font-inter)] text-xs font-semibold",
          ].join(" ")}
          aria-hidden="true"
        >
          {avatarInitials}
        </span>
        <div className="flex flex-col">
          <span className="font-[family-name:var(--font-inter)] text-sm font-semibold text-[#0A0A0A]">
            {authorName}
          </span>
          <span className="font-[family-name:var(--font-inter)] text-xs text-[#6B6B6B]">
            {authorRole} · {authorCity}
          </span>
        </div>
      </div>
    </div>
  );
};
