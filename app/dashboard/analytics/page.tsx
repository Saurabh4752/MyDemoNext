"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const followerGrowth = [
  { month: "Jan", followers: 12000 },
  { month: "Feb", followers: 18000 },
  { month: "Mar", followers: 26000 },
  { month: "Apr", followers: 34000 },
  { month: "May", followers: 42000 },
  { month: "Jun", followers: 51000 },
];

const engagementData = [
  { platform: "Instagram", engagement: 8.4 },
  { platform: "YouTube", engagement: 6.2 },
  { platform: "TikTok", engagement: 11.1 },
];

const audienceData = [
  { name: "Male", value: 45 },
  { name: "Female", value: 50 },
  { name: "Other", value: 5 },
];

const COLORS = ["#3b82f6", "#8b5cf6", "#f43f5e"];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Analytics Overview
        </h1>

        <p className="mt-1 text-zinc-400">
          Track audience growth, engagement, and creator performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm text-zinc-400">
            Total Followers
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            51.2K
          </h2>

          <span className="mt-2 inline-block text-sm text-green-400">
            +12.5%
          </span>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm text-zinc-400">
            Engagement Rate
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            8.4%
          </h2>

          <span className="mt-2 inline-block text-sm text-green-400">
            +2.1%
          </span>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm text-zinc-400">
            Brand Deals
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            18
          </h2>

          <span className="mt-2 inline-block text-sm text-blue-400">
            Active collaborations
          </span>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm text-zinc-400">
            Monthly Revenue
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            ₹1.2L
          </h2>

          <span className="mt-2 inline-block text-sm text-green-400">
            +18%
          </span>
        </div>
      </div>

     
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-white">
              Followers Growth
            </h2>

            <p className="text-sm text-zinc-400">
              Audience growth over the last 6 months
            </p>
          </div>

          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={followerGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />

                <XAxis
                  dataKey="month"
                  stroke="#a1a1aa"
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="followers"
                  stroke="#3b82f6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-white">
              Platform Engagement
            </h2>

            <p className="text-sm text-zinc-400">
              Engagement rate across platforms
            </p>
          </div>

          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />

                <XAxis
                  dataKey="platform"
                  stroke="#a1a1aa"
                />

                <Tooltip />

                <Bar
                  dataKey="engagement"
                  fill="#8b5cf6"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-white">
              Audience Gender
            </h2>

            <p className="text-sm text-zinc-400">
              Audience demographics breakdown
            </p>
          </div>

          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={audienceData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >
                  {audienceData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="xl:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-white">
              Top Performing Content
            </h2>

            <p className="text-sm text-zinc-400">
              Best performing creator posts this month
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Morning Routine Reel",
                views: "1.2M",
                engagement: "12.4%",
              },
              {
                title: "Tech Setup Tour",
                views: "842K",
                engagement: "9.8%",
              },
              {
                title: "Brand Collaboration Video",
                views: "620K",
                engagement: "8.9%",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4"
              >
                <div>
                  <h3 className="font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-400">
                    {item.views} views
                  </p>
                </div>

                <div className="rounded-lg bg-green-500/10 px-3 py-1 text-sm text-green-400">
                  {item.engagement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}