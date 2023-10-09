const express = require('express')
const router = express.Router()
const cors = require('cors')
const { test } = require("../controllers/userController")

router.use(
    cors({
        credentials: true,
        origin: "http://localhost:3001"
    })
)

router.get('/testuser', test)

module.exports = router