import { useEffect, useState } from "react";
import RadioStationCard from "../../components/RadioStationCard/RadioStationCard";
import MobileDrawer from "../../components/MobileDrawer/MobileDrawer";
import { usePlayer } from "../../contexts/PlayerContext";
import { StationServices } from "../../services/stationService";
import Select from "react-select";
import { LanguageServices } from "../../services/languageService";
import { CountryServices } from "../../services/countryService";

function Browse() {
  const [countryOptions, setCountryOptions] = useState([]);
  const [radioStations, setRadioStations] = useState<RadioStation[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
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

  useEffect(() => {
    const getRadioStationsByLanguage = async () => {
      const data = await StationServices().getRadioStationsByLanguage(
        selectedLanguage
      );
      setRadioStations(data);
      setSelectedCountryCode("");
    };
    getRadioStationsByLanguage();
  }, [selectedLanguage]);

  useEffect(() => {
    const getRadioStationsByCountry = async () => {
      const data = await StationServices().getRadioStationsByCountry(
        selectedCountryCode
      );
      setRadioStations(data);
    };
    getRadioStationsByCountry();
  }, [selectedCountryCode]);

  useEffect(() => {
    const getRadioStationsByName = async () => {
      const data = await StationServices().searchRadioStationsByName(
        selectedCountryCode,
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
            value={selectedCountryCode}
            onChange={(item: any) => setSelectedCountryCode(item.value)}
          />
        </div>

        <Select
          options={languageOptions}
          className="md:w-[200px]"
          placeholder="Find by Language"
          onChange={(item: any) => setSelectedLanguage(item.value)}
        />

        <input
          type="text"
          value={searchText}
          disabled={!selectedCountryCode ? true : false}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by name"
          className="bg-white border border-gray-300 px-4 py-2 leading-tight"
        />
      </div>
      {/* radio stations list */}
      <div className="w-full flex flex-wrap justify-center md:justify-between gap-5 gap-y-10 ">
        {radioStations?.map((radioStation: any, index: number) => (
          <RadioStationCard key={index} radioStation={radioStation} />
        ))}
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Browse;
