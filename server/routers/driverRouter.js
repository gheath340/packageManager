const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  getDrivers,
  getDriverOnCity,
  getAllDriverCities,
  addDriver,
  updateDriver,
  deleteDriver,
} = require("../controllers/driverController");

router.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

router.get("/", getDrivers);
router.get("/city/:city", getDriverOnCity);
router.get("/cities", getAllDriverCities);
router.post("/add", addDriver);
router.put("/update/:id", updateDriver);
router.delete("/delete/:id", deleteDriver);

module.exports = router;
