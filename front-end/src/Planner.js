import locationData from "./locationAndWeatherFetch.js";
import { Link, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from "react";

import './Plants.scss';


function Planner ({ addCrop, location, setLocation }) {

  // const [weather, setWeather] = useState({})
  
  (async function weatherCheck() {
    console.log('1');
    const newlocation = await locationData(location)
    console.log('3');

    setLocation(newlocation.updatedLocation)
  })();



  return (
    <div>
      <div className="backing"></div>
      <header>
        <Link className='shadow' to='how-to'>How To Use</Link>
        <Link className='shadow' to='/'>Home</Link>
        <Link className='shadow' to='/log'>Log In / Sign Up</Link>
      </header>

      <div className='topBanner'>
        <div>
          <div >Current Location: {location} </div>
          <div>Daily Temp Range:</div>
          <div>Estimated soil temperature</div>
        </div>
        <div>Lets plan your crops!</div>
        <div>Weekly weather forecast</div>
      </div>
      
      <div className='yearly'> Yearly Temperature Averages for
        <div className='months'>
          <div></div>
          <div>JAN</div>
          <div>FEB</div>
          <div>MAR</div>
          <div>APR</div>
          <div>MAY</div>
          <div>JUN</div>
          <div>JUL</div>
          <div>AUG</div>
          <div>SEP</div>
          <div>OCT</div>
          <div>NOV</div>
          <div>DEC</div>
          <div></div>
        </div>
        <div className='maxAvg'>
          {/* input 12 divs */}
        </div>
        <div className='minAvg'>
          {/* input 12 divs */}
        </div>
        <div className='rainMM'>
          {/* input 12 divs */}
        </div>
      </div>  
    </div>
  )
}

export default Planner


//   useEffect(() => {
//   (async function processChanges() {
//     const returnLocation = await locationData(location) 
//     console.log(returnLocation);
//   })()
// },[location])

  // const addWeather = (location) => {
  //   const updated = locationData(location)
  //   // setWeather([...weather, updated])
  // }