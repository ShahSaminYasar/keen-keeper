import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import useMainContext from "../hooks/useMainContext";
import { useLocation } from "react-router";
import { useEffect } from "react";

const Stats = () => {
  const { timeline } = useMainContext();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const processData = () => {
    const counts = {
      text: 0,
      call: 0,
      video: 0,
    };

    timeline.forEach((item) => {
      counts[item?.type]++;
    });

    return Object.entries(counts).map(([type, value]) => ({
      name: type,
      value: value,
    }));
  };

  const chartData = processData();

  const COLORS = {
    text: "#7f37f5",
    call: "#244d3f",
    video: "#37a163",
  };

  return (
    <div className="flex flex-col gap-5 w-full max-w-6xl mx-auto fade">
      <h2 className="text-4xl font-semibold text-neutral">
        Friendship Analytics
      </h2>

      <div className="w-full p-5 lg:p-8 rounded-lg shadow-sm flex flex-col items-center justify-center gap-6 bg-base-100">
        <label className="text-xl font-medium text-primary block text-left w-full">
          By Interaction Type
        </label>

        {chartData?.some((item) => item?.value > 0) ? (
          <PieChart
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "300px",
              aspectRatio: 1,
              marginBottom: "30px",
            }}
            responsive
          >
            <Pie
              data={chartData}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="8px"
              paddingAngle={5}
              dataKey="value"
              nameKey="name"
            >
              {chartData?.map((item, index) => (
                <Cell key={index} fill={COLORS[item?.name]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        ) : (
          <p className="block text-center text-sm font-medium py-15">
            No data available yet.
          </p>
        )}
      </div>
    </div>
  );
};
export default Stats;
