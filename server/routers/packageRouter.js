const express = require('express')
const router = express.Router()
const cors = require('cors')
const { 
    test, 
    getPackages, 
    getPackage,
    addPackage,
    updatePackage,
    deletePackage,
} = require("../controllers/packageController")

router.use(
    cors({
        credentials: true,
        origin: "*"
    })
)

router.get('/', getPackages)
router.get('/:id', getPackage)
router.post('/add', addPackage)
router.put('/update/:id', updatePackage)
router.delete('/delete/:id', deletePackage)

module.exports = router