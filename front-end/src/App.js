import './App.css';
import React, { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Planner from './Planner';
import HowTo from './HowTo';
import Log from './Log';


import { useNavigate } from "react-router-dom";



function App() {
  const [harvestList, adjustHarvest] = useState([])
  const [location, inputLocation] = useState('')


  const addCrop = crop => {
    adjustHarvest([...harvestList, crop])
  }

  const removeCrop = indexOfCrops => {
    const updatedCrops = harvestList.filter((crop, index) => index !== indexOfCrops)
    adjustHarvest(updatedCrops)
  }

  const handleLocationChange = event => {
    inputLocation(event.target.value)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing 
        handleLocationChange={handleLocationChange}
        location={location}
        />} />
        <Route path='/planner' element={<Planner
         addCrop={addCrop}         
        />} />
        <Route path='/how-to' element={<HowTo />} />
        <Route path='/log' element={<Log />} />
      </Routes>    
    </>
  );
}

export default App;