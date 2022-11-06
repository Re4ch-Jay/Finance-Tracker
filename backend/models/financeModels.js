const mongoose = require("mongoose")

const financeSchema = new mongoose.Schema({
    transaction: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    user_id: {
        type: String,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Finance", financeSchema)