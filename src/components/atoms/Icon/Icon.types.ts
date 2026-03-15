import { SVGAttributes } from "react";

export type IconName =
  | "check"
  | "x"
  | "chevron-down"
  | "chevron-up"
  | "arrow-right"
  | "zap"
  | "chart"
  | "users"
  | "clock"
  | "target"
  | "star"
  | "menu"
  | "play"
  | "twitter"
  | "x-twitter"
  | "instagram"
  | "linkedin"
  | "tiktok";

export interface IconProps extends SVGAttributes<SVGElement> {
  name: IconName;
  size?: number;
}
