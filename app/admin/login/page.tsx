import { redirect } from "next/navigation";
import { isAdmin, isAuthConfigured } from "@/lib/admin/auth";
import LoginForm from "@/components/admin/LoginForm";

export const metadata = { title: "Anmelden" };

export default async function LoginPage() {
  if (await isAdmin()) redirect("/admin");
  return (
    <div className="mx-auto mt-14 max-w-md">
      <h1 className="display text-3xl md:text-4xl">Anmelden</h1>
      {isAuthConfigured() ? (
        <>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/60">
            Hier pflegst Du die Texte und Bilder von kuhlundengel.de.
          </p>
          <LoginForm />
        </>
      ) : (
        <p className="mt-5 rounded-xl border border-clay/40 bg-paper p-5 text-[0.95rem] leading-relaxed">
          Das Admin ist noch nicht eingerichtet: Bitte die Umgebungsvariable{" "}
          <code className="rounded bg-cream-deep px-1.5 py-0.5 font-mono text-[0.85rem]">
            ADMIN_PASSWORD
          </code>{" "}
          setzen und die Anwendung neu starten.
        </p>
      )}
    </div>
  );
}
