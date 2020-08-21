'use strict'

const mongoose = require('mongoose');

const product = mongoose.Schema({
    name: { type: String, Required: true},
    category: { type: String, Required: true},
    description: {type: String, Required: true},
    price:   { type: Number, Required: true},
    inStock:   { type: Number, Required: true}
});

module.exports = mongoose.model('product', product);