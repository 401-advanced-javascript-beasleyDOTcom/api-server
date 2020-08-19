'use strict'
const express = require('express');
const app = express();
app.use(express.json());

function notFoundHandler(request, response, next){
    response.status(404);
    response.statusMessage = 'Resource Not Found';
    response.json({ error: 'Not Found' });
}

module.exports = notFoundHandler;