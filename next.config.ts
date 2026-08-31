import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/coaching-fuer-frauen",
        destination: "/karrierecoaching",
        permanent: true,
      },

      // --- Redirects alte WordPress-Seite (Relaunch 08/2026) ---
      // Reihenfolge: spezifisch vor Catch-all, Next.js nimmt den ersten Treffer.

      // AVGS
      {
        source: "/jobcoaching/avgs-gutschein",
        destination: "/avgs-gutschein-beantragen",
        permanent: true,
      },
      {
        source: "/jobcoaching/avgs-coaching/:path*",
        destination: "/avgs-coaching",
        permanent: true,
      },
      {
        source: "/jobcoaching/avgs-und-mehr",
        destination: "/avgs-coaching",
        permanent: true,
      },
      {
        source: "/foerdermoeglichkeiten",
        destination: "/avgs-coaching",
        permanent: true,
      },
      {
        source: "/leistungen/foerdermoeglichkeiten",
        destination: "/avgs-coaching",
        permanent: true,
      },

      // Karrierecoaching / berufliche Neuorientierung
      {
        source: "/jobcoaching/berufliche-neuorientierung/:path*",
        destination: "/karrierecoaching",
        permanent: true,
      },
      {
        source: "/jobcoaching/karrierecoaching/:path*",
        destination: "/karrierecoaching",
        permanent: true,
      },
      {
        source: "/leistungen/karrierecoaching/:path*",
        destination: "/karrierecoaching",
        permanent: true,
      },

      // Berufsorientierung für Jugendliche
      {
        source:
          "/jobcoaching/berufsorientierung-fuer-jugendliche/einzelcoaching-fuer-jugendliche",
        destination: "/berufsorientierung/einzelcoaching",
        permanent: true,
      },
      {
        source:
          "/jobcoaching/berufsorientierung-fuer-jugendliche/gruppen-angebote-fuer-jugendliche",
        destination: "/berufsorientierung/gruppenangebote",
        permanent: true,
      },
      {
        source: "/jobcoaching/berufsorientierung-fuer-jugendliche/schulprojekte",
        destination: "/berufsorientierung/gruppenangebote",
        permanent: true,
      },
      {
        source: "/jobcoaching/berufsorientierung-fuer-jugendliche/:path*",
        destination: "/berufsorientierung",
        permanent: true,
      },
      {
        source:
          "/leistungen/berufsorientierung-fuer-jugendliche/einzelcoaching-fuer-jugendliche",
        destination: "/berufsorientierung/einzelcoaching",
        permanent: true,
      },
      {
        source: "/leistungen/berufsorientierung-fuer-jugendliche/:path*",
        destination: "/berufsorientierung",
        permanent: true,
      },
      {
        source: "/schulprojekte",
        destination: "/berufsorientierung/gruppenangebote",
        permanent: true,
      },
      {
        source: "/jobcoaching/azubi-coaching",
        destination: "/berufsorientierung/berufsstart",
        permanent: true,
      },

      // Einzelcoaching / Supervision → Jobcoaching
      {
        source: "/jobcoaching/supervision",
        destination: "/jobcoaching",
        permanent: true,
      },
      {
        source: "/leistungen/supervision",
        destination: "/jobcoaching",
        permanent: true,
      },
      {
        source: "/leistungen/berufliches-einzelcoaching/:path*",
        destination: "/jobcoaching",
        permanent: true,
      },
      {
        source: "/leistungen/:path*",
        destination: "/jobcoaching",
        permanent: true,
      },
      // Catch-all für restliche alte /jobcoaching-Unterseiten
      // (":path+" statt ":path*", sonst matcht die Regel /jobcoaching selbst → Redirect-Schleife)
      {
        source: "/jobcoaching/:path+",
        destination: "/jobcoaching",
        permanent: true,
      },

      // Team / Über uns
      {
        source: "/ueber-uns/team",
        destination: "/ueber-uns",
        permanent: true,
      },
      {
        source: "/portfolio/:path*",
        destination: "/ueber-uns",
        permanent: true,
      },
      {
        source: "/portfolio-skill/:path*",
        destination: "/ueber-uns",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/ueber-uns",
        permanent: true,
      },

      // Standorte
      {
        source: "/ueber-uns/standorte",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/standorte",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/locations/potsdam",
        destination: "/jobcoaching-potsdam",
        permanent: true,
      },
      {
        source: "/locations/prenzlauer-berg",
        destination: "/jobcoaching-berlin",
        permanent: true,
      },
      {
        source: "/locations/schoeneberg",
        destination: "/jobcoaching-berlin",
        permanent: true,
      },
      {
        source: "/locations/:path*",
        destination: "/kontakt",
        permanent: true,
      },

      // Rechtliches
      {
        source: "/datenschutzerklaerung",
        destination: "/datenschutz",
        permanent: true,
      },
      {
        source: "/agbs",
        destination: "/impressum",
        permanent: true,
      },

      // Eingestellte Bereiche (Events, Weiterbildungen, Marktplatz)
      {
        source: "/events/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/weiterbildungen/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/marktplatz",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
