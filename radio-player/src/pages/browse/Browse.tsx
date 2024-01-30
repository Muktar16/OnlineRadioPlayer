import axios from "axios";
import { useEffect, useState } from "react";



function Browse() {
    const [countries,setCountries] = useState<any>([]);
    useEffect(()=>{
        const getCountries = async() =>{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/countries`);
            console.log(response);
            setCountries(response);
            console.log(countries);
        }
        getCountries();
    },[])
  return (
    <div className="px-[10px] py-[10px]">
      <div className="w-full flex md:flex-row flex-grow items-center justify-between gap-2">
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 px-4 py-2 leading-tight focus:outline-none focus:border-blue-500">
            <option disabled value="">Find by country</option>
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
    </div>
  );
}

export default Browse;

