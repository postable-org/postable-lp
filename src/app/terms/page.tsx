import Link from "next/link";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { LandingPageTemplate } from "@/components/templates/LandingPageTemplate";

export const metadata = {
  title: "Termos de Serviço | Postable",
  description:
    "Leia os Termos de Serviço do Postable e compreenda as condições para utilização da plataforma.",
};

export default function TermsPage() {
  return (
    <LandingPageTemplate
      navbar={<Header />}
      sections={[
        <main key="terms-main" className="bg-white text-[#0A0A0A]">
          <section className="container mx-auto max-w-4xl px-4 py-28 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h1 className="font-heading mt-6 text-3xl font-semibold sm:text-4xl lg:text-5xl">
                Termos de Serviço
              </h1>
              <p className="mt-4 text-base text-[#6B6B6B] sm:text-lg">
                Ao acessar nossa plataforma, você concorda com os termos abaixo. Leia atentamente.
              </p>
              <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#0A0A0A] to-[#0A0A0A]/40" />
            </div>

            <div className="space-y-8 rounded-3xl border border-[#E0E0E0]/60 bg-[#F5F5F5]/60 p-8 shadow-lg backdrop-blur-xl sm:p-10">
              <p className="font-sans text-base leading-relaxed text-[#6B6B6B]">
                Bem-vindo ao <span className="font-semibold text-[#0A0A0A]">Postable</span>. Ao acessar e utilizar nossa plataforma de criação de conteúdo estratégico disponível em nosso domínio principal, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
              </p>

              <section className="rounded-2xl border border-[#E0E0E0]/40 bg-[#F5F5F5]/50 p-6">
                <h2 className="font-heading mb-4 flex items-center text-lg font-semibold text-[#0A0A0A]">
                  <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#0A0A0A]" />
                  Aceitação dos Termos
                </h2>
                <p className="font-sans text-base leading-relaxed text-[#6B6B6B]">
                  Ao acessar e utilizar o Postable, você confirma que leu, compreendeu e concorda em estar vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso serviço. O uso continuado da aplicação implica aceitação de quaisquer alterações feitas nestes termos.
                </p>
              </section>

              <section className="rounded-2xl border border-[#E0E0E0]/40 bg-[#F5F5F5]/50 p-6">
                <h2 className="font-heading mb-4 flex items-center text-lg font-semibold text-[#0A0A0A]">
                  <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#0A0A0A]" />
                  Uso do Serviço
                </h2>
                <p className="font-sans text-base leading-relaxed text-[#6B6B6B]">
                  O Postable é uma plataforma de criação de conteúdo estratégico. Você concorda em utilizar o serviço apenas para fins legais e de acordo com estes termos. É proibido:
                </p>
                <ul className="mt-4 space-y-2 text-base leading-relaxed text-[#6B6B6B]">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#0A0A0A]" />
                    <span className="font-sans">Utilizar o serviço para qualquer finalidade ilegal ou não autorizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#0A0A0A]" />
                    <span className="font-sans">Tentar obter acesso não autorizado a qualquer parte do serviço</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#0A0A0A]" />
                    <span className="font-sans">Interferir ou interromper o funcionamento do serviço</span>
                  </li>
                </ul>
              </section>

              <section className="rounded-2xl border border-[#E0E0E0]/40 bg-[#F5F5F5]/50 p-6">
                <h2 className="font-heading mb-4 flex items-center text-lg font-semibold text-[#0A0A0A]">
                  <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#0A0A0A]" />
                  Privacidade e Segurança
                </h2>
                <p className="font-sans text-base leading-relaxed text-[#6B6B6B]">
                  A proteção de seus dados é nossa prioridade. Para mais detalhes sobre como coletamos, usamos e protegemos suas informações, consulte nossa{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-[#0A0A0A] underline decoration-[#0A0A0A]/30 transition-colors hover:text-[#0A0A0A]/80 hover:decoration-[#0A0A0A]/60"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </section>

              <section className="rounded-2xl border border-[#E0E0E0]/40 bg-[#F5F5F5]/50 p-6">
                <h2 className="font-heading mb-4 flex items-center text-lg font-semibold text-[#0A0A0A]">
                  <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#0A0A0A]" />
                  Limitação de Responsabilidade
                </h2>
                <p className="font-sans text-base leading-relaxed text-[#6B6B6B]">
                  O Postable é fornecido "como está" e "conforme disponível". Não garantimos que o serviço será ininterrupto, seguro ou livre de erros. Na extensão máxima permitida por lei:
                </p>
                <ul className="mt-4 space-y-2 text-base leading-relaxed text-[#6B6B6B]">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#0A0A0A]" />
                    <span className="font-sans">Não nos responsabilizamos por decisões tomadas com base nas informações fornecidas pelo aplicativo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#0A0A0A]" />
                    <span className="font-sans">Não somos responsáveis por perdas ou danos indiretos, incidentais ou consequentes</span>
                  </li>
                </ul>
                <p className="mt-4 font-sans text-base leading-relaxed text-[#6B6B6B]">
                  O Postable é uma plataforma interativa de criação de conteúdo estratégico.
                </p>
              </section>

              <section className="rounded-2xl border border-[#E0E0E0]/40 bg-[#F5F5F5]/50 p-6">
                <h2 className="font-heading mb-4 flex items-center text-lg font-semibold text-[#0A0A0A]">
                  <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#0A0A0A]" />
                  Modificações dos Termos
                </h2>
                <p className="font-sans text-base leading-relaxed text-[#6B6B6B]">
                  Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no aplicativo. Recomendamos que você revise periodicamente estes termos. O uso continuado do serviço após quaisquer modificações constitui sua aceitação dos novos termos.
                </p>
              </section>

              <section className="rounded-2xl border border-[#E0E0E0]/40 bg-[#F5F5F5]/50 p-6">
                <h2 className="font-heading mb-4 flex items-center text-lg font-semibold text-[#0A0A0A]">
                  <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#0A0A0A]" />
                  Lei Aplicável
                </h2>
                <p className="font-sans text-base leading-relaxed text-[#6B6B6B]">
                  Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada a estes termos será resolvida nos tribunais competentes do Brasil.
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
