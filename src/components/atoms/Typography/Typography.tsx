import { createElement, ElementType } from "react";
import { TypographyProps, TypographyVariant } from "./Typography.types";

const variantConfig: Record<
  TypographyVariant,
  { defaultTag: ElementType; classes: string }
> = {
  h1: {
    defaultTag: "h1",
    classes:
      "font-[family-name:var(--font-dm-sans)] font-bold text-4xl md:text-6xl text-[#0A0A0A] leading-tight tracking-tight",
  },
  h2: {
    defaultTag: "h2",
    classes:
      "font-[family-name:var(--font-dm-sans)] font-bold text-3xl md:text-4xl text-[#0A0A0A] leading-tight tracking-tight",
  },
  h3: {
    defaultTag: "h3",
    classes:
      "font-[family-name:var(--font-dm-sans)] font-bold text-2xl md:text-3xl text-[#0A0A0A] leading-snug",
  },
  h4: {
    defaultTag: "h4",
    classes:
      "font-[family-name:var(--font-dm-sans)] font-bold text-xl md:text-2xl text-[#0A0A0A] leading-snug",
  },
  body: {
    defaultTag: "p",
    classes:
      "font-[family-name:var(--font-inter)] font-normal text-base text-[#6B6B6B] leading-relaxed",
  },
  caption: {
    defaultTag: "span",
    classes:
      "font-[family-name:var(--font-inter)] font-normal text-sm text-[#B0B0B0] leading-normal",
  },
  label: {
    defaultTag: "span",
    classes:
      "font-[family-name:var(--font-inter)] font-normal text-xs uppercase tracking-widest text-[#6B6B6B]",
  },
};

export const Typography = ({
  variant = "body",
  as,
  className = "",
  children,
  ...props
}: TypographyProps) => {
  const { defaultTag, classes } = variantConfig[variant];
  const tag = as ?? defaultTag;

  return createElement(
    tag,
    { className: `${classes} ${className}`.trim(), ...props },
    children
  );
};
