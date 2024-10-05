const express = require("express");
const Db = require("./DatabaseConfig");
const Auth = require("./Routes/Auth");
const User = require("./Routes/user");
const Metrics = require("./Routes/Metrics");
const cors = require("cors");
const app = express();
require("dotenv").config();

//Middleware

app.use(cors());
app.use(express.json());
app.use("/auth", Auth);
app.use("/api", User);
app.use("/api", Metrics);

app.listen(3300, () => {
  Db();
  console.log(`runing on port ${3300}`);
});
