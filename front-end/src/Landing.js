import './Harvest.css';
import cropBackground from "./images/cropBackground.png";
import { Link, Route, Routes } from 'react-router-dom';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const background = require("./images/cropBackground.png")


const Landing = ({ handleLocationChange, location }) => {

  const navigate = useNavigate()
  const handleClick = () => {
      console.log(location)
      navigate('/planner')

  }


  return (
    <>  
      <div className="backAll"></div>
      <div className='landing'>
        <header>
          <Link className='shadow' to='/how-to'>How To Use</Link>
          <Link className='shadow' to='/log'>Log In / Sign Up</Link>
        </header>

        <div className='landingIMG' >
          <h1>Home Harvest</h1>
          <img className='contain' src="https://images.unsplash.com/photo-1575218823251-f9d243b6f720?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80" alt="" />
          <div className="greyBelow"> Location tab</div>
        </div>
        
        <div className="search">
          <form action="">
            <input className='input' onChange={handleLocationChange} type="text" placeholder='Type your city name here..'/>
            <button className='button-74'onClick={handleClick}> SEARCH </button>
          </form>
          <h2>Your garden guru is just a click away...</h2>
        </div>
      </div>
    </>
  )
}

export default Landing