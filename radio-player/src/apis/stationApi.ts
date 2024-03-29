import axios from "axios";
import { StationEndpoints } from "../endpoints/stationEndpoints";
import { CommonUtils } from "../utils/CommonUtils";

const { buildUrl } = CommonUtils();

const getTopvoteStations = async () => {
  const url = StationEndpoints.getTopvoteStations;
  const response = await axios.get(buildUrl(url, null, null));
  return response;
};

const getStations = async (searchParams:any) => {
  const url = StationEndpoints.getTopvoteStations;
  const response = await axios.get(buildUrl(url, null, searchParams));
  return response;
};

const getRadioStationsByLanguage = async (
  pathParams: any,
  searchParams: any
) => {
  const url = StationEndpoints.getRadioStationsByLanguage;
  const response = await axios.get(buildUrl(url, pathParams, searchParams));
  return response;
};

const getRadioStationsByCountry = async (
  pathParams: any,
  searchParams: any
) => {
  const url = StationEndpoints.getRadioStationsByCountry;
  const response = await axios.get(buildUrl(url, pathParams, searchParams));
  return response;
};

const searchRadioStationsByName = async (
  searchParams: any
) => {
  const url = StationEndpoints.searchRadioStationsByName;
  const response = await axios.get(buildUrl(url, null, searchParams));
  return response;
};

const getRadioStationsWithGeoLocation = async (
  searchParams: any
) => {
  const url = StationEndpoints.getRadioStationsWithGeoLocation;
  const response = await axios.get(buildUrl(url, null, searchParams));
  return response;
};

function StationApi() {
  return {
    getTopvoteStations,
    getStations,
    getRadioStationsByLanguage,
    getRadioStationsByCountry,
    searchRadioStationsByName,
    getRadioStationsWithGeoLocation,
  };
}

export default StationApi;
