const User = require("../models/userModels")
const jwt = require("jsonwebtoken")

const requireAuth = async (req, res, next) => {
    try {
        if(!req.headers.authorization) throw Error("Not authorized")
        //get token 
        const token = req.headers.authorization.split(" ")[1]
        const verify =  jwt.verify(token, process.env.SECRET)
        req.user = await User.findById(verify._id).select("_id")
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error: error.message})   
    }
}

module.exports = requireAuth