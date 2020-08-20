'use strict'
const express = require('express');
const { request } = require('express');
const router = express.Router();
const Product = require('../products/products-model');
const products = new Product();
const productData = [];

router.post('/products', createProduct);

function createProduct(request, response, next){
    const yay = products.create(request.body)
        .then( results =>{
            response.status(201).json(results);
        }).catch(()=>{ console.log('this is inside of the catch')});

}

router.get('/products', (request, response) =>{
    console.log('this is the router.get(/products) route');
    productData.forEach(result =>{
        console.log(result)
    })
    response.status(200).send('ok');
});

router.get('/products/:id', (request, response) =>{
    // the : here allows "type" to be a keyword to use instead of using? type = kiwi we can do fruit/kiwi
    let output = {
        type: request.params.type || 'unknown',
    }
    response.status(200).json(output);
});

router.put('/products/:id', (request, response) =>{

})

router.delete('/products/:id', (request, response) =>{
// more to do
})


module.exports = router;