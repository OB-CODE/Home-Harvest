import { Link, Route, Routes } from 'react-router-dom';
import cropBackground from "./images/cropBackground.png";
import Background from "./images/cropBackground.png";
import React from 'react'
import './Plants.scss';
import Bugs2 from "./images/Bugs2.png";
import Bugs3 from "./images/Bugs3.png";
import Landscape1 from "./images/Landscape1.png";



const HowTo = () => {
  return (
    <div>
       <div className="backing"></div>
       <div className="backing">
        <img src={`${Background}`} alt="" />
        </div>
        <header>
         <Link className='shadow' to='/how-to'>How To Use</Link>
          <Link className='shadow' to='/'>Home</Link>
          <Link className='shadow' to='/log'>Log In / Sign Up</Link>
        </header>
        <h1>Overview of Home Harvest</h1>

        <div className="howTo">
          <div><p>User Stroy: Home Harvest is designed to reduce the barriers of entry for the everyday person trying to grow produce. Decide on what you would like to grow and see when it would best suit your location. With the planner, you are able to map out a full year’s worth of crop rotations to make sure you know when to plant and harvest all the yummy things you want to grow. </p>

          <p>How to use: Simply type in your location on the home screen and the following will happen:</p>
          <ul>
          <li> Home Harvest will fetch the yearly average temperatures for your location based on the previous year’s data. </li>
          <li> Check the data to observe the data for the best growing conditions for the plants you want to harvest </li>
          <li> Scroll down to the plant selector and choose to display plants / herbs and vegetables from the options tabs </li>
          <li> Add any crops you are interested in via clicking on the ADD button at the bottom of each card. </li>
          <li> Once you have added your ideal crop selection, check the planter guide table for the ✅ to see when the estimated best time to sow your crop is </li>
          </ul>

          <p>Coming soon: Home Harvest acknowledges the weather data provided for the growing recommendation is only an estimate from last year’s weather. While the cards provide the idea growing temperature range, Home Harvest aims to have the current temperatures on display for users to better make their growing decisions. Soil temperature data will also soon be available to provide a more accurate estimation metric. It is advised this page is only used as a guide and users take their own weather and soil readings to ensure accuracy in their gardening.</p>

          <p>HAPPY HARVESTING!! </p>

          <p>Cheers Mitch,</p>
          <p>Home Harvest</p>
          </div>
        </div>
        <div className="imageFooterContainer">
          <img style={{maxWidth: '30%'}} src={Bugs2} alt="" />
          <img style={{maxWidth: '30%'}} src={Landscape1} alt="" />
          <img style={{maxWidth: '30%'}} src={Bugs3} alt="" />
        </div>
    </div>
  )
}

export default HowTo
