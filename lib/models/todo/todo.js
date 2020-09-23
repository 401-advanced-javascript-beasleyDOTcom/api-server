'use strict';

const BaseModel = require('../model.js');
const schema = require('./todos-schema.js');

class Todos extends BaseModel{  };

module.exports = new Todos(schema);