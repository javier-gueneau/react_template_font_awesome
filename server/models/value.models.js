const mongoose = require('mongoose');

const ValueSchema = new mongoose.Schema({
    name:{type:String},
     
    value:{type:Number},
    
})

const Value = mongoose.model("Value", ValueSchema);

module.exports = Value;