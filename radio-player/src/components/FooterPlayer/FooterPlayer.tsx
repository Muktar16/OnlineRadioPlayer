import { FaPlayCircle } from "react-icons/fa";
import { FaHeart, FaPause } from "react-icons/fa6";
import { LuClock12 } from "react-icons/lu";
import { usePlayer } from "../../contexts/PlayerContext";

const FooterPlayer = () => {
  const { currentStation, isPlaying, togglePlaying } = usePlayer();
  return (
    <div className="sticky w-full bg-primary h-[65px] flex items-center justify-between bottom-0 md:px-5 px-3">
      <div className="flex flex-row items-center gap-4">
        <img
          src={currentStation?.favicon || "/defaultFavIcon.jpg"}
          alt={currentStation?.name}
          className="w-[50px] h-[50px]"
        />
        <div className="text-white">{currentStation?.name}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <LuClock12 className="text-white" />
        <FaHeart className="text-white" />
        <div onClick={togglePlaying} className="h-[58px] cursor-pointer w-[58px] bg-[#eb5181] flex items-center justify-center rounded-[50%]">
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
