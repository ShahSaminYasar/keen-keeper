import { use } from "react";
import SummaryCard from "./SummaryCard";

const SummaryCards = ({ summaryPromise }) => {
  const data = use(summaryPromise);

  const summary = data?.reduce(
    (acc, friend) => {
      acc.total++;

      if (friend?.status === "on-track") {
        acc.onTrack++;
      }

      if (friend?.status === "overdue" || friend?.status === "almost due") {
        acc.needAttention++;
      }

      if (friend?.days_since_contact < 30) {
        acc.interactionsThisMonth++;
      }

      return acc;
    },
    {
      total: 0,
      onTrack: 0,
      needAttention: 0,
      interactionsThisMonth: 0,
    },
  );

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3">
      <SummaryCard number={summary?.total} text={"Total Friends"} />
      <SummaryCard number={summary?.onTrack} text={"On Track"} />
      <SummaryCard number={summary?.needAttention} text={"Need Attention"} />
      <SummaryCard
        number={summary?.interactionsThisMonth}
        text={"Interactions This Month"}
      />
    </div>
  );
};
export default SummaryCards;
