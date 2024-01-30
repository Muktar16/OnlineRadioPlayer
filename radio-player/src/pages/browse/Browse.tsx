import axios from "axios";
import { useEffect, useState } from "react";
import RadioStationCard from "../../components/RadioStationCard/RadioStationCard";

function Browse() {
  const [countries, setCountries] = useState<any>([]);
  const [radioStations, setRadioStations] = useState<any>([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/countries`
      );
      console.log(response);
      setCountries(response);
      console.log(countries);
    };
    getCountries();
  }, []);

  useEffect(() => {
    const getRadioStations = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/stations/topvote/100`
      );
      console.log(response);
      setRadioStations(response.data);
      console.log(radioStations);
    };
    getRadioStations();
  }, []);

  return (
    <div className="px-[15px] py-[15px] flex flex-col gap-10 bg-slate-100 dark:bg-darkBackground">
      {/* filters */}
      <div className="w-full flex md:flex-row flex-grow items-center justify-between gap-2">
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 px-4 py-2 leading-tight focus:outline-none focus:border-blue-500">
            <option disabled value="">
              Find by country
            </option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Find by language"
          className="bg-gray border border-gray-300 px-4 py-2 leading-tight focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Search by name"
          className="bg-white border border-gray-300 px-4 py-2 leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* radio stations list */}
      <div className="w-full flex flex-wrap justify-between gap-5 gap-y-10 ">
        {radioStations?.map((radioStation: any, index: number) => (
          <RadioStationCard key={index} radioStation={radioStation}/>
        ))}
      </div>
    </div>
  );
}

export default Browse;
