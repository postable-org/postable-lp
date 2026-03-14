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
  | "play";

export interface IconProps extends SVGAttributes<SVGElement> {
  name: IconName;
  size?: number;
}
