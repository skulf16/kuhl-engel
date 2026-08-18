/**
 * Startseiten-Texte und -Bilder als Default-Inhalt.
 * Diese Werte greifen, solange im Admin nichts anderes gespeichert wurde –
 * die Website funktioniert also auch ganz ohne Datenbank.
 */

export type StartseiteContent = {
  hero: {
    image: string;
    badge: string;
    headline1: string;
    headline2: string;
    subline: string;
    ctaLabel: string;
  };
  positionierung: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    text: string;
    bullets: string[];
    linkLabel: string;
    imageMain: string;
    imageSmall: string;
  };
  weiche: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
  };
  methode: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
    steps: { step: string; title: string; text: string }[];
    quote: string;
    quoteAuthor: string;
  };
  gruenderinnen: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    text: string;
    image: string;
    linkLabel: string;
  };
  coaches: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
    outro: string;
    linkLabel: string;
  };
  stimmen: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    ratingNote: string;
  };
  faq: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    outro: string;
  };
};

export const STARTSEITE_DEFAULTS: StartseiteContent = {
  hero: {
    image: "/images/ke-duo-fenster.jpg",
    badge: "100 % AVGS-zertifiziert · Online · Berlin · Potsdam · Augsburg",
    headline1: "Den richtigen Weg finden.",
    headline2: "Beruflich und persönlich.",
    subline:
      "AVGS-gefördertes Jobcoaching bei Kuhl & Engel, spezialisiert auf Akademiker:innen, und Berufsorientierung für Schulen, Lehrkräfte und Kooperationspartner. Zwei Wege, ein Klick:",
    ctaLabel: "Meinen Weg wählen",
  },
  positionierung: {
    eyebrow: "Spezialisiert auf Akademiker:innen",
    headline: "Anspruchsvolle Laufbahnen brauchen",
    headlineEm: "anspruchsvolles Coaching.",
    text: "Studium, Promotion, Verantwortung – und trotzdem die Frage: War das schon alles? Mit langjähriger Erfahrung und maßgeschneidertem Ansatz begleiten wir Akademiker:innen auf dem Weg zu einem Beruf, der wirklich passt. Kein Schema F, sondern ein Prozess auf der Höhe Deines Werdegangs.",
    bullets: [
      "Stärken und Talente präzise erkennen",
      "Klarheit über das, was Du wirklich willst",
      "Langfristig und groß denken",
      "Begleitung in Deinem Tempo",
    ],
    linkLabel: "Lern uns kennen",
    imageMain: "/images/ke-heike-tisch.jpg",
    imageSmall: "/images/raum.jpg",
  },
  weiche: {
    eyebrow: "Unsere zwei Bereiche",
    headline: "Zwei Wege,",
    headlineEm: "ein Ziel: Orientierung, die trägt.",
    intro:
      "Ein Klick führt direkt zum passenden Angebot – für Jobsuchende oder für Schulen, Lehrkräfte und Kooperationspartner.",
  },
  methode: {
    eyebrow: "Unsere Methode",
    headline: "Systemisch. Ganzheitlich.",
    headlineEm: "Nachhaltig.",
    intro:
      "Du bist immer Teil von Systemen, die Du selbst mitgestaltest – eines Teams, einer Organisation, einer Familie. Deshalb schauen wir nicht nur auf Deinen Lebenslauf, sondern auf das Ganze: Gefühle, Gedanken, Verhalten und Kommunikation.",
    steps: [
      {
        step: "I",
        title: "Veränderung erarbeiten",
        text: "Neue Perspektiven, Werte und Kompetenzen entwickeln – mit kreativen Denkansätzen für berufliche und persönliche Herausforderungen.",
      },
      {
        step: "II",
        title: "Veränderung umsetzen",
        text: "Unterstützung und Motivation im Veränderungsprozess, kontinuierliche Begleitung unter Einbeziehung Deines persönlichen Umfelds.",
      },
      {
        step: "III",
        title: "Veränderung stabilisieren",
        text: "Berufliche und soziale Kompetenzen erweitern, Orientierung am Arbeitsmarkt stärken, Qualifizierungsbedarf identifizieren.",
      },
    ],
    quote: "„Welch eine himmlische Empfindung ist es, seinem Herzen zu folgen.“",
    quoteAuthor: "J. W. von Goethe",
  },
  gruenderinnen: {
    eyebrow: "Wer hinter Kuhl & Engel steht",
    headline: "Zwei Gründerinnen, ein Anspruch:",
    headlineEm: "Berufung statt Beruf.",
    text: "Von zwei Frauen gegründet: Hinter uns steht ein Team von 14 erfahrenen Coach:innen – mit eigenen Brüchen, Neustarts und Karrieren. Statt höher, schneller, weiter plädieren wir für selbstbestimmt, verbunden und erfüllt. Im Erstgespräch findest Du heraus, wer am besten zu Dir passt.",
    image: "/images/ke-duo-lachen.jpg",
    linkLabel: "Das ganze Team kennenlernen",
  },
  coaches: {
    eyebrow: "Dein Team",
    headline: "14 Coach:innen.",
    headlineEm: "Wer passt zu Dir?",
    intro:
      "Systemisch ausgebildet, mit eigenen Karrierewegen, Brüchen und Neustarts – im Erstgespräch findest Du heraus, wer zu Dir passt.",
    outro: "… und acht weitere Kolleg:innen.",
    linkLabel: "Alle Coach:innen kennenlernen",
  },
  stimmen: {
    eyebrow: "Stimmen unserer Klient:innen",
    headline: "Ergebnisse, die",
    headlineEm: "für sich sprechen.",
    ratingNote: "5,0 ★ · 25 Google-Bewertungen",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    headline: "Gut zu",
    headlineEm: "wissen.",
    outro: "Deine Frage war nicht dabei? Ruf uns an:",
  },
};
