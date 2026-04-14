import {
  ArchiveIcon,
  BellIcon,
  ChatDotsIcon,
  ClockCounterClockwiseIcon,
  PhoneCallIcon,
  TrashIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react";
import { useLoaderData } from "react-router";
import SummaryCard from "../components/SummaryCard";

const Friend = () => {
  const data = useLoaderData();

  // TODO: Add on page load scroll to top

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 -mt-5">
      <section className="flex flex-col gap-3">
        {/* Friend Card */}
        <div className="bg-base-100 px-3 py-8 rounded-md shadow-sm flex flex-col gap-3 items-center justify-center text-center">
          <img
            src={data?.picture}
            alt={data?.name}
            className="w-25 aspect-square rounded-full overflow-hidden object-contain"
          />
          <h5 className="text-xl font-semibold text-neutral block">
            {data?.name}
          </h5>
          <span
            className={`block px-2 py-1 text-sm font-medium text-white ${data?.status === "on-track" ? "bg-primary" : data?.status === "almost due" ? "bg-orange-400" : "bg-red-500"} rounded-full uppercase`}
          >
            {data?.status}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {data?.tags?.map((tag, tagIndex) => (
              <span
                key={`tab_${tagIndex}`}
                className="block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-neutral/50 font-medium text-sm italic">
            "{data?.bio}"
          </span>
          <span className="text-neutral/50 text-sm">
            Preferred: email
            {/* TODO */}
          </span>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-2">
          <button className="btn bg-white font-medium text-black border-[#e5e5e5]">
            <BellIcon className="size-4" /> Snooze 2 Weeks
          </button>
          <button className="btn bg-white font-medium text-black border-[#e5e5e5]">
            <ArchiveIcon className="size-4" /> Archive
          </button>
          <button className="btn bg-white font-medium text-red-600 border-[#e5e5e5]">
            <TrashIcon className="size-4" /> Delete
          </button>
        </div>
      </section>

      <section className="w-full md:col-span-2 flex flex-col gap-5">
        <div className="w-full grid grid-cols-3 gap-5">
          <SummaryCard
            number={data?.days_since_contact}
            text={"Days Since Contact"}
          />
          <SummaryCard number={data?.goal} text={"Goal (Days)"} />
          <SummaryCard
            number={new Date(data?.next_due_date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
            text={"Next Due"}
          />
        </div>

        <div className="bg-base-100 p-5 rounded-md shadow-sm">
          <div className="w-full flex items-center justify-between gap-3 mb-3">
            <h4 className="text-xl font-medium text-neutral">
              Relationship Goal
            </h4>

            <button className="btn border border-base-300">Edit</button>
          </div>
          <p className="text-neutral/50">
            Connect every{" "}
            <span className="font-semibold text-neutral">
              {data?.goal} days
            </span>
          </p>
        </div>

        <div className="bg-base-100 p-5 rounded-md shadow-sm">
          <h4 className="text-xl font-medium text-neutral block mb-3.5">
            Quick Check-In
          </h4>

          <div className="grid grid-cols-3 gap-3">
            <button className="border border-base-300/50 bg-base-200 px-3 py-4 w-full rounded-md flex flex-col gap-1.5 items-center justify-center text-neutral cursor-pointer hover:shadow-md transition-all duration-150 active:shadow-none">
              <PhoneCallIcon weight="bold" size={30} /> Call
            </button>

            <button className="border border-base-300/50 bg-base-200 px-3 py-4 w-full rounded-md flex flex-col gap-1.5 items-center justify-center text-neutral cursor-pointer hover:shadow-md transition-all duration-150 active:shadow-none">
              <ChatDotsIcon weight="bold" size={30} /> Text
            </button>

            <button className="border border-base-300/50 bg-base-200 px-3 py-4 w-full rounded-md flex flex-col gap-1.5 items-center justify-center text-neutral cursor-pointer hover:shadow-md transition-all duration-150 active:shadow-none">
              <VideoCameraIcon weight="bold" size={30} /> Video
            </button>
          </div>
        </div>

        <div className="bg-base-100 p-5 rounded-md shadow-sm">
          <div className="w-full flex items-center justify-between gap-3 mb-3">
            <h4 className="text-xl font-medium text-neutral">
              Recent Interactions
            </h4>

            <button className="btn border border-base-300">
              <ClockCounterClockwiseIcon /> Full History
            </button>
          </div>

          <div className="w-full flex flex-col gap-0">
            <div className="w-full flex items-center justify-between gap-2 px-3 py-4 border-b last:border-b-none border-neutral/10 text-neutral">
              <div className="flex items-center gap-2">
                <ChatDotsIcon size={30} weight="bold" />
                <span className="text-lg font-normal">Text</span>
              </div>
              <span>
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Friend;
