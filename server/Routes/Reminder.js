const express = require("express");
const router = express.Router();
const {ReminderController , ReminderGetController} = require("../Controller/ReminderController");


router.post("/reminder", ReminderController);
router.get('/getreminder/:id', ReminderGetController)

module.exports = router;
