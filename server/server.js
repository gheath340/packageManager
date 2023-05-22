const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/packageTracker",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("db connected"))
    .catch(console.error)

const Package = require('./models/package')
const Driver = require('./models/driver')

app.get('/packages', async (req, res) => {
    const packages = await Package.find()

    res.json(packages)
})

app.get('/package/:id', async (req, res) => {
    const package = await Package.findById(req.body.id)

    res.json(package)
})

app.post('/package/new', (req, res) => {
    const package = new Package({ tba: req.body.tba, weight: req.body.weight, items: req.body.items, location: req.body.location, driverID: req.body.driverID })
    package.save()

    res.json(package)
})

app.put('/package/update/:id', async (req, res) => {
    //recieve all info about the package being changed & update all info
    const package = await Package.findById(req.body.id)

    package.tba = req.body.tba
    package.weight = req.body.weight
    package.items = req.body.items
    package.location = req.body.location
    package.driverID = req.body.driverID

    package.save()

    res.json(package)
})

app.delete('/package/delete/:id', async (req, res) => {
    const result = await Package.findByIdAndDelete(req.params.id)

    res.json(result)
})

app.get('/drivers', async (req, res) => {
    const drivers = await Driver.find()

    res.json(drivers)
})

app.get('/driver/:id', async (req, res) => {
    const driver = await Driver.findById(req.body.id)

    res.json(driver)
})

app.post('/driver/new', (req, res) => {
    //change to match driver info
    const driver = new Driver({ tba: req.body.tba, weight: req.body.weight, items: req.body.items, location: req.body.location, driverID: req.body.driverID })
    driver.save()

    res.json(driver)
})

app.put('/driver/update/:id', async (req, res) => {
    const driver = await Driver.findById(req.body.id)
    //change to match driver schema
    driver.driverID = req.body.driverID
    driver.packages = req.body.packages
    driver.active = req.body.active
    driver.lastStop = req.body.lastStop
    driver.nextStop = req.body.nextStop

    driver.save()

    res.json(driver)
})

app.delete('/driver/delete/:id', async (req, res) => {
    const result = await Driver.findByIdAndDelete(req.params.id)

    res.json(result)
})


app.listen(3001, () => console.log("server connected on 3001"))
