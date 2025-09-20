import React, { useState, useEffect } from "react";

const obj = {
  Clear: "https://www.pexels.com/download/video/1987421/",
  Clouds: "https://www.pexels.com/download/video/33943075/",
  Rain: "https://www.pexels.com/download/video/1841455/",
  Drizzle: "https://cdn.pixabay.com/video/2019/10/24/28236-368501609_large.mp4",
  Snow: "https://cdn.pixabay.com/video/2023/11/12/188778-883818276_large.mp4",
  Thunderstorm: "https://cdn.pixabay.com/video/2024/08/13/226276_tiny.mp4",
  Mist: "https://www.pexels.com/download/video/18761163/",
  Smoke: "https://cdn.pixabay.com/video/2017/06/05/9584-220312371_tiny.mp4",
  Haze: "https://www.pexels.com/download/video/33956760/",
  Dust: "https://www.pexels.com/video/motes-of-dust-in-the-sunlight-4122384/",
  Fog: "https://www.pexels.com/download/video/1779202/",
  Sand: "https://www.pexels.com/download/video/4996615/",
  Ash: "https://www.pexels.com/download/video/5307917/",
  Squall: "https://assets.mixkit.co/videos/48854/48854-720.mp4",
  Tornado: "https://cdn.pixabay.com/video/2019/03/18/22070-325253460_tiny.mp4",
};

const BgVideo = ({ main }) => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (main && obj[main]) {
      setWeather(obj[main]);
    } else {
      return;
    }
  }, [main]);

  return weather ? (
    <video
      key={weather}
      autoPlay
      loop
      muted
      className="w-full h-full object-cover absolute top-0 left-0 -z-10"
    >
      <source src={weather} type="video/mp4" />
    </video>
  ) : null;
};

export default BgVideo;
