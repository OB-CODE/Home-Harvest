import { Link, Route, Routes } from 'react-router-dom';
import cropBackground from "./images/cropBackground.png";
import React from 'react'
import './Plants.scss';

const HowTo = () => {
  return (
    <div>
       <div className="backing"></div>
        <header>
          <Link className='shadow' to='/'>Home</Link>
          <Link className='shadow' to='/log'>Log In / Sign Up</Link>
        </header>
      How to page
    </div>
  )
}

export default HowTo
