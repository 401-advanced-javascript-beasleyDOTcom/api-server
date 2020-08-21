'use strict'
const express = require('express');
const { request, response } = require('express');
const router = express.Router();

const Product = require('../products/products-model.js');
const products = new Product();

router.post('/products', createProduct)

function createProduct(request, response, next){
    products.create(request.body)
        .then(results =>{
            console.log('you have saved: ', results,' to the database')
            response.status(201).json(results);
        }).catch(next);    
}

router.get('/products', getAllProducts)

function getAllProducts (request, response, next){
    products.get()
        .then(results => {
            let count = results.length;
            response.status(200).json(count, results);
        }).catch(next);
};

router.get('/products/:id', getProduct)
function getProduct (request, response, next) {
    // the : here allows "type" to be a keyword to use instead of using? type = kiwi we can do fruit/kiwi
    products.get(id)
        .then(item => {
            response.status(200).json(item)
        }).catch(next);
    
    }
    

router.put('/products/:id', (request, response) =>{

})

router.delete('/products/:id', (request, response) =>{
// more to do
})


module.exports = router;