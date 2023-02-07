import locationData from "./locationAndWeatherFetch.js";
import { Link, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Max from "./Max.js";
import './Plants.scss';


function Planner ({ addCrop, location, setLocation }) {

  const [isLoading, setIsLoading] = useState(true)
  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    async function weatherCheck() {
      console.log('1');
      const weatherData = await locationData(location)
      // console.log(weatherData);
      console.log('3');
      setWeatherData(weatherData)
      setIsLoading(false)
    };
     weatherCheck()
  },[location])
  

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
          <div >Current Location: {weatherData.updatedLocation} </div>
          <div>Daily Temp Range:</div>
          <div>Estimated soil temperature</div>
        </div>
        <div>Lets plan your crops!</div>
        <div>Weekly weather forecast</div>
      </div>
      
      <div className='yearly'> Yearly Averages for:   {weatherData.updatedLocation}
        {isLoading === true ? <div>LOADING</div> : <Max weatherData={weatherData} ></Max>}
      </div>  
    </div>
  )
}

export default Planner




  // const addWeather = (location) => {
  //   const updated = locationData(location)
  //   // setWeather([...weather, updated])
  // }