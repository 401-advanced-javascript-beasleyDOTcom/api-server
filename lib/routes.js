'use strict'
const express = require('express');
const router = express.Router();


const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const logRequest = require('./middleware/logger.js');
router.use(logRequest);
router.get('/fruit', (request, response) =>{
    let output = {
        type: request.query.type || 'unknown',
    };
    response.status(200).json(output);
})


