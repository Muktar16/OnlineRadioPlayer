const PlatformUrl = import.meta.env.VITE_BASE_URL || "";
export const StationEndpoints = {
  getTopvoteStations: PlatformUrl + "/stations/topvote/100",
  getRadioStationsByLanguage: PlatformUrl + "/stations/bylanguage/{language}",
  getRadioStationsByCountry: PlatformUrl + "/stations/bycountrycodeexact/{countryCode}",
  searchRadioStationsByName: PlatformUrl + "/stations/search",
};
