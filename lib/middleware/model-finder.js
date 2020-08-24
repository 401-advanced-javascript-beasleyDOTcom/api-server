'use strict'
const express = require('express');
const router = express.Router();
const categories = require('../models/categories/categories-model.js');
const products = require('../models/products/products-model');


function getModel(request, response, next){
    console.log('you have reached getModel inside of model-finder.js')
    let model = request.params.model;
    switch(model){
        case "categories":
            request.model = categories;
            next();
            return;
        case "products":
            request.model = products;
            next();
            return;
        default:
            next('Invalid Model, must enter either products or categories');
            return;
    }
}
module.exports = getModel;