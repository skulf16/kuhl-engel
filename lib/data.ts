export const CONTACT = {
  phone: "030 51565388-0",
  phoneHref: "tel:+4930515653880",
  email: "info@kuhlundengel.de",
};

/** Kennzahlen-Band der Startseite. */
export const STATS = [
  { value: "6.555", label: "Unterrichtseinheiten Coaching" },
  { value: "14", label: "Coach:innen im Team" },
  { value: "5,0", label: "★ Google-Bewertung" },
];

/** Kennzahlen Berufsorientierung (Zahlen von Heike, Stand 18.08.2026). */
export const BO_STATS = [
  { value: "53", label: "Schulprojekte seit 2016" },
  { value: "4.133", label: "Schüler:innen gecoacht" },
  { value: "13", label: "Schulen allein 2025" },
];

/** Die zwei fokussierten Geschäftsbereiche – Basis der „Zwei-Wege-Weiche“. */
export type Bereich = {
  slug: string;
  kicker: string;
  title: string;
  claim: string;
  text: string;
  points: string[];
  cta: string;
  image: string;
};

export const BEREICHE: Bereich[] = [
  {
    slug: "/avgs-coaching",
    kicker: "Für Akademiker:innen",
    title: "AVGS Jobcoaching",
    claim: "Mit AVGS-Gutschein 100 % kostenfrei",
    text: "Du willst beruflich neu durchstarten, nach der Elternzeit wieder einsteigen oder sicher in Bewerbungen gehen? Unser AVGS-zertifiziertes Jobcoaching begleitet Dich – finanziert über den AVGS-Gutschein der Agentur für Arbeit.",
    points: [
      "Orientierung, Bewerbung & Wiedereinstieg",
      "Erfahrene Coach:innen an Deiner Seite",
      "Wir übernehmen den Papierkram",
    ],
    cta: "Zum AVGS Jobcoaching",
    image: "/images/ke-einzelcoaching.jpg",
  },
  {
    slug: "/berufsorientierung",
    kicker: "Für Schulen, Lehrkräfte & Partner",
    title: "Berufsorientierung für Jugendliche",
    claim: "Mein Berufseinstieg – seit über 15 Jahren",
    text: "Du möchtest Deine Schüler:innen bei der Berufs- und Studienwahl unterstützen? Wir begleiten junge Menschen dabei, ihre Stärken zu erkennen und den Weg zu finden, der wirklich zu ihnen passt.",
    points: [
      "Gruppenprojekte an Deiner Schule",
      "Einzelcoaching für Schüler:innen",
      "Materialien für den Berufsstart",
    ],
    cta: "Zur Berufsorientierung",
    image: "/images/jugend-lachen-duo.jpg",
  },
];

/** Unterangebote des AVGS-Jobcoaching-Bereichs (Pillar → Detail). */
export type Leistung = {
  slug: string;
  nr: string;
  title: string;
  claim: string;
  text: string;
  image: string;
};

export const JOBCOACHING_LEISTUNGEN: Leistung[] = [
  {
    slug: "/avgs-coaching",
    nr: "01",
    title: "AVGS Coaching & Gutschein",
    claim: "Finanziert durch den AVGS-Gutschein",
    text: "Individuelles 1:1-Coaching mit dem Aktivierungs- und Vermittlungsgutschein – für Dich vollständig kostenfrei. Wir erklären Dir auch, wie Du den Gutschein bekommst.",
    image: "/images/ke-beratung.jpg",
  },
  {
    slug: "/karrierecoaching",
    nr: "02",
    title: "Karrierecoaching",
    claim: "Für Selbstzahler:innen & Unternehmen",
    text: "Wiedereinstieg nach der Elternzeit, Sichtbarkeit, Neuorientierung, der nächste Schritt: Coaches, die Deine Fragen aus eigener Erfahrung kennen.",
    image: "/images/ke-frauen.jpg",
  },
  {
    slug: "/jobcoaching-berlin",
    nr: "03",
    title: "Jobcoaching Berlin",
    claim: "Prenzlauer Berg & online",
    text: "AVGS Coaching in der Bötzowstraße 28 – oder online. Systemisch, individuell und auf Augenhöhe.",
    image: "/images/ke-berlin-fenster.jpg",
  },
  {
    slug: "/jobcoaching-potsdam",
    nr: "04",
    title: "Jobcoaching Potsdam",
    claim: "Nördliche Innenstadt & online",
    text: "AVGS Coaching in der Gutenbergstraße 87, nahe Holländisches Viertel – oder online, ganz wie es zu Dir passt.",
    image: "/images/ke-tisch-beratung.jpg",
  },
];

