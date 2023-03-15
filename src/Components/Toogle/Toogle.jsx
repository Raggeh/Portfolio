import React from 'react';
import './Toogle.css';

import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from "@iconscout/react-unicons/icons/uil-moon";

const Toogle = () => {
  return (
    <div className="toggle">
        <Moon />
        <Sun />
        <div className="t-btn"></div>
    </div>
  )
}

export default Toogle