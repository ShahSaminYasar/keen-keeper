import {
  ArchiveIcon,
  ArrowLeftIcon,
  BellIcon,
  ChatDotsIcon,
  ClockCounterClockwiseIcon,
  PhoneCallIcon,
  TrashIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react";
import { Link, useLoaderData, useLocation } from "react-router";
import SummaryCard from "../components/SummaryCard";
import useMainContext from "../hooks/useMainContext";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Friend = () => {
  const data = useLoaderData();
  const { timeline, setTimeline } = useMainContext();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Functions
  const addToTimeline = (id, type, name, date) => {
    setTimeline((prev) => [
      {
        id,
        type,
        name,
        date,
      },
      ...prev,
    ]);

    toast.success(`Logged a ${type} with ${name}`);
  };

  return data?.id ? (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 -mt-5 fade">
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
          <a href={`mailto:${data?.email}`} className="text-neutral/50 text-sm">
            {data?.email}
          </a>
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
            <button
              onClick={() =>
                addToTimeline(
                  data?.id,
                  "call",
                  data?.name,
                  new Date().toISOString(),
                )
              }
              className="border border-base-300/50 bg-base-200 px-3 py-4 w-full rounded-md flex flex-col gap-1.5 items-center justify-center text-neutral cursor-pointer hover:shadow-md transition-all duration-150 active:shadow-none"
            >
              <PhoneCallIcon weight="bold" size={30} /> Call
            </button>

            <button
              onClick={() =>
                addToTimeline(
                  data?.id,
                  "text",
                  data?.name,
                  new Date().toISOString(),
                )
              }
              className="border border-base-300/50 bg-base-200 px-3 py-4 w-full rounded-md flex flex-col gap-1.5 items-center justify-center text-neutral cursor-pointer hover:shadow-md transition-all duration-150 active:shadow-none"
            >
              <ChatDotsIcon weight="bold" size={30} /> Text
            </button>

            <button
              onClick={() =>
                addToTimeline(
                  data?.id,
                  "video",
                  data?.name,
                  new Date().toISOString(),
                )
              }
              className="border border-base-300/50 bg-base-200 px-3 py-4 w-full rounded-md flex flex-col gap-1.5 items-center justify-center text-neutral cursor-pointer hover:shadow-md transition-all duration-150 active:shadow-none"
            >
              <VideoCameraIcon weight="bold" size={30} /> Video
            </button>
          </div>
        </div>

        <div className="bg-base-100 p-5 rounded-md shadow-sm">
          <div className="w-full flex items-center justify-between gap-3 mb-3">
            <h4 className="text-xl font-medium text-neutral">
              Recent Interactions
            </h4>

            <Link to="/timeline" className="btn border border-base-300">
              <ClockCounterClockwiseIcon /> Full History
            </Link>
          </div>

          <div className="w-full flex flex-col gap-0">
            {timeline?.length > 0 ? (
              timeline
                ?.filter((item) => item?.id === data?.id)
                ?.map((item, index) => (
                  <div
                    key={`${index}_${item?.id}`}
                    className="w-full flex items-center justify-between gap-2 px-3 py-4 border-b border-neutral/10 last:border-b-0  text-neutral"
                  >
                    <div className="flex items-center gap-2">
                      {item?.type === "call" ? (
                        <PhoneCallIcon size={30} weight="bold" />
                      ) : item?.type === "text" ? (
                        <ChatDotsIcon size={30} weight="bold" />
                      ) : (
                        <VideoCameraIcon size={30} weight="bold" />
                      )}

                      <span className="text-lg font-normal">
                        {item?.type?.slice(0, 1)?.toUpperCase()}
                        {item?.type?.slice(1)} with {item?.name}
                      </span>
                    </div>
                    <span>
                      {new Date(item?.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                ))
            ) : (
              <p className="block text-center text-sm font-medium py-15">
                Nothing found
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-3 py-15">
      <img
        src="/assets/no-user.jpg"
        alt="Not found"
        className="w-40 rounded-full object-cover"
      />

      <p className="block text-center text-sm font-medium mb-3">
        No friend found for the specific ID.
      </p>

      <Link to="/" className="btn btn-primary">
        <ArrowLeftIcon /> Back to Home
      </Link>
    </div>
  );
};
export default Friend;
