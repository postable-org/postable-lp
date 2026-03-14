import type { Metadata } from "next";
import { Inter, DM_Sans, Fraunces, Questrial, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const questrial = Questrial({
  weight: "400",
  variable: "--font-questrial",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Postable — Conteúdo estratégico que gera leads",
  description:
    "Postable analisa seus concorrentes locais, identifica os temas que eles ignoram e gera posts estratégicos para você ganhar visibilidade sem precisar de agência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${dmSans.variable} ${fraunces.variable} ${questrial.variable} ${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
