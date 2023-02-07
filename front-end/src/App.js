import './App.css';
import React, { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Planner from './Planner';
import HowTo from './HowTo';
import Log from './Log';

import { useNavigate } from "react-router-dom";

function App() {
  const [harvestList, setHarvestList] = useState([])
  const [location, setLocation] = useState('')


  const addCrop = crop => {
    setHarvestList([...harvestList, crop])
  }

  const removeCrop = indexOfCrops => {
    const updatedCrops = harvestList.filter((crop, index) => index !== indexOfCrops)
    setHarvestList(updatedCrops)
  }

  const handleLocationChange = event => {
    setLocation(event.target.value)
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
         location={location} 
         setLocation={setLocation}       
        />} />
        <Route path='/how-to' element={<HowTo />} />
        <Route path='/log' element={<Log />} />
      </Routes>    
    </>
  );
}

export default App;