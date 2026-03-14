import { AnchorHTMLAttributes } from "react";

export interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}
