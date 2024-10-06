// HealthLog.js
import React, { useState } from 'react';
import { FaHeartbeat, FaTachometerAlt, FaMedkit } from 'react-icons/fa'; // Change FaSugar to FaMedkit
import { useParams } from 'react-router-dom';

const HealthLog = () => {
  const [heartRate, setHeartRate] = useState('');
  const [sugarLevel, setSugarLevel] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { id } = useParams(); 

  

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (heartRate && sugarLevel && bloodPressure) {
      try {
        const response = await fetch('http://localhost:3300/api/log', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: id,   // Use the id from useParams here
            heartRate,
            sugarLevel,
            bloodPressure,
          }),
        });
  
        if (response.ok) {
          setSuccessMessage('Health data logged successfully!');
          setErrorMessage('');
          setHeartRate('');
          setSugarLevel('');
          setBloodPressure('');
        } else {
          throw new Error('Failed to log data');
        }
      } catch (error) {
        console.error('Error logging data', error);
        setErrorMessage('An error occurred while logging health data.');
      }
    } else {
      setErrorMessage('Please fill in all fields.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-teal-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">Log Your Health Data</h2>
        {errorMessage && <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-sm text-center mb-4">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center border border-gray-300 rounded">
            <FaHeartbeat className="text-teal-600 ml-3" />
            <input
              type="number"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
              required
              className="w-full p-2 border-none rounded focus:outline-none"
              placeholder="Heart Rate (bpm)"
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded">
            <FaMedkit className="text-teal-600 ml-3" /> {/* Changed this icon */}
            <input
              type="number"
              value={sugarLevel}
              onChange={(e) => setSugarLevel(e.target.value)}
              required
              className="w-full p-2 border-none rounded focus:outline-none"
              placeholder="Sugar Level (mg/dL)"
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded">
            <FaTachometerAlt className="text-teal-600 ml-3" />
            <input
              type="text"
              value={bloodPressure}
              onChange={(e) => setBloodPressure(e.target.value)}
              required
              className="w-full p-2 border-none rounded focus:outline-none"
              placeholder="Blood Pressure (mmHg)"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition duration-300"
          >
            Log Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default HealthLog;
