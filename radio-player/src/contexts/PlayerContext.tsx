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
}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStation, setCurrentStation] = useState<RadioStation | null>(null);
  const [volume, setVolume] = useState(50);
  const [recordEnabled, setRecordEnabled] = useState(false);

  const togglePlaying = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleRecord = () => {
    setRecordEnabled((prev) => !prev);
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
