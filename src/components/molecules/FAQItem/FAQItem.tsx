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
        "border-b transition-colors duration-300",
        className,
      ].join(" ")}
      style={{ borderColor: open ? 'rgba(56,189,248,0.25)' : '#E0E0E0' }}
      {...props}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className={[
          "flex w-full items-center justify-between gap-4 py-5 text-left group",
          "font-[family-name:var(--font-dm-sans)] text-base font-semibold",
          "transition-colors duration-200 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 rounded-sm",
        ].join(" ")}
        style={{ color: open ? '#0EA5E9' : '#0A0A0A' }}
      >
        <span>{question}</span>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? 'rgba(56,189,248,0.1)' : '#F5F5F5',
            border: open ? '1px solid rgba(56,189,248,0.3)' : '1px solid #E0E0E0',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke={open ? '#38BDF8' : '#6B6B6B'} strokeWidth={2.5} strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-350 ease-out"
        style={{
          maxHeight: open ? '400px' : '0px',
          opacity: open ? 1 : 0,
        }}
        aria-hidden={!open}
      >
        <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-[#6B6B6B] leading-relaxed pb-5">
          {answer}
        </p>
      </div>
    </div>
  );
};
