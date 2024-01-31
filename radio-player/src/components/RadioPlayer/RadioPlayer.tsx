import React, { useEffect, useState } from "react";
import { usePlayer } from "../../contexts/PlayerContext";

const RadioPlayer: React.FC = () => {
  const { audioRef, isPlaying, currentStation , togglePlaying} = usePlayer();
  const [isLoading, setIsLoading] = useState(true);
    console.log(isLoading)
  useEffect(() => {
    const togglePlaying = async () => {
      try {
        if (isPlaying && audioRef.current && currentStation) {
          setIsLoading(true);
          await audioRef.current.play();
        } else if (audioRef.current && currentStation) {
          audioRef.current.pause();
        }
      } catch (error) {
        console.error("Pausing/Playing failed:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (currentStation) togglePlaying();
  }, [isPlaying, currentStation]);

  useEffect(() => {
    if (currentStation) {
      audioRef.current?.load();
      audioRef.current?.play();
      if(!isPlaying) togglePlaying();
    }
  }, [currentStation]);

  return (
    <>
      {currentStation && (
        <audio ref={audioRef} controls={false}>
          <source
            src={currentStation?.url_resolved || currentStation?.url}
            type="audio/mpeg"
          />
        </audio>
      )}
    </>
  );
};

export default RadioPlayer;