/** Angebote der Berufsorientierung für Jugendliche. */
export const JUGEND_ANGEBOTE: Leistung[] = [
  {
    slug: "/berufsorientierung/gruppenangebote",
    nr: "01",
    title: "Schulklassen",
    claim: "Für Schulen in Berlin & Brandenburg",
    text: "„Mein Berufseinstieg“: unser 2- bis 2,5-tägiges Coaching-Seminar für ganze Schulklassen – in Brandenburg über PraxisBO förderfähig.",
    image: "/images/jugend-klasse-draussen.jpg",
  },
  {
    slug: "/berufsorientierung/einzelcoaching",
    nr: "02",
    title: "Einzelcoaching",
    claim: "Für Schüler:innen & Abiturient:innen",
    text: "Ein geschützter Raum für junge Menschen: In vier Sitzungen finden wir die berufliche Richtung, lösen Blockaden und entwickeln konkrete Ziele.",
    image: "/images/ke-jugend-einzel.jpg",
  },
  {
    slug: "/berufsorientierung/berufsstart",
    nr: "03",
    title: "Hilfreiches für den Berufsstart",
    claim: "Videos & Materialien zum Weitergeben",
    text: "Berufe im Video-Check, Bewerbungs- und Lebenslauf-Beispiele, Ausbildungsbörsen und Infos zu Studium & Ausbildung – zum direkten Weitergeben an Schüler:innen.",
    image: "/images/jugend-tisch-lachen.jpg",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  quali: string;
  image: string;
  quote?: string;
};

export const FOUNDERS: TeamMember[] = [
  {
    name: "Heike Kuhl",
    role: "Gründerin · Standortmanagerin Berlin",
    quali:
      "Systemisch-integrative Coachin, Systemische Paarcoachin, Systemische Familien-Sozialtherapeutin, Seminarleiterin",
    image: "/images/ke-team-heike.jpg",
    quote:
      "In unserer sich verändernden Arbeitswelt brauchen wir Menschen, die sich selbst gut kennen, aus ihrer Leidenschaft handeln und sich mit Resilienz führen können. Dafür sorgen wir!",
  },
  {
    name: "Martina Engel-Fürstberger",
    role: "Gründerin · Standortmanagerin Potsdam",
    quali:
      "Zertifizierte Lehr- und Senior-Coachin DCV, IOBC, freie Dozentin für Psychopathologie, Seminar- und Ausbildungsleiterin",
    image: "/images/ke-team-martina.jpg",
    quote:
      "Mich erfüllt es mit unglaublich viel Freude zu sehen, wie ein:e Klient:in sich im Coaching die eigene Zukunft sinnhaft gestaltet und Selbstvertrauen gewinnt.",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Anna Podakova",
    role: "Assistentin der Geschäftsführung",
    quali: "Deine Ansprechpartnerin für alle Fragen rund um Dein Coaching",
    image: "/images/team-anna-podakova.jpg",
    quote:
      "Ich übernehme den Kontakt mit der Agentur oder dem Jobcenter für dich, sodass du dich ganz auf dich und deinen Prozess konzentrieren kannst.",
  },
  {
    name: "Bettina Brammer",
    role: "Potsdam & online",
    quali: "Systemische Coachin, Berufscoachin, Heilpraktikerin für Psychotherapie",
    image: "/images/team-bettina-brammer.jpg",
    quote:
      "Ich erlebe Coaching als eine intensive Begegnung zwischen zwei Menschen – geprägt von Offenheit, Vertrauen und gegenseitiger Wertschätzung.",
  },
  {
    name: "Grit Staroste",
    role: "Potsdam & online",
    quali: "Systemisch-integrative Coachin",
    image: "/images/team-grit-staroste.jpg",
    quote:
      "Schritt für Schritt habe ich erkannt, was mir wirklich wichtig ist. Diese tolle Erfahrung gebe ich gern weiter.",
  },
  {
    name: "Carmen Daum",
    role: "Online",
    quali:
      "Systemisch-integrative Coachin, Heilpraktikerin für Psychotherapie, Mediation",
    image: "/images/team-carmen-daum.jpg",
    quote:
      "Das Leben ist viel zu wertvoll für Jobs, die uns unglücklich machen.",
  },
  {
    name: "Wanda Wolff",
    role: "Potsdam & online",
    quali: "Systemische Coachin",
    image: "/images/team-wanda-wolff.jpg",
    quote:
      "Ich begleite dich auf deinem Weg der Selbsterkenntnis – mit Humor und Tiefgründigkeit.",
  },
  {
    name: "Matthias Fink",
    role: "Augsburg & online · auch auf Englisch und Französisch",
    quali: "Systemisch-integrativer Coach",
    image: "/images/team-matthias-fink.jpg",
    quote:
      "Wenn wir auseinandergehen, hast du wieder einen klaren Weg vor Augen, der sich genau richtig anfühlt – weil es dein individueller Weg ist.",
  },
  {
    name: "Manuela Frank",
    role: "Online",
    quali:
      "Systemisch-integrative Coachin, Mediatorin, Heilpraktikerin für Psychotherapie",
    image: "/images/team-manuela-frank.jpg",
    quote:
      "Als deine Vertrauensperson stehe ich dir in einem geschützten Raum zur Seite und begleite dich dabei, deinen eigenen Weg zu erkennen.",
  },
  {
    name: "Angelina Werner",
    role: "Berlin & online",
    quali: "Systemisch-integrative Coachin, Job- und Karrierecoach, Hypnosecoach",
    image: "/images/team-angelina-werner.jpg",
    quote:
      "Ich möchte Menschen einen vertrauensvollen Raum geben, in dem sie sich öffnen, neugierig forschen und in die Tiefe gehen können.",
  },
  {
    name: "Anna-Sophie Börries",
    role: "Online",
    quali: "EASC-zertifizierte Coachin, Holistic Coachin",
    image: "/images/team-anna-sophie-boerries.jpg",
    quote:
      "Ich unterstütze dich dabei, das zu lösen, was dich noch blockiert, dein Potenzial zu entfalten und das zu stärken, was dich wirklich erfüllt.",
  },
  {
    name: "Dominique Günther",
    role: "Online",
    quali: "Systemisch-integrative Coachin, Spirituelle Coachin",
    image: "/images/team-dominique-guenther.jpg",
    quote:
      "Durch das gemeinsame Herausfinden deiner Fähigkeiten und Werte begleite ich dich bei deinem beruflichen Neustart.",
  },
  {
    name: "Dr. Anna Mandel-Zakharova, Ph.D.",
    role: "Potsdam & online · auch auf Englisch und Russisch",
    quali: "Systemisch-integrative Coachin, Neurowissenschaftlerin",
    image: "/images/team-anna-mandel-zakharova.jpg",
    quote:
      "Als Coachin und Neurowissenschaftlerin unterstütze ich Sie gezielt bei Ihrer beruflichen und persönlichen Weiterentwicklung.",
  },
  {
    name: "Carmen Pilger",
    role: "Berlin & online · auch auf Englisch",
    quali: "Systemisch-integrative Coachin und Aufstellerin",
    image: "/images/team-carmen-pilger.jpg",
    quote:
      "Stimmige Entwicklung entsteht, wenn Menschen sich authentisch an ihren eigenen Werten und Bedürfnissen ausrichten können.",
  },
];

/** Optionen für den AVGS-Buchungsfunnel. */
export const FUNNEL_GUTSCHEIN = [
  { value: "ja", label: "Ja, habe ich", hint: "Perfekt – es kann schnell losgehen." },
  { value: "nein", label: "Nein, noch nicht", hint: "Kein Problem – wir zeigen Dir, wie Du ihn bekommst." },
  { value: "selbstzahler", label: "Ich zahle selbst", hint: "Sehr gut – wir erstellen Dir gerne ein Angebot." },
];

export const FUNNEL_THEMEN = [
  { value: "orientierung", label: "Berufliche Orientierung finden" },
  { value: "bewerbung", label: "Bewerbung & Vorstellungsgespräch" },
  { value: "wiedereinstieg", label: "Wiedereinstieg nach Elternzeit oder Pause" },
  { value: "neustart", label: "Kompletter beruflicher Neustart" },
  { value: "selbstvertrauen", label: "Mehr Selbstvertrauen & Klarheit" },
  { value: "unsicher", label: "Ich bin mir noch nicht sicher" },
];

export const FUNNEL_ORTE = [
  { value: "online", label: "Online", hint: "deutschlandweit via Zoom" },
  { value: "berlin", label: "Berlin", hint: "Bötzowstraße 28" },
  { value: "potsdam", label: "Potsdam", hint: "Gutenbergstraße 87" },
  { value: "augsburg", label: "Augsburg", hint: "Mauerberg 26" },
];

export const FUNNEL_ZEIT = ["9:00–12:00 Uhr", "12:00–18:00 Uhr", "nach 18:00 Uhr"];

export type Testimonial = {
  quote: string;
  author: string;
  meta?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Durch das Coaching habe ich über andere und mich neue Sichtweisen in der Wahrnehmung und Kommunikation erhalten. Ich habe in den Einzelstunden gefühlt mehr über das Agieren von Teams verstanden als in zurückliegenden Jahren.",
    author: "Dr. Jana Hembold-Doyé",
    meta: "Coaching bei Martina Engel-Fürstberger",
  },
  {
    quote:
      "Coaching war eine großartige Erfahrung und hat mir jetzt und langfristig sehr geholfen. Ich würde Kuhl & Engel jedem empfehlen, der professionelles und qualitativ hochwertiges Coaching sucht!",
    author: "Franziska M.",
    meta: "AVGS Coaching",
  },
  {
    quote:
      "Sehr ganzheitlich, mit viel Empathie und gleichzeitig professionell und strukturiert. Ich habe schnell Fortschritte festgestellt: mehr Klarheit, mehr Selbstvertrauen und konkrete nächste Schritte – plus einen Plan für meine berufliche Zukunft.",
    author: "Nina",
    meta: "Berufliche Perspektive & Weiterentwicklung",
  },
  {
    quote:
      "Die Mitarbeiterin im Büro war klar, schnell, kompetent und dabei herzlich – und hat die perfekt zu mir passende Coachin empfohlen. Mein Coaching war eine riesen Bereicherung!",
    author: "Isabell P.",
    meta: "AVGS Coaching",
  },
];

