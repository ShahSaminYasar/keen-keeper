const SummaryCard = ({ number, text }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center bg-base-100 shadow-sm rounded-md py-8 px-3 w-full">
      <span className="text-3xl font-semibold">{number}</span>
      <span className="text-sm font-normal text-neutral/50">{text}</span>
    </div>
  );
};
export default SummaryCard;
