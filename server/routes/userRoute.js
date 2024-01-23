const User = require("../models/user");

const addUser = async (body) => {
  try {
    const { name, password, type, driverID } = body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
  } catch (err) {}
};
