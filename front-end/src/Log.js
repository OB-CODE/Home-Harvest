import { Link, Route, Routes } from 'react-router-dom';
import cropBackground from "./images/cropBackground.png";
import React from 'react'
import './Plants.scss';

const Log = () => {
  return (
    <div>
      <header>
        <Link className='shadow' to='/how-to'>How To Use</Link>
        <Link className='shadow' to='/'>Home</Link>
      </header>
    </div>
  )
}

export default Log
