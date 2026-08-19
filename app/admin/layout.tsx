import type { Metadata } from "next";
import Link from "next/link";
import { isAdmin } from "@/lib/admin/auth";
import { logoutAction } from "./actions";

export const metadata: Metadata = {
  title: {
    default: "Website-Verwaltung",
    template: "%s · Website-Verwaltung",
  },
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const loggedIn = await isAdmin();
  return (
    <div className="min-h-svh bg-cream text-ink">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <Link href="/admin" className="display text-lg leading-tight">
            Kuhl &amp; Engel{" "}
            <span className="text-ink/45">· Website-Verwaltung</span>
          </Link>
          <div className="flex items-center gap-5 text-[0.9rem] font-medium">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="link-gold text-gold"
            >
              Website ansehen ↗
            </a>
            {loggedIn && (
              <form action={logoutAction}>
                <button className="rounded-lg border border-ink/20 px-4 py-2 transition-colors hover:border-gold hover:text-gold">
                  Abmelden
                </button>
              </form>
            )}
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-5 py-10">{children}</div>
    </div>
  );
}
