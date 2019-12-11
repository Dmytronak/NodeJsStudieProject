const mongoose = require("mongoose");

const loginScheme = new mongoose.Schema({
        email: String,
        password: String
    });

module.exports = mongoose.model("Login", loginScheme);