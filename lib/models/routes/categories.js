// 'use strict'
// const express = require('express');
// const { request } = require('express');
// const router = express.Router();
// const categoriesData = [];

// router.get('/categories', (request, response) =>{
//     let happyCampers = categoriesData.map(result =>{
//         console.log(result, result.id, 'this is line 50')
//         return result;
//     })
//     let bestData = { id: '213', value: 'a lot of good times for us' };
//     console.log(happyCampers, 'this is the happy camper group')

// console.log('this is the array of categoreis', categoriesData)
//     response.status(200).json(bestData);
// })

// router.post('/categories', (request, response) =>{
//     categoriesData.push(request.body)
// })

// router.get('/categories/:id', (request, response) =>{
//     console.log(request.body, 'this is the console.body inside of cat:id')
// })

// router.put('/categories/id', (request, response) =>{
//     //replace item with selected id
// })

// router.delete('/categories/:id', (request, response) =>{
//     //delete item with given ID
// })
// // router.get(logRequest)
// // router.use('*', notFoundHandler);
// // router.use(errorHandler);

// module.exports = router;