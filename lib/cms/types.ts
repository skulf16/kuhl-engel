/**
 * Feld-Definitionen für die Admin-Formulare.
 * Rein deklarativ und JSON-serialisierbar – wird vom Server an die
 * Client-Komponente EditorForm durchgereicht.
 */
export type Field =
  | { type: "text"; key: string; label: string; help?: string }
  | { type: "textarea"; key: string; label: string; help?: string; rows?: number }
  | { type: "image"; key: string; label: string; help?: string }
  | { type: "stringList"; key: string; label: string; help?: string; itemLabel?: string }
  | {
      type: "objectList";
      key: string;
      label: string;
      help?: string;
      /** Schlüssel des Feldes, dessen Wert als Titel des Listeneintrags angezeigt wird. */
      itemTitle?: string;
      /** true = Einträge können nur bearbeitet, nicht hinzugefügt/entfernt werden. */
      fixed?: boolean;
      fields: Field[];
    }
  | { type: "group"; key: string; label: string; help?: string; fields: Field[] };

export type SectionDef = {
  key: string;
  title: string;
  group: "Seiten" | "Bausteine";
  description: string;
  fields: Field[];
};
