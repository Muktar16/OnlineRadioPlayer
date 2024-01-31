import axios from "axios";
import { StationEndpoints } from "../endpoints/stationEndpoints";
import { CommonUtils } from "../utils/CommonUtils";

const { buildUrl } = CommonUtils();

const getTopvoteStations = async () => {
  const url = StationEndpoints.getTopvoteStations;
  const response = await axios.get(buildUrl(url, null, null));
  return response;
};

function StationApi() {
  return {
    getTopvoteStations,
  };
}

export default StationApi;
