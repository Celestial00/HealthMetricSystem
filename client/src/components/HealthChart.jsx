import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Loader from "./Loader";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HealthChart = ({ MetricData }) => {
  if (!MetricData) {
    return <Loader />; // Optionally show a loading message
  }

  // Extract data for chart
  const labels = MetricData.map((data) =>
    new Date(data.date).toLocaleDateString("en-US", {
      weekday: "long", // Get the day of the week
    })
  );

  const heartRateData = MetricData.map((data) => data.heartRate);
  const sugarLevelData = MetricData.map((data) => data.sugarLevel);
  const bloodPressureData = MetricData.map((data) =>
    parseInt(data.bloodPressure.split("/")[0]) // Extract systolic value
  );

  // Chart data and configuration
  const data = {
    labels: labels, // Days of the week from the MetricData
    datasets: [
      {
        label: "Heart Rate (bpm)",
        data: heartRateData, // Heart rate data
        borderColor: "#FF6384", // Color for heart rate line (red)
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Background color with transparency
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Blood Pressure (mmHg - Systolic)",
        data: bloodPressureData, // Blood pressure systolic data
        borderColor: "#36A2EB", // Color for blood pressure line (blue)
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Background color with transparency
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Sugar Levels (mg/dL)",
        data: sugarLevelData, // Sugar level data
        borderColor: "#FFCE56", // Color for sugar levels line (yellow)
        backgroundColor: "rgba(255, 206, 86, 0.2)", // Background color with transparency
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top", // Position of the legend
      },
    },
    scales: {
      y: {
        min: 50, // Set the minimum value for y-axis
        max: 180, // Set the maximum value for y-axis
        title: {
          display: true,
          text: "Health Metrics",
        },
      },
    },
  };

  return (
    <section className="bg-teal-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-700 text-center mb-8">
          Health Metrics This Week
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default HealthChart;
