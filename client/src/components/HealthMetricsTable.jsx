import { useState, useEffect } from "react";

const HealthMetricsTable = ({ MetricData }) => {
  const [today, setToday] = useState("");
  const [metricsData, setMetricsData] = useState([]);

  // Function to convert date to day of the week
  const getDayOfWeek = (date) => {
    const options = { weekday: 'long' };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    if (MetricData) {
      // Map the received MetricData to the desired format for the table
      const formattedMetrics = MetricData.map((metric) => ({
        day: getDayOfWeek(metric.date),
        sugar: metric.sugarLevel,
        bloodPressure: metric.bloodPressure,
        heartRate: metric.heartRate,
      }));

      setMetricsData(formattedMetrics);
    }
  }, [MetricData]);

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
