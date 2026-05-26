import DashboardPage from "../app/dashboard/page";
import DashboardLayout from "./dashboard/layout";

export default function Home() {
  return (
    <DashboardLayout>
      <DashboardPage />
    </DashboardLayout>
  );
}
