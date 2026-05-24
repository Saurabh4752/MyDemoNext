import { Bell, Search } from "lucide-react";
import Profile from '../../Assets/Profile.jpg';
import Image from "next/image";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-6">
      <div className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2">
        <Search size={18} />
        <input
          placeholder="Search..."
          className="bg-transparent outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell size={20} />

        <Image src={Profile} alt="Profile" className="h-10 w-10 rounded-full bg-zinc-700" />
      </div>
    </header>
  );
}