'use strict'

class DataModel {

    constructor(schema){
        this.schema = schema;
    }
//the get method will provide a specific item if a valid ID is provided, if not it uses {}
    async get(id) {
        if (id) {
            return this.schema.findById(id);
        }
        else {
            return this.schema.find({});
        }
    }
    post(info){
        return this.schema.create(info);
    }
    put(id, info){
        return this.schema.findByIdAndUpdate(id, info, {new: true});
    }
    patch(id, info){
        return this.schema.findByIdAndUpdate(id, info, {new: true});
    }
    delete(id){
        return this.schema.findByIdAndDelete(id);
    }
    create(record) {
        let newRecord = new this.schema(record);
        return newRecord.save();
    }
}

module.exports = DataModel;