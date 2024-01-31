import StationApi from "../apis/stationApi";

const getTopvoteStations = async () => {
  const response = await StationApi().getTopvoteStations();
  return response.data; 
};

export function StationServices() {
  return {
    getTopvoteStations,
  };
}
