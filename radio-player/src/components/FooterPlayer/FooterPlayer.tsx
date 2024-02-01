import { FaPlayCircle } from "react-icons/fa";
import { FaHeart, FaPause } from "react-icons/fa6";
import { LuClock12 } from "react-icons/lu";
import { usePlayer } from "../../contexts/PlayerContext";
import { ScaleLoader } from "react-spinners";
import { useLocation } from "react-router-dom";

const FooterPlayer = () => {
  const { currentStation, isPlaying, togglePlaying } = usePlayer();
  const location = useLocation();
  const isPlayerRoute = location.pathname === "/player";
  if (isPlayerRoute) {
    return null; 
  }
  return (
    <div className="sticky w-full bg-primary h-[65px] flex items-center justify-between bottom-0 md:px-5 px-1">
      <div className="flex flex-row items-center justify-start gap-1 md:gap-4 overflow-ellipsis w-[40%]">
        <img
          src={currentStation?.favicon || "/defaultFavIcon.jpg"}
          alt={currentStation?.name}
          className="md:w-[58px] md:h-[58px] w-[30px] h-[30px] rounded-[50%]"
        />
        <div className="text-white text-[12px] md:text-[16px] overflow-ellipsis overflow-x-hidden flex flex-row">
          {currentStation?.name}
        </div>
      </div>
      <div className="w-[20%] justify-center flex">
        <ScaleLoader loading={isPlaying} color="#36d7b7" />
      </div>
      <div className="flex flex-row items-center w-[40%] justify-end gap-4">
        <LuClock12 className="text-white" />
        <FaHeart className="text-white" />
        <div
          onClick={togglePlaying}
          className="h-[58px] cursor-pointer w-[58px] bg-[#eb5181] flex items-center justify-center rounded-[50%]"
        >
          {isPlaying ? (
            <FaPause className="text-white" />
          ) : (
            <FaPlayCircle className="text-white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterPlayer;
