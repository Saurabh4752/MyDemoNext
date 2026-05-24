import { StatCard } from '../../components/dashboard/stat-card';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-zinc-400">
          Welcome back creator 👋
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Followers"
          value="245K"
        />

        <StatCard
          title="Engagement"
          value="8.2%"
        />

        <StatCard
          title="Brand Deals"
          value="12"
        />

        <StatCard
          title="Revenue"
          value="$4,500"
        />
      </div>
    </div>
  );
}