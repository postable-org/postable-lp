import { FeatureListItemProps } from "./FeatureListItem.types";

export const FeatureListItem = ({
  number,
  label,
  active = false,
  className = "",
  ...props
}: FeatureListItemProps) => {
  return (
    <button
      className={[
        "flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg",
        "transition-all duration-200 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2",
        active
          ? "bg-[#F5F5F5] border border-[#0A0A0A]"
          : "bg-transparent border border-transparent hover:bg-[#F5F5F5]",
        className,
      ].join(" ")}
      {...props}
    >
      <span
        className={[
          "inline-flex items-center justify-center w-7 h-7 rounded-full shrink-0",
          "font-[family-name:var(--font-inter)] text-xs font-semibold",
          "transition-colors duration-200 ease-out",
          active
            ? "bg-[#0A0A0A] text-white"
            : "bg-[#E0E0E0] text-[#6B6B6B]",
        ].join(" ")}
      >
        {number}
      </span>
      <span
        className={[
          "font-[family-name:var(--font-inter)] text-sm font-medium",
          "transition-colors duration-200 ease-out",
          active ? "text-[#0A0A0A]" : "text-[#6B6B6B]",
        ].join(" ")}
      >
        {label}
      </span>
    </button>
  );
};
