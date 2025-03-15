import axios from 'axios';
import React, { useState } from 'react';
import Weather from './components/Weather';
import './styles/weather.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');

    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found. Please try again.');
    }
  };

  return (
    <div className={`app ${weatherData && weatherData.weather[0].main.toLowerCase()}`}>
      <h1 className="title">Weather Pro</h1>
      <form onSubmit={handleSearch} className="weather-form">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="weather-input"
        />
        <button type="submit" className="weather-button">Get Weather</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};

export default App;
