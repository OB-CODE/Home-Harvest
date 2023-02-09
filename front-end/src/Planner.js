import locationData from "./locationAndWeatherFetch.js";
import Loading from "./Loading";
import Chart from "./Chart";
import Crops from "./Crops";
import { Link, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Max from "./Max.js";
import './Plants.scss';
import Background from "./images/cropBackground.png";

function Planner ({ location, setLocation }) {

  // variable for preventing multiple fetch requests.  
  const [isLoading, setIsLoading] = useState(true)
  // variable for the overall weather data historically. - updated from location input/fetch API. 
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

  // variable for the users Crops to be stored in.
  const [harvestList, setHarvestList] = useState([])

  const addCrop = crop => {
    let alreadyInHarvestList = false
    console.log(harvestList.length);
    if (harvestList.length === 0) {
      setHarvestList([...harvestList, crop])
    } else if (harvestList.length > 0) {
      harvestList.forEach((individualCrop) => {
        if (crop.name === individualCrop.name) {
          alreadyInHarvestList = true
       }
      })
      if (alreadyInHarvestList === false) {
        setHarvestList([...harvestList, crop])
      }
    }
  }

  const removeCrop = indexOfCrops => {
    const updatedCrops = harvestList.filter((crop, index) => crop.name !== indexOfCrops)
    setHarvestList(updatedCrops)
  }  

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
        {isLoading === true ? <Loading /> : 
        <Max 
          weatherData={weatherData}
          monthAvgs={monthAvgs}
          setMonthAvgs={setMonthAvgs}
         ></Max>}
      </div>  
      {isLoading === true ? <div></div> : <Chart weatherData={weatherData}/> }
      <Crops 
      harvestList={harvestList}
      addCrop={addCrop}
      removeCrop={removeCrop}
      monthAvgs={monthAvgs}
      />
    </div>
  )
}

export default Planner