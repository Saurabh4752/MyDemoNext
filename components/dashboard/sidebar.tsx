"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Handshake,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Media Kit",
    href: "/dashboard/media-kit",
    icon: FileText,
  },
  {
    title: "Collaborations",
    href: "/dashboard/collaborations",
    icon: Handshake,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-900">
      <div className="p-6 text-2xl font-bold">
        CreatorKit
      </div>

      <nav className="space-y-2 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            <item.icon size={18} />
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}