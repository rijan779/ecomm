import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    prodName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }


},{
    timestamps:true
})

const prodModel = mongoose.model("product",productSchema)

export default prodModel