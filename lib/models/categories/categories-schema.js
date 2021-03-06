'use strict'

const mongoose = require('mongoose');

const categories = mongoose.Schema({
    
    name: { type: String, Required: true},
    description: {type: String, Required: true}
});

module.exports = mongoose.model('categories', categories);