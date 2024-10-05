const express = require("express");
const router = express.Router();
const ReminderController = require("../Controller/ReminderController");


router.post("/reminder", ReminderController);

module.exports = router;
