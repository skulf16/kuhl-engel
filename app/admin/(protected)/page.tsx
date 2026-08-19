import Link from "next/link";
import { SECTIONS } from "@/lib/cms/registry";
import { getDocumentDates } from "@/lib/cms/store";

const fmt = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "medium",
  timeStyle: "short",
});

export default async function AdminDashboard() {
  const dates = await getDocumentDates();
  const groups = [
    {
      name: "Seiten" as const,
      hint: "Texte und Bilder einer bestimmten Seite.",
    },
    {
      name: "Bausteine" as const,
      hint: "Inhalte, die auf mehreren Seiten erscheinen.",
    },
  ];

  return (
    <div>
      <h1 className="display text-3xl md:text-4xl">Inhalte bearbeiten</h1>
      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink/60">
        Wähle einen Bereich, ändere Texte oder Bilder und speichere – die
        Änderungen sind sofort auf der Website sichtbar.
      </p>

      {groups.map((group) => {
        const sections = SECTIONS.filter((s) => s.group === group.name);
        if (sections.length === 0) return null;
        return (
          <section key={group.name} className="mt-10">
            <h2 className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-8 bg-gold" />
              {group.name}
              <span className="font-normal normal-case tracking-normal text-ink/40">
                {group.hint}
              </span>
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {sections.map((section) => (
                <Link
                  key={section.key}
                  href={`/admin/edit/${section.key}`}
                  className="group rounded-xl border border-ink/10 bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-[0_20px_40px_-24px_rgba(14,29,43,0.35)]"
                >
                  <p className="display text-xl transition-colors group-hover:text-gold">
                    {section.title}
                  </p>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-ink/60">
                    {section.description}
                  </p>
                  <p className="mt-4 text-[0.75rem] font-medium text-ink/40">
                    {dates[section.key]
                      ? `Zuletzt geändert: ${fmt.format(new Date(dates[section.key]))}`
                      : "Standardinhalte – noch nicht bearbeitet"}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
