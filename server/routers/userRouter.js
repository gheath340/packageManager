const express = require("express");
const router = express.Router();
const cors = require("cors");
const { addUser, getUsers } = require("../controllers/userController");

router.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

router.post("/add", addUser);
router.get("/", getUsers);

module.exports = router;
