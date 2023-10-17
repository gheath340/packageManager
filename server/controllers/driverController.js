const Package = require('../models/package')
const Driver = require('../models/driver')
const User = require("../models/user")

const updatePackagesDriverID = async (driver, newID) => {
    driver.packages.forEach(async package => {
        const p = await Package.findById(package._id)
        p.driverID = newID

        p.save()
    })
}

const getDrivers = async (req, res) => {
    res.json(await Driver.find())
}

const getDriverOnCity = async (req, res) => {
    res.json(await Driver.find({ city: req.params.city }))
}

const getAllDriverCities = async (req, res) => {
    const d = await Driver.find()
    //for each driver get the city property and add to list
    const cities = []
    d.forEach((driver) => {
        cities.push(driver.city)
    })
    res.json(cities)
}
const addDriver = (req, res) => {
    const d = new Driver({ username: req.body.username, password: req.body.password, 
        driverID: req.body.driverID, packages: req.body.packages, active: req.body.active, 
        lastStop: req.body.lastStop, nextStop: req.body.nextStop, city: req.body.city })
    d.save()

    res.json(d)
}

const updateDriver = async (req, res) => {
    const d = await Driver.findById(req.params.id)
    if (d.driverID !== req.body.driverID){
        updatePackagesDriverID(d, req.body.driverID)
    }
    d.driverID = req.body.driverID
    d.city = req.body.city

    d.save()
    res.json(d)
}

const deleteDriver = async (req, res) => {
    const d = await Driver.findById(req.params.id)
    let output
    
    if (Array.isArray(d.packages) && d.packages.length) {
        output = true
    }else{
        output = false
        const driver = await Driver.findByIdAndDelete(req.params.id)
        const user = await User.deleteOne({ username: d.username})
    }

    res.json(output)
}

module.exports = {
    getDrivers,
    getDriverOnCity,
    getAllDriverCities,
    addDriver,
    updateDriver,
    deleteDriver,

}
