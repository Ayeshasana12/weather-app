import React from 'react';

const WeatherForecast = ({ data, unit }) => {
    return (
      <div className="card bg-light">
        <div className="card-body">
          <h5 className="card-title">5-Day Forecast</h5>
          {data.map((day, index) => (
            <div key={index} className="card bg-light mb-2">
              <div className="card-body">
                <p>{day.day}</p>
                <p>Temperature: {unit === 'C' ? day.temp : (day.temp * 9/5) + 32}°{unit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default WeatherForecast;