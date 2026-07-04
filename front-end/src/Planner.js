import locationData from "./LocationAndWeatherFetch.js";
import Loading from "./Loading";
import Chart from "./Chart";
import Crops from "./Crops";
import { Link, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Max from "./Max.js";
import './Plants.scss';
import Background from "./images/cropBackground.png";
import PlanHeader from "./PlanHeader";

function Planner ({ location, setLocation }) {

  // status of the yearly weather fetch: 'loading' | 'success' | 'error'
  const [status, setStatus] = useState('loading')
  // variable for the overall weather data historically. - updated from location input/fetch API.
  const [weatherData, setWeatherData] = useState({})
  const [monthAvgs, setMonthAvgs] = useState([])

  useEffect(() => {
    if (typeof location !== 'string' || location.trim() === '') {
      setStatus('error')
      return
    }
    let isCurrent = true
    setStatus('loading')
    async function weatherCheck() {
      try {
        const weatherData = await locationData(location)
        if (isCurrent) {
          setWeatherData(weatherData)
          setStatus('success')
        }
      } catch (error) {
        if (isCurrent) setStatus('error')
      }
    };
     weatherCheck()
     return () => { isCurrent = false }
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
        <Link className='shadow' to='/how-to'>How To Use</Link>
        <Link className='shadow' to='/'>Home</Link>
        <Link className='shadow' to='/log'>Log In / Sign Up</Link>
      </header>

        <PlanHeader
          weatherData={weatherData}
          location={location}
         />
      
      <div className='yearly'> Yearly Averages for:   {weatherData.updatedLocation}
        {status === 'loading' && <Loading />}
        {status === 'error' && <div className="weatherError">Couldn't load weather for that location. Please go back and try another search.</div>}
        {status === 'success' &&
        <Max
          weatherData={weatherData}
          monthAvgs={monthAvgs}
          setMonthAvgs={setMonthAvgs}
         ></Max>}
      </div>
      {status === 'success' && <Chart weatherData={weatherData}/> }
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