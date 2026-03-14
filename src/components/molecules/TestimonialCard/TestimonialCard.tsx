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
        "relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden",
        "transition-all duration-300 ease-out group",
        "hover:-translate-y-1",
        className,
      ].join(" ")}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(8px)',
      }}
      {...props}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ border: '1px solid rgba(56,189,248,0.3)' }}
        aria-hidden="true"
      />

      {/* Stars */}
      <div className="flex gap-0.5" aria-label="5 estrelas">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width={14} height={14} viewBox="0 0 24 24" aria-hidden="true">
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              fill="#38BDF8"
            />
          </svg>
        ))}
      </div>

      <p
        className="font-[family-name:var(--font-dm-sans)] font-bold text-base leading-snug"
        style={{ color: '#ffffff' }}
      >
        "{highlightedPhrase}"
      </p>

      <p
        className="font-[family-name:var(--font-inter)] text-sm leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.5)' }}
      >
        {fullQuote}
      </p>

      <div
        className="flex items-center gap-3 mt-auto pt-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0 font-[family-name:var(--font-inter)] text-xs font-bold"
          style={{
            background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)',
            color: '#080912',
          }}
          aria-hidden="true"
        >
          {avatarInitials}
        </span>
        <div className="flex flex-col">
          <span className="font-[family-name:var(--font-inter)] text-sm font-semibold" style={{ color: '#ffffff' }}>
            {authorName}
          </span>
          <span className="font-[family-name:var(--font-inter)] text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {authorRole} · {authorCity}
          </span>
        </div>
      </div>
    </div>
  );
};
