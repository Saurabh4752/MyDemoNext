"use client";

import {
  Bell,
  Shield,
  User,
  Palette,
  Globe,
  CreditCard,
  Upload,
  Save,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-1 text-zinc-400">
          Manage your account, preferences, branding, and notifications.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-zinc-800 p-3">
            <User className="text-white" size={20} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              Profile Settings
            </h2>

            <p className="text-sm text-zinc-400">
              Update your public creator profile information.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Full Name
            </label>

            <input
              type="text"
              defaultValue="Saurabh Creator"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Username
            </label>

            <input
              type="text"
              defaultValue="@saurabhcreator"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Email Address
            </label>

            <input
              type="email"
              defaultValue="creator@email.com"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Website
            </label>

            <input
              type="text"
              defaultValue="www.creatorportfolio.com"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm text-zinc-400">
            Bio
          </label>

          <textarea
            rows={5}
            defaultValue="Tech creator sharing content around web development, productivity, and creator tools."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <div className="mt-6 flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500">
            <Save size={18} />
            Save Changes
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-3 text-sm text-white transition hover:bg-zinc-800">
            <Upload size={18} />
            Upload Avatar
          </button>
        </div>
      </div>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-zinc-800 p-3">
            <Bell className="text-white" size={20} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              Notifications
            </h2>

            <p className="text-sm text-zinc-400">
              Manage email and collaboration notifications.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {[
            "Brand collaboration requests",
            "Proposal approval updates",
            "Weekly analytics reports",
            "New follower milestones",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4"
            >
              <div>
                <h3 className="font-medium text-white">
                  {item}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Receive notifications related to {item.toLowerCase()}.
                </p>
              </div>

              <button className="relative h-7 w-12 rounded-full bg-blue-600 transition">
                <span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-zinc-800 p-3">
              <Palette className="text-white" size={20} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">
                Appearance
              </h2>

              <p className="text-sm text-zinc-400">
                Customize your dashboard theme and branding.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Theme
              </label>

              <select className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none">
                <option>Dark Mode</option>
                <option>Light Mode</option>
                <option>System Default</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Accent Color
              </label>

              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500" />
                <div className="h-10 w-10 rounded-full bg-violet-500" />
                <div className="h-10 w-10 rounded-full bg-pink-500" />
                <div className="h-10 w-10 rounded-full bg-green-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-zinc-800 p-3">
              <Globe className="text-white" size={20} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">
                Public Profile
              </h2>

              <p className="text-sm text-zinc-400">
                Control visibility of your creator profile.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">
                    Public Profile Visibility
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Allow brands to discover your profile.
                  </p>
                </div>

                <button className="relative h-7 w-12 rounded-full bg-blue-600">
                  <span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white" />
                </button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Public URL
              </label>

              <input
                type="text"
                defaultValue="creatorkit.app/saurabhcreator"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-zinc-800 p-3">
              <Shield className="text-white" size={20} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">
                Security
              </h2>

              <p className="text-sm text-zinc-400">
                Manage password and account protection.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-left text-white transition hover:bg-zinc-800">
              Change Password
            </button>

            <button className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-left text-white transition hover:bg-zinc-800">
              Enable Two-Factor Authentication
            </button>

            <button className="w-full rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-left text-red-400 transition hover:bg-red-500/20">
              Delete Account
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-zinc-800 p-3">
              <CreditCard className="text-white" size={20} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">
                Billing & Plans
              </h2>

              <p className="text-sm text-zinc-400">
                Manage subscription and creator plan.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Pro Creator Plan
                </h3>

                <p className="mt-1 text-sm text-zinc-300">
                  Active subscription
                </p>
              </div>

              <span className="rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white">
                PRO
              </span>
            </div>

            <div className="mt-5">
              <p className="text-3xl font-bold text-white">
                ₹999
                <span className="text-base font-normal text-zinc-400">
                  /month
                </span>
              </p>
            </div>

            <button className="mt-5 w-full rounded-xl bg-white px-4 py-3 font-medium text-black transition hover:bg-zinc-200">
              Manage Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}