"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useEffect, useRef, useState } from "react";

type BillingInterval = "monthly" | "annual";

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  posts: string;
  featured: boolean;
  features: string[];
}

const APP_LOGIN_URL = "https://app.thepostable.com/login";

const STRIPE_CHECKOUT_LINKS = {
  monthly: [
    "https://buy.stripe.com/4gMbJ065K2qH1p06l90Fi03",
    "https://buy.stripe.com/3cI3cu9hWc1hc3E8th0Fi04",
    "https://buy.stripe.com/5kQ14m3XC5CT1p0dNB0Fi05",
  ],
  annual: [
    "https://buy.stripe.com/cNi4gyeCg1mD4BceRF0Fi06",
    "https://buy.stripe.com/9B614mdyc0izffQ4d10Fi07",
    "https://buy.stripe.com/28EaEW0Lqe9pebM6l90Fi08",
  ],
} as const;

function isUserLoggedIn(): boolean {
  if (typeof window === "undefined") return false;

  try {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key) continue;

      if (key.startsWith("sb-") && key.includes("auth-token")) {
        const value = localStorage.getItem(key);
        if (!value || value === "null" || value === "[]") continue;

        const parsed = JSON.parse(value) as {
          access_token?: string;
          refresh_token?: string;
          expires_at?: number;
          currentSession?: {
            access_token?: string;
            refresh_token?: string;
            expires_at?: number;
          };
        } | null;

        const session = parsed?.currentSession ?? parsed;
        const hasTokens = !!session?.access_token && !!session?.refresh_token;
        const expiresAt = session?.expires_at;
        const isExpired =
          typeof expiresAt !== "number"
            ? true
            : expiresAt * 1000 <= Date.now() + 60_000;

        if (hasTokens && !isExpired) return true;
      }
    }
  } catch {
    return false;
  }

  return false;
}

const CheckIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const PricingSection = () => {
  const { t } = useTranslation();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("monthly");
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    [headerRef.current, ...cardsRef.current].forEach((el) => {
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const pricingPlans: PricingPlan[] = [
    {
      name: t("pricing.plans.0.name"),
      monthlyPrice: 97,
      annualPrice: 78,
      posts: t("pricing.plans.0.posts"),
      featured: false,
      features: [
        t("pricing.plans.0.features.0"),
        t("pricing.plans.0.features.1"),
        t("pricing.plans.0.features.2"),
        t("pricing.plans.0.features.3"),
      ],
    },
    {
      name: t("pricing.plans.1.name"),
      monthlyPrice: 197,
      annualPrice: 158,
      posts: t("pricing.plans.1.posts"),
      featured: true,
      features: [
        t("pricing.plans.1.features.0"),
        t("pricing.plans.1.features.1"),
        t("pricing.plans.1.features.2"),
        t("pricing.plans.1.features.3"),
        t("pricing.plans.1.features.4"),
      ],
    },
    {
      name: t("pricing.plans.2.name"),
      monthlyPrice: 297,
      annualPrice: 238,
      posts: t("pricing.plans.2.posts"),
      featured: false,
      features: [
        t("pricing.plans.2.features.0"),
        t("pricing.plans.2.features.1"),
        t("pricing.plans.2.features.2"),
        t("pricing.plans.2.features.3"),
        t("pricing.plans.2.features.4"),
        t("pricing.plans.2.features.5"),
      ],
    },
  ];

  const getPrice = (plan: PricingPlan): number =>
    billingInterval === "monthly" ? plan.monthlyPrice : plan.annualPrice;

  const getCheckoutLink = (planIndex: number): string =>
    STRIPE_CHECKOUT_LINKS[billingInterval][planIndex];

  const handlePlanClick = (planIndex: number) => {
    const targetUrl = isUserLoggedIn()
      ? getCheckoutLink(planIndex)
      : APP_LOGIN_URL;
    window.location.assign(targetUrl);
  };

  return (
    <section
      id="precos"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "#080912" }}
    >
      {/* Background ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(56,189,248,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className="reveal flex flex-col items-center gap-6 mb-12"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase"
            style={{ color: "#38BDF8" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block animate-pulse"
              style={{ background: "#38BDF8", boxShadow: "0 0 6px #38BDF8" }}
            />
            {t("pricing.badge")}
          </span>
          <h2
            className="font-[family-name:var(--font-fraunces)] font-normal text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-center"
            style={{ color: "#ffffff" }}
          >
            {t("pricing.heading")}
          </h2>

          {/* Billing toggle */}
          <div className="flex items-center gap-3 mt-2">
            <div
              className="relative flex items-center p-1 rounded-full w-[280px]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              role="group"
              aria-label="Billing interval"
            >
              {/* Sliding background */}
              <div
                className="absolute top-1 bottom-1 rounded-full transition-transform duration-300 ease-in-out"
                style={{
                  width: "calc(50% - 4px)",
                  transform:
                    billingInterval === "monthly"
                      ? "translateX(0)"
                      : "translateX(100%)",
                  background: "linear-gradient(135deg, #38BDF8, #0EA5E9)",
                  boxShadow: "0 0 20px rgba(56,189,248,0.3)",
                }}
              />

              {(["monthly", "annual"] as BillingInterval[]).map((interval) => (
                <button
                  key={interval}
                  onClick={() => setBillingInterval(interval)}
                  className="relative z-10 flex-1 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none text-center"
                  style={{
                    color:
                      billingInterval === interval
                        ? "#080912"
                        : "rgba(255,255,255,0.5)",
                  }}
                >
                  {interval === "monthly"
                    ? t("pricing.billingMonthly")
                    : t("pricing.billingAnnual")}
                </button>
              ))}
            </div>
            {billingInterval === "annual" && (
              <span
                className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(56,189,248,0.15)",
                  border: "1px solid rgba(56,189,248,0.3)",
                  color: "#38BDF8",
                }}
              >
                {t("pricing.discount")}
              </span>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {pricingPlans.map((plan, i) => (
            <div
              key={plan.name}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className={[
                "reveal",
                i === 0 ? "" : i === 1 ? "reveal-delay-1" : "reveal-delay-2",
              ].join(" ")}
            >
              {plan.featured ? (
                /* ── FEATURED CARD ── */
                <div
                  className="relative rounded-2xl p-px overflow-hidden h-full"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(56,189,248,0.6) 0%, rgba(14,165,233,0.2) 50%, rgba(56,189,248,0.4) 100%)",
                    animation: "pulseGlow 3s ease-in-out infinite",
                  }}
                >
                  {/* Shimmer sweep */}
                  <div
                    className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
                    aria-hidden="true"
                  >
                    <div
                      className="absolute top-0 bottom-0 w-1/3"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                        animation: "shimmer 3s linear infinite",
                      }}
                    />
                  </div>

                  <div
                    className="relative rounded-[14px] p-8 flex flex-col h-full"
                    style={{ background: "#0F1628" }}
                  >
                    {/* Most Popular badge */}
                    <div className="mb-6">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(56,189,248,0.05))",
                          border: "1px solid rgba(56,189,248,0.4)",
                          color: "#38BDF8",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{
                            background: "#38BDF8",
                            boxShadow: "0 0 6px #38BDF8",
                          }}
                        />
                        {t("pricing.trialBadge")}
                      </span>
                    </div>

                    <p
                      className="font-[family-name:var(--font-dm-sans)] font-bold text-2xl mb-2"
                      style={{ color: "#ffffff" }}
                    >
                      {plan.name}
                    </p>

                    <div className="flex flex-col mb-3">
                      {billingInterval === "annual" && (
                        <span
                          className="font-heading font-bold text-xl line-through mb-1"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                        >
                          R$ {plan.monthlyPrice}
                        </span>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span
                          className="font-heading font-black text-5xl"
                          style={{ color: "#38BDF8" }}
                        >
                          R$ {getPrice(plan)}
                        </span>
                        <span
                          className="text-sm font-medium"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          {t("pricing.perMonth")}
                        </span>
                      </div>
                      {billingInterval === "annual" && (
                        <span
                          className="text-xs mt-1"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          R$ {plan.annualPrice * 12}{" "}
                          {t("pricing.billedAnnually")}
                        </span>
                      )}
                    </div>

                    <p
                      className="text-sm mb-6"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {plan.posts}
                    </p>

                    <ul className="flex flex-col gap-3 mb-8 flex-grow">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span
                            className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{
                              background: "rgba(56,189,248,0.15)",
                              color: "#38BDF8",
                            }}
                          >
                            <CheckIcon />
                          </span>
                          <span
                            className="text-sm font-[family-name:var(--font-inter)]"
                            style={{ color: "rgba(255,255,255,0.75)" }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => {
                        handlePlanClick(i);
                      }}
                      className="w-full py-3.5 rounded-xl font-[family-name:var(--font-dm-sans)] font-bold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: "linear-gradient(135deg, #38BDF8, #0EA5E9)",
                        color: "#080912",
                        boxShadow: "0 4px 20px rgba(56,189,248,0.4)",
                      }}
                    >
                      {t("pricing.ctaButton")}
                    </button>
                  </div>
                </div>
              ) : (
                /* ── REGULAR CARD ── */
                <div
                  className="relative rounded-2xl p-8 flex flex-col h-full group transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ border: "1px solid rgba(56,189,248,0.2)" }}
                    aria-hidden="true"
                  />

                  <div className="mb-6">
                    <span
                      className="inline-block text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {t("pricing.trialBadge")}
                    </span>
                  </div>

                  <p
                    className="font-[family-name:var(--font-dm-sans)] font-bold text-2xl mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    {plan.name}
                  </p>

                  <div className="flex flex-col mb-3">
                    {billingInterval === "annual" && (
                      <span
                        className="font-heading font-bold text-xl line-through mb-1"
                        style={{ color: "rgba(255,255,255,0.2)" }}
                      >
                        R$ {plan.monthlyPrice}
                      </span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span
                        className="font-heading font-black text-5xl"
                        style={{ color: "#ffffff" }}
                      >
                        R$ {getPrice(plan)}
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                      >
                        {t("pricing.perMonth")}
                      </span>
                    </div>
                    {billingInterval === "annual" && (
                      <span
                        className="text-xs mt-1"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                      >
                        R$ {plan.annualPrice * 12} {t("pricing.billedAnnually")}
                      </span>
                    )}
                  </div>

                  <p
                    className="text-sm mb-6"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {plan.posts}
                  </p>

                  <ul className="flex flex-col gap-3 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            color: "rgba(255,255,255,0.5)",
                          }}
                        >
                          <CheckIcon />
                        </span>
                        <span
                          className="text-sm font-[family-name:var(--font-inter)]"
                          style={{ color: "rgba(255,255,255,0.55)" }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      handlePlanClick(i);
                    }}
                    className="relative w-full py-3.5 rounded-xl font-[family-name:var(--font-dm-sans)] font-bold text-base transition-all duration-200 hover:opacity-90"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#ffffff",
                    }}
                  >
                    {t("pricing.ctaButton")}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p
            className="font-[family-name:var(--font-inter)] text-xs"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {t("pricing.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
};
