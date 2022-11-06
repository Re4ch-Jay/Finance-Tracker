const router = require("express").Router()
const {
    GET_ALL_FINANCE, 
    GET_SINGLE_FINANCE, 
    POST_FINANCE,
    DELETE_FINANCE, 
    UPDATE_FINANCE} = 
    require("../controllers/financeControllers")
const requireAuth = require("../middleware/requireAuth")

router.use(requireAuth)

router.get("/", GET_ALL_FINANCE)
router.post("/", POST_FINANCE)
router.get("/:id", GET_SINGLE_FINANCE)
router.delete("/:id", DELETE_FINANCE)
router.patch("/:id", UPDATE_FINANCE)

module.exports = router