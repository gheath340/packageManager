const mongoose = require('mongoose')
const Schema = mongoose.Schema

const driverSchema = new Schema({
    driverID: {
        type: String,
        required: true
    }, 
    packages: {
        type: Array,
        required: true
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
    }

})

const driver = mongoose.model("Driver", driverSchema)

module.exports = driver