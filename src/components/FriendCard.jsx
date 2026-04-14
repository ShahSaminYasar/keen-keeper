const FriendCard = ({ data }) => {
  return (
    <div className="bg-base-100 px-3 py-8 rounded-md shadow-sm flex flex-col gap-3 items-center justify-center text-center">
      <img
        src={data?.picture}
        alt={data?.name}
        className="w-25 aspect-square rounded-full overflow-hidden object-contain"
      />
      <h5 className="text-xl font-semibold text-neutral block -mb-2">
        {data?.name}
      </h5>
      <span className="text-neutral/70 text-sm">
        {data?.days_since_contact}d ago
      </span>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {data?.tags?.map((tag, tagIndex) => (
          <span
            key={`tab_${tagIndex}`}
            className="block px-2 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
      <span
        className={`block px-2 py-1 text-sm font-medium text-white ${data?.status === "on-track" ? "bg-primary" : data?.status === "almost due" ? "bg-orange-400" : "bg-red-500"} rounded-full uppercase`}
      >
        {data?.status}
      </span>
    </div>
  );
};
export default FriendCard;
