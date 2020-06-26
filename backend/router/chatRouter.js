const express = require('express')
const router = express.Router() //creates a new router
const Chat = require("../models/chatModel.js")

router.post('/addMessage', async (req,res) => {
    try{
        const {user,text,room} = req.body
        
        if (!user||!text||!room||user==='admin'){ 
            res.status(400).json({msg:'not all required information are provided!'})
            return 
        }
        const newMessage = new Chat({user,room,text})

        const savedMessage = await newMessage.save()

        res.json(savedMessage)

    } catch (err) {
        res.json({err: err.message})
    }
})

router.post('/getPastMessages', async (req,res) => {
    try{
        const {room} = req.body        
        if (!room) 
            res.status(400).json({msg:'room is not provided!'})
        
        const oldMessages = await Chat.find({room:room})
        
        res.json(oldMessages)
    } catch (err) {
        res.json({err: err.message})
    }
})

router.post('/getUserRooms', async (req,res) => {
    try{
        const {user} = req.body
        const UserMessages = await Chat.find(user)
        let uniqueRooms = [];
        for (var i = 0; i < UserMessages.length; i++) {
            uniqueRooms.push(UserMessages[i].room)
        }

        res.json([...new Set(uniqueRooms)])

    } catch (err) {
        res.json({err: err.message})
    }
})

module.exports = router
