const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true // not allow same email to be registered twice
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    username: {
        type: String,
        required: true,
        unique:true
    }
})

const User = mongoose.model('user',userSchema) // make a new database entry to save userSchema

module.exports = User