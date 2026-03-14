import { PainCardProps } from "./PainCard.types";

export const PainCard = ({
  badge,
  title,
  description,
  className = "",
  ...props
}: PainCardProps) => {
  return (
    <div
      className={[
        "relative rounded-2xl p-7 flex flex-col gap-5 overflow-hidden",
        "transition-all duration-300 ease-out",
        "group cursor-default",
        className,
      ].join(" ")}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(56,189,248,0.12)',
        backdropFilter: 'blur(12px)',
      }}
      {...props}
    >
      {/* Hover electric glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          border: '1px solid rgba(56,189,248,0.45)',
          boxShadow: 'inset 0 0 30px rgba(56,189,248,0.05)',
        }}
        aria-hidden="true"
      />

      {/* Top shimmer line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)',
        }}
        aria-hidden="true"
      />

      {/* Badge */}
      <span
        className="inline-flex items-center justify-center w-9 h-9 rounded-xl font-[family-name:var(--font-inter)] text-xs font-bold shrink-0"
        style={{
          background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(56,189,248,0.05))',
          border: '1px solid rgba(56,189,248,0.3)',
          color: '#38BDF8',
        }}
      >
        {badge}
      </span>

      <p className="font-[family-name:var(--font-dm-sans)] font-bold text-lg text-white leading-snug">
        {title}
      </p>
      <p className="font-[family-name:var(--font-inter)] text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
        {description}
      </p>
    </div>
  );
};
