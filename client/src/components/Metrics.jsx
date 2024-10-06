import React, { useState, useEffect } from 'react';

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

  if (!todayMetrics) {
    return (
      <div className="text-center mt-10">
        <p className="text-xl text-gray-500 font-semibold">No health metrics available for today.</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-16"> {/* Changed background to white */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-teal-800 text-center mb-12">Your Health Metrics for {getDayOfWeek(new Date())}</h2>

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

          {/* Reminder Table */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-teal-700 mb-6">Reminders</h3>
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="text-teal-700">
                  <th className="px-4 py-2 text-xl">Task</th>
                  <th className="px-4 py-2 text-xl">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100 transition-colors duration-200">
                  <td className="border px-4 py-2">Take medication</td>
                  <td className="border px-4 py-2">8:00 AM</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors duration-200">
                  <td className="border px-4 py-2">Check blood pressure</td>
                  <td className="border px-4 py-2">12:00 PM</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors duration-200">
                  <td className="border px-4 py-2">Exercise</td>
                  <td className="border px-4 py-2">6:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
