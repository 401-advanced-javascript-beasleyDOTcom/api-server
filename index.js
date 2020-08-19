'use strict'
// const mongoose = require('mongoose');
const server = require('./lib/server.js');
require('dotenv');
// const MONGODB_URI = 'mongodb://localhost:27017/class-08';

// const mongooseOptions = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// };

// mongoose.connect(MONGODB_URI, mongooseOptions);
server.start();