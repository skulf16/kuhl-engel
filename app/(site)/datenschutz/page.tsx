import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false },
  alternates: { canonical: "/datenschutz" },
};

/*
 * Neufassung 18.08.2026 – zugeschnitten auf die neue Website:
 * keine Cookies, kein Tracking, Fonts lokal, YouTube nur im
 * erweiterten Datenschutzmodus nach Klick, Formulare via mailto.
 * OFFEN vor Livegang: Hosting-Anbieter im Abschnitt „Hosting"
 * konkret benennen (Name, Anschrift, ggf. AV-Vertrag) und die
 * Erklärung juristisch prüfen lassen. Falls künftig Matomo,
 * Google Ads o. Ä. eingesetzt werden, müssen eigene Abschnitte
 * und ein Consent-Banner ergänzt werden.
 */

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="display mt-12 text-2xl text-ink">{children}</h2>
);

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title={<>Datenschutzerklärung</>} />
      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <div className="leading-relaxed text-ink/75">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln
            Ihre personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften (insbesondere der DSGVO) sowie
            dieser Datenschutzerklärung. Sie erläutert, welche Daten wir beim
            Besuch dieser Website erheben und wofür wir sie nutzen.
          </p>

          <H>Verantwortliche</H>
          <p className="mt-4">
            Martina Engel-Fürstberger und Heike Kuhl
            <br />
            Kuhl & Engel – Jobcoaching GbR
            <br />
            Karl-Kunger-Str. 1, 12435 Berlin
            <br />
            Telefon: 030 51565388-0 · E-Mail: info@kuhlundengel.de
          </p>

          <H>Keine Cookies, kein Tracking</H>
          <p className="mt-4">
            Diese Website setzt keine Cookies zu Analyse- oder Marketingzwecken
            ein und verwendet keine Tracking- oder Statistik-Dienste. Auch
            Schriftarten werden lokal von unserem Server geladen – beim Besuch
            der Website wird keine Verbindung zu Google Fonts oder anderen
            Drittanbietern aufgebaut.
          </p>

          <H>Hosting und Server-Logfiles</H>
          <p className="mt-4">
            Diese Website wird bei einem externen Dienstleister gehostet. Der
            Provider erhebt und speichert automatisch Informationen in
            sogenannten Server-Logfiles, die Ihr Browser automatisch
            übermittelt: Browsertyp und -version, verwendetes Betriebssystem,
            Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der
            Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit
            anderen Datenquellen erfolgt nicht. Die Verarbeitung erfolgt auf
            Grundlage von Art. 6 Abs. 1 lit. f DSGVO – unser berechtigtes
            Interesse liegt in der technisch fehlerfreien Darstellung und der
            Sicherheit dieser Website.
          </p>

          <H>SSL-/TLS-Verschlüsselung</H>
          <p className="mt-4">
            Diese Seite nutzt aus Sicherheitsgründen eine
            SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
            Sie daran, dass die Adresszeile des Browsers mit „https://" beginnt.
          </p>

          <H>Kontaktaufnahme</H>
          <p className="mt-4">
            Wenn Sie uns per E-Mail, Telefon oder über eines unserer
            Kontaktformulare kontaktieren, werden Ihre Angaben (z. B. Name,
            Telefonnummer, E-Mail-Adresse und Ihr Anliegen) zur Bearbeitung der
            Anfrage bei uns gespeichert. Unsere Formulare öffnen dazu Ihr
            E-Mail-Programm mit einer vorbereiteten Nachricht – die Übermittlung
            erfolgt über Ihren eigenen E-Mail-Anbieter. Die Verarbeitung erfolgt
            auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Anbahnung bzw.
            Erfüllung eines Vertrags) oder Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage). Wir geben
            diese Daten nicht ohne Ihre Einwilligung weiter und löschen sie,
            sobald sie für die Bearbeitung nicht mehr erforderlich sind und
            keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>

          <H>YouTube-Videos (erweiterter Datenschutzmodus)</H>
          <p className="mt-4">
            Auf einzelnen Seiten binden wir Videos von YouTube ein. Anbieter ist
            die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Irland. Wir nutzen den erweiterten Datenschutzmodus
            (youtube-nocookie.com): Beim Aufruf der Seite wird zunächst nur ein
            lokal gespeichertes Vorschaubild geladen und keine Verbindung zu
            YouTube hergestellt. Erst wenn Sie ein Video aktiv anklicken, wird
            eine Verbindung zu den Servern von Google aufgebaut; dabei können
            personenbezogene Daten (z. B. Ihre IP-Adresse) an Google übermittelt
            werden. Rechtsgrundlage ist Ihre Einwilligung durch den Klick
            (Art. 6 Abs. 1 lit. a DSGVO); sie ist jederzeit mit Wirkung für die
            Zukunft widerrufbar, indem Sie keine weiteren Videos abspielen.
            Google ist nach dem EU-US Data Privacy Framework zertifiziert.
            Weitere Informationen finden Sie in der Datenschutzerklärung von
            Google: https://policies.google.com/privacy
          </p>

          <H>Ihre Rechte</H>
          <p className="mt-4">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger und
            den Zweck der Verarbeitung sowie ein Recht auf Berichtigung,
            Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
            Widerspruch (Art. 15–21 DSGVO). Wenden Sie sich dazu einfach an die
            oben genannten Kontaktdaten. Außerdem haben Sie das Recht, sich bei
            einer Datenschutz-Aufsichtsbehörde zu beschweren – zuständig ist die
            Berliner Beauftragte für Datenschutz und Informationsfreiheit,
            Alt-Moabit 59–61, 10555 Berlin.
          </p>

          <H>Widerspruch gegen Werbe-E-Mails</H>
          <p className="mt-4">
            Der Nutzung der im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
            Werbung und Informationsmaterialien wird hiermit widersprochen. Die
            Betreiberinnen der Seiten behalten sich rechtliche Schritte im Falle
            der unverlangten Zusendung von Werbeinformationen, etwa durch
            Spam-E-Mails, vor.
          </p>

          <p className="mt-12 text-[0.85rem] text-ink/50">Stand: August 2026</p>
        </div>
      </section>
    </>
  );
}
