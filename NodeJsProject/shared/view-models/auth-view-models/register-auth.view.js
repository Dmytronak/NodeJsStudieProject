const mongoose = require("mongoose");

const registerScheme = new mongoose.Schema({
        email: String,
        firstName:String,
        lastName:String,
        fullName: String,
        age: Number,
        password: String,
        confirmPassword: String
    });

module.exports = mongoose.model("Register", registerScheme);