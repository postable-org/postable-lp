import { HTMLAttributes } from "react";

export interface FAQItemProps extends HTMLAttributes<HTMLDivElement> {
  question: string;
  answer: string;
  open?: boolean;
  onToggle?: () => void;
}
