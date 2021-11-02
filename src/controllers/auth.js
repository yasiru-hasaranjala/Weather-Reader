const AuthDB = require('../model/AuthDB')
const authDb =new AuthDB()

exports.checkTocken = async (token) => {
    const result = await authDb.fetchToken(token)
    if(result && result.length>0){
        return true
      }
      return false
  }