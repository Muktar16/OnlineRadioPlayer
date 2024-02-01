import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { CommonUtils } from "../utils/CommonUtils";
import { TOAST_TYPE } from "../constants/AppConstants";

interface FavoriteStationContextProps {
  favoriteStations: RadioStation[];
  addFavorite: (station: RadioStation) => void;
  removeFavorite: (stationId: string) => void;
  isFavorite: (stationId: string) => boolean; 
}

const FavoriteStationContext = createContext<FavoriteStationContextProps | undefined>(
  undefined
);

export const useFavoriteStationContext = () => {
  const context = useContext(FavoriteStationContext);
  if (!context) {
    throw new Error(
      "useFavoriteStationContext must be used within a FavoriteStationProvider"
    );
  }
  return context;
};

interface FavoriteStationProviderProps {
  children: ReactNode;
}

export const FavoriteStationProvider: React.FC<FavoriteStationProviderProps> = ({
  children,
}) => {
  const [favoriteStations, setFavoriteStations] = useState<RadioStation[]>(() => {
    const storedFavorites = localStorage.getItem("favoriteStations");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteStations", JSON.stringify(favoriteStations));
  }, [favoriteStations]);

  const addFavorite = (station: RadioStation) => {
    setFavoriteStations((prevFavorites) => [...prevFavorites, station]);
    CommonUtils().showToast(TOAST_TYPE.SUCCESS, `${station.name} added to favorites`);
  };

  const removeFavorite = (stationId: string) => {
    setFavoriteStations((prevFavorites) =>
      prevFavorites.filter((station) => station.stationuuid !== stationId)
    );
    CommonUtils().showToast(TOAST_TYPE.SUCCESS, `Station removed from favorites`);
  };

  const isFavorite = (stationId: string) => {
    return favoriteStations.some((station) => station.stationuuid === stationId);
  };

  const contextValue: FavoriteStationContextProps = {
    favoriteStations,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoriteStationContext.Provider value={contextValue}>
      {children}
    </FavoriteStationContext.Provider>
  );
};
