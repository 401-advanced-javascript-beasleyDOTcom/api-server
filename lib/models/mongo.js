'use strict'

class DataModel {

    constructor(schema){
        this.schema = schema;
    }
//the get method will provide a specific item if a valid ID is provided, if not it uses {}
   async get(id) {
        console.log('this is inside the get method')
        if (id) {
            return this.schema.findById(id);
        }
        else {
            try{
                console.log('inside the else but before the await')
            let variable = await this.schema.find({});
            console.log(variable,'this is inside the get method else block')
            
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
}

module.exports = DataModel;