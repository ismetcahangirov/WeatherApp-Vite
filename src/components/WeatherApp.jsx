import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherDetails from "./WeatherDetails";
import { getWeatherInfos } from "../app/redux/features/weatherSlice";
import SearchBar from "./SearchBar";
import BgVideo from "./BgVideo";
import Loader from "./Loader";

const WeatherApp = () => {
  const [city, setCity] = useState("Baku");
  const dispatch = useDispatch();

  const { current } = useSelector((state) => state.weather);

  useEffect(() => {
    if (city) dispatch(getWeatherInfos({ city, lang: "en" }));
  }, [dispatch, city]);

  return (
    <div className="relative w-full min-h-screen text-white">
      <div className="z-10 h-full flex flex-col gap-5 justify-center items-center px-4 py-5">
        {current.data && (
          <div className="absolute inset-0 -z-10 h-full">
            <BgVideo main={current.data.weather[0].main} />
            {console.log(current.data.weather[0].main)}
          </div>
        )}

        <SearchBar setCity={setCity} />

        {current.loading && <Loader />}
        {current.error && <p className="text-red-500 mt-5">{current.error}</p>}

        {current.data && <WeatherDetails infos={current.data} />}
      </div>
    </div>
  );
};

export default WeatherApp;
