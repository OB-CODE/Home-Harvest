import React from 'react'
import { useState } from "react";

// const Row = (props) => {
//   const { mm, Max, Min } = props
//   return(<tr>
//     <td>{Max}</td>
//     <td>{Min}</td>
//     <td>{mm}</td>
//   </tr>)
// }

// const Table = (props) => {
//   const {data} = props
//   return (<table>
//     <tbody>
//       {data.map(row => 
//         <Row Max = {row.Mix}
//         Min = {row.Min}
//         mm ={row.MM}
//         />
//       )}
//     </tbody>
//   </table>)
// }

function  Max ({ weatherData }) {

  return (
    <div className='months'>
      <table border = "1" cellpadding = "2" cellspacing = "2">
        <tbody>
          <tr>
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
          
          <tr>
            <td>Avg Max C</td>
            <td> {((parseFloat(weatherData.jan.janMax[0]) + parseFloat(weatherData.jan.janMax[1]) + parseFloat(weatherData.jan.janMax[2]) + parseFloat(weatherData.jan.janMax[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.feb.febMax[0]) + parseFloat(weatherData.feb.febMax[1]) + parseFloat(weatherData.feb.febMax[2]) + parseFloat(weatherData.feb.febMax[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.mar.marMax[0]) + parseFloat(weatherData.mar.marMax[1]) + parseFloat(weatherData.mar.marMax[2]) + parseFloat(weatherData.mar.marMax[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.apr.aprMax[0]) + parseFloat(weatherData.apr.aprMax[1]) + parseFloat(weatherData.apr.aprMax[2]) + parseFloat(weatherData.apr.aprMax[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.may.mayMax[0]) + parseFloat(weatherData.may.mayMax[1]) + parseFloat(weatherData.may.mayMax[2]) + parseFloat(weatherData.may.mayMax[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.jun.junMax[0]) + parseFloat(weatherData.jun.junMax[1]) + parseFloat(weatherData.jun.junMax[2]) + parseFloat(weatherData.jun.junMax[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.jul.julMax[0]) + parseFloat(weatherData.jul.julMax[1]) + parseFloat(weatherData.jul.julMax[2]) + parseFloat(weatherData.jul.julMax[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.aug.augMax[0]) + parseFloat(weatherData.aug.augMax[1]) + parseFloat(weatherData.aug.augMax[2]) + parseFloat(weatherData.aug.augMax[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.sep.sepMax[0]) + parseFloat(weatherData.sep.sepMax[1]) + parseFloat(weatherData.sep.sepMax[2]) + parseFloat(weatherData.sep.sepMax[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.oct.octMax[0]) + parseFloat(weatherData.oct.octMax[1]) + parseFloat(weatherData.oct.octMax[2]) + parseFloat(weatherData.oct.octMax[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.nov.novMax[0]) + parseFloat(weatherData.nov.novMax[1]) + parseFloat(weatherData.nov.novMax[2]) + parseFloat(weatherData.nov.novMax[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.dec.decMax[0]) + parseFloat(weatherData.dec.decMax[1]) + parseFloat(weatherData.dec.decMax[2]) + parseFloat(weatherData.dec.decMax[3])).toFixed(1) / 4).toFixed(2)}</td>
          </tr>

          <tr>
            <td>Avg Min C</td>
            <td>   {((parseFloat(weatherData.jan.janMin[0]) + parseFloat(weatherData.jan.janMin[1]) + parseFloat(weatherData.jan.janMin[2]) + parseFloat(weatherData.jan.janMin[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.feb.febMin[0]) + parseFloat(weatherData.feb.febMin[1]) + parseFloat(weatherData.feb.febMin[2]) + parseFloat(weatherData.feb.febMin[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.mar.marMin[0]) + parseFloat(weatherData.mar.marMin[1]) + parseFloat(weatherData.mar.marMin[2]) + parseFloat(weatherData.mar.marMin[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.apr.aprMin[0]) + parseFloat(weatherData.apr.aprMin[1]) + parseFloat(weatherData.apr.aprMin[2]) + parseFloat(weatherData.apr.aprMin[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.may.mayMin[0]) + parseFloat(weatherData.may.mayMin[1]) + parseFloat(weatherData.may.mayMin[2]) + parseFloat(weatherData.may.mayMin[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.jun.junMin[0]) + parseFloat(weatherData.jun.junMin[1]) + parseFloat(weatherData.jun.junMin[2]) + parseFloat(weatherData.jun.junMin[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.jul.julMin[0]) + parseFloat(weatherData.jul.julMin[1]) + parseFloat(weatherData.jul.julMin[2]) + parseFloat(weatherData.jul.julMin[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.aug.augMin[0]) + parseFloat(weatherData.aug.augMin[1]) + parseFloat(weatherData.aug.augMin[2]) + parseFloat(weatherData.aug.augMin[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.sep.sepMin[0]) + parseFloat(weatherData.sep.sepMin[1]) + parseFloat(weatherData.sep.sepMin[2]) + parseFloat(weatherData.sep.sepMin[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.oct.octMin[0]) + parseFloat(weatherData.oct.octMin[1]) + parseFloat(weatherData.oct.octMin[2]) + parseFloat(weatherData.oct.octMin[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.nov.novMin[0]) + parseFloat(weatherData.nov.novMin[1]) + parseFloat(weatherData.nov.novMin[2]) + parseFloat(weatherData.nov.novMin[3])).toFixed(1) / 4).toFixed(2)}</td>
            <td>   {((parseFloat(weatherData.dec.decMin[0]) + parseFloat(weatherData.dec.decMin[1]) + parseFloat(weatherData.dec.decMin[2]) + parseFloat(weatherData.dec.decMin[3])).toFixed(1) / 4).toFixed(2)}</td>
          </tr>

          <tr>
            <td>Avg daily Rain MM</td>
            <td> {weatherData.jan.janMM} </td>
            <td> {weatherData.feb.febMM} </td>
            <td> {weatherData.mar.marMM} </td>
            <td> {weatherData.apr.aprMM} </td>
            <td> {weatherData.may.mayMM} </td>
            <td> {weatherData.jun.junMM} </td>
            <td> {weatherData.jul.julMM} </td>
            <td> {weatherData.aug.augMM} </td>
            <td> {weatherData.sep.sepMM} </td>
            <td> {weatherData.oct.octMM} </td>
            <td> {weatherData.nov.novMM} </td>
            <td> {weatherData.dec.decMM} </td>      
          </tr>
        </tbody>
    </table>
  </div>
  )
}

export default Max
