const Finance = require("../models/financeModels")

const GET_ALL_FINANCE = async (req, res) => {
    const user_id = req.user._id;
    try {  
        const finance = await Finance.find({user_id}).sort({createdAt: -1})
        if(!finance) throw Error("There is no data right now")
        res.status(200).json(finance)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

const GET_SINGLE_FINANCE = async (req, res) => {
    try {
        const finance = await Finance.findById(req.params.id)
        if(!finance) throw Error("Cannot find with this data")
        res.status(200).json(finance)
    } catch (error) {
        console.log(error)
        res.status(404).json({error: "Cannot find with this data"})
    }
}

const POST_FINANCE = async (req, res) => {
    const {transaction, amount} = req.body;
    
    try {
        const user_id = req.user._id;
        if(!transaction && !amount) throw Error("All fields must be filled")
        if(!transaction) throw Error("Transaction is required")
        if(!amount) throw Error("Amount is required")

        const finance = await Finance.create({transaction, amount, user_id})
        res.status(200).json(finance)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
}

const DELETE_FINANCE = async (req, res) => {
    try {
        const finance = await Finance.findByIdAndDelete(req.params.id)
        if(!finance) throw Error("Cannot find and delete this data")
        res.status(200).json(finance)
    } catch (error) {
        console.log(error)
        res.status(404).json({error: "Cannot find and delete with this data"})
    }
}

const UPDATE_FINANCE = async (req, res) => {
    try {
        const finance = await Finance.findByIdAndUpdate(req.params.id, req.body)
        if(!finance) throw Error("Cannot find and update this data")
        res.status(200).json(finance)
    } catch (error) {
        console.log(error)
        res.status(404).json({error: "Cannot find and update with this data"})
    }
}

module.exports = {
    GET_ALL_FINANCE,
    GET_SINGLE_FINANCE,
    POST_FINANCE,
    DELETE_FINANCE,
    UPDATE_FINANCE
}

