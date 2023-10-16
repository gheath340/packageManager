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

router.get('/packages', getPackages)
router.get('/package/:id', getPackage)
router.post('package/add', addPackage)
router.put('package/update/:id', updatePackage)
router.delete('package/delete/:id', deletePackage)

module.exports = router