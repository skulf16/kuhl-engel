export const CONTACT = {
  phone: "030 51565388-0",
  phoneHref: "tel:+4930515653880",
  email: "info@kuhlundengel.de",
};

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
    slug: "/jobcoaching",
    kicker: "Für Erwachsene · Jobsuchende",
    title: "AVGS Jobcoaching",
    claim: "Mit AVGS-Gutschein 100 % kostenfrei",
    text: "Du willst beruflich neu durchstarten, Klarheit finden oder sicher in Bewerbungen gehen? Unser AVGS-zertifiziertes Jobcoaching begleitet Dich – finanziert über die Agentur für Arbeit.",
    points: [
      "Orientierung, Bewerbung & Karriere",
      "Berlin, Potsdam, Augsburg & online",
      "Wir übernehmen den Papierkram",
    ],
    cta: "Zum AVGS Jobcoaching",
    image: "/images/coaching-sq-2.jpg",
  },
  {
    slug: "/berufsorientierung",
    kicker: "Für Jugendliche & Schulen",
    title: "Berufsorientierung",
    claim: "Mein Berufseinstieg – seit über 10 Jahren",
    text: "Studium, Ausbildung oder duales Studium? Wir helfen jungen Menschen, ihre Stärken zu erkennen und den Weg zu finden, der wirklich zu ihnen passt.",
    points: [
      "Einzelcoaching für Schüler:innen",
      "Gruppenprojekte für Schulen",
      "Hilfreiches für den Berufsstart",
    ],
    cta: "Zur Berufsorientierung",
    image: "/images/jugend-quadrat.jpg",
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
    claim: "Zu 100 % staatlich gefördert",
    text: "Individuelles 1:1-Coaching mit dem Aktivierungs- und Vermittlungsgutschein – für Dich vollständig kostenfrei. Wir erklären Dir auch, wie Du den Gutschein bekommst.",
    image: "/images/coaching-sq-2.jpg",
  },
  {
    slug: "/jobcoaching-berlin",
    nr: "02",
    title: "Jobcoaching Berlin",
    claim: "Prenzlauer Berg & online",
    text: "AVGS Coaching in der Bötzowstraße 28 – oder online. Systemisch, individuell und auf Augenhöhe.",
    image: "/images/standort-berlin.jpg",
  },
  {
    slug: "/jobcoaching-potsdam",
    nr: "03",
    title: "Jobcoaching Potsdam",
    claim: "Nördliche Innenstadt & online",
    text: "AVGS Coaching in der Gutenbergstraße 87, nahe Holländisches Viertel – oder digital, ganz wie es zu Dir passt.",
    image: "/images/standort-potsdam.jpg",
  },
];

