import axios from "axios";
import { useEffect, useState } from "react";
import RadioStationCard from "../../components/RadioStationCard/RadioStationCard";
import MobileDrawer from "../../components/MobileDrawer/MobileDrawer";
import { usePlayer } from "../../contexts/PlayerContext";

function Browse() {
  const [countries, setCountries] = useState([]);
  const [radioStations, setRadioStations] = useState<RadioStation[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const {setCurrentStation, currentStation} = usePlayer();

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/countries`
      );
      setCountries(response.data);
    };
    getCountries();
  }, []);

  useEffect(() => {
    const getRadioStations = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/stations/topvote/100`
      );
      setRadioStations(response.data);
      if(!currentStation) setCurrentStation(response.data[0]);
    };
    getRadioStations();
  }, []);

  //   // Apply filters when selectedCountry, selectedLanguage, or searchByName change
  //   useEffect(() => {
  //     const filteredStations = radioStations.filter((station) => {
  //       const countryFilter =
  //         !selectedCountry || station.country === selectedCountry;
  //       const languageFilter =
  //         !selectedLanguage || station.language.includes(selectedLanguage);
  //       const nameFilter =
  //         !searchByName ||
  //         station.name.toLowerCase().includes(searchByName.toLowerCase());

  //       return countryFilter && languageFilter && nameFilter;
  //     });

  //     setRadioStations(filteredStations);
  //   }, [selectedCountry, selectedLanguage, searchByName, radioStations]);

  return (
    <div className="px-[15px] py-[15px] min-h-screen flex flex-col gap-10 bg-slate-100 dark:bg-darkBackground">
      {/* filters */}
      <div className="w-full flex md:flex-row flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="appearance-none bg-white border border-gray-300 px-4 py-2 leading-tight focus:outline-none focus:border-blue-500"
          >
            <option value="">Find by country</option>
            {/* {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))} */}
          </select>
        </div>

        <input
          type="text"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          placeholder="Find by language"
          className="bg-gray border border-gray-300 px-4 py-2 leading-tight focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          value={searchByName}
          onChange={(e) => setSearchByName(e.target.value)}
          placeholder="Search by name"
          className="bg-white border border-gray-300 px-4 py-2 leading-tight focus:outline-none focus:border-blue-500"
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
