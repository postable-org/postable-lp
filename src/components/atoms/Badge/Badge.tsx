import { BadgeProps } from "./Badge.types";

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-[#F5F5F5] text-[#0A0A0A] border border-transparent",
  outline: "bg-transparent text-[#0A0A0A] border border-[#E0E0E0]",
};

export const Badge = ({
  variant = "default",
  className = "",
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1",
        "font-[family-name:var(--font-inter)] text-xs font-medium",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
};
