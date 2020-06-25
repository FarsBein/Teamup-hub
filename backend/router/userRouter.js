const express = require('express')
const router = express.Router() //creates a new router
const User = require("../models/userModel.js")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const auth = require('../middleware/auth.js')


const avatar = ['https://res.cloudinary.com/farsbein01/image/upload/v1593032173/dogAvator_wxbheq.jpg', 
                'https://res.cloudinary.com/farsbein01/image/upload/v1593032172/pandaAvators_mvysik.jpg', 
                'https://res.cloudinary.com/farsbein01/image/upload/v1593032173/foxAvators_vlebkn.jpg']

router.post('/register', async (req,res) => { // bc we will wait for mongodb register completion
    
    try {
        const {username,email, password,passwordCheck, profileImage} = req.body; // bc of app.use(express.json()) we can simple destructor the variables since they are already parsed

        //validation 
        if ( !email || !password || !passwordCheck|| !username)
            return res.status(400).json({msg: "Not all fields have been entered!"})

        if (password.length < 5)
            return res.status(400).json({msg: "Password shorter then 5 characters!"})

        if (password !== passwordCheck)
            return res.status(400).json({msg: "passwords are not the same!"})

        const existingEmail = await User.findOne({email:email}) // await bc it will be searching to find a matching email in the database User (note: find will return an empty array if it finds nothing but findOne returns null)
        const existingUsername = await User.findOne({username:username})
        
        if (username !== username.replace(' ', ''))
            return res.status(400).json({msg:"There should be no space in username"})

        if(existingEmail) 
            return res 
                    .status(400)
                    .json({msg: "An account with this email already exists."})
        if (existingUsername)
            return res 
                .status(400)
                .json({msg: "username taken"})
       
        // Hashing the password using bcrypt applies mathematical operation to hash or change password for security reasons
        const salt = await bcrypt.genSalt() // the length default 10
        const passwordHash = await bcrypt.hash(password,salt)

        const newUser = new User({
            email:email,
            password: passwordHash,
            username: username,
            profileImage: profileImage ? profileImage : avatar[Math.round(Math.random() * 2)] // use a random avatar
        })


        const savedUser = await newUser.save()
        res.json(savedUser) // cant res.send after json
    }
    catch (err) {
        res.status(500).json({err:"something went wrong!? "+err.message})
    }

})

router.post('/login', async (req,res) => {
    try {
        const {username,password} = req.body;
        if ( !username || !password )
            return res.status(400).json({msg: "Not all fields have been entered!"})
        
        const user = await User.findOne({username: username})
        
        if(!user)
            return res 
                .status(400)
                .json({msg: "no account with this username exists."})
        
        // password check
        const isMatch = await bcrypt.compare(password,user.password)
        
        if(!isMatch)
            return res 
                .status(400)
                .json({msg: "Invalid credentials!"})
        
        const token = jwt.sign({id: user._id }, process.env.JWT_SECRET) // to insure that this payload is made by us and not from an out side hacker, we send a JWT token 

        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
                profileImage:user.profileImage
            }
        })
    }catch(err){
        res.status(500).json({err:err.message})
    }
})  

router.delete('/delete', auth, async (req,res) => { // auth can be done here but to save space is moved 
    try {
        const deletedUser = await User.findByIdAndDelete(req.user);
        res.json(deletedUser)
    }catch(err){
        res.status(500).json({err:err.message})
    }
})

router.post('/tokenIsValid', async(req,res) => {
    try {
        const token = req.header("x-auth-token")
        if(!token) return res.json(false)
        
        const verified = await jwt.verify(token, process.env.JWT_SECRET)
        if(!verified) return res.json(false)

        const user = await User.findById(verified.id)
        if(!user) return res.json(false) // if the account is deleted in different device while having one open

        return res.json(true)
    } catch(err){
        res.status(500).json({err:err.message})
    }
})

router.get('/', auth, async (req,res) => {
    try {
        const user = await User.findById(req.user)
        res.json({
            username: user.username,
            id: user._id,
            profileImage: user.profileImage
        })        
    } catch(err){
        res.status(500).json({err:err.message})
    }
})

module.exports = router