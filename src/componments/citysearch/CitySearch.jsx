import React, { useState } from 'react';

const CitySearch = ({ onCityChange }) => {
    const [input, setInput] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onCityChange(input);
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>
    );
  };
  
export default CitySearch;