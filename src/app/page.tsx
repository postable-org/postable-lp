"use client";

import { Header } from "@/components/organisms/Header";
import { HeroSection } from "@/components/organisms/HeroSection";
import { TrustStrip } from "@/components/organisms/TrustStrip";
import { HowItWorksSection } from "@/components/organisms/HowItWorksSection";
import { PainPointsSection } from "@/components/organisms/PainPointsSection";
import { FeaturesIntro } from "@/components/organisms/FeaturesIntro";
import { FeatureBlocks } from "@/components/organisms/FeatureBlocks";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { VideoDemoSection } from "@/components/organisms/VideoDemoSection";
import { ExtensionSection } from "@/components/organisms/ExtensionSection";
import { PricingSection } from "@/components/organisms/PricingSection";
import { FAQSection } from "@/components/organisms/FAQSection";
import { FinalCTASection } from "@/components/organisms/FinalCTASection";
import { Footer } from "@/components/organisms/Footer";
import { LandingPageTemplate } from "@/components/templates/LandingPageTemplate";

export default function Home() {
  return (
    <LandingPageTemplate
      navbar={<Header />}
      sections={[
        <HeroSection />,
        <TrustStrip />,
        <HowItWorksSection />,
        <PainPointsSection />,
        <FeaturesIntro />,
        <FeatureBlocks />,
        <TestimonialsSection />,
        <VideoDemoSection />,
        <ExtensionSection />,
        <PricingSection />,
        <FAQSection />,
        <FinalCTASection />,
      ]}
      footer={<Footer />}
    />
  );
}
