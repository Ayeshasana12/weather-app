import React, { useState } from 'react';
import CitySearch from '../citysearch/CitySearch';
import CurrentWeather from '../currentweather/CurrentWeather';
import WeatherForecast from '../weatherforecast/WeatherForecast';
import TemperatureToggle from '../temperaturetoggle/TemperatureToggle';

const WeatherDashboard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [temperatureUnit, setTemperatureUnit] = useState('F');
  
    const dummyData = {
      current: { temperature: 68, humidity: 60, windSpeed: 10, condition: 'Sunny' },
      forecast: [
        { day: 'Monday', temperature: 71.6 },
        { day: 'Tuesday', temperature: 69.8 },
        { day: 'Wednesday', temperature: 66.2 },
        { day: 'Thursday', temperature: 73.4 },
        { day: 'Friday', temperature: 68 },
      ],
    };
  
    const handleCitySearch = (city) => {
      setWeatherData(dummyData); // Using dummy data here
    };
  
    const toggleTemperatureUnit = () => {
      setTemperatureUnit(temperatureUnit === 'F' ? 'C' : 'F');
    };
  
    return (
      <div className="container text-center mt-5 p-4 shadow" 
      style={{ maxWidth: '600px', backgroundColor: "#FDEEDC"}}>
        <h2 style={{color: "#640D5F"}} className=" mb-4 fw-bold ">Weather Dashboard</h2>
        <CitySearch onSearch={handleCitySearch} />
        <TemperatureToggle onToggle={toggleTemperatureUnit} />
        {weatherData && (
          <>
            <CurrentWeather data={weatherData.current} unit={temperatureUnit} />
            <WeatherForecast forecast={weatherData.forecast} unit={temperatureUnit} />
          </>
        )}
      </div>
    );
  };
  
 
export default WeatherDashboard;