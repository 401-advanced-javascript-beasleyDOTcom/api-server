'use strict'

class DataModel {

    constructor(schema){
        this.schema = schema;
    }
//the get method will provide a specific item if a valid ID is provided, if not it uses {}
    get(id) {
        if (id) {
            return this.schema.findById(id);
        }
        else {
            return this.schema.find({});
        }
    }

    create(record) {
        let newRecord = new this.schema(record);
        return newRecord.save();
    }
}

module.exports = DataModel;