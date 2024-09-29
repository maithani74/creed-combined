const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    id:{
        type:mongoose.ObjectId,
        ref:"User",
    },
    products:{
        type:[],
        default:[],
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    phone:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        default:""
    }
})

exports.Order = new mongoose.model("Order",orderSchema)