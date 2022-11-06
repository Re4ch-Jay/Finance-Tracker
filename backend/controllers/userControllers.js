const User = require("../models/userModels")
const {isEmail, isStrongPassword} = require("validator")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

// createToken
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "30d"})
}

const SIGNUP = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        if(!username && !email && !password) throw Error("All fields are required")
        if(!username) throw Error("Username is required")
        if(!email) throw Error("Email is required")
        if(!password) throw Error("Password is required")

        if(!isEmail(email)) throw Error("Email must be valid")
        if(!isStrongPassword(password)) throw Error("Password must be strong")

        const isExist = await User.findOne({email})
        if(isExist) throw Error("This email is already used")

        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(password, salt)
       
        const user = await User.create({username, email, password: hash})
        const token = createToken(user._id)
        res.status(200).json({user, token})
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
}

const LOGIN = async (req, res) => {
    const {email, password} = req.body;
    
    try {
        if(!email && !password) throw Error("All fields are required")
        if(!email) throw Error("Email is required")
        if(!password) throw Error("Password is required")

        const user = await User.findOne({email})
        if(!user) throw Error("Incorrect Email")

        const checkPassword = await bcrypt.compare(password, user.password)
        if(!checkPassword) throw Error("Incorrect Password")
        const token = createToken(user._id)
        res.status(200).json({user, token})
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
}

module.exports = {SIGNUP, LOGIN}