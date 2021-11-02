const db = require('../database')

module.exports = class AuthDB {

   fetchToken(token){
    return new Promise((resolve, reject) => {
        db.pool.query('SELECT * FROM auth_token WHERE token=? and is_valid=?',[token,true], (error, result) => {
            if (error){
                console.log('error',error)
                throw error;
            }
            else {
                resolve(result)

            }
        });
    })
    
  }
}