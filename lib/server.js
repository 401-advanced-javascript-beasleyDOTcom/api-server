'use strict'
const express = require('express');
const app = express();
require('dotenv').config();
const timeStamp = require('./middleware/timestamp.js')
const router = require('./routes.js');


//GLOW BALL MID ALE WARE
app.use(express.json()); //this steps in front of all request and inspects it for a body.
//and parses it as needed and include it on the request

// app.use(logRequest);//register the middleware
app.get(getBrowser);
app.use(timeStamp);
app.use(router)


//adds the name of th browser to the request
function getBrowser(request, response, next){
    console.log('thwis is before getbrowser on 22')
    request.browser = request.headers['user-agent'];
    console.log('thsi si after the request.browser on 22')
    next();
}


module.exports = {
    start: port =>{
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () =>{
            console.log(`listening on  ${PORT}`)
        })
    }
}