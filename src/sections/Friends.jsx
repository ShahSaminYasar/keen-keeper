import { use } from "react";
import FriendCard from "../components/FriendCard";

const Friends = ({ friendsPromise }) => {
  const data = use(friendsPromise);

  return (
    <section>
      <h2 className="text-xl font-semibold text-neutral mb-3">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data?.map((friend) => (
          <FriendCard key={friend?.id} data={friend} />
        ))}
      </div>
    </section>
  );
};
export default Friends;
