require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const app = express()

mongoose.connect(process.env.MONGO_URI)
    .then(res => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is runninng on port ${process.env.PORT} and connected to db`)
        })
    })
    .catch(err => [
        console.log(err)
    ])

app.use(morgan("dev"))
app.use(express.json())

app.use("/api/finance", require("./routes/financeRoutes"))
app.use("/api/user", require("./routes/userRoutes"))