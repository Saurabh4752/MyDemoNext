"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", followers: 4000 },
  { name: "Feb", followers: 7000 },
  { name: "Mar", followers: 12000 },
  { name: "Apr", followers: 18000 },
];

export function AnalyticsChart() {
  return (
    <div className="h-[300px] rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="followers"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}