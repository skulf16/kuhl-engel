import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { type Faq } from "@/lib/data";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AVGS-Gutschein beantragen – so bekommen Sie die Förderung",
  description:
    "AVGS beantragen in 5 Schritten: Wer den Aktivierungs- und Vermittlungsgutschein bekommt, wie das Gespräch bei Agentur für Arbeit oder Jobcenter läuft und worauf Sie beim Gutschein achten müssen – damit Ihr Jobcoaching 100 % kostenfrei ist.",
  path: "/avgs-gutschein-beantragen",
  image: "/images/coaching-4.jpg",
  imageAlt: "Coaching-Gespräch bei Kuhl & Engel",
});

const FAQS_AVGS_GUIDE: Faq[] = [
  {
    q: "Was ist ein AVGS (Aktivierungs- und Vermittlungsgutschein)?",
    a: "Der AVGS ist ein Förderinstrument nach § 45 SGB III: Mit dem Gutschein übernimmt die Agentur für Arbeit oder das Jobcenter die Kosten für Maßnahmen, die Ihre beruflichen Chancen verbessern – zum Beispiel ein individuelles Jobcoaching bei einem AZAV-zertifizierten Träger wie Kuhl & Engel. Für Sie ist das Coaching dann zu 100 % kostenfrei.",
  },
  {
    q: "Wer bekommt einen AVGS?",
    a: "Einen AVGS können Personen erhalten, die arbeitslos oder arbeitssuchend gemeldet sind – egal ob mit Arbeitslosengeld I (Agentur für Arbeit) oder Bürgergeld (Jobcenter). Auch wer von Arbeitslosigkeit bedroht ist, etwa in der Kündigungsfrist oder in Elternzeit ohne Rückkehroption, kann den Gutschein bekommen. Die Bewilligung ist in der Regel eine Ermessensentscheidung Ihrer Vermittlerin oder Ihres Vermittlers – eine gute Begründung erhöht Ihre Chancen deutlich.",
  },
  {
    q: "Wie beantrage ich den AVGS?",
    a: "Vereinbaren Sie einen Termin bei Ihrer Agentur für Arbeit oder Ihrem Jobcenter (telefonisch, online über die eServices oder persönlich) und äußern Sie den Wunsch nach einem Einzelcoaching. Begründen Sie konkret, wobei das Coaching Sie unterstützen soll – zum Beispiel berufliche Orientierung, Bewerbungsstrategie oder Wiedereinstieg nach der Elternzeit. Der Gutschein wird dann direkt ausgestellt oder Ihnen zugeschickt.",
  },
  {
    q: "Welche AVGS-Varianten gibt es?",
    a: "Es gibt drei Varianten: den AVGS MAT für Maßnahmen bei einem zertifizierten Träger (dazu zählt Jobcoaching), den AVGS MAG für betriebliche Erprobungen und den AVGS MPAV für private Arbeitsvermittlung. Für ein Jobcoaching bei Kuhl & Engel brauchen Sie einen AVGS für Maßnahmen bei einem Träger (MAT).",
  },
  {
    q: "Was muss auf dem Gutschein stehen, damit ich ihn bei Kuhl & Engel einlösen kann?",
    a: "Der Gutschein muss noch mindestens 10 Tage gültig sein, mindestens 20 Unterrichtseinheiten umfassen und in Teilzeit ausgestellt sein. Ob Ihr Gutschein passt, prüfen wir gern kostenlos – schicken Sie ihn uns einfach oder rufen Sie an: 030 51565388-0.",
  },
  {
    q: "Kann der Antrag abgelehnt werden – und was mache ich dann?",
    a: "Ja, der AVGS ist meist eine Ermessensleistung. Bei einer Ablehnung lohnt es sich nachzufassen: Bitten Sie um eine schriftliche Begründung, konkretisieren Sie Ihren Unterstützungsbedarf (z. B. ausbleibende Rückmeldungen auf Bewerbungen, unklare berufliche Richtung) und stellen Sie den Antrag erneut. Wir beraten Sie im kostenlosen Erstgespräch, wie Sie Ihr Anliegen überzeugend formulieren.",
  },
  {
    q: "Was kostet mich das Coaching mit AVGS?",
    a: "Nichts. Mit einem gültigen AVGS-Gutschein rechnet Kuhl & Engel direkt mit der Agentur für Arbeit oder dem Jobcenter ab – Ihnen entstehen keinerlei Kosten, auch nicht für das Erstgespräch oder die Abwicklung.",
  },
  {
    q: "Wie lange ist der AVGS gültig?",
    a: "Die Gültigkeit steht auf Ihrem Gutschein – üblich sind ein bis drei Monate ab Ausstellung. Warten Sie nach Erhalt nicht zu lange: Für die Einlösung bei uns muss der Gutschein noch mindestens 10 Tage gültig sein. Melden Sie sich am besten direkt nach der Ausstellung.",
  },
];

const SCHRITTE = [
  {
    title: "Termin vereinbaren",
    text: "Kontaktieren Sie Ihre Agentur für Arbeit oder Ihr Jobcenter – telefonisch, über die eServices oder persönlich. Sie müssen dafür nicht auf den nächsten Regeltermin warten.",
  },
  {
    title: "Coaching-Wunsch begründen",
    text: "Sagen Sie konkret, wobei Sie ein Einzelcoaching unterstützen soll: berufliche Orientierung, Bewerbungsstrategie, Vorstellungsgespräche oder der Wiedereinstieg nach der Elternzeit. Je klarer Ihr Anliegen, desto besser.",
  },
  {
    title: "Gutschein prüfen",
    text: "Achten Sie darauf, dass der AVGS für Maßnahmen bei einem Träger (MAT) ausgestellt ist, mindestens 20 Unterrichtseinheiten umfasst und in Teilzeit ausgestellt wurde. Unsicher? Wir prüfen ihn kostenlos.",
  },
  {
    title: "Träger auswählen",
    text: "Den Gutschein lösen Sie bei einem AZAV-zertifizierten Träger Ihrer Wahl ein – zum Beispiel bei Kuhl & Engel in Berlin, Potsdam, Augsburg oder online. Im kostenlosen Erstgespräch finden Sie heraus, ob wir zu Ihnen passen.",
  },
  {
    title: "Wir übernehmen den Papierkram",
    text: "Sie schicken uns Ihren AVGS, wir erledigen die komplette Korrespondenz und Abrechnung mit Agentur oder Jobcenter. Nach der Bewilligung startet Ihr Coaching.",
  },
];

