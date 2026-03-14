import { PricingFeatureItemProps } from "./PricingFeatureItem.types";

export const PricingFeatureItem = ({
  children,
  className = "",
  ...props
}: PricingFeatureItemProps) => {
  return (
    <li
      className={[
        "flex items-start gap-2.5",
        className,
      ].join(" ")}
      {...props}
    >
      <svg
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 mt-0.5"
        style={{ color: '#38BDF8' }}
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span className="font-[family-name:var(--font-inter)] text-sm text-[#6B6B6B] leading-relaxed">
        {children}
      </span>
    </li>
  );
};
