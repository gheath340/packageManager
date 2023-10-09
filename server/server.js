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
const user = require('./routes/userRouter.js')

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

//get all packages
app.get('/packages', async (req, res) => {
    res.json(await package.getPackages())
})

//get package based on id
app.get('/package/:id', async (req, res) => {
    res.json(await package.getPackage(req.body.id))
})

//create a new package and add it to appropriate drivers list
app.post('/package/add', async (req, res) => {
    res.json(await package.addPackage(req.body))
})

//update package info
app.put('/package/update/:id', async (req, res) => {
    res.json(await package.updatepackage(req.body, req.params))
})

//delete package based on id
app.delete('/package/delete/:id', async (req, res) => {
    res.json(await package.deletePackage(req.body, req.params))
})

//get all drivers
app.get('/drivers', async (req, res) => {    
    res.json(await driver.getDrviers())
})

//get driver based on city
app.get('/driver/:city', async (req, res) => {
    res.json(await driver.getDriverOnCity(req.params.city))
})

//get driver based on id
app.get('/driver/:id', async (req, res) => {
    res.json(await driver.getDriverOnID(req.body.id))
})

//get the cities of all drivers
app.get('/drivers/cities', async (req, res) => {
    res.json(await driver.getAllDriverCities())
})

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