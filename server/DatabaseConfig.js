const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
  try {
    const connectionString = process.env.DB_URL  ;
    
    // Replace <db_password> with your actual database password
    const dbPassword = 'your_actual_password'; // replace with your actual password
    const dbUri = connectionString.replace('<db_password>', dbPassword);
    
    await mongoose.connect(dbUri);
    
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
};


module.exports = connectDB;