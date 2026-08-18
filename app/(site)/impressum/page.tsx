import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title={<>Impressum</>} />
      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <div className="space-y-10 leading-relaxed text-ink/75">
          <div>
            <h2 className="display text-2xl text-ink">
              Allgemeine Informationen (§ 5 Digitale-Dienste-Gesetz)
            </h2>
            <p className="mt-4">
              <strong className="text-ink">Herausgeber / Inhaltlich Verantwortliche / Inhaberinnen</strong>
              <br />
              Martina Engel-Fürstberger und Heike Kuhl
              <br />
              Kuhl & Engel – Jobcoaching
              <br />
              Karl-Kunger-Str. 1<br />
              12435 Berlin
            </p>
            <p className="mt-4">
              E-Mail:{" "}
              <a href="mailto:info@kuhlundengel.de" className="text-gold underline underline-offset-2">
                info@kuhlundengel.de
              </a>
              <br />
              Telefon: 030 51565388-0
              <br />
              Steuernummer: 36/277/02362
            </p>
            <p className="mt-4">Kuhl & Engel ist eine Gesellschaft bürgerlichen Rechts.</p>
          </div>
          <div>
            <h2 className="display text-2xl text-ink">
              Verantwortlich für journalistisch-redaktionelle Inhalte (§ 18 Abs. 2 MStV)
            </h2>
            <p className="mt-4">
              Martina Engel-Fürstberger und Heike Kuhl, Anschrift wie oben.
            </p>
          </div>
          <div>
            <h2 className="display text-2xl text-ink">Verbraucherstreitbeilegung</h2>
            <p className="mt-4">
              Wir sind nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen (§ 36 VSBG).
            </p>
          </div>
          <div>
            <h2 className="display text-2xl text-ink">Haftungshinweis</h2>
            <p className="mt-4">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen die
              Webseitenbetreiberinnen keine Haftung für die Inhalte externer Links.
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren
              Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
