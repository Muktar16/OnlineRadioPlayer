import CountryApi from "../apis/countryApi";

const getAllCountries = async () => {
  const response = await CountryApi().getAllCountries();
  return response.data;
};

export function CountryServices() {
  return {
    getAllCountries,
  };
}