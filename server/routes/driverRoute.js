const Package = require('../models/package')
const Driver = require('../models/driver')

exports.addDriver = async (body) => {
    const d = new Driver({ username: body.username, password: body.password, 
        driverID: body.driverID, packages: body.packages, active: body.active, 
        lastStop: body.lastStop, nextStop: body.nextStop, city: body.city })
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
