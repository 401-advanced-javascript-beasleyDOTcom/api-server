'use strict'

const Model = require('../mongo.js');
const schema = require('.categories-schema.js');

//the following class is an extension of the Model class in mongo

class Categories extends Model {
    constructor() {
        super(schema);
    }
}
module.exports = Categories;