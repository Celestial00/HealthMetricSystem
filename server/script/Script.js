const mongoose = require('mongoose');
const HealthLog = require('../Models/MetricsSchema'); // Assuming the model is saved in a file

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://admin:admin@cluster0.yyrpx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Sample data
const healthLogs = [
  {
    userId: "66ffcab638e34eef77af8023",
    heartRate: 72,
    sugarLevel: 98,
    bloodPressure: "120/80",
    date: new Date("2024-09-30")
  },
  {
    userId: "66ffcab638e34eef77af8023",
    heartRate: 75,
    sugarLevel: 95,
    bloodPressure: "122/81",
    date: new Date("2024-10-01")
  },
  {
    userId: "66ffcab638e34eef77af8023",
    heartRate: 70,
    sugarLevel: 105,
    bloodPressure: "118/79",
    date: new Date("2024-10-02")
  },
  {
    userId: "66ffcab638e34eef77af8023",
    heartRate: 78,
    sugarLevel: 110,
    bloodPressure: "130/85",
    date: new Date("2024-10-03")
  },
  {
    userId: "66ffcab638e34eef77af8023",
    heartRate: 74,
    sugarLevel: 102,
    bloodPressure: "125/83",
    date: new Date("2024-10-04")
  },
  {
    userId: "66ffcab638e34eef77af8023",
    heartRate: 76,
    sugarLevel: 100,
    bloodPressure: "119/82",
    date: new Date("2024-10-05")
  },
  {
    userId: "66ffcab638e34eef77af8023",
    heartRate: 73,
    sugarLevel: 98,
    bloodPressure: "121/80",
    date: new Date("2024-10-06")
  }
];

// Insert data into MongoDB
HealthLog.insertMany(healthLogs)
  .then(docs => {
    console.log('Health logs inserted:', docs);
  })
  .catch(err => {
    console.error('Error inserting health logs:', err);
  })
  .finally(() => {
    mongoose.connection.close(); // Close the connection after insertion
  });
