const SummaryCard = ({ number, text }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center bg-base-100 shadow-sm rounded-md py-8 px-3 w-full text-center">
      <span className="text-xl lg:text-3xl font-semibold text-primary">
        {number}
      </span>
      <span className="text-xs md:text-sm font-normal text-neutral/50">
        {text}
      </span>
    </div>
  );
};
export default SummaryCard;
