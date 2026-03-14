"use client";

import { FAQItemProps } from "./FAQItem.types";

export const FAQItem = ({
  question,
  answer,
  open = false,
  onToggle,
  className = "",
  ...props
}: FAQItemProps) => {
  return (
    <div
      className={[
        "border-b border-[#E0E0E0]",
        className,
      ].join(" ")}
      {...props}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className={[
          "flex w-full items-center justify-between gap-4 py-5 text-left",
          "font-[family-name:var(--font-inter)] text-sm font-medium text-[#0A0A0A]",
          "transition-colors duration-200 ease-out hover:text-[#6B6B6B]",
          "focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2 rounded-sm",
        ].join(" ")}
      >
        <span>{question}</span>
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={[
            "shrink-0 transition-transform duration-200 ease-out",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className={[
          "overflow-hidden transition-all duration-200 ease-out",
          open ? "max-h-96 pb-5" : "max-h-0",
        ].join(" ")}
        aria-hidden={!open}
      >
        <p className="font-[family-name:var(--font-inter)] text-sm text-[#6B6B6B] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};
