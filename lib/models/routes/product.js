// 'use strict'
// const express = require('express');
// const router = express.Router();

// const products = require('../products/products-model.js');
// // const products = new Product();

// router.post('/products', createProduct)

// function createProduct(request, response, next){
//     products.create(request.body)
//         .then(results =>{
//             response.status(201).json(results);
//         }).catch(next);    
// }

// router.get('/products', getAll)

// function getAll (request, response, next){
//     console.log('================== ', request.params)
//     products.get()
//         .then(results => {
//             let count = results.length;
//             response.status(200).json({count, results});
//         }).catch(next);
// };

// router.get('/products/:id', getProduct)
// function getProduct (request, response, next) {
//     // the : here allows "type" to be a keyword to use instead of using? type = kiwi we can do fruit/kiwi
//     let id = request.params.id;
//     products.get(id)
//         .then(item => {
//             response.status(200).json(item)
//         }).catch(next);
    
//     }
    

// router.put('/products/:id', putFunction);
// function putFunction (request, response, next){
//     let record = request.body;
//     let id = request.params.id;
//     products.update(id, record)
//         .then(updatedItem => {
//             products.get(request.params.id).then(record =>{
//                 response.status(204).json(record)})
//                 .catch(next);
//             }).catch(next)
            

// }

// router.delete('/products/:id', (request, response, next) =>{
//     let id = request.params.id;
//     products.delete(id)
//         .then( results => {
//             response.status(234).json({});
//         }).catch(next);
// })


// module.exports = router;