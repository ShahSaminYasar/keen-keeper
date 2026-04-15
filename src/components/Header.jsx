import { XIcon } from "@phosphor-icons/react";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { ChartLine, Clock3, HomeIcon } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="w-full bg-base-100 px-3 py-2 h-20 flex items-center border-b border-base-300 fixed top-0 left-0 z-50 shadow-xs">
      <div className="w-full max-w-375 mx-auto flex items-center gap-3 justify-between">
        <Link to="/">
          <img src="/assets/logo.png" alt="Keen Keeper" className="w-50" />
        </Link>

        <button
          className="cursor-pointer inline-block md:hidden"
          onClick={() => setMobileNavOpen((prev) => !prev)}
        >
          {mobileNavOpen ? <XIcon size={30} /> : <ListIcon size={30} />}
        </button>

        <nav
          className={`absolute top-22 left-2 z-50 bg-base-100 p-3 rounded-md shadow-lg min-w-[calc(100%-12px)] border border-neutral/20 ${mobileNavOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-3"} md:relative md:p-0 md:rounded-none md:shadow-none md:min-w-fit md:border-none md:top-0 md:opacity-100 md:pointer-events-auto md:translate-y-0 transition-all duration-300 md:duration-0`}
        >
          <ul className="w-full flex flex-col md:flex-row items-center gap-1">
            <li className="block w-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `w-full flex items-center gap-1.5 btn ${isActive ? "btn-primary" : "btn-ghost"}`
                }
              >
                <HomeIcon size={17} /> Home
              </NavLink>
            </li>
            <li className="block w-full">
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `w-full flex items-center gap-1.5 btn ${isActive ? "btn-primary" : "btn-ghost"}`
                }
              >
                <Clock3 size={17} /> Timeline
              </NavLink>
            </li>
            <li className="block w-full">
              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  `w-full flex items-center gap-1.5 btn ${isActive ? "btn-primary" : "btn-ghost"}`
                }
              >
                <ChartLine size={17} /> Stats
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
