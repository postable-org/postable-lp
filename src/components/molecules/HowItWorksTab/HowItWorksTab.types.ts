import { ButtonHTMLAttributes } from "react";

export interface HowItWorksTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stepNumber: string;
  label: string;
  active?: boolean;
}
