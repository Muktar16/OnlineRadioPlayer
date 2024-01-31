import axios from "axios";
import { CommonUtils } from "../utils/CommonUtils";
import { LanguageEndpoints } from "../endpoints/languageEndpoints";

const { buildUrl } = CommonUtils();

const getAllLanguage = async (searchParams:any) => {
  const url = LanguageEndpoints.getAllLanguage;
  const response = await axios.get(buildUrl(url,null,searchParams));
  return response;
};

function LanguageApi() {
  return {
    getAllLanguage,
  };
}

export default LanguageApi;