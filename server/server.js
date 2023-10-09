const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cors = require('cors')

const dotenv = require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

const package = require('./routers/packageRouter.js')
const driver = require('./routers/driverRouter.js')
const user = require('./routers/userRouter.js')

//const package = require('./routes/packageRoute.js')
//const driver = require('./routes/driverRoute.js')


//connect to mongodb database
mongoose.connect(process.env.DB_PATH,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB Connected"))
    .catch(console.error)

app.use(package)
app.use(driver)
app.use(user)

//create new driver
app.post('/driver/add', async (req, res) => {
    res.json(await driver.addDriver(req.body))
})

//update driver info
app.put('/driver/update/:id', async (req, res) => {
    res.json(await driver.updateDriver(req.body, req.params))
})

//delete driver based on id
app.delete('/driver/delete/:id', async (req, res) => {
    res.json(await driver.deleteDriver(req.params.id))
})

app.post("/user/add", async (req,res) => {
    res.json(await user.addUser(req.body))
})


app.listen(3001, () => console.log("Server: 3001"))