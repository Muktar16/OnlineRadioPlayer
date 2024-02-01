import L from "leaflet";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { StationServices } from "../../services/stationService";
import Loading from "../../components/Loading/Loading";
import { SpinnerType } from "../../constants/AppConstants";

const RadioMap: React.FC<{}> = () => {
  const [radioStations, setRadioStations] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRadioStationsWithGeoLocation = async () => {
      try {
        const data = await StationServices().getRadioStationsWithGeoLocation();
        const stations = data.map((station: any) => ({
          name: station.name,
          latitude: station.geo_lat,
          longitude: station.geo_long,
          url: station.url,
          url_resolved: station.url_resolved,
        }));
        setRadioStations(stations);
      } catch (error) {
        console.error("Error fetching radio stations:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getRadioStationsWithGeoLocation();
  }, []);

  useEffect(() => {
    if (!radioStations) return;

    const map = L.map("map", {
      center: [radioStations[0].latitude, radioStations[0].longitude],
      zoom: 10,
    });

    L.tileLayer(
      "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=7EMt6m63mR5qr5XNUTT1",
      {
        attribution:
          '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      }
    ).addTo(map);

    const markerClusterGroup = L.markerClusterGroup();

    radioStations.forEach((station: any) => {
      const marker = L.marker([station.latitude, station.longitude]);
      marker.bindPopup(station.name);
      markerClusterGroup.addLayer(marker);
    });

    map.addLayer(markerClusterGroup);

    const cleanupFunction: L.Map[] | void = [map];

    return () => {
      cleanupFunction.forEach((mapInstance) => mapInstance.remove());
    };
  }, [radioStations]);

  return (
    <div className="min-h-screen w-full dark:bg-darkBackground">
      <Loading
        isLoading={isLoading}
        message="Loading map..."
        spinnerType={SpinnerType.HASH}
      >
        <div id="map" style={{ width: "100%", height: "100vh", zIndex: 0 }} />
      </Loading>
    </div>
  );
};

export default RadioMap;
