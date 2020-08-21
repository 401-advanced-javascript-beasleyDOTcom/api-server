'use strict'
const mongoose = require('mongoose');
const server = require('./lib/server.js');
require('dotenv').config();

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
console.log('reached index.js')
mongoose.connect('mongodb://localhost:27017/', mongooseOptions, ()=>{
    console.log('you have CONNECTED')
    server.start();
}).catch(() => console.log('connect is not working?'));


