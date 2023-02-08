import locationData from "./locationAndWeatherFetch.js";
import Loading from "./Loading";
import Chart from "./Chart";
import Crops from "./Crops";
import { Link, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Max from "./Max.js";
import './Plants.scss';
import Background from "./images/cropBackground.png";


function Planner ({ addCrop, location, setLocation }) {

  const [isLoading, setIsLoading] = useState(true)
  const [weatherData, setWeatherData] = useState({})
  const [monthAvgs, setMonthAvgs] = useState([])

  useEffect(() => {
    async function weatherCheck() {
      const weatherData = await locationData(location)
      setWeatherData(weatherData)
      setIsLoading(false)
    };
     weatherCheck()
  },[location])


  

  return (
    <div>
      <div className="backing">
        <img src={`${Background}`} alt="" />
      </div>
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
        {isLoading === true ? <Loading /> : <Max 
        weatherData={weatherData}
        monthAvgs={monthAvgs}
        setMonthAvgs={setMonthAvgs}
         ></Max>}
      </div>  
      {isLoading === true ? <div></div> : <Chart weatherData={weatherData}/> }
      <Crops />
    </div>
  )
}

export default Planner