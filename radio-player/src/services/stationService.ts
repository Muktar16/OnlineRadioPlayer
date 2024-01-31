import StationApi from "../apis/stationApi";

const getTopvoteStations = async () => {
  const response = await StationApi().getTopvoteStations();
  return response.data; 
};

const getRadioStationsByLanguage = async (selectedLanguage:string) => {
  const response = await StationApi().getRadioStationsByLanguage({ language: selectedLanguage},{limit: 100});
  return response.data; 
};

const getRadioStationsByCountry = async (countryCode:string) => {
  const response = await StationApi().getRadioStationsByCountry({ countryCode },{limit: 100});
  return response.data; 
};

const searchRadioStationsByName = async (countrycode:string,name:string) => {
  const response = await StationApi().searchRadioStationsByName({ countrycode, name });
  return response.data; 
};

export function StationServices() {
  return {
    getTopvoteStations,
    getRadioStationsByLanguage,
    getRadioStationsByCountry,
    searchRadioStationsByName,
  };
}
