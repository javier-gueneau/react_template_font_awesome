const mongoose = require('mongoose');

const PurchasesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Purchase Name is required"]
    },
    amount:{
        type:Number,
        required:[true,"Purchase Amount is required"]
    },
    price:{
        type:Number,
        required:[true,"Asset price is required"]
    },
    purchaseDate:{
        type:Date,
        required:[true,"Purchase date is required"]
    },
    purchaseUser:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'}
    })

const Purchases = mongoose.model("Purchases", PurchasesSchema);

module.exports = Purchases;