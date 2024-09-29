const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:mongoose.ObjectId,
        ref:'Category',
        required:true,
    },
    quantity:{
        type:Number,
    },
    discount:{
        type:Number,
    },
    images:{
        type:[],
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    size:{
        type:String,
        required:true
    }
},{timestamps:true})

exports.Product = mongoose.model('Product', productSchema);