import React, { useState, useEffect } from 'react';
import Reminders from './Reminders'; // Import the Reminders component

const Metrics = ({ MetricData = [] }) => {
  const [todayMetrics, setTodayMetrics] = useState(null);

  // Function to convert date to day of the week
  const getDayOfWeek = (date) => {
    const options = { weekday: 'long' };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    if (Array.isArray(MetricData)) {
      const currentDay = getDayOfWeek(new Date());
      const todayData = MetricData.find((metric) => getDayOfWeek(metric.date) === currentDay);
      if (todayData) {
        setTodayMetrics(todayData);
      }
    } else {
      console.error('MetricData is not an array:', MetricData);
    }
  }, [MetricData]);

  const reminders = [
    { task: 'Take medication', time: '8:00 AM' },
    { task: 'Check blood pressure', time: '12:00 PM' },
    { task: 'Exercise', time: '6:00 PM' },
  ];

  if (!todayMetrics) {
    return (
      <div className="text-center mt-10">
        <p className="text-xl text-gray-500 font-semibold">No health metrics available for today.</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-teal-800 text-center mb-12">
          Your Health Metrics for {getDayOfWeek(new Date())}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Metrics Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Blood Pressure */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-500 text-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-105 h-[220px] flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-2">Blood Pressure</h3>
              <p className="text-xl">{todayMetrics.bloodPressure} mmHg</p>
            </div>

            {/* Sugar Levels */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-500 text-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-105 h-[220px] flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-2">Sugar Levels</h3>
              <p className="text-xl">{todayMetrics.sugarLevel} mg/dL</p>
            </div>

            {/* Medication Intake */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-500 text-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-105 h-[220px] flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-2">Medication Intake</h3>
              <p className="text-xl">Lisinopril - 10mg</p>
            </div>

            {/* Heart Rate */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-500 text-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-105 h-[220px] flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-2">Heart Rate</h3>
              <p className="text-xl">{todayMetrics.heartRate} bpm</p>
            </div>
          </div>

         
          <Reminders reminders={reminders} />
        </div>
      </div>
    </section>
  );
};

export default Metrics;
