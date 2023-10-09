const express = require('express')
const router = express.Router()
const cors = require('cors')
const { test } = require("../controllers/packageController")

router.use(
    cors({
        credentials: true,
        origin: "http://localhost:3001"
    })
)

router.get('/test', test)

module.exports = router