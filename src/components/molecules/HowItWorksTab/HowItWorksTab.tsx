import { HowItWorksTabProps } from "./HowItWorksTab.types";

export const HowItWorksTab = ({
  stepNumber,
  label,
  active = false,
  className = "",
  ...props
}: HowItWorksTabProps) => {
  return (
    <button
      className={[
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
        "font-[family-name:var(--font-inter)]",
        "transition-all duration-200 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2",
        active
          ? "text-[#0A0A0A] border font-semibold"
          : "bg-transparent text-[#6B6B6B] border border-[#E0E0E0] hover:text-[#0A0A0A]",
        className,
      ].join(" ")}
      style={active ? { borderColor: '#38BDF8', backgroundColor: 'rgba(56,189,248,0.1)', boxShadow: '0 0 12px rgba(56,189,248,0.15)' } : undefined}
      {...props}
    >
      <span
        className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs shrink-0 transition-colors duration-200"
        style={active ? { backgroundColor: '#38BDF8', color: '#080912' } : { backgroundColor: '#E0E0E0', color: '#6B6B6B' }}
      >
        {stepNumber}
      </span>
      <span>{label}</span>
    </button>
  );
};
