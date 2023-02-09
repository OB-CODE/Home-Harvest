import React from 'react'
import { useState } from "react";


const UserHarvest = ({ removeCrop, harvestList, monthAvgs }) => {
  
  // used for 
  let counter = 0

  return (

    <div className="userCrops">
        Your Crops to Plant for the Year
      <div className='plannerContainer'>
        <table className='userPlanner' border = "1" cellPadding = "2" cellSpacing = "2">
          <tbody>
            <tr>
              <th></th>
              <th className='tableGap'>JAN</th>
              <th className='tableGap'>FEB</th>
              <th className='tableGap'>MAR</th>
              <th className='tableGap'>APR</th>
              <th className='tableGap'>MAY</th>
              <th className='tableGap'>JUN</th>
              <th className='tableGap'>JUL</th>
              <th className='tableGap'>AUG</th>
              <th className='tableGap'>SEP</th>
              <th className='tableGap'>OCT</th>
              <th className='tableGap'>NOV</th>
              <th className='tableGap'>DEC</th>
            </tr>
          
          {harvestList.map((eachCrop, index) => 
            <tr>
              <th className='centerTrial'>
                <tr>{eachCrop.name} </tr>
                <tr><button
                  key={index}
                  onClick={() => removeCrop(eachCrop.name)}
                >Remove</button></tr>
              </th>
              <th>
              {monthAvgs[0] > eachCrop.airTemplow && monthAvgs[0] < eachCrop.airTempHigh ? <tr className='sowColour'>✅</tr> : <tr></tr>}
              </th>
              <th>
              {monthAvgs[1] > eachCrop.airTemplow && monthAvgs[1] < eachCrop.airTempHigh ? <tr className='sowColour'>✅</tr> : <tr></tr>}
              </th>
              <th>
              {monthAvgs[2] > eachCrop.airTemplow && monthAvgs[2] < eachCrop.airTempHigh ? <tr className='sowColour'>✅</tr> : <tr></tr>}
              </th>
              <th>
              {monthAvgs[3] > eachCrop.airTemplow && monthAvgs[3] < eachCrop.airTempHigh ? <tr className='sowColour'>✅</tr> : <tr></tr>}
              </th>
              <th>
              {monthAvgs[4] > eachCrop.airTemplow && monthAvgs[4] < eachCrop.airTempHigh ? <tr className='sowColour'>✅</tr> : <tr></tr>}
              </th>
              <th>
              {monthAvgs[5] > eachCrop.airTemplow && monthAvgs[5] < eachCrop.airTempHigh ? <tr className='sowColour'>✅</tr> : <tr></tr>}
              </th>
              <th>
              {monthAvgs[6] > eachCrop.airTemplow && monthAvgs[6] < eachCrop.airTempHigh ? <tr className='sowColour'>✅</tr> : <tr></tr>}
              </th>
              <th>
              {monthAvgs[7] > eachCrop.airTemplow && monthAvgs[7] < eachCrop.airTempHigh ? <tr className='sowColour'>✅</tr> : <tr></tr>}
              </th>
              <th>
              {monthAvgs[8] > eachCrop.airTemplow && monthAvgs[8] < eachCrop.airTempHigh ? <tr className='sowColour'>✅</tr> : <tr></tr>}
              </th>
              <th>
              {monthAvgs[9] > eachCrop.airTemplow && monthAvgs[9] < eachCrop.airTempHigh ? <tr className='sowColour'>✅</tr> : <tr></tr>}
              </th>
              <th>
              {monthAvgs[10] > eachCrop.airTemplow && monthAvgs[10] < eachCrop.airTempHigh ? <tr className='sowColour'>✅</tr> : <tr></tr>}
              </th>
              <th>
              {monthAvgs[11] > eachCrop.airTemplow && monthAvgs[11] < eachCrop.airTempHigh ? <tr className='sowColour'>✅</tr> : <tr></tr>}
              </th>
            </tr>
          )}
            
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default UserHarvest
