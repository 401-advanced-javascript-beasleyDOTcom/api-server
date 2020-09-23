'use strict';

const todos = require('./todo');

function getModel(req, res, next){
    const modelMap = {
        products,
        categories,
        todos,
    };

    const model = modelMap[req.params.model];

    if(model){
        req.model = model;
        console.log('inside of if in params.js')
        next();
    } else {
        next('Invalid Model... Get Out!');
    }
}

module.exports = getModel;