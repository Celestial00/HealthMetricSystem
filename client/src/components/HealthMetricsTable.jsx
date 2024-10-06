import { useState, useEffect } from "react";

const HealthMetricsTable = ({ MetricData }) => {
  const [today, setToday] = useState("");
  const [metricsData, setMetricsData] = useState([]);

  // Function to convert date to day of the week
  const getDayOfWeek = (date) => {
    const options = { weekday: "long" };
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

      // Set today's day for special styling
      setToday(getDayOfWeek(new Date()));
    }
  }, [MetricData]);

  return (
    <section className="bg-gradient-to-r  py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-teal-800 text-center mb-12">
          Weekly Health Metrics
        </h2>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="py-4 px-6 text-center text-xl font-semibold">
                  Day
                </th>
                <th className="py-4 px-6 text-center text-xl font-semibold">
                  Sugar Level (mg/dL)
                </th>
                <th className="py-4 px-6 text-center text-xl font-semibold">
                  Blood Pressure (mmHg)
                </th>
                <th className="py-4 px-6 text-center text-xl font-semibold">
                  Heart Rate (bpm)
                </th>
              </tr>
            </thead>
            <tbody>
              {metricsData.map((metric, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-teal-50" : "bg-white"
                  } hover:bg-teal-100 transition duration-300`}
                >
                  <td
                    className={`py-4 px-6 text-center text-lg ${
                      metric.day === today ? "font-bold text-teal-700" : ""
                    }`}
                  >
                    {metric.day}
                  </td>
                  <td className="py-4 px-6 text-center text-lg">
                    {metric.sugar}
                  </td>
                  <td className="py-4 px-6 text-center text-lg">
                    {metric.bloodPressure}
                  </td>
                  <td className="py-4 px-6 text-center text-lg">
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
