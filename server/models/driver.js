const mongoose = require('mongoose')
const Schema = mongoose.Schema

const driverSchema = new Schema({
    driverID: {
        type: String,
        required: true
    }, 
    packages: {
        type: Array,
        default: []
    },
    active: {
        type: String,
        default: false
    },
    lastStop: {
        type: String,
        default: "not active"
    },
    nextStop: {
        type: String,
        default: "not active"
    },
    city: {
        type: String,
        required: true
    }

})

const driver = mongoose.model("Driver", driverSchema)

module.exports = driver