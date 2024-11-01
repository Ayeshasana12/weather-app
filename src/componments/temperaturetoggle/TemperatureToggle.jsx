import React from 'react';
import { ToggleOn, ToggleOff } from '@mui/icons-material';

const TemperatureToggle = ({ onToggle }) => (
  <div className="mb-3 text-center">
    <button style={{backgroundColor: "#B03052"}} className=" border-0 rounded-pill px-3 fw-semibold py-2 text-white" onClick={onToggle}>
      Toggle Temperature Unit <ToggleOn className='fs-4 ms-4' />
    </button>
  </div>
);
export default TemperatureToggle;