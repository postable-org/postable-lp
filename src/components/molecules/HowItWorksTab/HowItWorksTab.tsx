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
        "relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm",
        "font-[family-name:var(--font-inter)]",
        "transition-colors duration-200 ease-out cursor-pointer",
        "focus:outline-none",
        active ? "font-semibold text-[#0A0A0A]" : "text-[#9B9B9B] hover:text-[#555555]",
        className,
      ].join(" ")}
      {...props}
    >
      <span
        className="inline-flex items-center justify-center text-xs font-semibold shrink-0 transition-all duration-200"
        style={{ color: '#0EA5E9' }}
      >
        {stepNumber}
      </span>
      <span>{label}</span>
    </button>
  );
};