const ARGUMENTE = [
  "„Ich bekomme kaum Rückmeldungen auf meine Bewerbungen und möchte meine Unterlagen und Strategie professionell überarbeiten.“",
  "„Ich möchte nach der Elternzeit wieder einsteigen und brauche eine klare Positionierung für meinen Wiedereinstieg.“",
  "„Ich weiß nicht, in welche berufliche Richtung ich mich entwickeln soll, und möchte eine fundierte Standortbestimmung.“",
  "„Ich komme in Vorstellungsgesprächen nicht überzeugend rüber und möchte gezielt an meinem Auftreten arbeiten.“",
];

export default function AvgsGutscheinBeantragenPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: "AVGS-Gutschein beantragen: So bekommen Sie die Förderung für Ihr Jobcoaching",
          description:
            "Schritt-für-Schritt-Anleitung: Wer Anspruch auf den Aktivierungs- und Vermittlungsgutschein (AVGS) hat, wie Sie ihn bei Agentur für Arbeit oder Jobcenter beantragen und worauf Sie beim Einlösen achten müssen.",
          path: "/avgs-gutschein-beantragen",
          image: "/images/coaching-4.jpg",
          datePublished: "2026-07-10",
        })}
      />
      <JsonLd data={faqSchema(FAQS_AVGS_GUIDE, "/avgs-gutschein-beantragen")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "AVGS Coaching", path: "/avgs-coaching" },
          { name: "AVGS-Gutschein beantragen", path: "/avgs-gutschein-beantragen" },
        ])}
      />

      <PageHero
        eyebrow="Ratgeber · AVGS-Gutschein"
        title={
          <>
            Der AVGS-Gutschein – <em>so beantragen Sie ihn.</em>
          </>
        }
        intro="Mit dem Aktivierungs- und Vermittlungsgutschein zahlt die Agentur für Arbeit oder das Jobcenter Ihr komplettes Jobcoaching. Hier erfahren Sie, wer ihn bekommt, wie das Gespräch läuft und worauf Sie achten müssen."
        image="/images/coaching-4.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Was ist der AVGS-Gutschein?"
            answer="Der Aktivierungs- und Vermittlungsgutschein (AVGS) ist eine Förderung nach § 45 SGB III. Agentur für Arbeit oder Jobcenter übernehmen damit die vollen Kosten eines Jobcoachings bei einem AZAV-zertifizierten Träger. Beantragen können ihn Arbeitslose und Arbeitssuchende – auch Menschen in Kündigung oder Elternzeit. Die Ausstellung ist meist eine Ermessensentscheidung; eine konkrete Begründung erhöht die Chancen."
            facts={[
              { label: "Rechtsgrundlage", value: "§ 45 SGB III" },
              { label: "Kosten für Sie", value: "0 € – vollständig gefördert" },
              { label: "Richtige Variante", value: "AVGS MAT (Maßnahme bei einem Träger)" },
              { label: "Einlösbar bei", value: "Kuhl & Engel – Berlin, Potsdam, Augsburg, online" },
            ]}
          />
        </Reveal>
      </section>

      {/* Schritte */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            Schritt für Schritt
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            In fünf Schritten zum <em>geförderten Coaching.</em>
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {SCHRITTE.map((schritt, i) => (
            <Reveal key={schritt.title} delay={i * 100}>
              <li className="border-t border-ink/10 pt-6">
                <span className="display text-sm italic text-gold">
                  Schritt {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-3 text-xl md:text-2xl">{schritt.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{schritt.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Argumentationshilfe */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                Das Gespräch
              </p>
              <h2 className="display mt-6 text-3xl md:text-4xl">
                So begründen Sie Ihren <em>Coaching-Wunsch.</em>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                Ihre Vermittlerin oder Ihr Vermittler entscheidet nach
                Ermessen. Entscheidend ist, dass Ihr Unterstützungsbedarf
                konkret wird – nicht „ich hätte gern ein Coaching“, sondern ein
                klares Anliegen. Diese Formulierungen haben sich bewährt:
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="space-y-6">
                {ARGUMENTE.map((argument) => (
                  <li
                    key={argument}
                    className="border-l-2 border-gold bg-cream px-6 py-5 text-lg italic leading-relaxed text-ink/80"
                  >
                    {argument}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="display text-center text-4xl md:text-5xl">
            Häufige Fragen zum <em>AVGS.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12">
            <Accordion items={FAQS_AVGS_GUIDE} />
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-10 text-center text-lg text-ink/70">
            Gutschein schon in der Tasche?{" "}
            <Link href="/avgs-coaching" className="link-gold font-semibold text-gold">
              Hier geht es zu Ihrem AVGS Coaching →
            </Link>
          </p>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Unsicher, ob Sie die Voraussetzungen <em>erfüllen?</em>
          </>
        }
        text="Rufen Sie uns an – wir schauen kostenlos auf Ihre Situation und begleiten Sie durch die Beantragung."
      />
    </>
  );
}
