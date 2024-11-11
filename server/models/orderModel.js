import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : "user"
    },
    orderId : {
        type : String,
        required : [true,'provide orderId'],
        unique : true
    },
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : "product"
    },
    productDetails : {
        name : String,
        image : Array
    },
    paymentId : {
        type : String,
        default : ''
    },
    paymentStatus : {
        type : String,
        default : ''
    },
    deliveryAddress : {
        type : mongoose.Schema.Object,
        ref : 'address'
    },
    subTotalAmt : {
        type : Number,
        default : 0
    },
    totalAmt : {
        type : Number,
        default : 0
    },
    invoiceReceipt : {
        type : String,
        default : ''
    }
},{
    timestamps : true
})

const orderModel = mongoose.model('order',orderSchema)

export default orderModel;