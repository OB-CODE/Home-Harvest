async function locationData() {
  // const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityToInput}&key=${OPEN_CAGE}`)
  const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=sydney&key=8051551b575546e496c73d8f93e5779d`)
  const geoData = await response.json()

  console.log(geoData);

  const latLngObj = geoData.results[0].geometry
  console.log(latLngObj);
}