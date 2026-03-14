'use client';

import { useState } from 'react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { PricingFeatureItem } from '@/components/molecules/PricingFeatureItem';
import { useTranslation } from '@/hooks/useTranslation';

type BillingInterval = 'monthly' | 'annual';

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  posts: string;
  featured: boolean;
  features: string[];
}

export const PricingSection = () => {
  const { t } = useTranslation();
  const [billingInterval, setBillingInterval] = useState<BillingInterval>('monthly');

  const pricingPlans: PricingPlan[] = [
    {
      name: t('pricing.plans.0.name'),
      monthlyPrice: 97,
      annualPrice: 78,
      posts: t('pricing.plans.0.posts'),
      featured: false,
      features: [
        t('pricing.plans.0.features.0'),
        t('pricing.plans.0.features.1'),
        t('pricing.plans.0.features.2'),
        t('pricing.plans.0.features.3'),
      ],
    },
    {
      name: t('pricing.plans.1.name'),
      monthlyPrice: 197,
      annualPrice: 158,
      posts: t('pricing.plans.1.posts'),
      featured: true,
      features: [
        t('pricing.plans.1.features.0'),
        t('pricing.plans.1.features.1'),
        t('pricing.plans.1.features.2'),
        t('pricing.plans.1.features.3'),
        t('pricing.plans.1.features.4'),
      ],
    },
    {
      name: t('pricing.plans.2.name'),
      monthlyPrice: 297,
      annualPrice: 238,
      posts: t('pricing.plans.2.posts'),
      featured: false,
      features: [
        t('pricing.plans.2.features.0'),
        t('pricing.plans.2.features.1'),
        t('pricing.plans.2.features.2'),
        t('pricing.plans.2.features.3'),
        t('pricing.plans.2.features.4'),
        t('pricing.plans.2.features.5'),
      ],
    },
  ];

  const getPrice = (plan: PricingPlan): number => {
    return billingInterval === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  return (
    <section id="precos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6 mb-12">
          <span className="text-base font-mono font-light tracking-wider uppercase" style={{ color: '#809cc4' }}>{t('pricing.badge')}</span>
          <Typography variant="h2" className="text-center">
            {t('pricing.heading')}
          </Typography>
        </div>

        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setBillingInterval('monthly')}
              className={[
                'px-4 py-2 rounded-full font-medium transition-all',
                'font-[family-name:var(--font-inter)] text-sm',
                'focus:outline-none focus:ring-2 focus:ring-[#0A0A0A]',
                billingInterval === 'monthly'
                  ? 'bg-[#0A0A0A] text-white'
                  : 'bg-transparent text-[#6B6B6B] hover:text-[#0A0A0A]',
              ].join(' ')}
            >
              {t('pricing.billingMonthly')}
            </button>
            <button
              onClick={() => setBillingInterval('annual')}
              className={[
                'px-4 py-2 rounded-full font-medium transition-all',
                'font-[family-name:var(--font-inter)] text-sm',
                'focus:outline-none focus:ring-2 focus:ring-[#0A0A0A]',
                billingInterval === 'annual'
                  ? 'bg-[#0A0A0A] text-white'
                  : 'bg-transparent text-[#6B6B6B] hover:text-[#0A0A0A]',
              ].join(' ')}
            >
              {t('pricing.billingAnnual')}
            </button>
            {billingInterval === 'annual' && (
              <Badge variant="default" className="ml-2">
                {t('pricing.discount')}
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={[
                'rounded-xl p-8 border flex flex-col h-full',
                'transition-all duration-200',
                plan.featured
                  ? 'border-2 border-[#0A0A0A] bg-[#F5F5F5] shadow-sm'
                  : 'border border-[#E0E0E0] bg-white hover:border-[#0A0A0A]',
              ].join(' ')}
            >
              <div className="mb-6">
                <Badge variant="outline" className="mb-4">
                  {t('pricing.trialBadge')}
                </Badge>
              </div>

              <div className="mb-2">
                <Typography
                  variant="h3"
                  className={[
                    'text-2xl md:text-3xl',
                    plan.featured ? 'text-[#0A0A0A]' : 'text-[#0A0A0A]',
                  ].join(' ')}
                >
                  {plan.name}
                </Typography>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-dm-sans)] font-bold text-4xl text-[#0A0A0A]">
                  R${getPrice(plan)}
                </span>
                <Typography variant="caption" className="text-[#6B6B6B]">
                  {t('pricing.perMonth')}
                </Typography>
              </div>

              <div className="mb-6">
                <Typography variant="body" className="text-[#6B6B6B]">
                  {plan.posts}
                </Typography>
              </div>

              <div className="mb-8 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <PricingFeatureItem key={feature}>{feature}</PricingFeatureItem>
                  ))}
                </ul>
              </div>

              <Button variant="primary" size="lg" className="w-full">
                {t('pricing.ctaButton')}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Typography variant="caption" className="text-[#B0B0B0]">
            {t('pricing.disclaimer')}
          </Typography>
        </div>
      </div>
    </section>
  );
};
