

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

export function CommonUtils() {
  return {
    buildUrl,
  };
}
