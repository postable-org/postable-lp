'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { NavItem } from '@/components/molecules/NavItem';

const NAV_LINKS = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Preços', href: '#precos' },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = () => setIsOpen(false);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-200 ease-out',
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-[#E0E0E0] py-3'
          : 'bg-transparent py-5',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="font-[family-name:var(--font-dm-sans)] font-bold text-lg text-[#0A0A0A] hover:opacity-80 transition-opacity">
            Postable
          </Link>

          {/* Floating nav pill */}
          <nav
            aria-label="Navegação principal"
            className="flex items-center gap-6 border border-[#E0E0E0] rounded-full px-6 py-2 bg-white/90"
          >
            {NAV_LINKS.map((link) => (
              <NavItem key={link.href} href={link.href}>
                {link.label}
              </NavItem>
            ))}
          </nav>

          {/* CTA */}
          <Button variant="primary" size="sm">
            Começar grátis
          </Button>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="font-[family-name:var(--font-dm-sans)] font-bold text-lg text-[#0A0A0A] hover:opacity-80 transition-opacity">
            Postable
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 rounded-lg text-[#0A0A0A] transition-colors duration-200 hover:bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2"
          >
            <Icon name={isOpen ? 'x' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#E0E0E0]">
          <nav
            aria-label="Menu mobile"
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <NavItem key={link.href} href={link.href} onClick={closeDrawer}>
                {link.label}
              </NavItem>
            ))}
            <div className="pt-2 border-t border-[#E0E0E0]">
              <Button variant="primary" size="sm" onClick={closeDrawer} className="w-full">
                Começar grátis
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
