"use client";

import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { LanguageSwitcher } from "@/components/molecules/LanguageSwitcher";
import { NavItem } from "@/components/molecules/NavItem";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { labelKey: "header.howItWorks", href: "/#como-funciona" },
  { labelKey: "header.features", href: "/#funcionalidades" },
  { labelKey: "header.pricing", href: "/#precos" },
];

const APP_LOGIN_URL = "https://app.thepostable.com/login";

export const Header = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDrawer = () => setIsOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // If we're not on the home page, let the default Link behavior take over
    if (pathname !== "/") return;

    // On home page, if it's just "/", scroll to top
    if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // On home page, handle anchor scrolling
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-200 ease-out",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[#E0E0E0] py-3"
          : "bg-transparent py-2",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between w-full relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center font-stratford text-2xl text-[#0A0A0A] transition-opacity gap-2"
            onClick={(e) =>
              handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, "/")
            }
          >
            <Image
              src="/logo.png"
              alt="Postable Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            Postable
          </Link>

          {/* Floating nav pill */}
          <nav
            aria-label={t("header.navLabel") || "Navegação principal"}
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 border border-[#E0E0E0] rounded-full px-6 py-2 bg-white/90"
          >
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                onClick={(e) =>
                  handleNavClick(
                    e as React.MouseEvent<HTMLAnchorElement>,
                    link.href,
                  )
                }
              >
                {t(link.labelKey)}
              </NavItem>
            ))}
          </nav>

          {/* Language Switcher, Login, and CTA */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher variant="desktop" />
            <a
              href={APP_LOGIN_URL}
              className="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed bg-transparent text-gray-700 border border-transparent hover:text-black px-3 py-1.5 text-sm"
            >
              Login
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                window.location.href = APP_LOGIN_URL;
              }}
              className="!border-none !rounded-full hover:opacity-90"
              style={
                {
                  background: "linear-gradient(to right, #0EA5E9, #38BDF8)",
                  color: "#080912",
                  boxShadow: "0 2px 12px rgba(56,189,248,0.35)",
                } as React.CSSProperties
              }
            >
              {t("header.cta")}
            </Button>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center font-stratford text-2xl text-[#0A0A0A] hover:opacity-80 transition-opacity"
            onClick={(e) =>
              handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, "/")
            }
          >
            <Image
              src="/logo.png"
              alt="Postable Logo"
              width={78}
              height={78}
              className="w-8 h-8 object-contain mr-2"
            />
            Postable
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={
              isOpen
                ? t("header.closeMenu") || "Fechar menu"
                : t("header.openMenu") || "Abrir menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 rounded-lg text-[#0A0A0A] transition-colors duration-200 hover:bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2"
          >
            <Icon name={isOpen ? "x" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#E0E0E0]">
          <nav
            aria-label={t("header.mobileNav") || "Menu mobile"}
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(
                    e as React.MouseEvent<HTMLAnchorElement>,
                    link.href,
                  );
                  closeDrawer();
                }}
              >
                {t(link.labelKey)}
              </NavItem>
            ))}
            <LanguageSwitcher variant="mobile" />
            <div className="pt-2 border-t border-[#E0E0E0] flex flex-col gap-3">
              <a
                href={APP_LOGIN_URL}
                className="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed bg-transparent text-[#0A0A0A] border border-transparent hover:bg-[#F5F5F5] px-3 py-1.5 text-sm"
              >
                {t("header.login")}
              </a>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  closeDrawer();
                  window.location.href = APP_LOGIN_URL;
                }}
                className="w-full !border-none !rounded-full hover:opacity-90"
                style={
                  {
                    background: "linear-gradient(to right, #0EA5E9, #38BDF8)",
                    color: "#080912",
                  } as React.CSSProperties
                }
              >
                {t("header.cta")}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
