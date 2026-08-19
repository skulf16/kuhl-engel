import Link from "next/link";
import { notFound } from "next/navigation";
import EditorForm from "@/components/admin/EditorForm";
import { getSection } from "@/lib/cms/registry";
import { loadSection } from "@/lib/content";

export default async function EditPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const section = getSection(key);
  if (!section) notFound();
  const value = await loadSection(key);

  return (
    <div>
      <Link
        href="/admin"
        className="text-[0.9rem] font-medium text-ink/55 transition-colors hover:text-gold"
      >
        ← Zurück zur Übersicht
      </Link>
      <h1 className="display mt-4 text-3xl md:text-4xl">{section.title}</h1>
      <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-ink/60">
        {section.description}
      </p>
      <EditorForm
        sectionKey={section.key}
        fields={section.fields}
        initialValue={value}
      />
    </div>
  );
}
