
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

  const ReminderGetController = async (req ,res) =>{
    const Id = req.params.id
    try{
      const response = await Reminder.find({userId : Id})
      if(response.length === 0){
       return res.status(201).json({msg: "no reminders found for user"})
      }
      res.status(200).json(response)
    }
    catch(err){
      res.status(500).json({'internal server error': err})
    }


  }


  module.exports = {ReminderController , ReminderGetController}