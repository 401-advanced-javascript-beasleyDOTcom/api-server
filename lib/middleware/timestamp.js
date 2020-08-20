'use strict'
// const express = require('express');
// const app = express();

// app.get('/*', timeStamp)

const timeStamp = (request, response, next) => {
    let milli = new Date();
    let time = milli.getTime();
    request.body.time = time;
    next();
}
    

module.exports = timeStamp;