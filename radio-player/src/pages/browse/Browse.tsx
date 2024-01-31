import { useEffect, useState } from "react";
import RadioStationCard from "../../components/RadioStationCard/RadioStationCard";
import MobileDrawer from "../../components/MobileDrawer/MobileDrawer";
import { usePlayer } from "../../contexts/PlayerContext";
import { StationServices } from "../../services/stationService";
import Select from "react-select";
import { LanguageServices } from "../../services/languageService";
import { CountryServices } from "../../services/countryService";
import { debounce } from "../../utils/Debounce";
import { CommonUtils } from "../../utils/CommonUtils";
import { TOAST_TYPE } from "../../constants/AppConstants";

function Browse() {
  const [countryOptions, setCountryOptions] = useState([]);
  const [radioStations, setRadioStations] = useState<RadioStation[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<any>();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [searchText, setSearchText] = useState("");
  const { setCurrentStation, currentStation } = usePlayer();
  const [languageOptions, setLanguageOptions] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await CountryServices().getAllCountries();
      const options = data.map((item: any) => ({
        value: item.iso_3166_1,
        label: item.name,
      }));
      setCountryOptions(options);
    };
    getCountries();
  }, []);

  useEffect(() => {
    const getRadioStations = async () => {
      const data = await StationServices().getTopvoteStations();
      setRadioStations(data);
      if (!currentStation) setCurrentStation(data[0]);
    };
    getRadioStations();
  }, []);

  useEffect(() => {
    const getLanguages = async () => {
      const searchParams = {
        hidebroken: true,
        limit: 100,
        reverse: true,
        order: "stationcount",
      };
      const data = await LanguageServices().getAllLanguage(searchParams);
      const options = data.map((item: any) => ({
        value: item.name,
        label: item.name,
      }));
      setLanguageOptions(options);
    };
    getLanguages();
  }, []);

  const getRadioStationsByLanguage = async (item: any) => {
    try {
      setSelectedLanguage(item);
      const data = await StationServices().getRadioStationsByLanguage(item.value);
      setRadioStations(data);
      setSelectedCountry(null);
      setSearchText('');
    } catch (error) {
      CommonUtils().showToast(TOAST_TYPE.ERROR, "Server or Network Error");
      console.log(error);
    }
  };

  useEffect(() => {
    const getRadioStationsByCountry = async () => {
      const data = await StationServices().getRadioStationsByCountry(
        selectedCountry?.value
      );
      setRadioStations(data);
    };
    getRadioStationsByCountry();
  }, [selectedCountry]);

  useEffect(() => {
    const getRadioStationsByName = async () => {
      const data = await StationServices().searchRadioStationsByName(
        selectedCountry?.value,
        searchText
      );
      setRadioStations(data);
    };
    getRadioStationsByName();
  }, [searchText]);

  return (
    <div className="px-[15px] py-[15px] min-h-screen flex flex-col gap-10 bg-slate-100 dark:bg-darkBackground">
      {/* filters */}
      <div className="w-full flex md:flex-row flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <Select
            options={countryOptions}
            className="md:w-[200px]"
            placeholder="Find by Country"
            value={selectedCountry}
            onChange={(item: any) => setSelectedCountry(item)}
          />
        </div>

        <Select
          options={languageOptions}
          className="md:w-[200px]"
          placeholder="Find by Language"
          value={selectedLanguage}
          onChange={getRadioStationsByLanguage}
        />

        <input
          type="text"
          value={searchText}
          disabled={!selectedCountry ? true : false}
          onChange={(e) => debounce(setSearchText(e.target.value), 300)}
          placeholder="Search by name"
          className="bg-white border border-gray-300 px-4 py-2 leading-tight"
        />
      </div>
      {/* radio stations list */}
      <div className="w-full flex flex-wrap justify-center md:justify-center gap-5 gap-y-10 ">
        {radioStations?.map((radioStation: any, index: number) => (
          <RadioStationCard key={index} radioStation={radioStation} />
        ))}
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Browse;
