'use strict'

class DataModel {

    constructor(schema){
        this.schema = schema;
    }
//the get method will provide a specific item if a valid ID is provided, if not it uses {}
   async get(id) {
        if (id) {
            return this.schema.find(id);
            
        }
        else {
            try{
            let variable = await this.schema.find({});
            
            return variable;
            } catch(error){
                console.error(error);
            }
        }
    }

    create(record) {
        let newRecord = new this.schema(record);
        return newRecord.save();
    }

    update(id, record){
        this.schema.findByIdAndUpdate(id, record, { new: true})
            
    }

    delete(id){
        return this.schema.findByIdAndDelete(id);
    }
}

module.exports = DataModel;