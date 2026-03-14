import { HTMLAttributes } from "react";

export interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  highlightedPhrase: string;
  fullQuote: string;
  authorName: string;
  authorRole: string;
  authorCity: string;
  avatarInitials: string;
}
