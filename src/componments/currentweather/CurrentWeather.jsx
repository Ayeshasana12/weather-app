import React from 'react';
import { WbSunny } from '@mui/icons-material';

const CurrentWeather = ({ data, unit }) => {
  const temperature = unit === 'F' ? data.temperature : ((data.temperature - 32) * 5) / 9;

  return (
    <div style={{ backgroundColor: "#C4DAD2" }}
      className="p-3 shadow mb-4 rounded text-center">
      <h4 className='fw-bold '>Current Weather</h4>
      <p className='fw-semibold '>Temperature: {temperature.toFixed(1)}° {unit}</p>
      <p className='fw-semibold '>Humidity: {data.humidity}%</p>
      <p className='fw-semibold '>Wind Speed: {data.windSpeed} km/h</p>
      <p className='fw-semibold '>Condition: <WbSunny  className='text-warning'/> {data.condition}</p>
    </div>
  );
};


export default CurrentWeather;