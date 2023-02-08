const express = require('express')
const herbs = require('./Crops')
const vegetables = require('./Crops')
const fruits = require('./Crops')



const app = express()
const port = process.env.PORT || 3001;

//Controllers


// STARTING THE SERVER
app.listen(port, () => console.log(`Listening on port ${port}`))



// MIDDLEWARE FUNCTIONS
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`<h1 style='text-align: center' >SERVER IS RUNNING LIKE NED BROCKEMANN</h1>
  <img src="https://tracksmag.com.au/wp-content/uploads/2022/10/ned-run-2.0.jpeg" alt="" />
  <h2> API Veggie info @ /api/vegetables</h2>
  <h2> API Herb info @  /api/herbs </h2>
  <h2> API Fruit info @ /api/fruits </h2>
  `)
})



app.get('/api/vegetables', (req, res) => {
  res.send(vegetables)
})

app.get('/api/herbs', (req, res) => {
  res.send(herbs)
})

app.get('/api/fruits', (req, res) => {
  res.send(fruits)
})