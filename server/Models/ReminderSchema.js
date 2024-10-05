const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  userId: {
    type: String, 
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  reminderDate: {
    type: Date,
    required: true,
  },
  reminderTime: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;
