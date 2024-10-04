// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  metrics: {
    type: [Object], // Use an array of objects to store user metrics
    default: [],    // Initialize as an empty array
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
