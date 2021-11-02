const express = require("express")
const app = express()
const router = require("./router")
const cron = require('node-cron');
const {readWeather} = require('./controllers/weather')

app.use("/", router)

cron.schedule('*/10 * * * * *', () => {
  console.log("Start fetching weather data" + new Date())
  readWeather()
});


app.listen(3000, () => {
  console.log("The server is now running on Port - 3000")
})

