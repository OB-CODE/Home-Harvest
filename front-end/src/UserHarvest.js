import React from 'react'
import { useState } from "react";


const UserHarvest = ({ removeCrop, harvestList }) => {
  
  return (
    <div>
      <table border = "1" cellpadding = "2" cellspacing = "2">
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th>JAN</th>
            <th>FEB</th>
            <th>MAR</th>
            <th>APR</th>
            <th>MAY</th>
            <th>JUN</th>
            <th>JUL</th>
            <th>AUG</th>
            <th>SEP</th>
            <th>OCT</th>
            <th>NOV</th>
            <th>DEC</th>
          </tr>
        
        {harvestList.map((eachCrop, index) => 
          <tr>
            <th>
              <tr style={{textAlign: 'center'}}>{eachCrop.name} </tr>
              <tr><button
                key={index}
                onClick={() => removeCrop(eachCrop.name)}
              >Remove: {eachCrop.name}</button></tr>
            </th>
            <th>
            <tr>
                Sow:
              </tr>
              <tr>
                Harvest
              </tr>
            </th>
            <th>
              <tr className='sowColour'>
                -
              </tr>
              <tr className='harvestColour'>
                -
              </tr>
            </th>
            <th>
              <tr className='sowColour'>
                -
              </tr>
              <tr className='harvestColour'>
                -
              </tr>
            </th>
            <th>
              <tr className='sowColour'>
                -
              </tr>
              <tr className='harvestColour'>
                -
              </tr>
            </th>
            <th>
              <tr className='sowColour'>
                -
              </tr>
              <tr className='harvestColour'>
                -
              </tr>
            </th>
            <th>
              <tr className='sowColour'>
                -
              </tr>
              <tr className='harvestColour'>
                -
              </tr>
            </th>
            <th>
              <tr className='sowColour'>
                -
              </tr>
              <tr className='harvestColour'>
                -
              </tr>
            </th>
            <th>
              <tr className='sowColour'>
                -
              </tr>
              <tr className='harvestColour'>
                -
              </tr>
            </th>
            <th>
              <tr className='sowColour'>
                -
              </tr>
              <tr className='harvestColour'>
                -
              </tr>
            </th>
            <th>
              <tr className='sowColour'>
                -
              </tr>
              <tr className='harvestColour'>
                -
              </tr>
            </th>
            <th>
              <tr className='sowColour'>
                -
              </tr>
              <tr className='harvestColour'>
                -
              </tr>
            </th>
            <th>
              <tr className='sowColour'>
                -
              </tr>
              <tr className='harvestColour'>
                -
              </tr>
            </th>
            <th>
              <tr className='sowColour'>
                -
              </tr>
              <tr className='harvestColour'>
                -
              </tr>
            </th>
          </tr>
        )}
          
        </tbody>
      </table>
    </div>
  )
}

export default UserHarvest
