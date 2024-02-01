import { FaGlobe, FaHeart, FaMusic, FaRadio } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function AppSider() {
  const location = useLocation();

  return (
    <div className="relative h-[90vh] dark:bg-darkBackground flex flex-col">
      <Link
        to="/"
        className={`flex px-[20px] flex-row gap-5 items-center justify-start h-[60px] dark:hover:bg-[#463f3f] hover:bg-slate-300 dark:text-[white] ${
          location.pathname === "/" ? "bg-slate-300 dark:bg-[#614c13]" : ""
        }`}
      >
        <FaRadio />
        <span>Browse</span>
      </Link>
      <Link
        to="/radio-map"
        className={`flex px-[20px] flex-row gap-5 items-center dark:hover:bg-[#463f3f] justify-start h-[60px] hover:bg-slate-300 dark:text-[white] ${
          location.pathname === "/radio-map" ? "bg-slate-300 dark:bg-[#614c13]" : ""
        }`}
      >
        <FaGlobe />
        <span>Radio Map</span>
      </Link>
      <Link
        to="/favorites"
        className={`flex px-[20px] flex-row gap-5 items-center justify-start h-[60px] dark:hover:bg-[#463f3f] hover:bg-slate-300 dark:text-[white] ${
          location.pathname === "/favorites" ? "bg-slate-300 dark:bg-[#614c13]" : ""
        }`}
      >
        <FaHeart />
        <span>Favorites</span>
      </Link>
      <Link
        to="/player"
        className={`flex px-[20px] flex-row gap-5 items-center justify-start h-[60px]  dark:hover:bg-[#463f3f] hover:bg-slate-300 dark:text-[white] ${
          location.pathname === "/player" ? "bg-slate-300 dark:bg-[#614c13]" : ""
        }`}
      >
        <FaMusic />
        <span>Player</span>
      </Link>
      <div className="border border-gray1"></div>

      <span className="px-[20px] py-4 text-[#7f7f7f] dark:text-white">
        Notifications
      </span>
      <Link
        to='#'
        className="fixed bottom-0 w-[200px]  left-0 flex px-[25px] flex-row gap-5 items-center justify-start h-[65px] dark:hover:bg-[#463f3f] hover:bg-slate-300 dark:text-[white]"
      >
        <FiInfo />
        <span>About</span>
      </Link>
    </div>
  );
}

export default AppSider;
