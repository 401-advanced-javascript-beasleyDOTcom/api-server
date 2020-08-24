'use strict'
const express = require('express');
const router = express.Router();
const getModel = require('../../middleware/model-finder.js');
router.param('model', getModel); 


router.post('/:model', createOne);
router.get('/:model', getAll);
router.get('/:model/:id', getOne);
router.put('/:model/:id', putFunction);
router.delete('/:model/:id', deleteOne);

function createOne(request, response, next){

    request.model.create(request.body)
        .then(results =>{
            response.status(201).json(results);
        }).catch(next);    
}


function getAll (request, response, next){
    request.model.get()
        .then(results => {
            let count = results.length;
            response.status(200).json({count, results});
        }).catch(next);
};

function getOne (request, response, next) {
    // the : here allows "type" to be a keyword to use instead of using? type = kiwi we can do fruit/kiwi
    console.log(request.params.id,'==========inside getOne====');
    let id = request.params.id;
    request.model.get(id)
        .then(item => {
            console.log('=========inside of promise', item)
            response.status(200).json(item)
        }).catch(next);
}

function getSome (request, response, next){
    let action;
    console.log(request.params,'this is the request.params====================')
}
    

function putFunction (request, response, next){
    let record = request.body;
    let id = request.params.id;
    request.model.update(id, record)
        .then(updatedItem => {
            request.model.get(request.params.id).then(record =>{
                response.status(204).json(record)})
                .catch(next);
            }).catch(next)

}

function deleteOne(request, response, next){
    let id = request.params.id;
    request.model.delete(id)
        .then( results => {
            response.status(234).json({});
        }).catch(next);
};


module.exports = router;