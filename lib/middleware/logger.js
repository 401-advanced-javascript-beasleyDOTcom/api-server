'use strict'
const express = require('express');
const app = express();
app.use(express.json());

function logRequest(request, response, next){
    console.log('____REQUEST_____', request.method,'method', request.path,'path,', request.body.time, 'time');
    next();
}

module.exports = logRequest;