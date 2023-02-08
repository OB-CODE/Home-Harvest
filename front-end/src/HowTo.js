import { Link, Route, Routes } from 'react-router-dom';
import cropBackground from "./images/cropBackground.png";
import Background from "./images/cropBackground.png";
import React from 'react'
import './Plants.scss';

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
      How to page
    </div>
  )
}

export default HowTo
