'use strict'
const express = require('express');
const router = express.Router();
const productData = [];
const categoriesData = [];
const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const logRequest = require('./middleware/logger.js');
router.use(logRequest);
router.get('/fruit', (request, response) =>{
    let output = {
        type: request.query.type || 'unknown',
    };
    response.status(200).json(output);
})


router.post('/products', (request, response) =>{
    console.log('what got added?', request.body);
    productData.push(request.body);
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

router.get('/categories', (request, response) =>{
    let happyCampers = categoriesData.map(result =>{
        console.log(result, result.id, 'this is line 50')
        return result;
    })
    let bestData = { id: '213', value: 'a lot of good times for us' };
    console.log(happyCampers, 'this is the happy camper group')

console.log('this is the array of categoreis', categoriesData)
    response.status(200).json(bestData);
})

router.post('/categories', (request, response) =>{
    categoriesData.push(request.body)
})

router.get('/categories/:id', (request, response) =>{
    console.log(request.body, 'this is the console.body inside of cat:id')
})

router.put('/categories/id', (request, response) =>{
    //replace item with selected id
})

router.delete('/categories/:id', (request, response) =>{
    //delete item with given ID
})
// router.get(logRequest)
// router.use('*', notFoundHandler);
// router.use(errorHandler);


module.exports = router;