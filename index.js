'use strict'
const mongoose = require('mongoose');
const server = require('./lib/server.js');
require('dotenv').config();

const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
};

mongoose.connect(process.env.MONGODB_URI, mongooseOptions);
server.start(process.env.PORT);