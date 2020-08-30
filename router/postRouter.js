const express = require('express')
const router = express.Router() //creates a new router
const Post = require("../models/postModel.js")

router.post('/createPost', async (req,res) => {
    try {
        const {name, title,category,briefDescription, fullDescription,tools, image, profileImage} = req.body
        if (!name || !title || !category || !briefDescription || !fullDescription || !profileImage){
            return res
                .status(400)
                .json({msg:'please fill all the fields!'})
            }
        const newPost = new Post({ //create a new object post
            name: name,
            title:title,
            category:category,
            briefDescription:briefDescription, 
            fullDescription:fullDescription,
            tools: tools ? tools : [],
            image:image,
            profileImage:profileImage
        })
        const savedPost = await newPost.save() // save it to the data base and receive the copy
        res.json(savedPost)

    } catch (err) {
        res.json({err: err.message})
    }
})

router.get('/getAllPosts', async (req,res)=> {
    try {
        const allPosts = await Post.find() 
        res.send(allPosts)

    } catch (err) {
        res.json({err: err.message})
    }
})

router.post('/getPost', async (req,res)=> {
    try {
        const {id} = req.body
        const foundPost = await Post.findById(id) 
        res.json(foundPost)

    } catch (err) {
        res.json({err: err.message})
    }
})

router.post('/updatePost', async (req,res)=> {
    try {
        const {id,title,category,briefDescription, fullDescription, tools,image,profileImage} = req.body
        
        if (!id || !title || !category || !briefDescription || !fullDescription){
            return res
                .status(400)
                .json({msg:'please fill all the fields!'})
            }

        const updatedPost = await Post.findByIdAndUpdate(id,
            {   
                id:id,
                title:title,
                category:category,
                briefDescription:briefDescription, 
                fullDescription:fullDescription,
                tools: tools ? tools : [],
                image:image,
                profileImage:profileImage
            },{
                new: true // return the updated post
            })
        
        res.json(updatedPost)

    } catch (err) {
        res.json({err: err.message})
    }
})

router.delete('/deletePost', async (req,res)=> {
    try {
        const {id} = req.body
        console.log('id:',id)
        const deletedPost = await Post.findByIdAndDelete(id)
        console.log('deletedPost:',deletedPost)
        res.send(deletedPost)

    } catch (err) {
        res.json({err: err.message})
    }
})

module.exports = router