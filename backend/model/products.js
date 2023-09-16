const mongoose = require('mongoose')

const ProductModel = new mongoose.Schema({
    title : String,
    price : Number,
    description : {
        type : String,
        default : ""
    },
    image : String,
    hasDiscount : {
        type : Boolean,
        default : false
    },
    discountAmount : {
        type : Number,
        default : 0
    },
    category : String,
})

const Products = mongoose.model("ProductModel", ProductModel)
module.exports = Products