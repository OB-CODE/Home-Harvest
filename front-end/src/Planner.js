import { Link, Route, Routes } from 'react-router-dom';
import React from 'react'
import './Plants.scss';


const Planner = ({ addCrop }) => {
  return (
    <div>
      <div className="backing"></div>
      <header>
        <Link className='shadow' to='how-to'>How To Use</Link>
        <Link className='shadow' to='/'>Home</Link>
        <Link className='shadow' to='log'>Log In / Sign Up</Link>
      </header>

      <div className='topBanner'>
        <div>
          <div>Current Location:</div>
          <div>Daily Temp Range:</div>
          <div>Estimated soil temperature</div>
        </div>
        <div>Lets plan your crops!</div>
        <div>Weekly weather forecast</div>
      </div>
      
      <div className='yearly'> Yearly Temperature Averages for (location)
        <div className='months'>
          <div></div>
          <div>JAN</div>
          <div>FEB</div>
          <div>MAR</div>
          <div>APR</div>
          <div>MAY</div>
          <div>JUN</div>
          <div>JUL</div>
          <div>AUG</div>
          <div>SEP</div>
          <div>OCT</div>
          <div>NOV</div>
          <div>DEC</div>
          <div></div>
        </div>
        <div className='maxAvg'>
          {/* input 12 divs */}
        </div>
        <div className='minAvg'>
          {/* input 12 divs */}
        </div>
        <div className='rainMM'>
          {/* input 12 divs */}
        </div>
      </div>  
    </div>
  )
}

export default Planner
