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
        "bg-white border border-[#E0E0E0] rounded-xl p-6",
        "flex flex-col gap-4",
        className,
      ].join(" ")}
      {...props}
    >
      <span
        className={[
          "inline-flex items-center justify-center w-8 h-8 rounded-full",
          "bg-[#F5F5F5] text-[#0A0A0A]",
          "font-[family-name:var(--font-inter)] text-xs font-semibold",
        ].join(" ")}
      >
        {badge}
      </span>
      <p className="font-[family-name:var(--font-dm-sans)] font-bold text-lg text-[#0A0A0A] leading-snug">
        {title}
      </p>
      <p className="font-[family-name:var(--font-inter)] text-sm text-[#6B6B6B] leading-relaxed">
        {description}
      </p>
    </div>
  );
};
