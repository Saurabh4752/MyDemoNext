"use client";
import Image from "next/image";
import AddSection from "./AddSection";
import instagram from "../../../Assets/instagram.png";
import youtube from "../../../Assets/youtube.png";
import twitter from "../../../Assets/twitterIcon.png";
import { Pencil, Eye, Download, Plus } from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store/store";

const socialStats = [
  {
    platform: "Instagram",
    followers: "245K",
    engagement: "8.4%",
    icon: instagram,
  },
  {
    platform: "YouTube",
    followers: "120K",
    engagement: "6.1%",
    icon: youtube,
  },
  {
    platform: "Twitter",
    followers: "80K",
    engagement: "5.2%",
    icon: twitter,
  },
];

const collaborations = [
  {
    brand: "Nike",
    campaign: "Summer Collection Campaign",
    reach: "1.2M Reach",
  },
  {
    brand: "Samsung",
    campaign: "Galaxy Creator Partnership",
    reach: "890K Reach",
  },
  {
    brand: "Spotify",
    campaign: "Music Lifestyle Campaign",
    reach: "540K Reach",
  },
];

export default function MediaKitPage() {
  const [isOpen, setIsOpen] = useState(false);
  const mediaKit = useSelector((state: RootState) => state.mediaKit);
  console.log(mediaKit);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Media Kit</h1>

          <p className="mt-1 text-zinc-400">
            Showcase your creator profile and brand collaborations.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800">
            <Eye size={18} />
            Preview
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800">
            <Download size={18} />
            Export PDF
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
            <Pencil size={18} />
            Edit Kit
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
        <div className="h-40 bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600" />

        <div className="relative px-6 pb-6">
          <div className="-mt-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <Image
                src={mediaKit?.sections[0].data?.photo}
                alt="Profile"
                className="h-28 w-28 rounded-2xl border-4 border-zinc-900 bg-zinc-700"
              />

              <div>
                <h2 className="text-3xl font-bold text-white">
                  {mediaKit?.sections[0].data?.name}
                </h2>

                <div className="mt-3 flex flex-wrap gap-2">
                  {mediaKit?.sections[0].data?.bio.map((ite, i) => (
                    <p key={i} className="mt-1 text-zinc-400 ">
                      {ite}
                    </p>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {mediaKit?.sections[0].data?.fields.map((ite, i) => (
                    <p
                      key={i}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                    >
                      {ite}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              onClick={() => setIsOpen(true)}
            >
              <Plus size={18} />
              Add Section
            </button>
          </div>
        </div>
      </div>
      {isOpen && <AddSection setIsOpen={setIsOpen} />}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">About Creator</h2>

          <button className="rounded-lg border border-zinc-700 p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
            <Pencil size={16} />
          </button>
        </div>

        <p className="leading-7 text-zinc-300">
          {mediaKit?.sections[0].data?.about}
        </p>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Social Analytics</h2>

          <button className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-white transition hover:bg-zinc-800">
            Manage Platforms
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {socialStats.map((item) => (
            <div
              key={item.platform}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-zinc-800 p-3">
                  <Image
                    src={item.icon}
                    alt={item.platform}
                    width={24}
                    height={24}
                  />
                </div>

                <button className="rounded-lg border border-zinc-700 p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
                  <Pencil size={16} />
                </button>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {item.platform}
              </h3>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">Followers</p>

                  <p className="text-2xl font-bold text-white">
                    {item.followers}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-zinc-400">Engagement</p>

                  <p className="text-xl font-semibold text-green-400">
                    {item.engagement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Past Collaborations
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Featured campaigns and partnerships
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
            <Plus size={18} />
            Add Campaign
          </button>
        </div>

        <div className="space-y-4">
          {collaborations.map((item) => (
            <div
              key={item.brand}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 text-lg font-bold text-white">
                  {item.brand[0]}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.brand}
                  </h3>

                  <p className="text-zinc-400">{item.campaign}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
                  {item.reach}
                </span>

                <button className="rounded-lg border border-zinc-700 p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
                  <Pencil size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-lg font-semibold text-white">
            Top Audience Countries
          </h3>

          <div className="mt-5 space-y-4">
            {[
              { country: "India", percent: "48%" },
              { country: "United States", percent: "22%" },
              { country: "United Kingdom", percent: "12%" },
            ].map((item) => (
              <div
                key={item.country}
                className="flex items-center justify-between"
              >
                <span className="text-zinc-300">{item.country}</span>

                <span className="font-medium text-white">{item.percent}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-lg font-semibold text-white">Audience Age</h3>

          <div className="mt-5 space-y-4">
            {[
              { age: "18-24", percent: "38%" },
              { age: "25-34", percent: "44%" },
              { age: "35-44", percent: "18%" },
            ].map((item) => (
              <div key={item.age} className="flex items-center justify-between">
                <span className="text-zinc-300">{item.age}</span>

                <span className="font-medium text-white">{item.percent}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-lg font-semibold text-white">
            Contact Information
          </h3>

          <div className="mt-5 space-y-4 text-zinc-300">
            <div>
              <p className="text-sm text-zinc-500">Email</p>

              <p>saurabh@email.com</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Website</p>

              <p>www.creatorportfolio.com</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Management</p>

              <p>Creator Talent Agency</p>
            </div>
          </div>
        </div>
      </div>
      {mediaKit?.sections.length >= 9 &&
        mediaKit?.sections.slice(9).map((el, i) => {
          return (
            <div
              key={i}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 flex gap-8"
            >
              {el.data.map((item, ind) => (
                <h3 key={ind} className="text-lg font-semibold text-white">
                  {item}
                </h3>
              ))}
            </div>
          );
        })}
    </div>
  );
}
