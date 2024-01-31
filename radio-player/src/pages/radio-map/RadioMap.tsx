import { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Station {
  name: string;
  latitude: number;
  longitude: number;
}

const DUMMY_STATIONS: Station[] = [
  { name: "Radio Station 1", latitude: 51.505, longitude: -0.09 },
  { name: "Radio Station 2", latitude: 51.515, longitude: -0.08 },
  { name: "Radio Station 3", latitude: 51.525, longitude: -0.07 },
  { name: "Radio Station 4", latitude: 51.505, longitude: -0.1 },
  { name: "Radio Station 5", latitude: 51.515, longitude: -0.11 },
];

const RadioMap: React.FC<{}> = () => {
  const center: LatLngTuple = [23.752753878263377, 90.4242629286096];

  return (
    <div className="w-full h-screen">
      <MapContainer
        style={{ width: "100%", height: "100vh" }}
        center={center}
        zoom={10}
      >
        <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=7EMt6m63mR5qr5XNUTT1" attribution="<a href='https://www.maptiler.com/copyright/' target='_blank'>&copy; MapTiler</a> <a href='https://www.openstreetmap.org/copyright' target='_blank'>&copy; OpenStreetMap contributors</a>" />


      </MapContainer>
    </div>
  );
};

export default RadioMap;

// import L from "leaflet";
// import "leaflet.markercluster/dist/MarkerCluster.Default.css";
// import "leaflet.markercluster/dist/MarkerCluster.css";
// import "leaflet/dist/leaflet.css";
// import { useEffect } from "react";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-markercluster";
// import { StationServices } from "../../services/stationService";

// const RadioMap = () => {
//   const radioStations = [
//     { id: 1, name: "Station 1", lat: 37.7749, lon: -122.4194 },
//     { id: 2, name: "Station 2", lat: 34.0522, lon: -118.2437 },
//     // Add more radio stations with their latitude and longitude
//   ];

//   const icon = new L.Icon({
//     iconUrl: "path/to/marker-icon.png",
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowUrl: "path/to/marker-shadow.png",
//     shadowSize: [41, 41],
//   });

//   useEffect(()=>{
//     const getRadioStationsWithGeoLocation = async() =>{
//       const data = await StationServices().getRadioStationsWithGeoLocation();
//       console.log(data);
//     }
//     getRadioStationsWithGeoLocation();
//   },[])

//   return (
//     <MapContainer
//       center={[37.7749, -122.4194]}
//       zoom={5}
//       style={{ height: "500px", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <MarkerClusterGroup showCoverageOnHover={false}>
//         {radioStations.map((station) => (
//           <Marker
//             key={station.id}
//             position={[station.lat, station.lon]}
//             icon={icon}
//           >
//             <Popup>{station.name}</Popup>
//           </Marker>
//         ))}
//       </MarkerClusterGroup>
//     </MapContainer>
//   );
// };

// export default RadioMap;
