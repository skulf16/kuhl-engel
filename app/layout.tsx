import type { Metadata } from "next";
import { Karla, Instrument_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationGraph } from "@/lib/schema";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-karla",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kuhlundengel.de"),
  title: {
    default:
      "AVGS Jobcoaching Berlin & Potsdam – für Akademikerinnen & Akademiker · Kuhl & Engel",
    template: "%s · Kuhl & Engel",
  },
  description:
    "AZAV-zertifiziertes Jobcoaching für Akademikerinnen und Akademiker, Fach- und Führungskräfte: AVGS Coaching, Karrierecoaching, Bewerbungscoaching und Wiedereinstieg nach der Elternzeit – online, in Berlin, Potsdam und Augsburg. Mit AVGS-Gutschein 100 % kostenfrei.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AVGS Jobcoaching Berlin & Potsdam – für Akademikerinnen & Akademiker · Kuhl & Engel",
    description:
      "Systemisches Karrierecoaching für Akademikerinnen und Akademiker, Fach- und Führungskräfte. Mit AVGS-Gutschein zu 100 % kostenfrei – online, Berlin, Potsdam & Augsburg.",
    locale: "de_DE",
    type: "website",
    siteName: "Kuhl & Engel – Jobcoaching",
    images: [
      {
        url: "/images/ke-duo-lachen.jpg",
        alt: "Heike Kuhl und Martina Engel-Fürstberger, Gründerinnen von Kuhl & Engel Jobcoaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVGS Jobcoaching Berlin & Potsdam · Kuhl & Engel",
    description:
      "Systemisches Karrierecoaching für Akademikerinnen und Akademiker. Mit AVGS-Gutschein 100 % kostenfrei – online, Berlin, Potsdam & Augsburg.",
    images: ["/images/ke-duo-lachen.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${karla.variable} ${instrument.variable}`}>
      <body>
        <JsonLd data={organizationGraph} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
