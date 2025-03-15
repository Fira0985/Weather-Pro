import React from 'react';


const Weather = ({ data }) => {
  const { name, main, weather } = data;
  const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  return (
    <div className="weather-container">
      <h2 className="weather-location">{name}</h2>
      <img src={weatherIcon} alt={weather[0].description} className="weather-icon" />
      <p className="weather-temp">{Math.round(main.temp)}°C</p>
      <p className="weather-description">{weather[0].description}</p>
    </div>
  );
};

export default Weather;
