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

app.get('/driver/cities', async (req, res) => {
    const d = await Driver.find()
    //for each driver get the city property and add to list
    const cities = []
    d.forEach((driver) => {
        cities.push(driver.city)
    })

    res.json(cities)
})
//left off with "cant read properties of undefined for driver.packages.push"
app.post('/package/add', async (req, res) => {
    const p = new Package({ tba: req.body.tba, weight: req.body.weight, item: req.body.item, 
              location: req.body.location, city: req.body.city, driverID: req.body.driverID })

    const driver = await Driver.find({ driverID: req.body.driverID })
    driver.packages.push(p)

    p.save()
    driver.save()
    console.log(driver.packages)

    res.json(p)
})

app.put('/package/update/:id', async (req, res) => {
    const p = await Package.findById(req.params.id)

    p.tba = req.body.tba
    p.weight = req.body.weight
    p.item = req.body.item
    p.location = req.body.location
    p.city = req.body.city
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

app.get('/driver/:city', async (req, res) => {
    const driver = await Driver.find({ city: req.params.city })

    res.json(driver)
})

app.get('/driver/:id', async (req, res) => {
    const driver = await Driver.findById(req.body.id)

    res.json(driver)
})

app.post('/driver/add', (req, res) => {
    const driver = new Driver({ driverID: req.body.driverID, packages: req.body.packages, active: req.body.active, lastStop: req.body.lastStop, nextStop: req.body.nextStop, city: req.body.city })
    driver.save()

    res.json(driver)
})

app.put('/driver/update/:id', async (req, res) => {
    const driver = await Driver.findById(req.body.id)
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
