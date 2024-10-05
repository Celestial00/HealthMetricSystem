const HealthLog = require('../models/MetricsSchema');


const MetricsControllerLog = async (req, res) => {
    const { userId, heartRate, sugarLevel, bloodPressure } = req.body;
  
    if (!userId || !heartRate || !sugarLevel || !bloodPressure) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
      const newLog = new HealthLog({ userId, heartRate, sugarLevel, bloodPressure });
      await newLog.save();
      res.status(201).json({ message: 'Health data logged successfully', data: newLog });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }


  const MetricsControllerGet =  async (req, res) => {
    try {
      const logs = await HealthLog.find({ userId: req.params.userId });
      res.status(200).json(logs);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  module.exports = {MetricsControllerLog, MetricsControllerGet}