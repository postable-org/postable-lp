import { NavItemProps } from "./NavItem.types";

export const NavItem = ({ active = false, className = "", children, ...props }: NavItemProps) => {
  return (
    <a
      className={[
        "font-[family-name:var(--font-inter)] text-sm font-medium",
        "transition-colors duration-200 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2 rounded-sm",
        active
          ? "text-[#0A0A0A]"
          : "text-[#6B6B6B] hover:text-[#0A0A0A]",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </a>
  );
};
