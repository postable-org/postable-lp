import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";

export const ExtensionSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F5F5F5] border border-[#E0E0E0] rounded-2xl p-8 md:p-12 lg:p-16">
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-6 md:mb-8">
            <Badge variant="outline">Extensão Chrome</Badge>
            <Typography variant="h2" className="text-[#0A0A0A]">
              Instale a extensão para análise em tempo real
            </Typography>
            <Typography variant="body" className="max-w-2xl text-[#6B6B6B]">
              Analise o perfil de qualquer concorrente diretamente no Instagram —
              sem sair da rede social.
            </Typography>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Primary CTA wrapped in anchor */}
            <a href="#" className="inline-flex">
              <Button variant="primary" size="md">
                Instalar extensão
              </Button>
            </a>

            {/* Secondary CTA as ghost button */}
            <Button variant="ghost" size="md" className="px-5">
              Experimentar na plataforma →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
