const Package = require('./models/package')
const Driver = require('./models/driver')

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

exports.addPackage = async (body) => {
    const p = new Package({ tba: body.tba, weight: body.weight, item: body.item, 
        location: body.location, city: body.city, driverID: body.driverID })

    const driver = await Driver.find({ driverID: body.driverID })
    driver[0].packages.push(p)

    driver[0].save()
    p.save()
    return p
}

exports.updatepackage = async (body, params) => {
    const p = await Package.findById(params.id)
    const d = await Driver.find( { driverID: body.driverID })

    if (p.city !== params.city) {
        updatePackageCity(p, d, body, params)
    }

    p.tba = body.tba
    p.weight = body.weight
    p.item = body.item
    p.location = body.location
    p.city = body.city
    p.driverID = body.newDriverID

    updateDriverPackages(p, d)

    d[0].save()
    p.save()
    return p
}

exports.deletePackage = async (body, params) => {
    const p = await Package.findByIdAndDelete(params.id)
    const d = await Driver.find( { driverID: body.driverID })

    d[0].packages = d[0].packages.filter(package => package._id.toString() !== params.id)

    d[0].save()

    return p
}
