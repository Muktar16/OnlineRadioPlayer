import StationApi from "../apis/stationApi";

const getTopvoteStations = async () => {
  const response = await StationApi().getTopvoteStations();
  return response.data; 
};

const getRadioStationsByLanguage = async (selectedLanguage:string) => {
  const response = await StationApi().getRadioStationsByLanguage({ language: selectedLanguage},{limit: 100});
  return response.data; 
};

export function StationServices() {
  return {
    getTopvoteStations,
    getRadioStationsByLanguage,
  };
}
