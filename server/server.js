const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cors = require('cors')
const package = require('./routes/packageRoute.js')
const driver = require('./routes/driverRoute.js')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())


//connect to mongodb database
mongoose.connect(process.env.DB_PATH,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB Connected"))
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
    res.json(await driver.getDrviers())
})

//get driver based on city
app.get('/driver/:city', async (req, res) => {
    res.json(await driver.getDriverOnCity(req.params.city))
})

//get driver based on id
app.get('/driver/:id', async (req, res) => {
    res.json(await driver.getDriverOnID(req.body.id))
})

//get the cities of all drivers
app.get('/drivers/cities', async (req, res) => {
    res.json(await driver.getAllDriverCities())
})

//create new driver
app.post('/driver/add', async (req, res) => {
    res.json(await driver.addDriver(req.body))
})

//update driver info
app.put('/driver/update/:id', async (req, res) => {
    res.json(await driver.updateDriver(req.body, req.params))
})

//delete driver based on id
app.delete('/driver/delete/:id', async (req, res) => {
    res.json(await driver.deleteDriver(req.params.id))
})


app.listen(3001, () => console.log("Server: 3001"))