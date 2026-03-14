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
        "focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2",
        active
          ? "bg-[#0A0A0A] text-white border border-[#0A0A0A]"
          : "bg-transparent text-[#0A0A0A] border border-[#E0E0E0] hover:border-[#0A0A0A]",
        className,
      ].join(" ")}
      {...props}
    >
      <span className="font-medium">{stepNumber}</span>
      <span>{label}</span>
    </button>
  );
};
