const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    title: {
        type: String,
        required:true,
    },
    category:{
        type: String,
        required: true
    },
    briefDescription: {
        type: String,
        required: true
    },
    fullDescription: {
        type: String,
        required: true
    },
    tools: {
        type: Array,
        required:false
    }
    //added later
    // image:{
    //     type: String,
    //     required: false
    // }

})

const Post = mongoose.model('post',postSchema)

module.exports = Post