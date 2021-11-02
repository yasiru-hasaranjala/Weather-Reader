const express = require("express")
const router = express.Router()
const {getWeather} = require("./controllers/weather")
const {checkTocken} = require('./controllers/auth')

router.use(async function (req, res, next) {
    if (!req.headers['x-auth']){
        res.status(401);
        res.json({"message":"Unauthorized"});
    }
    else{
        const isAuthorized = await checkTocken(req.headers['x-auth'])
        console.log('res',isAuthorized)
        if(isAuthorized){
            next()
        }else{
            res.status(401);
            res.json({"message":"Unauthorized"});
        }
    }
    
})

router.get("/", getWeather)

module.exports = router