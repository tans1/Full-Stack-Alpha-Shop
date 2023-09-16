const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
    name: String,
    email: String,
    password: String, 
    phoneNumber: String, 
})

const User = mongoose.model("UserModel", UserModel)
module.exports = User