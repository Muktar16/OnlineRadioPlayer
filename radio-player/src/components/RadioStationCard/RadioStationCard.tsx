import { FaHeart, FaPlay } from "react-icons/fa6";
import { usePlayer } from "../../contexts/PlayerContext";

const RadioStationCard = ({ radioStation }: any) => {
  const { setCurrentStation } = usePlayer();

  const handleAddToFavorite = () => {
    console.log("add to favorite");
  };
  const handlePlay = () => {
    setCurrentStation(radioStation);
  };
  const getFirstWord = (sentence: string) => {
    const words = sentence.includes(",")
      ? sentence.split(",")
      : sentence.split(" ");
    return words[0] || null;
  };

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
        {/* {radioStation?.favicon && ( */}
          <div className="w-[80px] h-[80px]">
            <img
              alt=""
              src={radioStation.favicon || 'defaultFavIcon.jpg'}
              className="h-[80px] min-w-full"
            />
          </div>
        {/* )} */}
      </div>
      <div className="flex flex-row gap-3 h-[40px]">
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
          <div
            onClick={handleAddToFavorite}
            className="flex gap-1 items-center justify-center text-[20px] cursor-pointer dark:text-white"
          >
            <FaHeart /> Like
          </div>

          <div
            onClick={handlePlay}
            className="flex gap-1 items-center justify-center cursor-pointer text-[20px] dark:text-white"
          >
            <FaPlay /> Play
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioStationCard;
