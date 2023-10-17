const User = require("../models/user")
const Driver = require("../models/driver")


const addUser = async (req, res) => {
    try {
        const { username, password, type, driverID, city } = req.body
        const exists = await User.findOne({username})

        if(!username) {
            return res.json({
                error: "Userame is required"
            })
        }else if (exists){
            return res.json({
                error: "Username is taken"
            })
        }
        if (!password) {
            return res.json({
                error: "Password is required"
            })
        }
        if (!type){
            return res.json({
                error: "Type is required"
            })
        }
        if ((type === "Driver" && !driverID) || type === "Driver" && !city) {
            return res.json({
                error: "DriverID and city is required for drivers"
            })
        }
        if (type === "Admin"){
            const user = await User.create({
                username, password, type
            })
        }
        if (type === "Driver"){
            const user = await User.create({
                username, password, type, driverID, city
            })
            const driver = await Driver.create({
                username, password, type, driverID, city
            })
        }

    }catch (err) {

    }
}


module.exports = {
    addUser,
    
}
