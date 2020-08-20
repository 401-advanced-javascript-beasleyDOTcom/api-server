'use strict'
const express = require('express');
const app = express();
app.use(express.json());

//adds the name of th browser to the request
function getBrowser(request, response, next){
    request.browser = request.headers['user-agent'];
    console.log('this is from getBrowser.js')
    next();
}

module.exports = getBrowser;
