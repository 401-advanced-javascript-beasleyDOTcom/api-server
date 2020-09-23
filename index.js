'use strict'
const mongoose = require('mongoose');
const server = require('./lib/server.js');
require('dotenv').config();

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect('mongodb://localhost:27017/beasleyTown', mongooseOptions, () =>{
    console.log('connected to mongodb')
})
server.start(3005);