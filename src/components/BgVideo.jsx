import React, { useState, useEffect } from "react";

const obj = {
  clear: "https://www.pexels.com/download/video/1987421/",
  clouds: "https://www.pexels.com/download/video/33943075/",
  rain: "https://www.pexels.com/download/video/1841455/",
  drizzle: "https://cdn.pixabay.com/video/2019/10/24/28236-368501609_large.mp4",
  snow: "https://cdn.pixabay.com/video/2023/11/12/188778-883818276_large.mp4",
  thunderStorm: "https://cdn.pixabay.com/video/2024/08/13/226276_tiny.mp4",
  smoke: "https://cdn.pixabay.com/video/2017/06/05/9584-220312371_tiny.mp4",
  mist: "https://www.pexels.com/download/video/18761163/",
  sand: "https://www.pexels.com/download/video/4996615/",
  dust: "https://www.pexels.com/video/motes-of-dust-in-the-sunlight-4122384/",
  haze: "https://www.pexels.com/download/video/33956760/",
  foggy: "https://www.pexels.com/download/video/1779202/",
  ash: "https://www.pexels.com/download/video/5307917/",
  squall: "https://assets.mixkit.co/videos/48854/48854-720.mp4",
  tornado: "https://cdn.pixabay.com/video/2019/03/18/22070-325253460_tiny.mp4",
};

const BgVideo = ({ main }) => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    switch (main) {
      case "Clear":
        setWeather(obj.clear);
        break;
      case "Clouds":
        setWeather(obj.clouds);
        break;
      case "Rain":
      case "Drizzle":
        setWeather(obj.drizzle);
        break;
      case "Snow":
        setWeather(obj.snow);
        break;
      case "Thunderstorm":
        setWeather(obj.thunderStorm);
        break;
      case "Mist":
        setWeather(obj.mist);
        break;
      case "Smoke":
        setWeather(obj.smoke);
        break;
      case "Haze":
        setWeather(obj.haze);
        break;
      case "Dust":
        setWeather(obj.dust);
        break;
      case "Fog":
        setWeather(obj.foggy);
        break;
      case "Sand":
        setWeather(obj.sand);
        break;
      case "Ash":
        setWeather(obj.ash);
        break;
      case "Squall":
        setWeather(obj.squall);
        break;
      case "Tornado":
        setWeather(obj.tornado);
        break;
      default:
        console.log(main);
    }
  }, [main]);

  return weather ? (
    <video autoPlay loop muted className="w-full h-full object-cover">
      <source src={weather} type="video/mp4" />
    </video>
  ) : null;
};

export default BgVideo;
