import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"provide name"]
    },
    email : {
        type : String,
        required : [true,"provide email"],
        unique : true
    },
    password : {
        type : String,
        required : [true,"provide password"]
    },
    avatar : {
        type : String,
        default : ""
    },
    mobile : {
        type : Number,
        default : null
    },
    referenceToken : {
        type : String,
        default : ''
    },
    verifyEmail : {
        type : Boolean,
        default : false
    },
    lastLoginDate : {
        type : Date,
        default : ""
    },
    status : {
        type : String,
        enum : ["active", "inactive", "suspended"],
        default : "active"
    },
    addressDetails : {
        type : mongoose.Schema.ObjectId,
        ref : "address"
    },
    shoppingCart : {
        type : mongoose.Schema.ObjectId,
        ref : "cartProduct"
    },
    orderHistory : {
        type : mongoose.Schema.ObjectId,
        ref : "order"
    },
    forgotPasswordOtp : {
        type : String,
        default : null
    },
    forgotPasswordExpiry : {
        type : Date,
        default : ''
    },
    role : {
        type : String,
        enum : ["ADMIN", "USER"],
        default : "USER"
    },

},{
    timestamps : true
})

const userModel  = mongoose.model('user',userSchema)

export default userModel