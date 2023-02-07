import React from 'react'

const Loading = () => {
  return (
    <div className='months'>
    <table border = "1" cellpadding = "5" cellspacing = "5">
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
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>

        <tr>
          <td>Avg Min C</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>

        <tr>
          <td>Avg daily Rain MM</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>      
        </tr>
      </tbody>
  </table>
  <div className='loadingWeather'>💧🌞🌩❄🌨💧 ---  LOADING   --- 💧🌨❄🌩🌞💧</div> 
</div>
  )
}

export default Loading


{/* <div className='loadingFruits'>🍎  🍋  🍍  🍇 ---  LOADING   --- 🍇  🍍  🍋  🍎</div>  */}
