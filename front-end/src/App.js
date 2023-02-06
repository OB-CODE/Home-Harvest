import './App.css';
import React, { useState } from "react";
import Landing from './lLanding';
// import { Routes, Route, Link } from 'react-router-dom'


function App() {

  const [harvestList, adjustHarvest] = useState([])

  const addCrop = crop => {
    adjustHarvest([...harvestList, crop])
  }

  const removeCrop = indexOfCrops => {
    const updatedCrops = harvestList.filter((crop, index) => index !== indexOfCrops)
    adjustHarvest(updatedCrops)
  }
  
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;

