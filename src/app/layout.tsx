import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["cyrillic", "latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Артур Марков | Руководитель отдела продаж",
  description:
    "Руководитель отдела продаж с 14-летним опытом в FMCG. Управление дистрибьюцией с оборотом до 10 млрд ₽. Рост прибыли 15%.",
  openGraph: {
    title: "Артур Марков | Руководитель отдела продаж",
    description:
      "14+ лет опыта в FMCG. Управление каналами до 10 млрд ₽. Рост прибыли 15%.",
    type: "profile",
    locale: "ru_RU",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Артур Марков",
  givenName: "Артур",
  familyName: "Марков",
  jobTitle: "Руководитель отдела продаж",
  description:
    "Руководитель отдела продаж с 14-летним опытом в FMCG. Управление дистрибьюцией, рост прибыли, стратегия продаж.",
  birthDate: "1989-10-20",
  address: { "@type": "PostalAddress", addressLocality: "Москва, Россия" },
  email: "artmark2010@yandex.ru",
  telephone: "+79623036666",
  alumniOf: "Воронежский государственный университет инженерных технологий",
  knowsAbout: [
    "Управление продажами",
    "FMCG",
    "Дистрибьюция",
    "Стратегия продаж",
    "Управление командой",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-surface-950 text-text-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
