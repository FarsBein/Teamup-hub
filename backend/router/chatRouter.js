const express = require('express')
const router = express.Router() //creates a new router
const Chat = require("../models/chatModel.js")

router.post('/addMessage', async (req,res) => {
    try{

    } catch (err) {
        res.json({err: err.message})
    }
})

router.post('/getRoomMessages', async (req,res) => {
    try{

    } catch (err) {
        res.json({err: err.message})
    }
})


module.exports = router
