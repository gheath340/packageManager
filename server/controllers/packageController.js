const Package = require('../models/package')
const Driver = require('../models/driver')

//delete package from old drivers list and add it to the new one
const updatePackageCity = async (p, driver1, body, params) => {
    driver1[0].packages = driver1[0].packages.filter(package => 
                    package._id.toString() !== params.id)

    const driver2 = await Driver.find({ driverID: body.newDriverID })
    driver2[0].packages.push(p)
    driver2[0].save()
}

//update specific package in drivers list
const updateDriverPackages = (p, driver) => {
    const index = driver[0].packages.findIndex(package => 
        package._id.toString() === p._id.toString())
    
        driver[0].packages[index] = p
}

exports.getPackages  = async () => {
    return await Package.find()
}

exports.getPackage = async (id) => {
    return await Package.findById(id)
}

const getPackages = async (req, res) => {
    res.json(await Package.find())
}

const getPackage = async (req, res) => {
    res.json(await Package.findById(req.body.id))
}

const addPackage = async (req, res) => {
    const p = new Package({ tba: req.body.tba, weight: req.body.weight, item: req.body.item, 
        location: req.body.location, city: req.body.city, driverID: req.body.driverID })

    const driver = await Driver.find({ driverID: body.driverID })
    driver[0].packages.push(p)

    driver[0].save()
    p.save()

    res.json(p)
}

const updatePackage = async (req, res) => {
    const p = await Package.findById(req.params.id)
    const d = await Driver.find( { driverID: req.body.driverID })

    if (p.city !== req.params.city) {
        updatePackageCity(p, d, req.body, req.params)
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
}

const deletePackage = async (req, res) => {
    const p = await Package.findByIdAndDelete(req.params.id)
    const d = await Driver.find( { driverID: req.body.driverID })

    d[0].packages = d[0].packages.filter(package => package._id.toString() !== req.params.id)

    d[0].save()

    res.json(p)
}

module.exports = {
    getPackages,
    getPackage,
    addPackage,
    updatePackage,
    deletePackage,
}
