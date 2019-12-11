const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
        creationAt: { type: Date, default: Date.now},
        email: { type: String, unique: true, required: true },
        salt: {type: String, required:true},
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        fullName: String,
        age: Number
    });
    
module.exports = mongoose.model("User", userScheme);