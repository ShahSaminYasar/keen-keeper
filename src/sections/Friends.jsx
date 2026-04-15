import { use } from "react";
import FriendCard from "../components/FriendCard";
import { Link } from "react-router";

const Friends = ({ friendsPromise }) => {
  const data = use(friendsPromise);

  return (
    <section className="fade">
      <h2 className="text-xl font-semibold text-neutral mb-3">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data?.map((friend) => (
          <Link key={friend?.id} to={`/friend/${friend?.id}`}>
            <FriendCard data={friend} />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Friends;
