import { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant = "default" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}
