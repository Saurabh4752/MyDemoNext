import { Sidebar } from "../../components/dashboard/sidebar";
import { Topbar } from "../../components/dashboard/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
