import { Suspense } from "react";
import Friends from "../sections/Friends";
import Hero from "../sections/Hero";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const Home = () => {
  return (
    <>
      <Hero friendsPromise={friendsPromise} />
      <div className="divider mb-1"></div>
      <Suspense
        fallback={
          <div className="py-13 w-full flex items-center justify-center">
            <span className="loading loading-bars loading-md"></span>
          </div>
        }
      >
        <Friends friendsPromise={friendsPromise} />
      </Suspense>
    </>
  );
};
export default Home;
