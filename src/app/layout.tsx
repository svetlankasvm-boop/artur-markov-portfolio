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
  title: "Артур Марков | Коммерческий директор FMCG",
  description:
    "14 лет в FMCG: от регионального менеджера до коммерческого директора. Управление дистрибьюцией с оборотом до 10 млрд ₽.",
  openGraph: {
    title: "Артур Марков | Коммерческий директор FMCG",
    description:
      "14 лет в FMCG: от регионального менеджера до коммерческого директора. Управление дистрибьюцией до 10 млрд ₽.",
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
  jobTitle: "Коммерческий директор, Head of Sales",
  description:
    "14 лет в FMCG. Управление дистрибьюцией с оборотом до 10 млрд ₽. 150+ партнёров, команды до 20 человек.",
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
