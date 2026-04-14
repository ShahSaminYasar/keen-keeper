import { ChartLine, Clock3, HomeIcon } from "lucide-react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="w-full bg-base-100 px-3 py-2 h-20 flex items-center border-b border-base-300">
      <div className="w-full max-w-375 mx-auto flex items-center gap-3 justify-between">
        <img src="/assets/logo.png" alt="Keen Keeper" className="w-50" />

        <nav>
          <ul className="flex items-center gap-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 btn ${isActive ? "btn-primary" : "btn-ghost"}`
                }
              >
                <HomeIcon size={17} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 btn ${isActive ? "btn-primary" : "btn-ghost"}`
                }
              >
                <Clock3 size={17} /> Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 btn ${isActive ? "btn-primary" : "btn-ghost"}`
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
