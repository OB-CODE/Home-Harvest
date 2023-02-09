import React from 'react'
import UserHarvest from "./UserHarvest";
import { allCrops } from './CropImagesAll'
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";




function Crops ({ addCrop, removeCrop, harvestList  }) {

  const herbs = [
    { name: 'Basil', airTemplow: 21, airTempHigh: 29, tillHarvest: 60, depth: 0.6, frostT: false, sun: false, distance: '30-55'},
    { name: 'Rosemary', airTemplow: 15, airTempHigh: 21, tillHarvest: 120, depth: 0.6, frostT: true, sun: true, distance: '45-60'},
    { name: 'Sage', airTemplow: 15, airTempHigh: 21, tillHarvest: 90, depth: 0.6, frostT: true, sun: true, distance: '45-60'},
    { name: 'Thyme', airTemplow: 15, airTempHigh: 21, tillHarvest: 100, depth: 0.6, frostT: true, sun: true, distance: '30-45'},
    { name: 'Chives', airTemplow: 15, airTempHigh: 21, tillHarvest: 60, depth: 0.6, frostT: true, sun: false, distance: '15-30'},
  ]
  
  const vegetables = [
    { name: 'Tomatoes', airTemplow: 20, airTempHigh: 30, tillHarvest: 80, depth: 3, frostT: false, sun: true, distance: '60-90'},
    { name: 'Carrots', airTemplow: 15, airTempHigh: 20, tillHarvest: 75, depth: 2, frostT: true, sun: true, distance: '15-30'},
    { name: 'Peppers', airTemplow: 20, airTempHigh: 30, tillHarvest: 80, depth: 3, frostT: false, sun: true, distance: '60-90'},
    { name: 'Lettuce', airTemplow: 10, airTempHigh: 20, tillHarvest: 45, depth: 2, frostT: true, sun: false, distance: '30-45'},
    { name: 'Beans', airTemplow: 20, airTempHigh: 30, tillHarvest: 55, depth: 6, frostT: true, sun: true, distance: '45-60'},
  ]
  
  const fruits = [
    { name: 'Strawberries', airTemplow: 10, airTempHigh: 15, tillHarvest: 105, depth: 5, frostT: true, sun: true, distance: '35-45'},
    { name: 'Blueberries', airTemplow: 10, airTempHigh: 15, tillHarvest: 165, depth: 15, frostT: true, sun: false, distance: '2'},
    { name: 'Raspberries', airTemplow: 5, airTempHigh: 10, tillHarvest: 135, depth: 15, frostT: true, sun: false, distance: '2'},
    { name: 'Blackberries', airTemplow: 5, airTempHigh: 10, tillHarvest: 135, depth: 15, frostT: true, sun: false, distance: '2'},
    { name: 'Cherries', airTemplow: 5, airTempHigh: 10, tillHarvest: 135, depth: 15, frostT: true, sun: true, distance: '5'},
  ]


  // For the buttons:
  const [Crops, setCrops] = useState(['herbs'] );

  const handleCrops = (event, newCrops) => {
    if (newCrops.length) {
      setCrops(newCrops);
    }
  };

  return (
    <div className='holdAllCrops'>
      <div className="userCrops">
        Your Crops to Plant for the Year
      </div>

      <UserHarvest 
        removeCrop={removeCrop}
        harvestList={harvestList}
      />

      

      <div className='months'>
        <table style={{paddingBottom: '10px'}} border = "1" cellpadding = "2" cellspacing = "2">
          <tbody>
            Crop Key:
            <tr></tr>
              <td className='emoji'>☀️ / 🌤️ </td>
              <td className='emoji'> 🌱  </td>
              <td className='emoji'> 🕛  </td>
              <td className='emoji'> 👇  </td>
              <td className='emoji'> ❄️  </td>
              <td className='emoji'>📏 </td>
            <tr></tr>
              <td>Full sun / Shade</td>
              <td> Sow / grow temp ℃</td>
              <td>Days till harvest</td>
              <td>Plant depth cm</td>
              <td>Frost resistance</td>
              <td>Distance apart cm</td>
            <tr ></tr>
          </tbody>
        </table>
      </div>

      <div style={{paddingBottom: '15px', fontSize: '1.4rem', textAlign: 'center'}}>Select  search below - select 1 to 3: 
        <Stack className='toggle' direction="row" spacing={4}>
          <ToggleButtonGroup
            value={Crops}
            onChange={handleCrops}
            aria-label="device"
          >
            <ToggleButton value="fruits" aria-label="fruits">
            Fruit: 🍎
            </ToggleButton>
            <ToggleButton value="vegetables" aria-label="vegetables">
            Veg: 🥕
            </ToggleButton>
            <ToggleButton value="herbs" aria-label="herbs">
            Herbs: 🌿
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </div>
      <div className="selectFromcrops">

      {Crops.includes('herbs') === true ? <section className='eachSection'>
        {herbs.map((herb, index) => 
          <div className='cardContainer'>            
            <div key={index} className='cropName' >{herb.name}</div>
            <div className='cropCards' style={{backgroundImage: `url(${allCrops[herb.name]})`, backgroundRepeat: 'no-repeat'}}>
              <div>
                <div key={index} className='cropLow'>🌱🟰 {herb.airTemplow} - {herb.airTempHigh} {herb.sun === true ? <span>☀️</span> : <span>🌤️</span>}</div>
                <div key={index} className='tillHarvest'>🕛🟰 {herb.tillHarvest}</div>
                <div key={index} className='tillHarvest'>👇🟰 {herb.depth}</div>
                <div key={index} className='tillHarvest'>❄️🟰 {herb.frostT === true ? <span>✅</span> : <span>❌</span>}</div>
                <div key={index} className='tillHarvest'>📏🟰 {herb.distance}</div>           
              </div>
            </div>
          <button class="button-55"
            key={index}
            onClick={() => addCrop(herb)}
          >Add {herb.name}</button>
        </div>
        )}
      </section> : <div></div> }

      {Crops.includes('vegetables') === true ? <section className='eachSection' >
        {vegetables.map((vegetable, i) => 
          <div className='cardContainer'>            
            <div key={i} className='cropName' >{vegetable.name}</div>
            <div className='cropCards' style={{backgroundImage: `url(${allCrops[vegetable.name]})`, backgroundRepeat: 'no-repeat'}}>
              <div>
                <div key={i} className='cropLow'>🌱🟰 {vegetable.airTemplow} - {vegetable.airTempHigh} {vegetable.sun === true ? <span>☀️</span> : <span>🌤️</span>}</div>
                <div key={i} className='tillHarvest'>🕛🟰 {vegetable.tillHarvest}</div>
                <div key={i} className='tillHarvest'>👇🟰 {vegetable.depth}</div>
                <div key={i} className='tillHarvest'>❄️🟰 {vegetable.frostT === true ? <span>✅</span> : <span>❌</span>}</div>
                <div key={i} className='tillHarvest'>📏🟰 {vegetable.distance}</div>           
              </div>
            </div>
          <button class="button-55" 
            key={i}
            onClick={() => addCrop(vegetable)}
          >Add {vegetable.name} </button>
        </div>
        )}
      </section> : <div></div> }

      {Crops.includes('fruits') === true ? <section className='eachSection' >
        {fruits.map((fruit, j) => 
          <div className='cardContainer'>            
            <div key={j} className='cropName' >{fruit.name}</div>
            <div className='cropCards' style={{backgroundImage: `url(${allCrops[fruit.name]})`, backgroundRepeat: 'no-repeat'}}>
              <div>
                <div key={j} className='tillHarvest'></div>
                <div key={j} className='cropLow'>🌱🟰 {fruit.airTemplow} - {fruit.airTempHigh} {fruit.sun === true ? <span>☀️</span> : <span>🌤️</span>} </div>
                <div key={j} className='tillHarvest'>🕛🟰 {fruit.tillHarvest}</div>
                <div key={j} className='tillHarvest'>👇🟰 {fruit.depth}</div>
                <div key={j} className='tillHarvest'>❄️🟰 {fruit.frostT === true ? <span>✅</span> : <span>❌</span>}</div>
                <div key={j} className='tillHarvest'>📏🟰 {fruit.distance}</div>           
              </div>
            </div>
          <button class="button-55"
            key={j}
            onClick={() => addCrop(fruit)}
            >Add {fruit.name}
          </button>
        </div>
        )}
      </section> : <div></div> }

      </div>
      <div className='spaceHolder'></div>

    </div>
  )
}

export default Crops
