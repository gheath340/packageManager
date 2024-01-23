const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

//connect to mongodb database
mongoose
  .connect(process.env.DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch(console.error);

app.use("/packages", require("./routers/packageRouter.js"));
app.use("/drivers", require("./routers/driverRouter.js"));
app.use("/users", require("./routers/userRouter.js"));

app.post("/user/add", async (req, res) => {
  res.json(await user.addUser(req.body));
});

app.listen(3001, () => console.log("Server: 3001"));
