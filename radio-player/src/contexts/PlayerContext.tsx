import React, { createContext, useContext, useState, ReactNode, useRef } from "react";

interface PlayerContextProps {
  isPlaying: boolean;
  currentStation: RadioStation | null;
  audioRef: React.RefObject<HTMLAudioElement>;
  volume: number;
  recordEnabled: boolean;
  togglePlaying: () => void;
  setCurrentStation: (station: RadioStation) => void;
  setVolume: (volume: number) => void;
  toggleRecord: () => void;
  increaseVolume: () => void;
  decreaseVolume: () => void;
}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStation, setCurrentStation] = useState<RadioStation | null>(null);
  const [volume, setVolume] = useState(0.5);
  const [recordEnabled, setRecordEnabled] = useState(false);

  const togglePlaying = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleRecord = () => {
    setRecordEnabled((prev) => !prev);
  };

  const increaseVolume = () => {
    if (volume < 1) {
      const newVolume = Math.min(1, volume + 0.01);
      // const newVolume = volume + 0.01;
      setVolume(newVolume);
      if(audioRef.current) audioRef.current.volume = newVolume;
    }
  };

  const decreaseVolume = () => {
    if (volume > 0) {
      const newVolume = Math.max(0, volume - 0.01);
      // const newVolume = volume - 0.01;
      setVolume(newVolume);
      if(audioRef.current) audioRef.current.volume = newVolume;
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        currentStation,
        audioRef,
        volume,
        recordEnabled,
        togglePlaying,
        setCurrentStation,
        setVolume,
        toggleRecord,
        increaseVolume,
        decreaseVolume,

      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = (): PlayerContextProps => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
};
