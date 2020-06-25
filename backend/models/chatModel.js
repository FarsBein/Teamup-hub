const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    room: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required:Date.now
    }
})

const Chat = mongoose.model('chat',chatSchema) // make a new database entry to save userSchema

module.exports = Chat