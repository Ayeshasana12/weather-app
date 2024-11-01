import React, { useState } from 'react';
import { Search } from '@mui/icons-material';

const CitySearch = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form className="d-flex mb-3" onSubmit={handleSubmit}>
      
      <input
        type="text"
        className="form-control me-2 border-1 fw-bold"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button style={{backgroundColor: "#6A9C89"}} 
      type="submit" className="border-0 rounded-2 fw-bold shadow">
        <Search />
        Search
      </button>
    </form>
  );
};

export default CitySearch;