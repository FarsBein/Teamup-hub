const jwt = require('jsonwebtoken')
require('dotenv').config()

const auth = (req,res,next) => {
    try {
        const token = req.header("x-auth-token")
        if(!token) {
            return res
                .status(401)
                .json({msg:'unauthorized access'})
        } 
        
        const verified = jwt.verify(token, process.env.JWT_SECRET) //compares the received token with the JWT_SECRETS         
        if(!verified)
            return res
                .status(401)
                .json({msg:',verification failed, unauthorized access'})
        
        req.user = verified.id // decodes the id

        next(); // to execute the code after auth
    }catch(err){
        res.status(500).json({err:err.message})
    }
}

module.exports = auth