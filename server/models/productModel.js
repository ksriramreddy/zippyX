import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    image : {
        type : Array,
        default : []
    },
    category : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "category"
        }
    ],
    subCategory :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "subCategory"
        }
    ],
    unit : {
        type : String,
        default : ''
    },
    stock : {
        type : Number,
        default : null
    },
    price : {
        type : Number,
        default : null
    },
    discount : {
        type : Number,
        default : null
    },
    description : {
        type : String,
        default : ''
    },
    moreDetails : {
        type : Object,
        default : {}
    },
    publish : {
        type : Boolean,
        default : true
    }
},{
    timestamps : true
})

const productModel  = mongoose.model('product',productSchema)

export default productModel