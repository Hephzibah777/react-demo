import React, { useState, useEffect } from "react";

interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
}

const cities = [
    { name: "Select City"},
  { name: "New York", lat: 40.7128, lon: -74.006 },
  { name: "London", lat: 51.5074, lon: -0.1278 },
  { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
  { name: "Delhi", lat: 28.7041, lon: 77.1025 },
];

const CityComponent: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>(cities[0].name);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const city = cities.find((c) => c.name === selectedCity);
        if (!city) return;

        const apiKey = "1360216765e610361f8487372b1d2ae9"; // Replace with your OpenWeather API key
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=1360216765e610361f8487372b1d2ae9`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setWeather({
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        });
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [selectedCity]);

  return (
    <div className="weather-container">
    <div className="sub-container">
    <div className="first">
     <h2>Select a City:</h2>
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
     </div>

      <div className="second">
      {loading && <p>Loading weather data...</p>}
      {/* {error && <p className="error">{error}</p>} */}

      {weather && (
        <div className="weather-info">
          <h3>Weather in {selectedCity}</h3>
          <p>Temperature: {weather.temperature}°F</p>
          <p>{weather.description}</p>
          <img src={weather.icon} alt={weather.description} />
        </div>
      )}
      </div>
    </div>
    </div>
  );
};

export default CityComponent;