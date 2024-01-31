import axios from "axios";
import { useEffect, useState } from "react";
import RadioStationCard from "../../components/RadioStationCard/RadioStationCard";
import MobileDrawer from "../../components/MobileDrawer/MobileDrawer";
import { usePlayer } from "../../contexts/PlayerContext";
import { StationServices } from "../../services/stationService";
import Select from 'react-select';

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
      const data = await StationServices().getTopvoteStations(); 
      setRadioStations(data);
      if(!currentStation) setCurrentStation(data[0]);
    };
    getRadioStations();
  }, []);

  useEffect(() => {
    const getLanguages = async () => {
      const data = await LanguageService().getAllLanguage(); 
      setRadioStations(data);
      if(!currentStation) setCurrentStation(data[0]);
    };
    getLanguages();
  }, []);



  return (
    <div className="px-[15px] py-[15px] min-h-screen flex flex-col gap-10 bg-slate-100 dark:bg-darkBackground">
      {/* filters */}
      <div className="w-full flex md:flex-row flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <Select></Select>
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