/** Angebote der Berufsorientierung für Jugendliche. */
export const JUGEND_ANGEBOTE: Leistung[] = [
  {
    slug: "/berufsorientierung/einzelcoaching",
    nr: "01",
    title: "Einzelcoaching",
    claim: "Für Schüler:innen & Abiturient:innen",
    text: "Dein geschützter Raum: In vier Sitzungen finden wir gemeinsam Deine berufliche Richtung, lösen Blockaden und entwickeln konkrete Ziele.",
    image: "/images/jugend-einzel.jpg",
  },
  {
    slug: "/berufsorientierung/gruppenangebote",
    nr: "02",
    title: "Gruppenangebote",
    claim: "Für Schulen in Berlin & Brandenburg",
    text: "„Mein Berufseinstieg“: unser 2- bis 2,5-tägiges Coaching-Seminar für ganze Klassen – in Brandenburg über PraxisBO förderfähig.",
    image: "/images/jugend-gruppe.jpg",
  },
  {
    slug: "/berufsorientierung/berufsstart",
    nr: "03",
    title: "Für den Berufsstart",
    claim: "Tipps, Links & Downloads",
    text: "Studium, Ausbildung oder duales Studium? Hilfreiche Infos, Lebenslauf-Vorlagen und Ausbildungsbörsen – alles an einem Ort.",
    image: "/images/jugend-beelitz-3.jpg",
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
    image: "/images/team-heike.jpg",
    quote:
      "In unserer sich verändernden Arbeitswelt brauchen wir Menschen, die sich selbst gut kennen, aus ihrer Leidenschaft handeln und sich mit Resilienz führen können. Dafür sorgen wir!",
  },
  {
    name: "Martina Engel-Fürstberger",
    role: "Gründerin · Standortmanagerin Potsdam",
    quali:
      "Zertifizierte Lehr- und Senior-Coachin DCV, IOBC, freie Dozentin für Psychopathologie, Seminar- und Ausbildungsleiterin",
    image: "/images/team-martina.jpg",
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
    role: "Potsdam & digital",
    quali: "Systemische Coachin, Berufscoachin, Heilpraktikerin für Psychotherapie",
    image: "/images/team-bettina-brammer.jpg",
    quote:
      "Ich erlebe Coaching als eine intensive Begegnung zwischen zwei Menschen – geprägt von Offenheit, Vertrauen und gegenseitiger Wertschätzung.",
  },
  {
    name: "Grit Staroste",
    role: "Potsdam & digital",
    quali: "Systemisch-integrative Coachin",
    image: "/images/team-grit-staroste.jpg",
    quote:
      "Schritt für Schritt habe ich erkannt, was mir wirklich wichtig ist. Diese tolle Erfahrung gebe ich gern weiter.",
  },
  {
    name: "Carmen Daum",
    role: "Digital",
    quali:
      "Systemisch-integrative Coachin, Heilpraktikerin für Psychotherapie, Mediation",
    image: "/images/team-carmen-daum.jpg",
    quote:
      "Das Leben ist viel zu wertvoll für Jobs, die uns unglücklich machen.",
  },
  {
    name: "Wanda Wolff",
    role: "Potsdam & digital",
    quali: "Systemische Coachin",
    image: "/images/team-wanda-wolff.jpg",
    quote:
      "Ich begleite dich auf deinem Weg der Selbsterkenntnis – mit Humor und Tiefgründigkeit.",
  },
  {
    name: "Saskia Sattler",
    role: "Digital · auch auf Englisch",
    quali: "DCV-zertifizierte Coachin",
    image: "/images/team-saskia-sattler.jpg",
    quote:
      "Coaching ist für mich eine Einladung zur Reflexion und zum Perspektivwechsel – ein Entwicklungsprozess hin zur persönlichen Entfaltung.",
  },
  {
    name: "Matthias Fink",
    role: "Augsburg & digital · auch auf Englisch und Französisch",
    quali: "Systemisch-integrativer Coach",
    image: "/images/team-matthias-fink.jpg",
    quote:
      "Wenn wir auseinandergehen, hast du wieder einen klaren Weg vor Augen, der sich genau richtig anfühlt – weil es dein individueller Weg ist.",
  },
  {
    name: "Manuela Frank",
    role: "Digital",
    quali:
      "Systemisch-integrative Coachin, Mediatorin, Heilpraktikerin für Psychotherapie",
    image: "/images/team-manuela-frank.jpg",
    quote:
      "Als deine Vertrauensperson stehe ich dir in einem geschützten Raum zur Seite und begleite dich dabei, deinen eigenen Weg zu erkennen.",
  },
  {
    name: "Angelina Werner",
    role: "Berlin & digital",
    quali: "Systemisch-integrative Coachin, Job- und Karrierecoach, Hypnosecoach",
    image: "/images/team-angelina-werner.jpg",
    quote:
      "Ich möchte Menschen einen vertrauensvollen Raum geben, in dem sie sich öffnen, neugierig forschen und in die Tiefe gehen können.",
  },
  {
    name: "Anna-Sophie Börries",
    role: "Digital",
    quali: "EASC-zertifizierte Coachin, Holistic Coachin",
    image: "/images/team-anna-sophie-boerries.jpg",
    quote:
      "Ich unterstütze dich dabei, das zu lösen, was dich noch blockiert, dein Potenzial zu entfalten und das zu stärken, was dich wirklich erfüllt.",
  },
  {
    name: "Dominique Günther",
    role: "Digital",
    quali: "Systemisch-integrative Coachin, Spirituelle Coachin",
    image: "/images/team-dominique-guenther.jpg",
    quote:
      "Durch das gemeinsame Herausfinden deiner Fähigkeiten und Werte begleite ich dich bei deinem beruflichen Neustart.",
  },
  {
    name: "Dr. Anna Mandel-Zakharova, Ph.D.",
    role: "Potsdam & digital · auch auf Englisch und Russisch",
    quali: "Systemisch-integrative Coachin, Neurowissenschaftlerin",
    image: "/images/team-anna-mandel-zakharova.jpg",
    quote:
      "Als Coachin und Neurowissenschaftlerin unterstütze ich Sie gezielt bei Ihrer beruflichen und persönlichen Weiterentwicklung.",
  },
  {
    name: "Carmen Pilger",
    role: "Berlin & digital · auch auf Englisch",
    quali: "Systemisch-integrative Coachin und Aufstellerin",
    image: "/images/team-carmen-pilger.jpg",
    quote:
      "Stimmige Entwicklung entsteht, wenn Menschen sich authentisch an ihren eigenen Werten und Bedürfnissen ausrichten können.",
  },
];

