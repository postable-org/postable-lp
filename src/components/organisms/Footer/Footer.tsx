"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@/components/atoms/Typography';
import { useTranslation } from '@/hooks/useTranslation';
import { Icon } from '@/components/atoms/Icon';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#E0E0E0] pt-16 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center font-stratford text-2xl text-[#0A0A0A] hover:opacity-80 transition-opacity gap-2">
                <Image src="/logo.png" alt="Postable Logo" width={32} height={32} className="object-contain" />
                Postable
              </Link>
              <Typography variant="body" className="text-[#6B6B6B] max-w-[240px] leading-relaxed">
                {t("footer.tagline")}
              </Typography>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://x.com/Postable33785" target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#3B82F6] transition-colors" aria-label="X (formerly Twitter)">
                <Icon name="x-twitter" size={20} />
              </a>
              <a href="#" className="text-[#6B6B6B] hover:text-[#3B82F6] transition-colors" aria-label="Instagram">
                <Icon name="instagram" size={20} />
              </a>
              <a href="https://www.linkedin.com/in/postable-ia-3108183b7/" target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#3B82F6] transition-colors" aria-label="LinkedIn">
                <Icon name="linkedin" size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4 pt-4 md:pt-0">
            {[
              { label: t("footer.sections.product.features"), href: "#funcionalidades" },
              { label: t("footer.sections.product.pricing"), href: "#precos" },
              { label: t("footer.sections.product.faq"), href: "#faq" },
              { label: t("footer.sections.company.about"), href: "#" },
              { label: t("footer.sections.company.blog"), href: "#" },
              { label: t("footer.sections.legal.contact"), href: "#" },
              { label: t("footer.sections.legal.privacy"), href: "/privacy" },
              { label: t("footer.sections.legal.terms"), href: "/terms" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="text-[#6B6B6B] hover:text-[#3B82F6] transition-colors text-[15px] whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E0E0E0]">
          <Typography variant="caption" className="text-[#B0B0B0] text-sm">
            {t("footer.copyright")}
          </Typography>
        </div>
      </div>
    </footer>
  );
};
