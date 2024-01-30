import { FaHeart, FaPlay } from "react-icons/fa6";
import { getFirstWord } from "../../utils/globalFunctions";

const RadioStationCard = ({ radioStation }: any) => {
  return (
    <div className="relative w-[270px] h-[280px] shadow-md border-t-[1px] px-3 py-3 dark:bg-[#203042]">
      <div className="w-full justify-between flex flex-row min-h-[90px]">
        <div className="">
          <div className="font-semibold text-[20px] dark:text-white">
            {radioStation.name}
          </div>
          <div className="text-[13px] text-gray2 dark:text-white">
            {radioStation.country}
          </div>
        </div>
        {radioStation?.favicon && (
          <div className="w-[80px] h-[80px]">
            <img
              alt=""
              src={radioStation.favicon}
              className="h-[80px] min-w-full"
            ></img>
          </div>
        )}
      </div>
      <div className="flex flex-row gap-3">
        {radioStation?.language && (
          <div className="py-[6px] rounded-[20px] font-semibold bg-[#e0e0e0] px-3">
            {getFirstWord(radioStation?.language)}
          </div>
        )}
        {radioStation?.tags && (
          <div className="py-[6px] rounded-[20px] font-semibold bg-[#e0e0e0] px-3">
            {getFirstWord(radioStation?.tags)}
          </div>
        )}
      </div>
      <div className="py-[6px] mt-3 w-fit rounded-[20px] text-white font-semibold bg-primary px-3">
        Votes:{radioStation.votes}
      </div>
      <div className="w-full absolute bottom-3">
        <div className="flex items-center justify-end mr-10 gap-5">
          <div className="flex gap-1 items-center justify-center text-[20px]">
            <FaHeart /> Like
          </div>

          <div className="flex gap-1 items-center justify-center text-[20px]">
            <FaPlay /> Play
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioStationCard;
