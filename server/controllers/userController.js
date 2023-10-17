

const addUser = (req, res) => {
    try {
        const { name, password, type, driverID } = body
        if(!name) {
            return res.json({
                error: "Name is required"
            })
        }
    }catch (err) {

    }
}


module.exports = {
    addUser,
    
}
