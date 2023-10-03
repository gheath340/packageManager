const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

const package = require('./packageRoute.js')

//connect to mongodb database
mongoose.connect(process.env.DB_PATH,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected"))
    .catch(console.error)

//get all packages
app.get('/packages', async (req, res) => {
    res.json(await package.getPackages())
})

//get package based on id
app.get('/package/:id', async (req, res) => {
    res.json(await package.getPackage(req.body.id))
})

//create a new package and add it to appropriate drivers list
app.post('/package/add', async (req, res) => {
    res.json(await package.addPackage(req.body))
})

//update package info
app.put('/package/update/:id', async (req, res) => {
    res.json(await package.updatepackage(req.body, req.params))
})


//delete package based on id
app.delete('/package/delete/:id', async (req, res) => {
    res.json(await package.deletePackage(req.body, req.params))
})

//get all drivers
app.get('/drivers', async (req, res) => {
    const drivers = await Driver.find()
    
    res.json(drivers)
})

//get driver based on city
app.get('/driver/:city', async (req, res) => {
    const driver = await Driver.find({ city: req.params.city })

    res.json(driver)
})

//get driver based on id
app.get('/driver/:id', async (req, res) => {
    const driver = await Driver.findById(req.body.id)

    res.json(driver)
})

//get the cities of all drivers
app.get('/driver/cities', async (req, res) => {
    const d = await Driver.find()
    //for each driver get the city property and add to list
    const cities = []
    d.forEach((driver) => {
        cities.push(driver.city)
    })

    res.json(cities)
})

//create new driver
app.post('/driver/add', (req, res) => {
    const driver = new Driver({ driverID: req.body.driverID, packages: req.body.packages, 
        active: req.body.active, lastStop: req.body.lastStop, nextStop: req.body.nextStop, 
        city: req.body.city })
    driver.save()

    res.json(driver)
})

const updatePackagesDriverID = async (driver, newID) => {
    driver.packages.forEach(async package => {
        const p = await Package.findById(package._id)
        p.driverID = newID

        p.save()
    })
}

//update driver info
app.put('/driver/update/:id', async (req, res) => {
    const driver = await Driver.findById(req.params.id)
    if (driver.driverID !== req.body.driverID){
        updatePackagesDriverID(driver, req.body.driverID)
    }
    driver.driverID = req.body.driverID
    driver.city = req.body.city

    driver.save()

    res.json(driver)
})

//delete driver based on id
app.delete('/driver/delete/:id', async (req, res) => {
    const driver = await Driver.findById(req.params.id)
    let output
    
    if (Array.isArray(driver.packages) && driver.packages.length) {
        output = true
    }else{
        output = false
        const driver = await Driver.findByIdAndDelete(req.params.id)
    }

    res.json(output)
})


app.listen(3001, () => console.log("server connected on 3001"))