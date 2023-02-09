import React, { useEffect, useState } from "react";
import Title from "./images/Title.png";

const PlanHeader = ({ weatherData, location }) => {

  const [isLoadingDaily, setIsLoadingDaily] = useState(true)
  const [dailyWeather, setdailyWeather] = useState([])

  useEffect(() => {
    async function dailyWeather() {
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=8051551b575546e496c73d8f93e5779d`)
      const geoData = await response.json()
  
      const latLngObj = geoData.results[0].geometry
      const locatedFull = geoData.results[0].formatted
  
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latLngObj.lat}&lon=${latLngObj.lng}&appid=7a5a72d27f0f1275d2007d2a7e460ddf&units=metric`)
      const weatherData = await weatherResponse.json()
      setIsLoadingDaily(false)
      setdailyWeather(weatherData) 
    };
    dailyWeather()
  },[location])

  return (
    <div className='topBanner'>
        {isLoadingDaily === true ? <div></div> : <div className="dailyInfo">{dailyWeather.name}, ({dailyWeather.sys.country}) is currently {dailyWeather.main.temp}°C. </div>}
        {console.log(dailyWeather.weather[0].main)}
        {console.log(dailyWeather.weather[0].description)}

        <div>
          <h1>Let's plan your crops!</h1>
          <h3>Weekly weather forecast</h3>
        </div>
        <div className="dailyInfo">Daily Description: {isLoadingDaily === true ? <span></span> : <span>{dailyWeather.weather[0].main} - {dailyWeather.weather[0].description}</span>}
          
        </div>
    </div>
  )
}

export default PlanHeader

{/* <div>   <div>
    <div >Current Location: {weatherData.updatedLocation} </div>
    <div>Daily Temp Range:</div>
    <div>Estimated soil temperature</div>
  </div>
  <div>Lets plan your crops!</div>
  <div>Weekly weather forecast</div>
</div>
</div> */}