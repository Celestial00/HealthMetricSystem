import React, { useState, useEffect } from 'react';

const Metrics = ({ MetricData }) => {
  const [todayMetrics, setTodayMetrics] = useState(null);

  // Function to convert date to day of the week
  const getDayOfWeek = (date) => {
    const options = { weekday: 'long' };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    // Get the current day of the week
    const currentDay = getDayOfWeek(new Date());

    // Find today's metrics from MetricData
    const todayData = MetricData.find((metric) => getDayOfWeek(metric.date) === currentDay);

    // Set today's metrics in state
    if (todayData) {
      setTodayMetrics(todayData);
    }
  }, [MetricData]);

  if (!todayMetrics) {
    return (
      <div className="text-center mt-10">
        <p>No health metrics available for today.</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-700 text-center mb-8">Your Health Metrics for {getDayOfWeek(new Date())}</h2>

        {/* Four Boxes for Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Blood Pressure */}
          <div className="bg-teal-600 text-white rounded-[10px] p-6 cursor-pointer hover:bg-teal-700 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Blood Pressure</h3>
            <p className="text-lg">{todayMetrics.bloodPressure} mmHg</p>
          </div>

          {/* Sugar Levels */}
          <div className="bg-teal-600 text-white rounded-[10px] p-6 cursor-pointer hover:bg-teal-700 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Sugar Levels</h3>
            <p className="text-lg">{todayMetrics.sugarLevel} mg/dL</p>
          </div>

          {/* Medication Intake */}
          <div className="bg-teal-600 text-white rounded-[10px] p-6 cursor-pointer hover:bg-teal-700 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Medication Intake</h3>
            <p className="text-lg">Lisinopril - 10mg</p> {/* You can replace with actual dynamic data if available */}
          </div>

          {/* Heart Rate */}
          <div className="bg-teal-600 text-white rounded-[10px] p-6 cursor-pointer hover:bg-teal-700 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Heart Rate</h3>
            <p className="text-lg">{todayMetrics.heartRate} bpm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
