
const Reminder = require('../Models/ReminderSchema'); 


const ReminderController = async (req, res) => {
    const { userId, email, reminderDate, reminderTime, description } = req.body;
  
    try {
      const reminder = new Reminder({
        userId,
        email,
        reminderDate,
        reminderTime,
        description,
      });
  
      await reminder.save();
      res.status(201).send({ message: 'Reminder set successfully!', reminder });
    } catch (error) {
      console.error('Error setting reminder:', error);
      res.status(500).send({ error: 'An error occurred while setting the reminder.' });
    }
  }

  module.exports = ReminderController