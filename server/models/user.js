const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    driverID :{
        type: String,
        required: true
    }
}, {timestamps: true})

const user = mongoose.model("User", userSchema)

module.exports = user