import React from "react";
import { useFavoriteStationContext } from "../../contexts/FavoriteStationsContext";
import RadioStationCard from "../../components/RadioStationCard/RadioStationCard";
import NoDataFound from "../../components/NoData/NoData";

const FavoritePage: React.FC = () => {
  const { favoriteStations, removeFavorite } = useFavoriteStationContext();

  return (
    <div className="w-full h-screen flex flex-wrap justify-center gap-5 gap-y-10 p-4 dark:bg-darkBackground">
      {favoriteStations.length > 0 ? (
        favoriteStations.map((radioStation: any, index: number) => (
          <RadioStationCard
            key={index}
            radioStation={radioStation}
            onRemove={() => removeFavorite(radioStation.stationuuid)}
          />
        ))
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default FavoritePage;
