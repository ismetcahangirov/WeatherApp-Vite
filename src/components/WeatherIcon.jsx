import React from "react";

const WeatherIcon = ({ icon, classname = "", alt }) => {
  return (
    <img
      className={classname}
      src={`https://openweathermap.org/img/wn/${icon}@2x.png
`}
      alt={alt}
    />
  );
};

export default WeatherIcon;
