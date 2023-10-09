const Package = require('../models/package')
const Driver = require('../models/driver')

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

const getDriverOnID = async (req, res) => {
    res.json(await Driver.findById(req.body.id))
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
const addDriver = async (req, res) => {
    const d = new Driver({ username: req.body.username, password: req.body.password, 
        driverID: req.body.driverID, packages: req.body.packages, active: req.body.active, 
        lastStop: req.body.lastStop, nextStop: req.body.nextStop, city: req.body.city })
    d.save()

    return d
}

module.exports = {
    getDrivers,
    getDriverOnID,
    getDriverOnCity,
    getAllDriverCities,

}
