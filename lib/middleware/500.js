'use strict'
const express = require('express');
const app = express();
app.use(express.json());

function errorHandler(err, request, response, next){
    response.status(500);
    response.statusMessage = 'Server Error';
    response.json({ error: err});
}
module.exports = errorHandler;
