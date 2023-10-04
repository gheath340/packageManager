const Package = require('../models/package')
const Driver = require('../models/driver')

const updatePackagesDriverID = async (driver, newID) => {
    driver.packages.forEach(async package => {
        const p = await Package.findById(package._id)
        p.driverID = newID

        p.save()
    })
}

exports.getDrviers  = async () => {
    return await Driver.find()
}

exports.getDriverOnID = async (id) => {
    return await Driver.findById(id)
}

exports.getDriverOnCity = async (driverCity) => {
    return await Driver.find({city: driverCity})
}

exports.getAllDriverCities = async () =>{
    const d = await Driver.find()
    //for each driver get the city property and add to list
    const cities = []
    d.forEach((driver) => {
        cities.push(driver.city)
    })
    
    return cities
}

exports.addDriver = async (body) => {
    const d = new Driver({ driverID: body.driverID, packages: body.packages, 
        active: body.active, lastStop: body.lastStop, nextStop: body.nextStop, 
        city: body.city })
    d.save()

    return d
}

exports.updateDriver = async (body, params) => {
    const d = await Driver.findById(params.id)
    if (d.driverID !== body.driverID){
        updatePackagesDriverID(d, body.driverID)
    }
    d.driverID = body.driverID
    d.city = body.city

    d.save()
    return d
}

exports.deleteDriver = async (id) => {
    const d = await Driver.findById(id)
    let output
    
    if (Array.isArray(d.packages) && d.packages.length) {
        output = true
    }else{
        output = false
        const d = await Driver.findByIdAndDelete(id)
    }

    return output
}
