const axios = require("axios")
const WeatherDB = require("../model/WeatherDB")
const db = require('../database')
const weatherDB = new WeatherDB();
exports.readWeather = () => {
  const url = `http://demo4567044.mockable.io/weather`

  axios.get(url).then((response) => {
    const datetime = new Date();
    const humidity = response.data.humidity;
    const temperature = response.data.temperature;
    const min_temperature = response.data.min_temperature;
    const max_temperature = response.data.max_temperature;
    
    weatherDB
    .save( datetime, humidity, temperature, min_temperature, max_temperature)
    .then(() => { 
      console.log('new weather saved');
    })
    .catch(err => console.log(err));
  }).catch((error) => {
    console.log(error)
  })
}


exports.getWeather = (req, res) => {
  weatherDB
  .fetchAll()
  .then((result) => { 
      console.log('new weather saved');
      res.send({data:result});
  })
}
