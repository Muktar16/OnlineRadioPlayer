import React, { useState, useEffect } from "react";

const Favorites: React.FC = () => {
  const [favoriteStations, setFavoriteStations] = useState<any[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteStations");
    if (storedFavorites) {
      setFavoriteStations(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFavorite = (stationId: string) => {
    const updatedFavorites = favoriteStations.filter(
      (station) => station.id !== stationId
    );
    localStorage.setItem("favoriteStations", JSON.stringify(updatedFavorites));
    setFavoriteStations(updatedFavorites);
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favoriteStations.length === 0 ? (
        <p>No favorite stations yet.</p>
      ) : (
        <ul>
          {favoriteStations.map((station) => (
            <li key={station.id}>
              {station.name}{" "}
              <button onClick={() => removeFavorite(station.id)}>
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;

