import { Link, Route, Routes } from 'react-router-dom';
import cropBackground from "./images/cropBackground.png";
import './Plants.scss';
import Background from "./images/cropBackground.png";
import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import BugsB from "./images/BugsB.png";



function Log() {

  const [logs, setLogs] = useState(['sign'] );

  const handleLogs = (event) => {
    if (logs === 'sign') {
      setLogs('log');
    } else {
      setLogs('sign');
    }
  };

  return (
    <div>
      <div className="backing">
        <img src={`${Background}`} alt="" />
      </div>
      <header>
          <Link className='shadow' to='/how-to'>How To Use</Link>
          <Link className='shadow' to='/'>Home</Link>
          <Link className='shadow' to='/log'>Log In / Sign Up</Link>
      </header>
      
    <div className='containLogCard'>
      <img src={BugsB} alt="" />

      <div className="logcard">
        <Stack className='toggle' direction="row" spacing={4}>
          <ToggleButtonGroup
            value={logs}
            onChange={handleLogs}
            aria-label="device"
          >
            <ToggleButton value="log" aria-label="log">
            LOGIN
            </ToggleButton>
            <ToggleButton value="sign" aria-label="sign">
            SIGN UP
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <div className="logCard">
          <form>
            <label>EMAIL:</label>
            <input type="text" />
            <label>PASSWORD:</label>
            <input type="password" />
            {logs === 'log'? <button className="button-55">LOG IN</button> :<button className="button-55">SIGN UP</button>}
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Log