import React from 'react';

const TemperatureToggle = ({ unit, onToggle }) => {
    return (
      <div className="mb-3">
        <button onClick={onToggle} className="btn btn-secondary">
          Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
        </button>
      </div>
    );
  };
export default TemperatureToggle;