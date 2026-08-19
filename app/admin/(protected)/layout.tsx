import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin/auth";

export default async function ProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  if (!(await isAdmin())) redirect("/admin/login");
  return <>{children}</>;
}
