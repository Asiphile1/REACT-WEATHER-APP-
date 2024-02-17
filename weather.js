import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
      });
  }, [city]);

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      {weatherData && (
        <div>
          <h1>{`Temperature: ${weatherData.main.temp}`}</h1>
          {/* Display other weather details here */}
        </div>
      )}
      {weatherData === null && <p>No data available for {city}</p>}
    </div>
  );
};

export default Weather;
