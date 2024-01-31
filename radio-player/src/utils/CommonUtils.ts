import { toast } from "react-toastify";
import { TOAST_TYPE } from "../constants/AppConstants";

const buildUrl = (url: string, pathParams: any, searchParams: any) => {
  url = url.trim();
  if (pathParams) {
    Object.keys(pathParams).forEach((key: any) => {
      url = url.replace("{" + key + "}", pathParams[key]);
    });
  }

  if (searchParams) {
    Object.keys(searchParams).forEach((key: any) => {
      if (searchParams[key] === null || searchParams[key] === undefined) {
        delete searchParams[key];
      }
    });
    url += "?";
    url += Object.keys(searchParams)
      .map(function (key: any) {
        return [key, searchParams[key]].map(encodeURIComponent).join("=");
      })
      .join("&");
  }
  return url;
};

const showToast = (type: string, text: string) => {
  switch (type) {
    case TOAST_TYPE.SUCCESS:
      toast.success(text);
      break;
    case TOAST_TYPE.ERROR:
      toast.error(text);
      break;
    case TOAST_TYPE.INFO:
      toast.info(text);
      break;
    case TOAST_TYPE.WARNING:
      toast.warning(text);
      break;
    default:
      break;
  }
};

export function CommonUtils() {
  return {
    buildUrl,
    showToast,
  };
}
