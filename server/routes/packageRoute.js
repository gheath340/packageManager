const Package = require('../models/package')
const Driver = require('../models/driver')


exports.deletePackage = async (body, params) => {
    const p = await Package.findByIdAndDelete(params.id)
    const d = await Driver.find( { driverID: body.driverID })

    d[0].packages = d[0].packages.filter(package => package._id.toString() !== params.id)

    d[0].save()

    return p
}
