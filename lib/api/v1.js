'use strict';

const express = require('express');
const router = require('../models/routes/product');
router = express.Router();

//lets make it so we can use one "getAll" function and one "handlePost"function for categories or for whatever
function getModel(request, response, next){
    switch (model){
        case "product":
            require.model = food;
            next();
            return;
            case "books":
                request.model
    }
}
// whenever a route is hit with 'model' this get's triggered
router.param('model', getModel);



function handlePost(request, resonse, next){
    request.model.post(request.body)
        .then(result =>{
            response.json(result)
        }).catch(next)
}








module.exports = router;