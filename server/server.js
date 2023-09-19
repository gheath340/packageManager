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

app.post('/package/add', async (req, res) => {
    const p = new Package({ tba: req.body.tba, weight: req.body.weight, item: req.body.item, 
              location: req.body.location, city: req.body.city, driverID: req.body.driverID })

    const driver = await Driver.find({ driverID: req.body.driverID })
    driver[0].packages.push(p)

    driver[0].save()
    p.save()

    res.json(p)
})
//if package city is updated update driver id and put it into correct driver list
app.put('/package/update/:id', async (req, res) => {
    const p = await Package.findById(req.params.id)
    const d = await Driver.find( { driverID: req.body.driverID })

    if (p.city !== req.params.city) {
        updatePackageCity(p, d, req)
    }

    p.tba = req.body.tba
    p.weight = req.body.weight
    p.item = req.body.item
    p.location = req.body.location
    p.city = req.body.city
    p.driverID = req.body.newDriverID

    updateDriverPackages(p, d)

    d[0].save()
    p.save()
    res.json(p)
})

const updatePackageCity = async (p, driver1, req) => {
    //update city and remove package from current driver
    driver1[0].packages = driver1[0].packages.filter(package => 
                    package._id.toString() !== req.params.id)
    //driver1[0].save()

    //update driverId and add package to new driver list
    const driver2 = await Driver.find({ driverID: req.body.newDriverID })
    driver2[0].packages.push(p)
    driver2[0].save()
    p.save()
}

const updateDriverPackages = async (p, d) => {
    const index = d[0].packages.findIndex(package => 
        package._id.toString() === p._id.toString())
    
        d[0].packages[index] = p
        //d[0].save()
}

app.delete('/package/delete/:id', async (req, res) => {
    const p = await Package.findByIdAndDelete(req.params.id)
    const d = await Driver.find( { driverID: req.body.driverID })

    d[0].packages = d[0].packages.filter(package => package._id.toString() !== req.params.id)

    d[0].save()
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
    const driver = new Driver({ driverID: req.body.driverID, packages: req.body.packages, 
        active: req.body.active, lastStop: req.body.lastStop, nextStop: req.body.nextStop, 
        city: req.body.city })
    driver.save()

    res.json(driver)
})

app.put('/driver/update/:id', async (req, res) => {
    const driver = await Driver.find({ driverID: req.params.id })
    driver[0].driverID = req.body.driverID
    driver[0].city = req.body.city

    driver[0].save()

    res.json(driver)
})

app.delete('/driver/delete/:id', async (req, res) => {
    const result = await Driver.findByIdAndDelete(req.params.id)

    res.json(result)
})


app.listen(3001, () => console.log("server connected on 3001"))
