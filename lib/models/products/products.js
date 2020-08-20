'use strict';

const schema = require('./products-schema');
const DataModel = require('./products-model');

class Products extends DataModel {
    //if we wanted Products to have a lowercase name we would do the following to
    //jump in front of the "post" method that's in the parent class and use the one we have here.
//     post(record){
//         if(record.name){
//             record.name - record.name.toLowerCase();
//         }
//     //     return Promise.resolve({name: 'fakey fake prodooct'});
//         return this.post(record);
// }
    

}

module.exports = new Products(schema);