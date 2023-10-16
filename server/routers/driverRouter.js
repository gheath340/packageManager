const express = require('express')
const router = express.Router()
const cors = require('cors')
const { 
    getDrivers,
    getDriverOnID,
    getDriverOnCity,
    getAllDriverCities,

} = require("../controllers/driverController")

router.use(
    cors({
        credentials: true,
        origin: "*"
    })
)

router.get('/drivers', getDrivers)
router.get('/driver/:id', getDriverOnID)
router.get('/driver/:city', getDriverOnCity)
router.get('/drivers/cities', getAllDriverCities)


module.exports = router