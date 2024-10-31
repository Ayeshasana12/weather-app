import React, { useState } from 'react';
import CitySearch from '../citysearch/CitySearch';
import CurrentWeather from '../currentweather/CurrentWeather';
import WeatherForecast from '../weatherforecast/WeatherForecast';
const WeatherDashboard = () => {
    const [weatherData, setWeatherData] = useState({
        current: { temperature: 25, humidity: 60, windSpeed: 15, city: "City" },
        forecast: [
            { day: 'Monday', temperature: 22, icon: '☀️' },
            { day: 'Tuesday', temperature: 24, icon: '🌤️' },
            { day: 'Wednesday', temperature: 21, icon: '🌦️' },
            { day: 'Thursday', temperature: 23, icon: '🌤️' },
            { day: 'Friday', temperature: 20, icon: '☁️' },
        ],
    });

    const cities = ["Sukkur", "Khairpur", "Pir Jo Goth", "Mirpur", "Nawabsha"];

    const fetchWeatherData = (city) => {
        console.log(`Fetching weather data for ${city}`);
        // This is where you would fetch the actual weather data based on the city.
        // For now, we'll use dummy data for demonstration.
        setWeatherData(prevData => ({
            ...prevData,
            current: { ...prevData.current, city: city, temperature: Math.floor(Math.random() * 30) + 15 },
        }));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center  mb-4">Weather Dashboard</h1>
            <CitySearch onSearch={fetchWeatherData} cities={cities} />
            <div className="row mt-4">
                <div className="col-md-6">
                    <CurrentWeather data={weatherData.current} />
                </div>
                <div className="col-md-6">
                    <WeatherForecast data={weatherData.forecast} />
                </div>
            </div>
        </div>
    );
};
export default WeatherDashboard;