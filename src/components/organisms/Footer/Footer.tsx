import Link from 'next/link';
import { Typography } from '@/components/atoms/Typography';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#E0E0E0] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side — brand block */}
        <div className="flex flex-col items-center md:items-start gap-2">
          {/* Wordmark */}
          <Link href="/" className="font-[family-name:var(--font-dm-sans)] font-bold text-lg text-[#0A0A0A] hover:opacity-80 transition-opacity">
            Postable
          </Link>
          {/* Tagline */}
          <Typography variant="caption">
            Conteúdo estratégico que gera leads.
          </Typography>
        </div>

        {/* Right side — legal + copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          {/* Legal links */}
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/terms"
              className="text-[#6B6B6B] hover:underline focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2 focus:outline-none rounded px-1"
            >
              Termos de Uso
            </Link>
            <span className="text-[#E0E0E0]">·</span>
            <Link
              href="/privacy"
              className="text-[#6B6B6B] hover:underline focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2 focus:outline-none rounded px-1"
            >
              Política de Privacidade
            </Link>
          </div>
          {/* Copyright */}
          <Typography variant="caption">
            © 2026 Postable. Todos os direitos reservados.
          </Typography>
        </div>
      </div>
    </footer>
  );
};