/** Optionen für den AVGS-Buchungsfunnel. */
export const FUNNEL_GUTSCHEIN = [
  { value: "ja", label: "Ja, habe ich", hint: "Perfekt – dann kann es schnell losgehen." },
  { value: "nein", label: "Nein, noch nicht", hint: "Kein Problem – wir zeigen Dir, wie Du ihn bekommst." },
  { value: "beantragung", label: "In Beantragung", hint: "Sehr gut – wir begleiten Dich durch den Rest." },
];

export const FUNNEL_THEMEN = [
  { value: "orientierung", label: "Berufliche Orientierung finden" },
  { value: "bewerbung", label: "Bewerbung & Vorstellungsgespräch" },
  { value: "wiedereinstieg", label: "Wiedereinstieg nach einer Pause" },
  { value: "neustart", label: "Kompletter beruflicher Neustart" },
  { value: "selbstvertrauen", label: "Mehr Selbstvertrauen & Klarheit" },
  { value: "unsicher", label: "Ich bin mir noch nicht sicher" },
];

export const FUNNEL_ORTE = [
  { value: "berlin", label: "Berlin", hint: "Bötzowstraße 28" },
  { value: "potsdam", label: "Potsdam", hint: "Gutenbergstraße 87" },
  { value: "augsburg", label: "Augsburg", hint: "Mauerberg 26" },
  { value: "online", label: "Online", hint: "deutschlandweit via Zoom" },
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
      "Nach zirka 30 Jahren der Selbständigkeit und Arbeit im mittleren bis höheren Management gelang meiner Coachin mit passgenauen Methoden, dass ich neue Erkenntnisse über mich gewann und sich von ganz allein ein Perspektivwechsel vollzog.",
    author: "Michael Jurischka",
    meta: "Berufliche Neuorientierung",
  },
  {
    quote:
      "Die Gespräche fanden auf Augenhöhe statt, waren wertschätzend und gleichzeitig lösungsorientiert. Ich habe mich jederzeit ernst genommen und verstanden gefühlt – eine rundum wertvolle und bereichernde Erfahrung.",
    author: "Armin S.",
    meta: "Google-Bewertung, 5 Sterne",
  },
];

export type Faq = { q: string; a: string };

export const FAQS_AVGS: Faq[] = [
  {
    q: "Ich habe einen AVGS. Wie ist das Procedere?",
    a: "Wir telefonieren und finden gemeinsam heraus, welche:r Coach:in zu dir passt. Nach einem kostenlosen Erstgespräch (20–30 Minuten) entscheidest du, ob du das Coaching machen möchtest. Du schickst uns deinen AVGS, wir füllen den Gutschein aus und übernehmen die gesamte Korrespondenz mit der Agentur oder dem Jobcenter. Sobald die Bewilligung vorliegt, kann das Coaching beginnen.",
  },
  {
    q: "Was muss auf meinem AVGS stehen, damit ich ihn einlösen kann?",
    a: "Der AVGS muss noch mindestens 10 Tage gültig sein, mindestens 20 Unterrichtseinheiten umfassen und in Teilzeit ausgestellt sein. Wir können Gutscheine an unseren Standorten in Berlin, Potsdam, Augsburg oder virtuell annehmen.",
  },
  {
    q: "Wo kann ich gecoacht werden?",
    a: "An unseren Standorten in Berlin, Potsdam und Augsburg – oder digital. Eine hybride Form aus Coaching vor Ort und via Zoom ist ebenfalls möglich.",
  },
  {
    q: "Ich habe keinen AVGS. Kann ich trotzdem zu euch kommen?",
    a: "Ja, unbedingt. Ruf uns einfach an – wir schauen uns gemeinsam deine Situation an und finden eine individuelle Lösung.",
  },
];

export type Standort = {
  city: string;
  label: string;
  address: string[];
  href?: string;
  note?: string;
};

export const STANDORTE: Standort[] = [
  {
    city: "Berlin",
    label: "Prenzlauer Berg",
    address: ["Bötzowstraße 28", "10407 Berlin"],
    href: "/jobcoaching-berlin",
  },
  {
    city: "Potsdam",
    label: "Nördliche Innenstadt",
    address: ["Gutenbergstraße 87", "14467 Potsdam"],
    href: "/jobcoaching-potsdam",
  },
  {
    city: "Augsburg",
    label: "Altstadt",
    address: ["Mauerberg 26", "86152 Augsburg"],
  },
  {
    city: "Online",
    label: "Deutschlandweit",
    address: ["Digitales Coaching", "via Zoom – auch hybrid"],
  },
];
