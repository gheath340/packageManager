const mongoose = require('mongoose')
const Schema = mongoose.Schema

const packageSchema = new Schema({
    tba: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    driverID: {
        type: String,
        required: true
    } 

})

const package = mongoose.model("Package", packageSchema)

module.exports = package