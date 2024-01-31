import axios from "axios";
import { StationEndpoints } from "../endpoints/stationEndpoints";
import { CommonUtils } from "../utils/CommonUtils";

const { buildUrl } = CommonUtils();

const getTopvoteStations = async () => {
  const url = StationEndpoints.getTopvoteStations;
  const response = await axios.get(buildUrl(url, null, null));
  return response;
};

const getRadioStationsByLanguage = async (pathParams:any,searchParams:any) => {
    const url = StationEndpoints.getRadioStationsByLanguage;
    const response = await axios.get(buildUrl(url, pathParams, searchParams));
    return response;
  };

function StationApi() {
  return {
    getTopvoteStations,
    getRadioStationsByLanguage
  };
}

export default StationApi;
