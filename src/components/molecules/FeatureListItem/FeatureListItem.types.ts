import { ButtonHTMLAttributes } from "react";

export interface FeatureListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  number: string;
  label: string;
  active?: boolean;
}