export type Faq = { q: string; a: string };

export const FAQS_AVGS: Faq[] = [
  {
    q: "Ich habe einen AVGS. Wie ist das Procedere?",
    a: "Wir telefonieren und finden gemeinsam heraus, welche:r Coach:in zu Dir passt. Nach einem kostenlosen Erstgespräch (20–30 Minuten) entscheidest Du, ob Du das Coaching machen möchtest. Du schickst uns Deinen AVGS, wir füllen den Gutschein aus und übernehmen die gesamte Korrespondenz mit der Agentur oder dem Jobcenter. Sobald die Bewilligung vorliegt, kann das Coaching beginnen.",
  },
  {
    q: "Was muss auf meinem AVGS stehen, damit ich ihn einlösen kann?",
    a: "Der AVGS muss noch mindestens 10 Tage gültig sein, mindestens 20 Unterrichtseinheiten umfassen und in Teilzeit ausgestellt sein. Wir können Gutscheine virtuell oder an unseren Standorten in Berlin, Potsdam und Augsburg annehmen.",
  },
  {
    q: "Wo kann ich gecoacht werden?",
    a: "Online – oder an unseren Standorten in Berlin, Potsdam und Augsburg. Eine hybride Form aus Coaching vor Ort und via Zoom ist ebenfalls möglich.",
  },
  {
    q: "Wie viele Stunden umfasst das AVGS Coaching?",
    a: "Je nach Bewilligung 24 Unterrichtseinheiten in 6 Wochen, 32 UE in 8 Wochen oder 44 UE in 11 Wochen (1 UE = 45 Minuten). Welcher Umfang zu Deinem Anliegen passt, klären wir im kostenlosen Erstgespräch – beantragt wird er über Deinen AVGS.",
  },
  {
    q: "Ich habe keinen AVGS. Kann ich trotzdem zu euch kommen?",
    a: "Ja, unbedingt. Ruf uns einfach an – wir schauen uns gemeinsam Deine Situation an und finden eine individuelle Lösung.",
  },
];

export type Standort = {
  city: string;
  label: string;
  address: string[];
  image: string;
  href?: string;
  note?: string;
};

export const STANDORTE: Standort[] = [
  {
    city: "Online",
    label: "Deutschlandweit",
    address: ["Online-Coaching", "via Zoom – auch hybrid"],
    image: "/images/ke-martina-laptop.jpg",
  },
  {
    city: "Berlin",
    label: "Prenzlauer Berg",
    address: ["Bötzowstraße 28", "10407 Berlin"],
    image: "/images/standort-berlin-stuehle.jpg",
    href: "/jobcoaching-berlin",
  },
  {
    city: "Potsdam",
    label: "Nördliche Innenstadt",
    address: ["Gutenbergstraße 87", "14467 Potsdam"],
    image: "/images/standort-potsdam.jpg",
    href: "/jobcoaching-potsdam",
  },
  {
    city: "Augsburg",
    label: "Altstadt",
    address: ["Mauerberg 26", "86152 Augsburg"],
    image: "/images/standort-augsburg-aussen.jpg",
    href: "/jobcoaching-augsburg",
  },
];
