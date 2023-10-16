const express = require('express')
const router = express.Router()
const cors = require('cors')
const { 
    getDrivers,
    getDriverOnID,
    getDriverOnCity,
    getAllDriverCities,
    addDriver,
    updateDriver,
    deleteDriver,

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
router.post('/driver/add', addDriver)
router.put('/driver/update/:id', updateDriver)
router.delete('/driver/delete/:id', deleteDriver)

module.exports = router