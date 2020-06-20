const express = require('express')
const router = express.Router() //creates a new router

router.get('/',(req,res) => {
    res.send('server is up and running')
})

module.exports = router