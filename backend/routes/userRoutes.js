const router = require("express").Router()
const {LOGIN, SIGNUP} = require("../controllers/userControllers")


router.post("/signup", SIGNUP)
router.post("/login", LOGIN)

module.exports = router