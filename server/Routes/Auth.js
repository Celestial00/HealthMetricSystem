const express = require("express");
const { SignUp, Signin } = require("../Controller/AuthController");
const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", Signin);

module.exports = router;
