import { PlusIcon } from "@phosphor-icons/react";
import { Suspense } from "react";
import SummaryCards from "../components/SummaryCards";

const Hero = ({ friendsPromise }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center gap-5 fade">
      <h1 className="text-5xl font-bold text-neutral">
        Friends to keep close in your life
      </h1>

      <p className="text-neutral/50 block w-full max-w-xl">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="btn btn-primary mt-2 mb-3">
        <PlusIcon weight="bold" /> Add a Friend
      </button>

      <Suspense
        fallback={
          <div className="py-13">
            <span className="loading loading-bars loading-md"></span>
          </div>
        }
      >
        <SummaryCards summaryPromise={friendsPromise} />
      </Suspense>
    </section>
  );
};
export default Hero;
