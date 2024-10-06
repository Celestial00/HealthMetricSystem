const User = require("../Models/UserSchema");
const HealthLog = require('../models/MetricsSchema');

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching user data" });
  }
};

const getData = async (req, res) => {
  try {
    const Id = req.params.id; 
    const data = await HealthLog.find({ userId: Id });

    if (data.length === 0) {
      return res.status(404).json({ message: 'No entries found for the specified userId.' });
    }

    res.status(200).json(data); // Use json instead of send for consistency
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {getUser, getData};
