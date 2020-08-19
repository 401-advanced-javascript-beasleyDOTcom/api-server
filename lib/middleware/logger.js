'use strict'
const express = require('express');
const app = express();
app.use(express.json());

function logRequest(request, response, next){
    console.log('____REQUEST_____', request.method, request.path, request.time);
    next();
}

module.exports = logRequest;