'use strict'

const Model = require('../mongo.js');
const schema = require('./products-schema.js');

// this Product class expends from the Model we looked at in class mongo??

class Products extends Model{
    constructor(){
        super(schema);
    }
}
module.exports = Products;