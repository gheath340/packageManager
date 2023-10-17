const express = require('express')
const router = express.Router()
const cors = require('cors')
const { 
    addUser,

 } = require("../controllers/userController")

router.use(
    cors({
        credentials: true,
        origin: "*"
    })
)

router.get('/add', addUser)

module.exports = router