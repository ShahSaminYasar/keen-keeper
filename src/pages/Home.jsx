import { Suspense, useEffect } from "react";
import Friends from "../sections/Friends";
import Hero from "../sections/Hero";
import { useLocation } from "react-router";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
