import Link from "next/link";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { LandingPageTemplate } from "@/components/templates/LandingPageTemplate";

export default function PrivacyPage() {
  return (
    <LandingPageTemplate
      navbar={<Header />}
      sections={[
        <main key="privacy-main" className="bg-white text-[#0A0A0A]">
          <section className="container mx-auto max-w-4xl px-4 py-28 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h1 className="font-heading mt-6 text-3xl font-semibold sm:text-4xl lg:text-5xl">
                Política de Privacidade
              </h1>
              <p className="mt-4 text-base text-[#6B6B6B] sm:text-lg">
                Transparência total sobre como coletamos, utilizamos e protegemos os seus dados.
              </p>
              <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#0A0A0A] to-[#0A0A0A]/40" />
            </div>

            <div className="space-y-8 rounded-3xl border border-[#E0E0E0]/60 bg-[#F5F5F5]/60 p-8 shadow-lg backdrop-blur-xl sm:p-10">
              <p className="font-sans text-base leading-relaxed text-[#6B6B6B]">
                A sua privacidade é importante para nós. É política do{" "}
                <span className="font-semibold text-[#0A0A0A]">Postable</span> respeitar a sua privacidade em relação a qualquer
                informação sua que possamos coletar no site{" "}
                <Link
                  href="/"
                  className="font-semibold text-[#0A0A0A] underline decoration-[#0A0A0A]/30 transition-colors hover:text-[#0A0A0A]/80 hover:decoration-[#0A0A0A]/60"
                >
                  Postable
                </Link>
                , e outros sites que possuímos e operamos.
              </p>

              <section className="rounded-2xl border border-[#E0E0E0]/40 bg-[#F5F5F5]/50 p-6">
                <h2 className="font-heading mb-4 flex items-center text-lg font-semibold text-[#0A0A0A]">
                  <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#0A0A0A]" />
                  Coleta de Informações
                </h2>
                <p className="font-sans text-base leading-relaxed text-[#6B6B6B]">
                  Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por
                  meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será
                  usado.
                </p>
              </section>

              <section className="rounded-2xl border border-[#E0E0E0]/40 bg-[#F5F5F5]/50 p-6">
                <h2 className="font-heading mb-4 flex items-center text-lg font-semibold text-[#0A0A0A]">
                  <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#0A0A0A]" />
                  Armazenamento e Proteção
                </h2>
                <p className="font-sans text-base leading-relaxed text-[#6B6B6B]">
                  Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos
                  dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação,
                  cópia, uso ou modificação não autorizados.
                </p>
              </section>

              <section className="rounded-2xl border border-[#E0E0E0]/40 bg-[#F5F5F5]/50 p-6">
                <h2 className="font-heading mb-4 flex items-center text-lg font-semibold text-[#0A0A0A]">
                  <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#0A0A0A]" />
                  Compartilhamento de Dados
                </h2>
                <p className="font-sans text-base leading-relaxed text-[#6B6B6B]">
                  Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                </p>
              </section>
            </div>
          </section>
        </main>,
      ]}
      footer={<Footer />}
    />
  );
}
