const mongoose = require("mongoose");
const userInfoSchema = new mongoose.Schema({
    name:String,
    password:Number
})

const User = mongoose.model("User",userInfoSchema)

exports.User = User;