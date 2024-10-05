import { useState, useEffect } from "react";

const HealthMetricsTable = () => {
  const [today, setToday] = useState("");

  // Function to get today's day

  const metricsData = [
    { day: "Monday", sugar: 98, bloodPressure: "120/80", heartRate: 72 },
    { day: "Tuesday", sugar: 95, bloodPressure: "122/81", heartRate: 75 },
    { day: "Wednesday", sugar: 105, bloodPressure: "118/79", heartRate: 70 },
    { day: "Thursday", sugar: 110, bloodPressure: "130/85", heartRate: 78 },
    { day: "Friday", sugar: 102, bloodPressure: "125/83", heartRate: 74 },
    { day: "Saturday", sugar: 100, bloodPressure: "119/82", heartRate: 76 },
    { day: "Sunday", sugar: 98, bloodPressure: "121/80", heartRate: 73 },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-700 text-center mb-8">
          Weekly Health Metrics
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="py-2 px-4 border-b text-center">Day</th>
                <th className="py-2 px-4 border-b text-center">
                  Sugar Level (mg/dL)
                </th>
                <th className="py-2 px-4 border-b text-center">
                  Blood Pressure (mmHg)
                </th>
                <th className="py-2 px-4 border-b text-center">
                  Heart Rate (bpm)
                </th>
              </tr>
            </thead>
            <tbody>
              {metricsData.map((metric, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td
                    className={`py-2 px-4 border-b text-center ${
                      metric.day === today ? "font-bold text-teal-700" : ""
                    }`}
                  >
                    {metric.day}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {metric.sugar}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {metric.bloodPressure}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {metric.heartRate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default HealthMetricsTable;
