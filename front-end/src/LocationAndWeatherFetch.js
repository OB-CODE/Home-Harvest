// no capital as it is not a componenet

async function locationData(location) {
  console.log('2');

  const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=8051551b575546e496c73d8f93e5779d`)
  const geoData = await response.json()

  console.log(geoData);

  const latLngObj = geoData.results[0].geometry
  const locatedFull = geoData.results[0].formatted

  const weatherResponse = await fetch(`https://archive-api.open-meteo.com/v1/archive?latitude=${latLngObj.lat}&longitude=${latLngObj.lng}&start_date=2022-01-01&end_date=2022-12-31&daily=temperature_2m_max&daily=temperature_2m_min&daily=precipitation_sum&timezone=auto`)
    
    // `https://api.open-meteo.com/v1/forecast?latitude=-33.87&longitude=151.21&&daily=sunrise&timezone=auto&start_date=2022-01-01&end_date=2022-01-31`)
  const weatherData = await weatherResponse.json()

  console.log(weatherData)

  const maxTemp = await weatherData.daily.temperature_2m_max
  const minTemp = await weatherData.daily.temperature_2m_min
  const precipitation = await weatherData.daily.precipitation_sum


  // JAN
  let janTempMax = [[],[],[],[]]
  let janTempMin = [[],[],[],[]]
  let janPrecipitation = []

  for (let i = 0; i <= 30; i++) {
    if (i >= 0 && i <= 7) {
      janTempMax[0].push(maxTemp[i])
      janTempMin[0].push(minTemp[i])
      janPrecipitation.push(precipitation[i])
    } if (i >= 8 && i <= 15) {
      janTempMax[1].push(maxTemp[i])
      janTempMin[1].push(minTemp[i])
      janPrecipitation.push(precipitation[i])
    } if (i >= 16 && i <= 23) {
      janTempMax[2].push(maxTemp[i])
      janTempMin[2].push(minTemp[i])
      janPrecipitation.push(precipitation[i])
    } if (i >= 24 && i <= 30) {
      janTempMax[3].push(maxTemp[i])
      janTempMin[3].push(minTemp[i])
      janPrecipitation.push(precipitation[i])
    }
  }

  let janTempMaxAvgs = [
    [(janTempMax[0].reduce((acc, eachTemp) => (acc + eachTemp)) / janTempMax[0].length).toFixed(2)], [(janTempMax[1].reduce((acc, eachTemp) => (acc + eachTemp)) / janTempMax[1].length).toFixed(2)], [(janTempMax[2].reduce((acc, eachTemp) => (acc + eachTemp)) / janTempMax[2].length).toFixed(2)], [(janTempMax[3].reduce((acc, eachTemp) => (acc + eachTemp)) / janTempMax[3].length).toFixed(2)]
  ]

  let janTempMinAvgs = [
    [(janTempMin[0].reduce((acc, eachTemp) => (acc + eachTemp)) / janTempMin[0].length).toFixed(2)], [(janTempMin[1].reduce((acc, eachTemp) => (acc + eachTemp)) / janTempMin[1].length).toFixed(2)], [(janTempMin[2].reduce((acc, eachTemp) => (acc + eachTemp)) / janTempMin[2].length).toFixed(2)], [(janTempMin[3].reduce((acc, eachTemp) => (acc + eachTemp)) / janTempMin[3].length).toFixed(2)]
  ]

  let janPrecipitationAvg = [
    (janPrecipitation.reduce((acc, eachTemp) => (acc + eachTemp)) / janPrecipitation.length).toFixed(2) 
  ]
  
  //FEB
  let febTempMax = [[],[],[],[]]
  let febTempMin = [[],[],[],[]]
  let febPrecipitation = []

  for (let i = 31; i <= 58; i++) {
    if (31 >= 0 && i <= 37) {
      febTempMax[0].push(maxTemp[i])
      febTempMin[0].push(minTemp[i])
      febPrecipitation.push(precipitation[i])
    } if (i >= 38 && i <= 44) {
      febTempMax[1].push(maxTemp[i])
      febTempMin[1].push(minTemp[i])
      febPrecipitation.push(precipitation[i])
    } if (i >= 45 && i <= 51) {
      febTempMax[2].push(maxTemp[i])
      febTempMin[2].push(minTemp[i])
      febPrecipitation.push(precipitation[i])
    } if (i >= 52 && i <= 58) {
      febTempMax[3].push(maxTemp[i])
      febTempMin[3].push(minTemp[i])
      febPrecipitation.push(precipitation[i])
    }
  }

  let febTempMaxAvgs = [
    [(febTempMax[0].reduce((acc, eachTemp) => (acc + eachTemp)) / febTempMax[0].length).toFixed(2)], [(febTempMax[1].reduce((acc, eachTemp) => (acc + eachTemp)) / febTempMax[1].length).toFixed(2)], [(febTempMax[2].reduce((acc, eachTemp) => (acc + eachTemp)) / febTempMax[2].length).toFixed(2)], [(febTempMax[3].reduce((acc, eachTemp) => (acc + eachTemp)) / febTempMax[3].length).toFixed(2)]
  ]

  let febTempMinAvgs = [
    [(febTempMin[0].reduce((acc, eachTemp) => (acc + eachTemp)) / febTempMin[0].length).toFixed(2)], [(febTempMin[1].reduce((acc, eachTemp) => (acc + eachTemp)) / febTempMin[1].length).toFixed(2)], [(febTempMin[2].reduce((acc, eachTemp) => (acc + eachTemp)) / febTempMin[2].length).toFixed(2)], [(febTempMin[3].reduce((acc, eachTemp) => (acc + eachTemp)) / febTempMin[3].length).toFixed(2)]
  ]

  let febPrecipitationAvg = [
    (febPrecipitation.reduce((acc, eachTemp) => (acc + eachTemp)) / febPrecipitation.length).toFixed(2) 
  ]

  //MAR
  let marTempMax = [[],[],[],[]]
  let marTempMin = [[],[],[],[]]
  let marPrecipitation = []

  for (let i = 59; i <= 89; i++) {
    if (59 >= 0 && i <= 66) {
      marTempMax[0].push(maxTemp[i])
      marTempMin[0].push(minTemp[i])
      marPrecipitation.push(precipitation[i])
    } if (i >= 67 && i <= 74) {
      marTempMax[1].push(maxTemp[i])
      marTempMin[1].push(minTemp[i])
      marPrecipitation.push(precipitation[i])
    } if (i >= 75 && i <= 82) {
      marTempMax[2].push(maxTemp[i])
      marTempMin[2].push(minTemp[i])
      marPrecipitation.push(precipitation[i])
    } if (i >= 83 && i <= 89) {
      marTempMax[3].push(maxTemp[i])
      marTempMin[3].push(minTemp[i])
      marPrecipitation.push(precipitation[i])
    }
  }

  let marTempMaxAvgs = [
    [(marTempMax[0].reduce((acc, eachTemp) => (acc + eachTemp)) / marTempMax[0].length).toFixed(2)], [(marTempMax[1].reduce((acc, eachTemp) => (acc + eachTemp)) / marTempMax[1].length).toFixed(2)], [(marTempMax[2].reduce((acc, eachTemp) => (acc + eachTemp)) / marTempMax[2].length).toFixed(2)], [(marTempMax[3].reduce((acc, eachTemp) => (acc + eachTemp)) / marTempMax[3].length).toFixed(2)]
  ]

  let marTempMinAvgs = [
    [(marTempMin[0].reduce((acc, eachTemp) => (acc + eachTemp)) / marTempMin[0].length).toFixed(2)], [(marTempMin[1].reduce((acc, eachTemp) => (acc + eachTemp)) / marTempMin[1].length).toFixed(2)], [(marTempMin[2].reduce((acc, eachTemp) => (acc + eachTemp)) / marTempMin[2].length).toFixed(2)], [(marTempMin[3].reduce((acc, eachTemp) => (acc + eachTemp)) / marTempMin[3].length).toFixed(2)]
  ]

  let marPrecipitationAvg = [
    (marPrecipitation.reduce((acc, eachTemp) => (acc + eachTemp)) / marPrecipitation.length).toFixed(2) 
  ]

  //APR
  let aprTempMax = [[],[],[],[]]
  let aprTempMin = [[],[],[],[]]
  let aprPrecipitation = []

  for (let i = 90; i <= 119; i++) {
    if (90 >= 0 && i <= 96) {
      aprTempMax[0].push(maxTemp[i])
      aprTempMin[0].push(minTemp[i])
      aprPrecipitation.push(precipitation[i])
    } if (i >= 97 && i <= 103) {
      aprTempMax[1].push(maxTemp[i])
      aprTempMin[1].push(minTemp[i])
      aprPrecipitation.push(precipitation[i])
    } if (i >= 104 && i <= 111) {
      aprTempMax[2].push(maxTemp[i])
      aprTempMin[2].push(minTemp[i])
      aprPrecipitation.push(precipitation[i])
    } if (i >= 112 && i <= 119) {
      aprTempMax[3].push(maxTemp[i])
      aprTempMin[3].push(minTemp[i])
      aprPrecipitation.push(precipitation[i])
    }
  }

  let aprTempMaxAvgs = [
    [(aprTempMax[0].reduce((acc, eachTemp) => (acc + eachTemp)) / aprTempMax[0].length).toFixed(2)], [(aprTempMax[1].reduce((acc, eachTemp) => (acc + eachTemp)) / aprTempMax[1].length).toFixed(2)], [(aprTempMax[2].reduce((acc, eachTemp) => (acc + eachTemp)) / aprTempMax[2].length).toFixed(2)], [(aprTempMax[3].reduce((acc, eachTemp) => (acc + eachTemp)) / aprTempMax[3].length).toFixed(2)]
  ]

  let aprTempMinAvgs = [
    [(aprTempMin[0].reduce((acc, eachTemp) => (acc + eachTemp)) / aprTempMin[0].length).toFixed(2)], [(aprTempMin[1].reduce((acc, eachTemp) => (acc + eachTemp)) / aprTempMin[1].length).toFixed(2)], [(aprTempMin[2].reduce((acc, eachTemp) => (acc + eachTemp)) / aprTempMin[2].length).toFixed(2)], [(aprTempMin[3].reduce((acc, eachTemp) => (acc + eachTemp)) / aprTempMin[3].length).toFixed(2)]
  ]

  let aprPrecipitationAvg = [
    (aprPrecipitation.reduce((acc, eachTemp) => (acc + eachTemp)) / aprPrecipitation.length).toFixed(2) 
  ]

  //MAY
  let mayTempMax = [[],[],[],[]]
  let mayTempMin = [[],[],[],[]]
  let mayPrecipitation = []

  for (let i = 120; i <= 150; i++) {
    if (120 >= 0 && i <= 127) {
      mayTempMax[0].push(maxTemp[i])
      mayTempMin[0].push(minTemp[i])
      mayPrecipitation.push(precipitation[i])
    } if (i >= 128 && i <= 135) {
      mayTempMax[1].push(maxTemp[i])
      mayTempMin[1].push(minTemp[i])
      mayPrecipitation.push(precipitation[i])
    } if (i >= 136 && i <= 143) {
      mayTempMax[2].push(maxTemp[i])
      mayTempMin[2].push(minTemp[i])
      mayPrecipitation.push(precipitation[i])
    } if (i >= 144 && i <= 150) {
      mayTempMax[3].push(maxTemp[i])
      mayTempMin[3].push(minTemp[i])
      mayPrecipitation.push(precipitation[i])
    }
  }

  let mayTempMaxAvgs = [
    [(mayTempMax[0].reduce((acc, eachTemp) => (acc + eachTemp)) / mayTempMax[0].length).toFixed(2)], [(mayTempMax[1].reduce((acc, eachTemp) => (acc + eachTemp)) / mayTempMax[1].length).toFixed(2)], [(mayTempMax[2].reduce((acc, eachTemp) => (acc + eachTemp)) / mayTempMax[2].length).toFixed(2)], [(mayTempMax[3].reduce((acc, eachTemp) => (acc + eachTemp)) / mayTempMax[3].length).toFixed(2)]
  ]

  let mayTempMinAvgs = [
    [(mayTempMin[0].reduce((acc, eachTemp) => (acc + eachTemp)) / mayTempMin[0].length).toFixed(2)], [(mayTempMin[1].reduce((acc, eachTemp) => (acc + eachTemp)) / mayTempMin[1].length).toFixed(2)], [(mayTempMin[2].reduce((acc, eachTemp) => (acc + eachTemp)) / mayTempMin[2].length).toFixed(2)], [(mayTempMin[3].reduce((acc, eachTemp) => (acc + eachTemp)) / mayTempMin[3].length).toFixed(2)]
  ]

  let mayPrecipitationAvg = [
    (mayPrecipitation.reduce((acc, eachTemp) => (acc + eachTemp)) / mayPrecipitation.length).toFixed(2) 
  ]

  //JUN
  let junTempMax = [[],[],[],[]]
  let junTempMin = [[],[],[],[]]
  let junPrecipitation = []

  for (let i = 151; i <= 180; i++) {
    if (151 >= 0 && i <= 157) {
      junTempMax[0].push(maxTemp[i])
      junTempMin[0].push(minTemp[i])
      junPrecipitation.push(precipitation[i])
    } if (i >= 158 && i <= 164) {
      junTempMax[1].push(maxTemp[i])
      junTempMin[1].push(minTemp[i])
      junPrecipitation.push(precipitation[i])
    } if (i >= 165 && i <= 172) {
      junTempMax[2].push(maxTemp[i])
      junTempMin[2].push(minTemp[i])
      junPrecipitation.push(precipitation[i])
    } if (i >= 173 && i <= 180) {
      junTempMax[3].push(maxTemp[i])
      junTempMin[3].push(minTemp[i])
      junPrecipitation.push(precipitation[i])
    }
  }

  let junTempMaxAvgs = [
    [(junTempMax[0].reduce((acc, eachTemp) => (acc + eachTemp)) / junTempMax[0].length).toFixed(2)], [(junTempMax[1].reduce((acc, eachTemp) => (acc + eachTemp)) / junTempMax[1].length).toFixed(2)], [(junTempMax[2].reduce((acc, eachTemp) => (acc + eachTemp)) / junTempMax[2].length).toFixed(2)], [(junTempMax[3].reduce((acc, eachTemp) => (acc + eachTemp)) / junTempMax[3].length).toFixed(2)]
  ]

  let junTempMinAvgs = [
    [(junTempMin[0].reduce((acc, eachTemp) => (acc + eachTemp)) / junTempMin[0].length).toFixed(2)], [(junTempMin[1].reduce((acc, eachTemp) => (acc + eachTemp)) / junTempMin[1].length).toFixed(2)], [(junTempMin[2].reduce((acc, eachTemp) => (acc + eachTemp)) / junTempMin[2].length).toFixed(2)], [(junTempMin[3].reduce((acc, eachTemp) => (acc + eachTemp)) / junTempMin[3].length).toFixed(2)]
  ]

  let junPrecipitationAvg = [
    (junPrecipitation.reduce((acc, eachTemp) => (acc + eachTemp)) / junPrecipitation.length).toFixed(2) 
  ]

  //JUL
  let julTempMax = [[],[],[],[]]
  let julTempMin = [[],[],[],[]]
  let julPrecipitation = []

  for (let i = 181; i <= 211; i++) {
    if (181 >= 0 && i <= 188) {
      julTempMax[0].push(maxTemp[i])
      julTempMin[0].push(minTemp[i])
      julPrecipitation.push(precipitation[i])
    } if (i >= 189 && i <= 196) {
      julTempMax[1].push(maxTemp[i])
      julTempMin[1].push(minTemp[i])
      julPrecipitation.push(precipitation[i])
    } if (i >= 197 && i <= 204) {
      julTempMax[2].push(maxTemp[i])
      julTempMin[2].push(minTemp[i])
      julPrecipitation.push(precipitation[i])
    } if (i >= 205 && i <= 211) {
      julTempMax[3].push(maxTemp[i])
      julTempMin[3].push(minTemp[i])
      julPrecipitation.push(precipitation[i])
    }
  }

  let julTempMaxAvgs = [
    [(julTempMax[0].reduce((acc, eachTemp) => (acc + eachTemp)) / julTempMax[0].length).toFixed(2)], [(julTempMax[1].reduce((acc, eachTemp) => (acc + eachTemp)) / julTempMax[1].length).toFixed(2)], [(julTempMax[2].reduce((acc, eachTemp) => (acc + eachTemp)) / julTempMax[2].length).toFixed(2)], [(julTempMax[3].reduce((acc, eachTemp) => (acc + eachTemp)) / julTempMax[3].length).toFixed(2)]
  ]

  let julTempMinAvgs = [
    [(julTempMin[0].reduce((acc, eachTemp) => (acc + eachTemp)) / julTempMin[0].length).toFixed(2)], [(julTempMin[1].reduce((acc, eachTemp) => (acc + eachTemp)) / julTempMin[1].length).toFixed(2)], [(julTempMin[2].reduce((acc, eachTemp) => (acc + eachTemp)) / julTempMin[2].length).toFixed(2)], [(julTempMin[3].reduce((acc, eachTemp) => (acc + eachTemp)) / julTempMin[3].length).toFixed(2)]
  ]

  let julPrecipitationAvg = [
    (julPrecipitation.reduce((acc, eachTemp) => (acc + eachTemp)) / julPrecipitation.length).toFixed(2) 
  ]

  //AUG
  let augTempMax = [[],[],[],[]]
  let augTempMin = [[],[],[],[]]
  let augPrecipitation = []

  for (let i = 212; i <= 242; i++) {
    if (212 >= 0 && i <= 219) {
      augTempMax[0].push(maxTemp[i])
      augTempMin[0].push(minTemp[i])
      augPrecipitation.push(precipitation[i])
    } if (i >= 220 && i <= 227) {
      augTempMax[1].push(maxTemp[i])
      augTempMin[1].push(minTemp[i])
      augPrecipitation.push(precipitation[i])
    } if (i >= 228 && i <= 235) {
      augTempMax[2].push(maxTemp[i])
      augTempMin[2].push(minTemp[i])
      augPrecipitation.push(precipitation[i])
    } if (i >= 236 && i <= 242) {
      augTempMax[3].push(maxTemp[i])
      augTempMin[3].push(minTemp[i])
      augPrecipitation.push(precipitation[i])
    }
  }

  let augTempMaxAvgs = [
    [(augTempMax[0].reduce((acc, eachTemp) => (acc + eachTemp)) / augTempMax[0].length).toFixed(2)], [(augTempMax[1].reduce((acc, eachTemp) => (acc + eachTemp)) / augTempMax[1].length).toFixed(2)], [(augTempMax[2].reduce((acc, eachTemp) => (acc + eachTemp)) / augTempMax[2].length).toFixed(2)], [(augTempMax[3].reduce((acc, eachTemp) => (acc + eachTemp)) / augTempMax[3].length).toFixed(2)]
  ]

  let augTempMinAvgs = [
    [(augTempMin[0].reduce((acc, eachTemp) => (acc + eachTemp)) / augTempMin[0].length).toFixed(2)], [(augTempMin[1].reduce((acc, eachTemp) => (acc + eachTemp)) / augTempMin[1].length).toFixed(2)], [(augTempMin[2].reduce((acc, eachTemp) => (acc + eachTemp)) / augTempMin[2].length).toFixed(2)], [(augTempMin[3].reduce((acc, eachTemp) => (acc + eachTemp)) / augTempMin[3].length).toFixed(2)]
  ]

  let augPrecipitationAvg = [
    (augPrecipitation.reduce((acc, eachTemp) => (acc + eachTemp)) / augPrecipitation.length).toFixed(2) 
  ]

  //SEP
  let sepTempMax = [[],[],[],[]]
  let sepTempMin = [[],[],[],[]]
  let sepPrecipitation = []

  for (let i = 212; i <= 242; i++) {
    if (212 >= 0 && i <= 219) {
      sepTempMax[0].push(maxTemp[i])
      sepTempMin[0].push(minTemp[i])
      sepPrecipitation.push(precipitation[i])
    } if (i >= 220 && i <= 227) {
      sepTempMax[1].push(maxTemp[i])
      sepTempMin[1].push(minTemp[i])
      sepPrecipitation.push(precipitation[i])
    } if (i >= 228 && i <= 235) {
      sepTempMax[2].push(maxTemp[i])
      sepTempMin[2].push(minTemp[i])
      sepPrecipitation.push(precipitation[i])
    } if (i >= 236 && i <= 242) {
      sepTempMax[3].push(maxTemp[i])
      sepTempMin[3].push(minTemp[i])
      sepPrecipitation.push(precipitation[i])
    }
  }

  let sepTempMaxAvgs = [
    [(sepTempMax[0].reduce((acc, eachTemp) => (acc + eachTemp)) / sepTempMax[0].length).toFixed(2)], [(sepTempMax[1].reduce((acc, eachTemp) => (acc + eachTemp)) / sepTempMax[1].length).toFixed(2)], [(sepTempMax[2].reduce((acc, eachTemp) => (acc + eachTemp)) / sepTempMax[2].length).toFixed(2)], [(sepTempMax[3].reduce((acc, eachTemp) => (acc + eachTemp)) / sepTempMax[3].length).toFixed(2)]
  ]

  let sepTempMinAvgs = [
    [(sepTempMin[0].reduce((acc, eachTemp) => (acc + eachTemp)) / sepTempMin[0].length).toFixed(2)], [(sepTempMin[1].reduce((acc, eachTemp) => (acc + eachTemp)) / sepTempMin[1].length).toFixed(2)], [(sepTempMin[2].reduce((acc, eachTemp) => (acc + eachTemp)) / sepTempMin[2].length).toFixed(2)], [(sepTempMin[3].reduce((acc, eachTemp) => (acc + eachTemp)) / sepTempMin[3].length).toFixed(2)]
  ]

  let sepPrecipitationAvg = [
    (sepPrecipitation.reduce((acc, eachTemp) => (acc + eachTemp)) / sepPrecipitation.length).toFixed(2) 
  ]

  //OCT
  let octTempMax = [[],[],[],[]]
  let octTempMin = [[],[],[],[]]
  let octPrecipitation = []

  for (let i = 273; i <= 303; i++) {
    if (273 >= 0 && i <= 280) {
      octTempMax[0].push(maxTemp[i])
      octTempMin[0].push(minTemp[i])
      octPrecipitation.push(precipitation[i])
    } if (i >= 281 && i <= 288) {
      octTempMax[1].push(maxTemp[i])
      octTempMin[1].push(minTemp[i])
      octPrecipitation.push(precipitation[i])
    } if (i >= 289 && i <= 296) {
      octTempMax[2].push(maxTemp[i])
      octTempMin[2].push(minTemp[i])
      octPrecipitation.push(precipitation[i])
    } if (i >= 297 && i <= 303) {
      octTempMax[3].push(maxTemp[i])
      octTempMin[3].push(minTemp[i])
      octPrecipitation.push(precipitation[i])
    }
  }

  let octTempMaxAvgs = [
    [(octTempMax[0].reduce((acc, eachTemp) => (acc + eachTemp)) / octTempMax[0].length).toFixed(2)], [(octTempMax[1].reduce((acc, eachTemp) => (acc + eachTemp)) / octTempMax[1].length).toFixed(2)], [(octTempMax[2].reduce((acc, eachTemp) => (acc + eachTemp)) / octTempMax[2].length).toFixed(2)], [(octTempMax[3].reduce((acc, eachTemp) => (acc + eachTemp)) / octTempMax[3].length).toFixed(2)]
  ]

  let octTempMinAvgs = [
    [(octTempMin[0].reduce((acc, eachTemp) => (acc + eachTemp)) / octTempMin[0].length).toFixed(2)], [(octTempMin[1].reduce((acc, eachTemp) => (acc + eachTemp)) / octTempMin[1].length).toFixed(2)], [(octTempMin[2].reduce((acc, eachTemp) => (acc + eachTemp)) / octTempMin[2].length).toFixed(2)], [(octTempMin[3].reduce((acc, eachTemp) => (acc + eachTemp)) / octTempMin[3].length).toFixed(2)]
  ]

  let octPrecipitationAvg = [
    (octPrecipitation.reduce((acc, eachTemp) => (acc + eachTemp)) / octPrecipitation.length).toFixed(2) 
  ]

  //NOV
  let novTempMax = [[],[],[],[]]
  let novTempMin = [[],[],[],[]]
  let novPrecipitation = []

  for (let i = 304; i <= 334; i++) {
    if (304 >= 0 && i <= 310) {
      novTempMax[0].push(maxTemp[i])
      novTempMin[0].push(minTemp[i])
      novPrecipitation.push(precipitation[i])
    } if (i >= 311 && i <= 317) {
      novTempMax[1].push(maxTemp[i])
      novTempMin[1].push(minTemp[i])
      novPrecipitation.push(precipitation[i])
    } if (i >= 318 && i <= 325) {
      novTempMax[2].push(maxTemp[i])
      novTempMin[2].push(minTemp[i])
      novPrecipitation.push(precipitation[i])
    } if (i >= 326 && i <= 334) {
      novTempMax[3].push(maxTemp[i])
      novTempMin[3].push(minTemp[i])
      novPrecipitation.push(precipitation[i])
    }
  }

  let novTempMaxAvgs = [
    [(novTempMax[0].reduce((acc, eachTemp) => (acc + eachTemp)) / novTempMax[0].length).toFixed(2)], [(novTempMax[1].reduce((acc, eachTemp) => (acc + eachTemp)) / novTempMax[1].length).toFixed(2)], [(novTempMax[2].reduce((acc, eachTemp) => (acc + eachTemp)) / novTempMax[2].length).toFixed(2)], [(novTempMax[3].reduce((acc, eachTemp) => (acc + eachTemp)) / novTempMax[3].length).toFixed(2)]
  ]

  let novTempMinAvgs = [
    [(novTempMin[0].reduce((acc, eachTemp) => (acc + eachTemp)) / novTempMin[0].length).toFixed(2)], [(novTempMin[1].reduce((acc, eachTemp) => (acc + eachTemp)) / novTempMin[1].length).toFixed(2)], [(novTempMin[2].reduce((acc, eachTemp) => (acc + eachTemp)) / novTempMin[2].length).toFixed(2)], [(novTempMin[3].reduce((acc, eachTemp) => (acc + eachTemp)) / novTempMin[3].length).toFixed(2)]
  ]

  let novPrecipitationAvg = [
    (novPrecipitation.reduce((acc, eachTemp) => (acc + eachTemp)) / novPrecipitation.length).toFixed(2) 
  ]

  //DEC
  let decTempMax = [[],[],[],[]]
  let decTempMin = [[],[],[],[]]
  let decPrecipitation = []

  for (let i = 335; i <= 364; i++) {
    if (335 >= 0 && i <= 342) {
      decTempMax[0].push(maxTemp[i])
      decTempMin[0].push(minTemp[i])
      decPrecipitation.push(precipitation[i])
    } if (i >= 343 && i <= 350) {
      decTempMax[1].push(maxTemp[i])
      decTempMin[1].push(minTemp[i])
      decPrecipitation.push(precipitation[i])
    } if (i >= 351 && i <= 357) {
      decTempMax[2].push(maxTemp[i])
      decTempMin[2].push(minTemp[i])
      decPrecipitation.push(precipitation[i])
    } if (i >= 358 && i <= 364) {
      decTempMax[3].push(maxTemp[i])
      decTempMin[3].push(minTemp[i])
      decPrecipitation.push(precipitation[i])
    }
  }

  let decTempMaxAvgs = [
    [(decTempMax[0].reduce((acc, eachTemp) => (acc + eachTemp)) / decTempMax[0].length).toFixed(2)], [(decTempMax[1].reduce((acc, eachTemp) => (acc + eachTemp)) / decTempMax[1].length).toFixed(2)], [(decTempMax[2].reduce((acc, eachTemp) => (acc + eachTemp)) / decTempMax[2].length).toFixed(2)], [(decTempMax[3].reduce((acc, eachTemp) => (acc + eachTemp)) / decTempMax[3].length).toFixed(2)]
  ]

  let decTempMinAvgs = [
    [(decTempMin[0].reduce((acc, eachTemp) => (acc + eachTemp)) / decTempMin[0].length).toFixed(2)], [(decTempMin[1].reduce((acc, eachTemp) => (acc + eachTemp)) / decTempMin[1].length).toFixed(2)], [(decTempMin[2].reduce((acc, eachTemp) => (acc + eachTemp)) / decTempMin[2].length).toFixed(2)], [(decTempMin[3].reduce((acc, eachTemp) => (acc + eachTemp)) / decTempMin[3].length).toFixed(2)]
  ]

  let decPrecipitationAvg = [
    (decPrecipitation.reduce((acc, eachTemp) => (acc + eachTemp)) / decPrecipitation.length).toFixed(2) 
  ]

  // DATA Object to work with in project
  let yearly = { 
    updatedLocation: locatedFull,
    jan: {janMax: janTempMaxAvgs, janMin: janTempMinAvgs, janMM: janPrecipitationAvg },
    feb: {febMax: febTempMaxAvgs, febMin: febTempMinAvgs, febMM: febPrecipitationAvg },
    mar: {marMax: marTempMaxAvgs, marMin: marTempMinAvgs, marMM: marPrecipitationAvg },
    apr: {aprMax: aprTempMaxAvgs, aprMin: aprTempMinAvgs, aprMM: aprPrecipitationAvg },
    may: {mayMax: mayTempMaxAvgs, mayMin: mayTempMinAvgs, mayMM: mayPrecipitationAvg },
    jun: {junMax: junTempMaxAvgs, junMin: junTempMinAvgs, junMM: junPrecipitationAvg },
    jul: {julMax: julTempMaxAvgs, julMin: julTempMinAvgs, julMM: julPrecipitationAvg },
    aug: {augMax: augTempMaxAvgs, augMin: augTempMinAvgs, augMM: augPrecipitationAvg },
    sep: {sepMax: sepTempMaxAvgs, sepMin: sepTempMinAvgs, sepMM: sepPrecipitationAvg },
    oct: {octMax: octTempMaxAvgs, octMin: octTempMinAvgs, octMM: octPrecipitationAvg },
    nov: {novMax: novTempMaxAvgs, novMin: novTempMinAvgs, novMM: novPrecipitationAvg },
    dec: {decMax: decTempMaxAvgs, decMin: decTempMinAvgs, decMM: decPrecipitationAvg }
   }

  console.log(yearly);

  return yearly
   // returns are strings - need to use praseFloat on the output if you want a number.
};

export default locationData
// Monthly AVGS
// (parseFloat(yearly.dec.decMax[0]) + parseFloat(yearly.dec.decMax[1]) + parseFloat(yearly.dec.decMax[2]) + parseFloat(yearly.dec.decMax[3])) / 4
