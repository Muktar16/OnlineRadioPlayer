const PlatformUrl = import.meta.env.VITE_BASE_URL || "";
export const CountryEndpoints = {
  getAllCountries: PlatformUrl + "/countries",
};