const db = require('../database')

module.exports = class WeatherDB {
  constructor(){
  }

  save( datetime, humidity, temperature, min_temperature, max_temperature){
    return db.execute(
      'INSERT INTO weather_data (datetime, humidity, temperature, min_temperature, max_temperature) VALUES (?,?,?,?,?)',
      [datetime, humidity, temperature, min_temperature, max_temperature]
    )
  }

   fetchAll(){
    return new Promise((resolve, reject) => {
      db.pool.query('SELECT * FROM weather_data ORDER BY datetime DESC LIMIT 10 ', (error, result) => {
        if (error) throw error;
        else {
          resolve(result)
        }
      })
  })
    
  }
}