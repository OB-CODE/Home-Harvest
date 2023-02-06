import './Harvest.css';
import cropBackground from "./images/cropBackground.png";
import React from 'react'
const background = require("./images/cropBackground.png")

const Landing = () => {
  return (
    <>  
      <div className="backAll"></div>
      <div className='landing'>
        <header>
          <p className='shadow'> How To Use</p>
          <p className='shadow'>Log In / Sign Up</p>
        </header>

        <div className='landingIMG' >
          <h1>Home Harvest</h1>
          <img className='contain' src="https://images.unsplash.com/photo-1575218823251-f9d243b6f720?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80" alt="" />
          <div className="greyBelow"> Location tab</div>
        </div>
        
        <div className="search">
          <input className='input' type="text" placeholder='Type your city name here..'/>
          <button className='button-74'> SEARCH </button>
          <h2>Your garden guru is just a click away...</h2>
        </div>
      </div>
    </>
  )
}

export default Landing