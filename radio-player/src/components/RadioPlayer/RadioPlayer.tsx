import React, { useEffect } from "react";
import { usePlayer } from "../../contexts/PlayerContext";

const RadioPlayer: React.FC = () => {
  const { audioRef, isPlaying, currentStation } = usePlayer();

  useEffect(() => {
    const togglePlaying = async () => {
      try {
        if (isPlaying && audioRef.current && currentStation) {
          await audioRef.current.play();
        } else if (audioRef.current && currentStation) {
          audioRef.current.pause();
        }
      } catch (error) {
        console.error("Pausing/Playing failed:", error);
      }
    };
    if (currentStation) togglePlaying();
  }, [isPlaying, currentStation]);

  return (
    <>
      {currentStation?.url && (
        <audio ref={audioRef} controls={false}>
          <source src={currentStation?.url} type="audio/mpeg" />
        </audio>
      )}
    </>
  );
};

export default RadioPlayer;
