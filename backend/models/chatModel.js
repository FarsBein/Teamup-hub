const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    room: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default:Date.now
    }
})

const Chat = mongoose.model('chat',chatSchema) // make a new database entry to save userSchema

module.exports = Chat