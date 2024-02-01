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
import { SpinnerType, TOAST_TYPE } from "../../constants/AppConstants";
import NoDataFound from "../../components/NoData/NoData";
import Loading from "../../components/Loading/Loading";

function Browse() {
  const [countryOptions, setCountryOptions] = useState([]);
  const [radioStations, setRadioStations] = useState<RadioStation[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<any>();
  const [selectedLanguage, setSelectedLanguage] = useState<any>();
  const [searchText, setSearchText] = useState("");
  const { setCurrentStation, currentStation } = usePlayer();
  const [languageOptions, setLanguageOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(
    "Loading radio stations..."
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await CountryServices().getAllCountries();
        const options = data.map((item: any) => ({
          value: item.iso_3166_1,
          label: item.name,
        }));
        setCountryOptions(options);
      } catch (error) {
        CommonUtils().showToast(TOAST_TYPE.ERROR, "Error Getting Countries");
      }
    };
    getCountries();
  }, []);

  useEffect(() => {
    const getRadioStations = async () => {
      if (!selectedCountry && !searchText && !selectedLanguage) {
        try {
          setLoading(true);
          const limit = 100;
          const offset = (page - 1) * limit;
          let data: any;
          if (page == 1) data = await StationServices().getTopvoteStations();
          else data = await StationServices().getStations(limit, offset);
          setRadioStations((prevStations) => [...prevStations, ...data]);
          if (!currentStation && data.length > 0) setCurrentStation(data[0]);
        } catch (error) {
          CommonUtils().showToast(
            TOAST_TYPE.ERROR,
            "Error Getting Radio Stations"
          );
        } finally {
          setLoading(false);
        }
      }
    };
    getRadioStations();
  }, [page]);

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const windowBottom = windowHeight + window.scrollY;

    if (windowBottom >= docHeight - 10) {
      setPage((prevPage) => prevPage + 1);
      setLoadingMessage("Loading more...");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getLanguages = async () => {
      try {
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
      } catch (error) {
        CommonUtils().showToast(TOAST_TYPE.ERROR, "Error Getting Languages");
      }
    };
    getLanguages();
  }, []);

  const getRadioStationsByLanguage = async (item: any) => {
    try {
      setSelectedLanguage(item);
      const data = await StationServices().getRadioStationsByLanguage(
        item.value
      );
      setRadioStations(data);
      setSelectedCountry(null);
      setSearchText("");
    } catch (error) {
      CommonUtils().showToast(TOAST_TYPE.ERROR, "Server or Network Error");
      console.log(error);
    }
  };

  const getRadioStationsByCountry = async (item: any) => {
    try {
      setSelectedCountry(item);
      const data = await StationServices().getRadioStationsByCountry(
        item.value
      );
      setRadioStations(data);
      setSelectedLanguage(null);
      setSearchText("");
    } catch (error) {
      CommonUtils().showToast(TOAST_TYPE.ERROR, "Server or Network Error");
    }
  };

  const getRadioStationsByName = async (value: string) => {
    try {
      setSearchText(value);
      const data = await StationServices().searchRadioStationsByName(
        selectedCountry?.value,
        value
      );
      setRadioStations(data);
    } catch (error) {
      CommonUtils().showToast(TOAST_TYPE.ERROR, "Server or Network Error");
    }
  };

  return (
    <div className="md:px-[15px] px-1 py-[15px] min-h-screen flex flex-col gap-10 bg-slate-100 dark:bg-darkBackground">
      {/* filters */}
      <div className="w-full flex md:flex-row flex-wrap items-center justify-center gap-1 md:gap-2 md:px-5">
        <Select
          options={countryOptions}
          className="w-[32%] text-[10px] md:text-[14px]"
          placeholder="Find by Country"
          value={selectedCountry}
          onChange={getRadioStationsByCountry}
        />

        <Select
          options={languageOptions}
          className="w-[32%] text-[10px] md:text-[14px]"
          placeholder="Find by Language"
          value={selectedLanguage}
          onChange={getRadioStationsByLanguage}
        />

        <input
          type="text"
          value={searchText}
          disabled={!selectedCountry ? true : false}
          onChange={(e) =>
            debounce(getRadioStationsByName(e.target.value), 300)
          }
          placeholder={
            selectedCountry ? "Search by name" : "Select country first"
          }
          className="bg-white border px-2 rounded-[4px] border-gray-300 text-[10px] h-[38px] md:text-[14px] w-[32%] py-2 leading-tight"
        />
      </div>
      {/* radio stations list */}
      <Loading
        isLoading={loading}
        spinnerType={SpinnerType.HASH}
        message={loadingMessage}
      >
        <div className="w-full flex flex-wrap justify-center gap-5 gap-y-10">
          {radioStations.length > 0 ? (
            radioStations?.map((radioStation: any, index: number) => (
              <RadioStationCard key={index} radioStation={radioStation} />
            ))
          ) : (
            <NoDataFound />
          )}
        </div>
      </Loading>
      <MobileDrawer />
    </div>
  );
}

export default Browse;
