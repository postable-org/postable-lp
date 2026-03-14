import { Typography } from "@/components/atoms/Typography";

export const FeaturesIntro = () => {
  return (
    <section id="funcionalidades" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          <Typography variant="h2" className="max-w-3xl">
            Tudo que você precisa para transformar conteúdo em crescimento.
          </Typography>
          <Typography variant="body" className="max-w-xl">
            Do monitoramento de tendências à publicação estratégica — tudo num
            só lugar, feito para o seu negócio crescer.
          </Typography>
        </div>
      </div>
    </section>
  );
};
