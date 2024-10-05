const mongoose = require('mongoose');

const healthLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming userId will be a MongoDB ObjectId
    required: true,
    ref: 'User' // Assuming there's a User model
  },
  heartRate: {
    type: Number,
    required: true
  },
  sugarLevel: {
    type: Number,
    required: true
  },
  bloodPressure: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const HealthLog = mongoose.model('HealthLog', healthLogSchema);

module.exports = HealthLog;
