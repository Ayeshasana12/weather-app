import React from 'react';

const CurrentWeather = ({ data, unit }) => {
    const temp = unit === 'C' ? data.temp : (data.temp * 9/5) + 32;
  
    return (
      <div className="card bg-light mb-3">
        <div className="card-body">
          <h5 className="card-title">Current Weather</h5>
          <p>Temperature: {temp}°{unit}</p>
          <p>Humidity: {data.humidity}%</p>
          <p>Wind: {data.wind} km/h</p>
          <p>Icon: {data.icon}</p>
        </div>
      </div>
    );
  };
  
export default CurrentWeather;