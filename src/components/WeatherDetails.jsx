import React from "react";
import WeatherIcon from "./WeatherIcon";

const WeatherDetails = ({ infos }) => {
  if (!infos) return null;

  const main = infos.main;
  const temp = Math.round(main.temp);
  const high = Math.round(main.temp_max);
  const low = Math.round(main.temp_min);
  const feelsLike = Math.round(main.feels_like);
  const weather = infos.weather[0];

  const windSpeed = infos.wind?.speed;
  const humidity = main.humidity;
  const pressure = main.pressure;
  const visibility = infos.visibility ? infos.visibility / 1000 : 0;
  const sunrise = new Date(infos.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunset = new Date(infos.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className=" rounded-2xl p-6 bg-black/15 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full max-w-[450px] mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold">
          {infos.name} / {infos.sys.country}
        </h2>
        <p className="text-sm text-white/70 mt-1 first-letter:uppercase">
          {weather.description}
        </p>
      </div>

      <div className="flex justify-center items-center gap-6 mb-6">
        <span className="text-6xl font-bold">{temp}°C</span>
        <WeatherIcon
          icon={weather.icon}
          alt={weather.main}
          className="w-20 h-20"
        />
      </div>

      <div className="flex justify-around items-center mb-6 text-sm">
        <div className="text-center">
          <span>🌡️ Feels like</span>
          <p className="font-semibold">{feelsLike}°C</p>
        </div>
        <div className="text-center">
          <span>🔺 High</span>
          <p className="font-semibold">{high}°C</p>
        </div>
        <div className="text-center">
          <span>🔻 Low</span>
          <p className="font-semibold">{low}°C</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
        <div>💧 Humidity: {humidity}%</div>
        <div>🌬️ Wind: {windSpeed} m/s</div>
        <div>🔵 Pressure: {pressure} hPa</div>
        <div>👁️ Visibility: {visibility} km</div>
        <div>🌅 Sunrise: {sunrise}</div>
        <div>🌇 Sunset: {sunset}</div>
      </div>
    </div>
  );
};

export default WeatherDetails;
