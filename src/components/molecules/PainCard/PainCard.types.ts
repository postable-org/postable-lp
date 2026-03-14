import { HTMLAttributes } from "react";

export interface PainCardProps extends HTMLAttributes<HTMLDivElement> {
  badge: string;
  title: string;
  description: string;
}
