import { FaPause, FaPlay } from "react-icons/fa6";
import { ImMinus, ImPlus } from "react-icons/im";
import { usePlayer } from "../../contexts/PlayerContext";

function Player() {
  const { currentStation, togglePlaying, isPlaying , decreaseVolume, increaseVolume, volume} = usePlayer();
  
  return (
    <>
      <div className="bg-darkBackground flex justify-center h-screen ">
        <div className="p-8 rounded-lg  max-w-[800px] ">
          <img
            src={currentStation?.favicon || "/defaultFavIcon.jpg"}
            alt="idk - Highvyn, Taylor Shin"
            className=" md:w-full h-3/6 mx-auto rounded-lg mb-4 shadow-teal-50"
          />
            <img src={isPlaying ? "/audioVisualizer.gif" : '/staticVisualizer.png'} alt="" className="w-full h-[60px]"/>
          <h2 className="text-[20px] text-white font-semibold text-center">
            {currentStation?.name}
          </h2>

          <p className="text-gray-500 text-[16px] text-center">
            {currentStation?.country}
          </p>

          <div className="mt-6 flex justify-center items-center">
            <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
              <ImMinus onClick={decreaseVolume}/>
            </button>
            <button
              onClick={togglePlaying}
              className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
              <ImPlus onClick={increaseVolume}/>
            </button>
          </div>

          <div className="mt-6 bg-gray-200 h-2 rounded-full">
            <div style={{width:`${volume*100}%`}} className={`bg-teal-500 h-2 w-full rounded-full`}></div>
          </div>
          <div className="text-white">Volume: {Math.ceil(volume*100)}</div>
        </div>
      </div>
    </>
  );
}

export default Player;
