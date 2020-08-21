'use strict'
const express = require('express');
const { request } = require('express');
const router = express.Router();
const productData = [];


console.log('you are getting to product.js')

router.post('/products', (request, response) =>{
    
    products.create(request.body)
    .then(( results) =>{
    
    })
    response.status(201).send('ok');
});

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