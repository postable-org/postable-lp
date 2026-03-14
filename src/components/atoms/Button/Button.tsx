import { ButtonProps } from "./Button.types";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[#0A0A0A] text-white border border-[#0A0A0A] hover:bg-[#2a2a2a] hover:border-[#2a2a2a]",
  secondary:
    "bg-transparent text-[#0A0A0A] border border-[#E0E0E0] hover:border-[#0A0A0A]",
  ghost:
    "bg-transparent text-[#0A0A0A] border border-transparent hover:bg-[#F5F5F5]",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2 font-medium rounded-lg",
        "transition-all duration-200 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};
