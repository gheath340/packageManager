const express = require('express')
const router = express.Router()
const cors = require('cors')
const { test } = require("../controllers/userController")

router.use(
    cors({
        credentials: true,
        origin: "*"
    })
)

router.get('/testuser', test)

module.exports = router