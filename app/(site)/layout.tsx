import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationGraph } from "@/lib/schema";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={organizationGraph} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
