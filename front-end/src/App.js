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
  const [location, setLocation] = useState({})
 
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


// newlocation: {
//   apr: {aprMax: [0], aprMin: [0], aprMM: [0]},
// aug: {augMax: [0], augMin: [0], augMM: [0]},
// dec: {decMax: [0], decMin: [0], decMM: [0]},
// feb: {febMax: [0], febMin: [0], febMM: [0]},
// jan: {janMax: [0], janMin: [0], janMM: [0]},
// jul: {julMax: [0], julMin: [0], julMM: [0]},
// jun: {junMax: [0], junMin: [0], junMM: [0]},
// mar: {marMax: [0], marMin: [0], marMM: [0]},
// may: {mayMax: [0], mayMin: [0], mayMM: [0]},
// nov: {novMax: [0], novMin: [0], novMM: [0]},
// oct: {octMax: [0], octMin: [0], octMM: [0]},
// sep: {sepMax: [0], sepMin: [0], sepMM: [0]},
// updatedLocation: ""
// }