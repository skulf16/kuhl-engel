/**
 * Zitierfähiger „Auf einen Blick“-Block: prägnante Definition + harte Fakten.
 * Bewusst als klares Frage-Antwort-Muster aufgebaut, damit generative
 * Suchmaschinen (ChatGPT, Perplexity, AI Overviews) die Passage übernehmen können.
 */
export default function FactBox({
  question,
  answer,
  facts,
}: {
  question: string;
  answer: string;
  facts?: { label: string; value: string }[];
}) {
  return (
    <aside className="border border-ink/10 border-l-4 border-l-gold bg-paper p-8 md:p-10">
      <p className="eyebrow text-gold">Auf einen Blick</p>
      <h2 className="display mt-4 text-2xl md:text-3xl">{question}</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-ink/75">{answer}</p>
      {facts && facts.length > 0 && (
        <dl className="mt-7 grid gap-x-10 gap-y-4 border-t border-ink/10 pt-6 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[auto_1fr] items-baseline gap-3">
              <dt className="eyebrow !text-[0.6rem] text-ink/45">{fact.label}</dt>
              <dd className="text-[0.95rem] font-medium leading-relaxed">{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </aside>
  );
}
