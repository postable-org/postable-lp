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
        "flex flex-row items-center w-full text-left px-4 py-4 border-b border-[#F0F0F0] last:border-b-0",
        "transition-all duration-200 ease-out",
        "focus:outline-none focus:ring-0",
        active ? "bg-[rgba(56,189,248,0.05)] border-l-2" : "bg-transparent hover:bg-gray-50",
        className,
      ].join(" ")}
      style={active ? { borderLeftColor: '#38BDF8' } : { borderLeft: '2px solid transparent' }}
      {...props}
    >
      <span
        className={[
          "font-[family-name:var(--font-inter)] text-[15px] font-medium transition-colors duration-200",
          active ? "" : "text-[#8E95A3]",
        ].join(" ")}
        style={active ? { color: '#0EA5E9' } : undefined}
      >
        {label}
      </span>
    </button>
  );
};
