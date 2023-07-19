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
    const p = await Package.find()

    res.json(p)
})

app.get('/package/:id', async (req, res) => {
    const p = await Package.findById(req.body.id)

    res.json(p)
})

app.post('/package/add', (req, res) => {
    const p = new Package({ tba: req.body.tba, weight: req.body.weight, item: req.body.item, location: req.body.location, city: req.body.city, driverID: req.body.driverID })
    p.save()

    res.json(p)
})

app.put('/package/update/:id', async (req, res) => {
    //recieve all info about the package being changed & update all info
    const p = await Package.findById(req.body.id)

    p.tba = req.body.tba
    p.weight = req.body.weight
    p.item = req.body.item
    p.location = req.body.location
    p.driverID = req.body.driverID

    p.save()

    res.json(p)
})

app.delete('/package/delete/:id', async (req, res) => {
    const p = await Package.findByIdAndDelete(req.params.id)

    res.json(p)
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
    const driver = new Driver({ driverID: req.body.driverID, packages: req.body.packages, active: req.body.active, lastStop: req.body.lastStop, nextStop: req.body.nextStop })
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
