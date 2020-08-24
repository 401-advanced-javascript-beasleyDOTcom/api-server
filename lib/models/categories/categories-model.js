'use strict'

const DataModel = require('../mongo.js');
const schema = require('./categories-schema.js');

//the following class is an extension of the Model class in mongo

class Categories extends DataModel {
    constructor() {
        super(schema);
    }
//  get(id){
//         console.log('inside of get id');
//         if(id){
        
//          let result = {"category": id};
//          let freaky = this.schema.find({});
//             console.log('thsi is the result from categoreis model', freaky, '=====================');
//             return freaky;
//         }
//         else return this.schema.find({});
//     }
}
module.exports = new Categories;