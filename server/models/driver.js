const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const driverSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  driverID: {
    type: String,
    required: true,
  },
  packages: {
    type: Array,
    default: [],
  },
  active: {
    type: String,
    default: false,
  },
  lastStop: {
    type: String,
    default: "Not active",
  },
  nextStop: {
    type: String,
    default: "Not active",
  },
  city: {
    type: String,
    required: true,
  },
});

const driver = mongoose.model("Driver", driverSchema);

module.exports = driver;
