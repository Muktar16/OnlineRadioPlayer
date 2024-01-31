import axios from "axios";
import { CommonUtils } from "../utils/CommonUtils";
import { CountryEndpoints } from "../endpoints/countryEndpoints";

const { buildUrl } = CommonUtils();

const getAllCountries = async () => {
  const url = CountryEndpoints.getAllCountries;
  const response = await axios.get(buildUrl(url,null,null));
  return response;
};

function LanguageApi() {
  return {
    getAllCountries,
  };
}

export default LanguageApi;