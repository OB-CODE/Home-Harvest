import React from 'react'

const SkeletonCell = () => <td><div className='skeleton-cell'></div></td>

const Loading = () => {
  return (
    <div className='months'>
    <table border = "1" cellPadding = "5" cellSpacing = "5">
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
          {Array.from({ length: 12 }).map((_, i) => <SkeletonCell key={`max-${i}`} />)}
        </tr>

        <tr>
          <td>Avg Min C</td>
          {Array.from({ length: 12 }).map((_, i) => <SkeletonCell key={`min-${i}`} />)}
        </tr>

        <tr>
          <td>Avg daily Rain MM</td>
          {Array.from({ length: 12 }).map((_, i) => <SkeletonCell key={`rain-${i}`} />)}
        </tr>
      </tbody>
  </table>
  <div className='loadingWeather'></div>
 <div className='growing'></div>

</div>
  )
}

export default Loading
