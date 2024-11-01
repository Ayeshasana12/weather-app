import React from 'react';

const WeatherForecast = ({ forecast, unit }) => (
  <div style={{ backgroundColor: "#C4DAD2" }} className="p-3 shadow rounded">
    <h4 className='fw-bold py-3'>5-Day Forecast</h4>
    {forecast.map((day, index) => {
      const temperature = unit === 'F' ? day.temperature : ((day.temperature - 32) * 5) / 9;
      return (
        <div style={{backgroundColor: "#0B8494"}} 
         key={index}
         className="d-flex justify-content-between p-2
           fw-semibold text-white mb-2 rounded">
          <span>{day.day}</span>
          <span>{temperature.toFixed(1)}° {unit}</span>
        </div>
      );
    })}
  </div>
);
  
export default WeatherForecast;