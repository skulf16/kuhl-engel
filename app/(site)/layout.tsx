import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationGraph } from "@/lib/schema";
import { getKontakt } from "@/lib/content";

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const kontakt = await getKontakt();
  return (
    <>
      <JsonLd data={organizationGraph} />
      <Header kontakt={kontakt} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
