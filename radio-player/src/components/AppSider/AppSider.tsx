import { FaGlobe, FaHeart, FaRadio } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AppSider() {

  return (
    <div className="dark:darkBackground flex flex-col">
      <Link to='/' className="flex px-[20px] flex-row gap-5 hover:bg-slate-500 items-center justify-start h-[60px] dark:text-[white]">
        <FaRadio />
        <span>Browse</span>
      </Link>
      <Link to='/radio-map' className="flex px-[20px] flex-row gap-5 hover:bg-slate-500 items-center justify-start h-[60px] dark:text-[white]">
        <FaGlobe />
        <span>Radio Map</span>
      </Link>
      <Link to='favorites' className="flex px-[20px] flex-row gap-5 hover:bg-slate-500 items-center justify-start h-[60px] dark:text-[white]">
        <FaHeart />
        <span>Favorites</span>
      </Link>
    </div>
  );
}

export default AppSider;
