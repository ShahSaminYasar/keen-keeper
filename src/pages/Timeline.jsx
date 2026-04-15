import { useEffect, useState } from "react";
import useMainContext from "../hooks/useMainContext";
import { useLocation } from "react-router";

const Timeline = () => {
  const { timeline } = useMainContext();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [filteredTimeline, setFilteredTimeline] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filterSortDate, setFilterSortDate] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setFilteredTimeline(timeline);
  }, [timeline]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = filterType
        ? [...timeline]?.filter((item) => item?.type === filterType)
        : [...timeline];

      setFilteredTimeline(
        filtered
          ?.filter((item) =>
            item?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()),
          )
          ?.sort((a, b) => {
            const aTime = new Date(a?.date)?.getTime();
            const bTime = new Date(b?.date)?.getTime();

            const sortMethod = filterSortDate;

            if (sortMethod === "newest") {
              return bTime - aTime;
            } else {
              return aTime - bTime;
            }
          }),
      );
    }, 330);

    return () => clearTimeout(timer);
  }, [filterType, filterSortDate, timeline, searchQuery]);

  return (
    <div className="flex flex-col gap-5 w-full max-w-6xl mx-auto fade">
      <h2 className="text-4xl font-semibold text-neutral">Timeline</h2>

      <section className="flex flex-col-reverse md:flex-row md:items-center flex-wrap gap-3">
        <div className="w-full md:w-fit flex flex-row items-center gap-3">
          <select
            value={filterType}
            className="select w-full md:w-44"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value={""}>All</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>

          <select
            value={filterSortDate}
            className="select w-full md:w-44"
            onChange={(e) => setFilterSortDate(e.target.value)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>

        <label className="input ml-auto w-full md:w-70">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </section>

      <section className="flex flex-col gap-4">
        {filteredTimeline?.length === 0 ? (
          <p className="block text-center text-sm font-medium py-15">
            History empty, connect with keens to find the logs here.
          </p>
        ) : (
          filteredTimeline?.map((item, index) => (
            <div
              key={`${index}_${item?.id}`}
              className="w-full bg-base-100 border border-base-300/50 p-4 rounded-md flex items-center gap-4"
            >
              <span className="text-3xl">
                <img
                  src={
                    item?.type === "call"
                      ? "/assets/call.png"
                      : item?.type === "text"
                        ? "/assets/text.png"
                        : "/assets/video.png"
                  }
                  className="w-8 aspect-square object-contain"
                />

                {/* {item?.type === "call"
                  ? "📞"
                  : item?.type === "text"
                    ? "💬"
                    : "📹"} */}
              </span>

              <div>
                <span className="block text-lg text-neutral/50 font-normal">
                  <span className="capitalize font-medium text-neutral/80">
                    {item?.type}
                  </span>{" "}
                  with {item?.name}
                </span>

                <span className="text-sm font-medium text-neutral/50">
                  {new Date(item?.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};
export default Timeline;
