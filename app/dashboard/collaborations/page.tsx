"use client";
import { useState } from "react";
import AddCollaborations from "./AddCollaborations";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store/store";
import {
  Search,
  Plus,
  MoreHorizontal,
  CalendarDays,
  DollarSign,
  Building2,
  Clock3,
} from "lucide-react";

function getStatusStyles(status: string) {
  switch (status) {
    case "Active":
      return "bg-green-500/10 text-green-400 border-green-500/20";

    case "Pending":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";

    case "Completed":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";

    default:
      return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
  }
}

export default function CollaborationsPage() {
  const collaborations = useSelector((state: RootState) => state.collaboration);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(collaborations);
  const addCollaboration = () => {
    setIsOpen(true);
  };

  const openPopUp = (ind) => {};

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Brand Collaborations
          </h1>

          <p className="mt-1 text-zinc-400">
            Manage campaigns, sponsorships, and brand partnerships.
          </p>
        </div>

        <button
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={addCollaboration}
        >
          <Plus size={18} />
          New Collaboration
        </button>
        {isOpen && <AddCollaborations setIsOpen={setIsOpen} />}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm text-zinc-400">Active Deals</p>

          <h2 className="mt-3 text-3xl font-bold text-white">12</h2>

          <span className="mt-2 inline-block text-sm text-green-400">
            +3 this month
          </span>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm text-zinc-400">Pending Approvals</p>

          <h2 className="mt-3 text-3xl font-bold text-white">5</h2>

          <span className="mt-2 inline-block text-sm text-yellow-400">
            Awaiting response
          </span>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm text-zinc-400">Completed Campaigns</p>

          <h2 className="mt-3 text-3xl font-bold text-white">28</h2>

          <span className="mt-2 inline-block text-sm text-blue-400">
            Lifetime campaigns
          </span>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm text-zinc-400">Total Revenue</p>

          <h2 className="mt-3 text-3xl font-bold text-white">₹6.8L</h2>

          <span className="mt-2 inline-block text-sm text-green-400">
            +18% growth
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 lg:w-[350px]">
          <Search size={18} className="text-zinc-500" />

          <input
            type="text"
            placeholder="Search collaborations..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm text-white transition hover:bg-zinc-800">
            All Status
          </button>

          <button className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm text-white transition hover:bg-zinc-800">
            This Month
          </button>

          <button className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm text-white transition hover:bg-zinc-800">
            Revenue
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {collaborations.map((item, ind) => (
          <div
            key={item.brand}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-700"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* Left */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800">
                  <Building2 className="text-white" size={24} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-semibold text-white">
                      {item.brand}
                    </h2>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusStyles(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="mt-2 text-zinc-400">{item.campaign}</p>

                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-zinc-400">
                    <div className="flex items-center gap-2">
                      <DollarSign size={16} />
                      {item.budget}
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {item.dueDate}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={16} />
                      Campaign Timeline
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm text-white transition hover:bg-zinc-800">
                  View Details
                </button>

                <button
                  className="rounded-xl border border-zinc-700 bg-zinc-950 p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                  onClick={() => openPopUp(ind)}
                >
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-white">Upcoming Deadlines</h2>

          <p className="mt-1 text-sm text-zinc-400">
            Track upcoming deliverables and campaign schedules.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "Nike Instagram Reel Submission",
              date: "28 May 2026",
            },
            {
              title: "Samsung YouTube Integration",
              date: "04 Jun 2026",
            },
            {
              title: "Adobe Sponsored Carousel",
              date: "10 Jun 2026",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <h3 className="font-medium text-white">{item.title}</h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Submission deadline
                </p>
              </div>

              <div className="rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
